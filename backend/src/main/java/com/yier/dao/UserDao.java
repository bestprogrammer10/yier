package com.yier.dao;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.yier.entity.User;
import org.apache.ibatis.annotations.Mapper;

/**
 * 用户 DAO 接口
 * 遵循 SOLID 原则：单一职责，仅负责用户数据访问
 */
@Mapper
public interface UserDao extends BaseMapper<User> {
}
