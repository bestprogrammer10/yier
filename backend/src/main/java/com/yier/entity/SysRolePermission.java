package com.yier.entity;

import com.baomidou.mybatisplus.annotation.*;
import lombok.Data;

/**
 * 角色权限关联实体类
 * 遵循 SOLID 原则：单一职责，仅负责角色权限关联数据存储
 */
@Data
@TableName("sys_role_permission")
public class SysRolePermission {

    /**
     * 主键ID
     */
    @TableId(value = "id", type = IdType.AUTO)
    private Long id;

    /**
     * 角色ID
     */
    private Long roleId;

    /**
     * 权限ID
     */
    private Long permissionId;

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
