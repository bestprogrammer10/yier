package com.yier.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.yier.entity.User;

/**
 * 用户服务基础接口
 * 遵循 SOLID 原则：接口隔离原则
 */
public interface UserBaseService extends IService<User> {
    /**
     * 根据 ID 查询用户信息
     * @param userId 用户ID
     * @return 用户信息
     */
    User getUserById(Long userId);
}
