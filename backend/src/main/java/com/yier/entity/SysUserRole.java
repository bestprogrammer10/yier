package com.yier.entity;

import com.baomidou.mybatisplus.annotation.*;
import lombok.Data;

/**
 * 用户角色关联实体类
 * 遵循 SOLID 原则：单一职责，仅负责用户角色关联数据存储
 */
@Data
@TableName("sys_user_role")
public class SysUserRole {

    /**
     * 主键ID
     */
    @TableId(value = "id", type = IdType.AUTO)
    private Long id;

    /**
     * 用户ID
     */
    private Long userId;

    /**
     * 角色ID
     */
    private Long roleId;

    /**
     * 是否删除：0-未删除 1-已删除
     */
    @TableLogic
    private Integer deleted;

    /**
     * 创建时间
     */
    @TableField(fill = FieldFill.INSERT)
    private java.time.LocalDateTime createTime;
}
