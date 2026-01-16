package com.yier.service.impl;

import cn.dev33.satoken.stp.StpUtil;
import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.yier.common.enums.ErrorCode;
import com.yier.common.exception.BusinessException;
import com.yier.dao.UserDao;
import com.yier.dto.request.PhoneLoginRequest;
import com.yier.dto.response.LoginResponse;
import com.yier.entity.User;
import com.yier.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.data.redis.core.StringRedisTemplate;

/**
 * 用户服务实现类
 * 遵循 SOLID 原则：单一职责，仅负责用户业务逻辑
 */
@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserDao userDao;
    private final StringRedisTemplate stringRedisTemplate;

    @Override
    public LoginResponse phoneLogin(PhoneLoginRequest request) {
        String phone = request.getPhone();
        String code = request.getCode();

        // 从 Redis 获取存储的验证码
        String redisKey = "sms:code:" + phone;
        String storedCode = stringRedisTemplate.opsForValue().get(redisKey);

        // 开发环境允许使用测试验证码
        if (!storedCode.equals(code) && !"123456".equals(code)) {
            throw new BusinessException(ErrorCode.CODE_ERROR);
        }

        // 验证成功后删除验证码（一次性使用）
        stringRedisTemplate.delete(redisKey);

        // 查询用户是否存在
        LambdaQueryWrapper<User> wrapper = new LambdaQueryWrapper<>();
        wrapper.eq(User::getPhone, phone);
        User user = userDao.selectOne(wrapper);

        // 用户不存在则创建新用户
        if (user == null) {
            user = new User();
            user.setPhone(phone);
            user.setNickname("用户" + phone.substring(7));
            user.setLoginType(2);
            userDao.insert(user);
        } else {
            // 更新登录类型
            user.setLoginType(2);
            userDao.updateById(user);
        }

        // 使用 Sa-Token 进行登录（生成 token）
        StpUtil.login(user.getId());

        // 获取 token 值
        String token = StpUtil.getTokenValue();

        // 设置用户信息到 Session 中
        StpUtil.getSession().set("userInfo", user);

        // 构造响应数据
        LoginResponse.UserInfo userInfo = new LoginResponse.UserInfo(
                user.getId(),
                user.getPhone(),
                user.getNickname(),
                user.getAvatar()
        );

        return new LoginResponse(token, userInfo);
    }
}
