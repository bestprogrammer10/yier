package com.yier.config;

import cn.dev33.satoken.stp.StpInterface;
import com.yier.dao.SysPermissionDao;
import com.yier.dao.SysRoleDao;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

/**
 * Sa-Token 权限认证接口实现
 * 遵循 SOLID 原则：单一职责，仅负责 Sa-Token 权限查询
 */
@Component
@RequiredArgsConstructor
public class StpInterfaceImpl implements StpInterface {

    private final SysRoleDao sysRoleDao;
    private final SysPermissionDao sysPermissionDao;

    /**
     * 返回指定账号 id 所拥有的权限码集合
     * @param loginId 账号id
     * @param loginType 账号类型
     * @return 权限码集合
     */
    @Override
    public List<String> getPermissionList(Object loginId, String loginType) {
        Long userId = Long.valueOf(loginId.toString());
        return sysPermissionDao.selectPermissionKeysByUserId(userId);
    }

    /**
     * 返回指定账号 id 所拥有的角色标识集合
     * @param loginId 账号id
     * @param loginType 账号类型
     * @return 角色标识集合
     */
    @Override
    public List<String> getRoleList(Object loginId, String loginType) {
        Long userId = Long.valueOf(loginId.toString());
        List<String> roleKeys = new ArrayList<>();

        // 查询用户的所有角色
        List<com.yier.entity.SysRole> roles = sysRoleDao.selectRolesByUserId(userId);
        if (roles != null && !roles.isEmpty()) {
            roleKeys = roles.stream()
                    .map(com.yier.entity.SysRole::getRoleKey)
                    .collect(Collectors.toList());
        }

        return roleKeys;
    }
}
