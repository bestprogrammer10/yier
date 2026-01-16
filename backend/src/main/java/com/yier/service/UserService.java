package com.yier.service;

import com.yier.dto.request.PhoneLoginRequest;
import com.yier.dto.response.LoginResponse;

/**
 * 用户服务接口
 * 遵循 SOLID 原则：接口隔离原则
 */
public interface UserService {

    /**
     * 手机号登录
     * @param request 登录请求
     * @return 登录响应
     */
    LoginResponse phoneLogin(PhoneLoginRequest request);
}
