package com.yier.controller;

import cn.dev33.satoken.stp.StpUtil;
import com.yier.common.Result;
import com.yier.dao.UserDao;
import com.yier.dto.request.PhoneLoginRequest;
import com.yier.dto.response.LoginResponse;
import com.yier.entity.User;
import com.yier.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

/**
 * 用户控制器
 * 遵循 SOLID 原则：单一职责，仅负责用户接口处理
 */
@RestController
@RequestMapping("/user")
@RequiredArgsConstructor
@Validated
public class UserController {

    private final UserService userService;
    private final UserDao userDao;

    /**
     * 手机号登录
     */
    @PostMapping("/login/phone")
    public Result<LoginResponse> phoneLogin(@Valid @RequestBody PhoneLoginRequest request) {
        LoginResponse response = userService.phoneLogin(request);
        return Result.success(response);
    }

    /**
     * 获取当前登录用户信息
     */
    @GetMapping("/info")
    public Result<User> getUserInfo() {
        // 使用 Sa-Token 获取当前登录用户 ID
        Long userId = StpUtil.getLoginIdAsLong();

        // 从 Session 中获取用户信息
        User user = (User) StpUtil.getSession().get("userInfo");

        // 如果 Session 中没有，从数据库查询
        if (user == null) {
            user = userDao.selectById(userId);
            if (user == null) {
                return Result.error("用户不存在");
            }
            // 重新缓存到 Session
            StpUtil.getSession().set("userInfo", user);
        }

        return Result.success(user);
    }

    /**
     * 退出登录
     */
    @PostMapping("/logout")
    public Result<Void> logout() {
        // 使用 Sa-Token 退出登录
        StpUtil.logout();
        return Result.success();
    }
}
