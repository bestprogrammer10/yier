package com.yier.entity;

import com.baomidou.mybatisplus.annotation.*;
import lombok.Data;

import java.util.List;

/**
 * 权限实体类
 * 遵循 SOLID 原则：单一职责，仅负责权限数据存储
 */
@Data
@TableName("sys_permission")
public class SysPermission {

    /**
     * 权限ID
     */
    @TableId(value = "id", type = IdType.AUTO)
    private Long id;

    /**
     * 父权限ID
     */
    private Long parentId;

    /**
     * 权限名称
     */
    private String permissionName;

    /**
     * 权限标识
     */
    private String permissionKey;

    /**
     * 权限类型：0-目录 1-菜单 2-按钮
     */
    private Integer permissionType;

    /**
     * 路由地址
     */
    private String path;

    /**
     * 组件路径
     */
    private String component;

    /**
     * 菜单图标
     */
    private String icon;

    /**
     * 显示顺序
     */
    private Integer sort;

    /**
     * 菜单状态：0-显示 1-隐藏
     */
    private Integer visible;

    /**
     * 权限状态：0-正常 1-停用
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
     * 子权限列表（非数据库字段）
     */
    @TableField(exist = false)
    private List<SysPermission> children;
}
