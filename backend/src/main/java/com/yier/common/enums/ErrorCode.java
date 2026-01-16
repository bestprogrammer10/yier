package com.yier.common.enums;

import lombok.AllArgsConstructor;
import lombok.Getter;

/**
 * 错误码枚举
 * 遵循 SOLID 原则：单一职责，仅定义错误码
 */
@Getter
@AllArgsConstructor
public enum ErrorCode {

    /**
     * 通用错误码
     */
    SUCCESS(200, "操作成功"),
    ERROR(500, "系统错误"),
    PARAM_ERROR(400, "参数错误"),

    /**
     * 用户相关错误码
     */
    USER_NOT_FOUND(1001, "用户不存在"),
    USER_LOGIN_ERROR(1002, "用户名或密码错误"),
    USER_ACCOUNT_DISABLED(1003, "账号已被禁用"),
    PHONE_FORMAT_ERROR(1004, "手机号格式错误"),
    CODE_ERROR(1005, "验证码错误"),
    CODE_EXPIRED(1006, "验证码已过期"),

    /**
     * 认证相关错误码
     */
    UNAUTHORIZED(1101, "未登录或登录已过期"),

    /**
     * 记账相关错误码
     */
    RECORD_NOT_FOUND(2001, "记账记录不存在"),
    CATEGORY_NOT_FOUND(2002, "分类不存在");

    private final Integer code;
    private final String message;
}
