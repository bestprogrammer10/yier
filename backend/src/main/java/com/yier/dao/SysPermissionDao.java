package com.yier.dao;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.yier.entity.SysPermission;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

import java.util.List;

/**
 * 权限 DAO 接口
 * 遵循 SOLID 原则：单一职责，仅负责权限数据访问
 */
@Mapper
public interface SysPermissionDao extends BaseMapper<SysPermission> {

    /**
     * 根据用户ID查询权限列表
     * @param userId 用户ID
     * @return 权限列表
     */
    List<SysPermission> selectPermissionsByUserId(@Param("userId") Long userId);

    /**
     * 根据用户ID查询权限标识列表
     * @param userId 用户ID
     * @return 权限标识列表
     */
    List<String> selectPermissionKeysByUserId(@Param("userId") Long userId);

    /**
     * 根据角色ID查询权限列表
     * @param roleId 角色ID
     * @return 权限列表
     */
    List<SysPermission> selectPermissionsByRoleId(@Param("roleId") Long roleId);

    /**
     * 根据父权限ID查询子权限列表
     * @param parentId 父权限ID
     * @return 子权限列表
     */
    List<SysPermission> selectPermissionsByParentId(@Param("parentId") Long parentId);

    /**
     * 查询所有权限（树形结构）
     * @return 权限列表
     */
    @Select("SELECT * FROM sys_permission WHERE deleted = 0 ORDER BY sort ASC")
    List<SysPermission> selectAllPermissions();
}
