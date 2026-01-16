package com.yier;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * 智记账后端应用启动类
 * 遵循 SOLID 原则：单一职责，仅负责启动应用
 */
@SpringBootApplication
@MapperScan("com.yier.dao")
public class YierApplication {

    public static void main(String[] args) {
        SpringApplication.run(YierApplication.class, args);
        System.out.println("智记账后端服务启动成功！");
    }
}
