package com.yier.service.impl;

import cn.dev33.satoken.stp.StpUtil;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.yier.entity.User;
import com.yier.service.UserBaseService;
import org.springframework.stereotype.Service;

/**
 * 用户服务实现类 - 基础 CRUD
 * 遵循 SOLID 原则：单一职责，仅负责用户基础操作
 */
@Service
public class UserBaseServiceImpl extends ServiceImpl<com.yier.dao.UserDao, User> implements UserBaseService {

    @Override
    public User getUserById(Long userId) {
        return this.getById(userId);
    }
}
