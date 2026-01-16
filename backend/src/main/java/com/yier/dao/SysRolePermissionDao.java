package com.yier.dao;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.yier.entity.SysRolePermission;
import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

import java.util.List;

/**
 * 角色权限关联 DAO 接口
 * 遵循 SOLID 原则：单一职责，仅负责角色权限关联数据访问
 */
@Mapper
public interface SysRolePermissionDao extends BaseMapper<SysRolePermission> {

    /**
     * 根据角色ID删除所有权限关联
     * @param roleId 角色ID
     * @return 删除的行数
     */
    @Delete("DELETE FROM sys_role_permission WHERE role_id = #{roleId}")
    int deleteByRoleId(@Param("roleId") Long roleId);

    /**
     * 根据权限ID删除所有角色关联
     * @param permissionId 权限ID
     * @return 删除的行数
     */
    @Delete("DELETE FROM sys_role_permission WHERE permission_id = #{permissionId}")
    int deleteByPermissionId(@Param("permissionId") Long permissionId);

    /**
     * 根据角色ID查询权限ID列表
     * @param roleId 角色ID
     * @return 权限ID列表
     */
    @Select("SELECT permission_id FROM sys_role_permission WHERE role_id = #{roleId} AND deleted = 0")
    List<Long> selectPermissionIdsByRoleId(@Param("roleId") Long roleId);

    /**
     * 批量插入角色权限关联
     * @param roleId 角色ID
     * @param permissionIds 权限ID列表
     * @return 插入的行数
     */
    @Select("<script>" +
            "INSERT INTO sys_role_permission (role_id, permission_id) VALUES " +
            "<foreach collection='permissionIds' item='permissionId' separator=','>" +
            "(#{roleId}, #{permissionId})" +
            "</foreach>" +
            "</script>")
    int batchInsert(@Param("roleId") Long roleId, @Param("permissionIds") List<Long> permissionIds);
}
