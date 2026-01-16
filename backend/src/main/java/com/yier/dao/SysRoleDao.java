package com.yier.dao;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.yier.entity.SysRole;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

import java.util.List;

/**
 * 角色 DAO 接口
 * 遵循 SOLID 原则：单一职责，仅负责角色数据访问
 */
@Mapper
public interface SysRoleDao extends BaseMapper<SysRole> {

    /**
     * 根据用户ID查询角色列表
     * @param userId 用户ID
     * @return 角色列表
     */
    List<SysRole> selectRolesByUserId(@Param("userId") Long userId);

    /**
     * 根据用户ID查询角色ID列表
     * @param userId 用户ID
     * @return 角色ID列表
     */
    List<Long> selectRoleIdsByUserId(@Param("userId") Long userId);

    /**
     * 分页查询角色列表
     * @param page 分页参数
     * @param roleName 角色名称（模糊查询）
     * @param status 角色状态
     * @return 分页结果
     */
    IPage<SysRole> selectRolePage(Page<SysRole> page,
                                   @Param("roleName") String roleName,
                                   @Param("status") Integer status);

    /**
     * 根据角色ID查询权限ID列表
     * @param roleId 角色ID
     * @return 权限ID列表
     */
    List<Long> selectPermissionIdsByRoleId(@Param("roleId") Long roleId);
}
