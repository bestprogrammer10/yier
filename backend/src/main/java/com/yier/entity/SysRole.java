package com.yier.entity;

import com.baomidou.mybatisplus.annotation.*;
import lombok.Data;

import java.util.List;

/**
 * 角色实体类
 * 遵循 SOLID 原则：单一职责，仅负责角色数据存储
 */
@Data
@TableName("sys_role")
public class SysRole {

    /**
     * 角色ID
     */
    @TableId(value = "id", type = IdType.AUTO)
    private Long id;

    /**
     * 角色名称
     */
    private String roleName;

    /**
     * 角色权限字符串
     */
    private String roleKey;

    /**
     * 显示顺序
     */
    private Integer roleSort;

    /**
     * 数据范围：1-全部 2-自定义 3-本部门 4-本部门及以下 5-仅本人
     */
    private Integer dataScope;

    /**
     * 角色状态：0-正常 1-停用
     */
    private Integer status;

    /**
     * 备注
     */
    private String remark;

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

    /**
     * 更新时间
     */
    @TableField(fill = FieldFill.INSERT_UPDATE)
    private java.time.LocalDateTime updateTime;

    /**
     * 该角色的权限列表（非数据库字段）
     */
    @TableField(exist = false)
    private List<SysPermission> permissions;

    /**
     * 该角色的用户数量（非数据库字段）
     */
    @TableField(exist = false)
    private Integer userCount;
}
