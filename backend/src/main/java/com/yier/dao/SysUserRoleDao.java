package com.yier.dao;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.yier.entity.SysUserRole;
import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

import java.util.List;

/**
 * 用户角色关联 DAO 接口
 * 遵循 SOLID 原则：单一职责，仅负责用户角色关联数据访问
 */
@Mapper
public interface SysUserRoleDao extends BaseMapper<SysUserRole> {

    /**
     * 根据用户ID删除所有角色关联
     * @param userId 用户ID
     * @return 删除的行数
     */
    @Delete("DELETE FROM sys_user_role WHERE user_id = #{userId}")
    int deleteByUserId(@Param("userId") Long userId);

    /**
     * 根据角色ID删除所有用户关联
     * @param roleId 角色ID
     * @return 删除的行数
     */
    @Delete("DELETE FROM sys_user_role WHERE role_id = #{roleId}")
    int deleteByRoleId(@Param("roleId") Long roleId);

    /**
     * 根据用户ID查询角色ID列表
     * @param userId 用户ID
     * @return 角色ID列表
     */
    @Select("SELECT role_id FROM sys_user_role WHERE user_id = #{userId} AND deleted = 0")
    List<Long> selectRoleIdsByUserId(@Param("userId") Long userId);
}
