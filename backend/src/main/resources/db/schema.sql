-- ========================================
-- 智记账 (Yier) 数据库表结构设计
-- 版本: 1.0.0
-- 说明: 用户权限管理系统 - 基于 Sa-Token
-- 设计原则: SOLID, RBAC 模型
-- ========================================

-- 清理旧表（开发环境使用）
DROP TABLE IF EXISTS `sys_user_role`;
DROP TABLE IF EXISTS `sys_role_permission`;
DROP TABLE IF EXISTS `sys_permission`;
DROP TABLE IF EXISTS `sys_role`;
DROP TABLE IF EXISTS `user`;

-- ========================================
-- 1. 用户表
-- ========================================
CREATE TABLE `user` (
  `id` BIGINT(20) PRIMARY KEY AUTO_INCREMENT COMMENT '用户ID',
  `openid` VARCHAR(128) DEFAULT NULL COMMENT '微信 OpenID',
  `phone` VARCHAR(11) DEFAULT NULL COMMENT '手机号',
  `nickname` VARCHAR(64) DEFAULT NULL COMMENT '用户昵称',
  `avatar` VARCHAR(255) DEFAULT NULL COMMENT '头像 URL',
  `login_type` TINYINT(4) DEFAULT NULL COMMENT '登录类型：1-微信登录 2-手机号登录',
  `status` TINYINT(4) DEFAULT 1 COMMENT '用户状态：0-禁用 1-启用',
  `deleted` TINYINT(4) DEFAULT 0 COMMENT '是否删除：0-未删除 1-已删除',
  `create_time` DATETIME DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  INDEX `idx_phone` (`phone`) COMMENT '手机号索引',
  INDEX `idx_openid` (`openid`) COMMENT 'OpenID索引'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='用户信息表';

-- ========================================
-- 2. 角色表
-- ========================================
CREATE TABLE `sys_role` (
  `id` BIGINT(20) PRIMARY KEY AUTO_INCREMENT COMMENT '角色ID',
  `role_name` VARCHAR(50) NOT NULL COMMENT '角色名称',
  `role_key` VARCHAR(50) NOT NULL COMMENT '角色权限字符串',
  `role_sort` INT(11) DEFAULT 0 COMMENT '显示顺序',
  `data_scope` TINYINT(4) DEFAULT '1' COMMENT '数据范围：1-全部 2-自定义 3-本部门 4-本部门及以下 5-仅本人',
  `status` TINYINT(4) DEFAULT 0 COMMENT '角色状态：0-正常 1-停用',
  `remark` VARCHAR(500) DEFAULT NULL COMMENT '备注',
  `deleted` TINYINT(4) DEFAULT 0 COMMENT '是否删除：0-未删除 1-已删除',
  `create_time` DATETIME DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  UNIQUE KEY `uk_role_key` (`role_key`) COMMENT '角色键唯一索引',
  INDEX `idx_status` (`status`) COMMENT '状态索引'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='角色信息表';

-- ========================================
-- 3. 权限表
-- ========================================
CREATE TABLE `sys_permission` (
  `id` BIGINT(20) PRIMARY KEY AUTO_INCREMENT COMMENT '权限ID',
  `parent_id` BIGINT(20) DEFAULT 0 COMMENT '父权限ID',
  `permission_name` VARCHAR(50) NOT NULL COMMENT '权限名称',
  `permission_key` VARCHAR(100) NOT NULL COMMENT '权限标识',
  `permission_type` TINYINT(4) DEFAULT 0 COMMENT '权限类型：0-目录 1-菜单 2-按钮',
  `path` VARCHAR(200) DEFAULT NULL COMMENT '路由地址',
  `component` VARCHAR(200) DEFAULT NULL COMMENT '组件路径',
  `icon` VARCHAR(100) DEFAULT '#' COMMENT '菜单图标',
  `sort` INT(11) DEFAULT 0 COMMENT '显示顺序',
  `visible` TINYINT(4) DEFAULT 0 COMMENT '菜单状态：0-显示 1-隐藏',
  `status` TINYINT(4) DEFAULT 0 COMMENT '权限状态：0-正常 1-停用',
  `remark` VARCHAR(500) DEFAULT NULL COMMENT '备注',
  `deleted` TINYINT(4) DEFAULT 0 COMMENT '是否删除：0-未删除 1-已删除',
  `create_time` DATETIME DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  UNIQUE KEY `uk_permission_key` (`permission_key`) COMMENT '权限键唯一索引',
  INDEX `idx_parent_id` (`parent_id`) COMMENT '父权限索引',
  INDEX `idx_permission_type` (`permission_type`) COMMENT '权限类型索引'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='权限信息表';

-- ========================================
-- 4. 用户角色关联表
-- ========================================
CREATE TABLE `sys_user_role` (
  `id` BIGINT(20) PRIMARY KEY AUTO_INCREMENT COMMENT '主键ID',
  `user_id` BIGINT(20) NOT NULL COMMENT '用户ID',
  `role_id` BIGINT(20) NOT NULL COMMENT '角色ID',
  `deleted` TINYINT(4) DEFAULT 0 COMMENT '是否删除：0-未删除 1-已删除',
  `create_time` DATETIME DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  UNIQUE KEY `uk_user_role` (`user_id`, `role_id`) COMMENT '用户角色唯一索引',
  INDEX `idx_user_id` (`user_id`) COMMENT '用户ID索引',
  INDEX `idx_role_id` (`role_id`) COMMENT '角色ID索引'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='用户角色关联表';

-- ========================================
-- 5. 角色权限关联表
-- ========================================
CREATE TABLE `sys_role_permission` (
  `id` BIGINT(20) PRIMARY KEY AUTO_INCREMENT COMMENT '主键ID',
  `role_id` BIGINT(20) NOT NULL COMMENT '角色ID',
  `permission_id` BIGINT(20) NOT NULL COMMENT '权限ID',
  `deleted` TINYINT(4) DEFAULT 0 COMMENT '是否删除：0-未删除 1-已删除',
  `create_time` DATETIME DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  UNIQUE KEY `uk_role_permission` (`role_id`, `permission_id`) COMMENT '角色权限唯一索引',
  INDEX `idx_role_id` (`role_id`) COMMENT '角色ID索引',
  INDEX `idx_permission_id` (`permission_id`) COMMENT '权限ID索引'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='角色权限关联表';

-- ========================================
-- 初始化数据
-- ========================================

-- 初始化角色
INSERT INTO `sys_role` (`id`, `role_name`, `role_key`, `role_sort`, `data_scope`, `status`, `remark`) VALUES
(1, '超级管理员', 'admin', 1, 1, 0, '拥有系统所有权限'),
(2, '普通用户', 'user', 2, 5, 0, '普通用户权限'),
(3, '财务管理员', 'finance', 3, 4, 0, '财务管理相关权限');

-- 初始化权限
INSERT INTO `sys_permission` (`id`, `parent_id`, `permission_name`, `permission_key`, `permission_type`, `path`, `component`, `icon`, `sort`, `visible`, `status`, `remark`) VALUES
-- 一级菜单
(10, 0, '用户管理', 'user:manage', 0, '/user', NULL, 'user', 10, 0, 0, '用户管理模块'),
(20, 0, '角色管理', 'role:manage', 0, '/role', NULL, 'team', 20, 0, 0, '角色管理模块'),
(30, 0, '权限管理', 'permission:manage', 0, '/permission', NULL, 'lock', 30, 0, 0, '权限管理模块'),
(40, 0, '记账管理', 'record:manage', 0, '/record', NULL, 'money', 40, 0, 0, '记账管理模块'),
(50, 0, '统计分析', 'stat:manage', 0, '/stat', NULL, 'chart', 50, 0, 0, '统计分析模块'),
-- 用户管理子菜单
(101, 10, '用户列表', 'user:list', 1, '/user/list', 'UserList', 'list', 101, 0, 0, '用户列表页面'),
(102, 10, '新增用户', 'user:add', 2, NULL, NULL, 'plus', 102, 0, 0, '新增用户按钮'),
(103, 10, '修改用户', 'user:edit', 2, NULL, NULL, 'edit', 103, 0, 0, '修改用户按钮'),
(104, 10, '删除用户', 'user:delete', 2, NULL, NULL, 'delete', 104, 0, 0, '删除用户按钮'),
-- 角色管理子菜单
(201, 20, '角色列表', 'role:list', 1, '/role/list', 'RoleList', 'list', 201, 0, 0, '角色列表页面'),
(202, 20, '新增角色', 'role:add', 2, NULL, NULL, 'plus', 202, 0, 0, '新增角色按钮'),
(203, 20, '修改角色', 'role:edit', 2, NULL, NULL, 'edit', 203, 0, 0, '修改角色按钮'),
(204, 20, '删除角色', 'role:delete', 2, NULL, NULL, 'delete', 204, 0, 0, '删除角色按钮'),
(205, 20, '分配权限', 'role:assign', 2, NULL, NULL, 'key', 205, 0, 0, '分配权限按钮'),
-- 权限管理子菜单
(301, 30, '权限列表', 'permission:list', 1, '/permission/list', 'PermissionList', 'list', 301, 0, 0, '权限列表页面'),
-- 记账管理子菜单
(401, 40, '记账记录', 'record:list', 1, '/record/list', 'RecordList', 'list', 401, 0, 0, '记账记录页面'),
(402, 40, '新增记录', 'record:add', 2, NULL, NULL, 'plus', 402, 0, 0, '新增记录按钮'),
(403, 40, '修改记录', 'record:edit', 2, NULL, NULL, 'edit', 403, 0, 0, '修改记录按钮'),
(404, 40, '删除记录', 'record:delete', 2, NULL, NULL, 'delete', 404, 0, 0, '删除记录按钮'),
-- 统计分析子菜单
(501, 50, '数据概览', 'stat:overview', 1, '/stat/overview', 'StatOverview', 'dashboard', 501, 0, 0, '数据概览页面'),
(502, 50, '分类统计', 'stat:category', 1, '/stat/category', 'StatCategory', 'chart', 502, 0, 0, '分类统计页面');

-- 初始化超级管理员角色权限
INSERT INTO `sys_role_permission` (`role_id`, `permission_id`) VALUES
-- 超级管理员拥有所有权限
(1, 10), (1, 20), (1, 30), (1, 40), (1, 50),
(1, 101), (1, 102), (1, 103), (1, 104),
(1, 201), (1, 202), (1, 203), (1, 204), (1, 205),
(1, 301),
(1, 401), (1, 402), (1, 403), (1, 404),
(1, 501), (1, 502);

-- 初始化普通用户角色权限
INSERT INTO `sys_role_permission` (`role_id`, `permission_id`) VALUES
-- 普通用户只有记账和查看权限
(2, 40),
(2, 401), (2, 402), (2, 403);

-- 初始化财务管理员角色权限
INSERT INTO `sys_role_permission` (`role_id`, `permission_id`) VALUES
-- 财务管理员有记账和统计权限
(3, 40), (3, 50),
(3, 401), (3, 402), (3, 403), (3, 404),
(3, 501), (3, 502);

-- ========================================
-- 说明：
-- 1. RBAC 模型：用户 → 角色 → 权限
-- 2. 支持多对多关系：一个用户可以有多个角色，一个角色可以有多个权限
-- 3. 逻辑删除：所有表都支持逻辑删除，使用 deleted 字段
-- 4. Sa-Token 集成：
--    - 用户登录后，通过 StpUtil.login(userId) 登录
--    - 权限验证使用 StpUtil.hasPermission("user:add") 或 @SaCheckPermission 注解
-- 5. 数据权限：sys_role 表中的 data_scope 字段控制数据访问范围
-- ========================================
