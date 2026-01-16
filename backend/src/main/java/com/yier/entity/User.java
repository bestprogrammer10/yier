package com.yier.entity;

import com.baomidou.mybatisplus.annotation.*;
import lombok.Data;

import java.time.LocalDateTime;

/**
 * 用户实体类
 * 遵循 SOLID 原则：单一职责，仅负责用户数据存储
 */
@Data
@TableName("user")
public class User {

    /**
     * 用户ID
     */
    @TableId(value = "id", type = IdType.AUTO)
    private Long id;

    /**
     * 微信 OpenID
     */
    private String openid;

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

    /**
     * 登录类型：1-微信登录 2-手机号登录
     */
    private Integer loginType;

    /**
     * 是否删除：0-未删除 1-已删除
     */
    @TableLogic
    private Integer deleted;

    /**
     * 创建时间
     */
    @TableField(fill = FieldFill.INSERT)
    private LocalDateTime createTime;

    /**
     * 更新时间
     */
    @TableField(fill = FieldFill.INSERT_UPDATE)
    private LocalDateTime updateTime;
}
