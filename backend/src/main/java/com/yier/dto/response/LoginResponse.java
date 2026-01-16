package com.yier.dto.response;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * 登录响应 DTO
 * 遵循 SOLID 原则：单一职责，仅负责登录响应数据传输
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
public class LoginResponse {

    /**
     * 访问令牌
     */
    private String token;

    /**
     * 用户信息
     */
    private UserInfo userInfo;

    @Data
    @NoArgsConstructor
    @AllArgsConstructor
    public static class UserInfo {
        /**
         * 用户ID
         */
        private Long id;

        /**
         * 手机号
         */
        private String phone;

        /**
         * 用户昵称
         */
        private String nickname;

        /**
         * 头像
         */
        private String avatar;
    }
}
