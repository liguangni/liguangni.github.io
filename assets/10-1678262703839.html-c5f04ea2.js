import{_ as t,r as l,o as s,c as r,d as a,e as n,b as h,f as i}from"./app-8feddf91.js";const d={},o=i('<h1 id="mybatis简介" tabindex="-1"><a class="header-anchor" href="#mybatis简介" aria-hidden="true">#</a> Mybatis简介</h1><h2 id="mybatis历史" tabindex="-1"><a class="header-anchor" href="#mybatis历史" aria-hidden="true">#</a> MyBatis历史</h2><ul><li>MyBatis最初是Apache的一个开源项目iBatis, 2010年6月这个项目由Apache Software Foundation迁移到了Google Code。随着开发团队转投Google Code旗下，iBatis3.x正式更名为MyBatis。代码于2013年11月迁移到Github</li><li>iBatis一词来源于“internet”和“abatis”的组合，是一个基于Java的持久层框架。iBatis提供的持久层框架包括SQL Maps和Data Access Objects（DAO）</li></ul><h2 id="mybatis特性" tabindex="-1"><a class="header-anchor" href="#mybatis特性" aria-hidden="true">#</a> MyBatis特性</h2><ol><li>MyBatis 是支持定制化 SQL、存储过程以及高级映射的优秀的持久层框架</li><li>MyBatis 避免了几乎所有的 JDBC 代码和手动设置参数以及获取结果集</li><li>MyBatis可以使用简单的XML或注解用于配置和原始映射，将接口和Java的POJO（Plain Old Java Objects，普通的Java对象）映射成数据库中的记录</li><li>MyBatis 是一个 半自动的ORM（Object Relation Mapping）框架</li></ol><h2 id="mybatis下载" tabindex="-1"><a class="header-anchor" href="#mybatis下载" aria-hidden="true">#</a> MyBatis下载</h2>',6),c={href:"https://github.com/mybatis/mybatis-3",target:"_blank",rel:"noopener noreferrer"},b=i('<h2 id="持久化层技术对比" tabindex="-1"><a class="header-anchor" href="#持久化层技术对比" aria-hidden="true">#</a> 持久化层技术对比</h2><h3 id="jdbc" tabindex="-1"><a class="header-anchor" href="#jdbc" aria-hidden="true">#</a> JDBC</h3><ul><li>SQL 夹杂在Java代码中耦合度高，导致硬编码内伤</li><li>维护不易且实际开发需求中 SQL 有变化，频繁修改的情况多见</li><li>代码冗长，开发效率低</li></ul><h3 id="hibernate-和-jpa" tabindex="-1"><a class="header-anchor" href="#hibernate-和-jpa" aria-hidden="true">#</a> Hibernate 和 JPA</h3><ul><li>操作简便，开发效率高</li><li>程序中的长难复杂 SQL 需要绕过框架</li><li>内部自动生产的 SQL，不容易做特殊优化</li><li>基于全映射的全自动框架，大量字段的 POJO 进行部分映射时比较困难。</li><li>反射操作太多，导致数据库性能下降</li></ul><h3 id="mybatis" tabindex="-1"><a class="header-anchor" href="#mybatis" aria-hidden="true">#</a> MyBatis</h3><ul><li>轻量级，性能出色</li><li>SQL 和 Java 编码分开，功能边界清晰。Java代码专注业务、SQL语句专注数据</li><li>开发效率稍逊于HIbernate，但是完全能够接受</li></ul>',7);function u(y,_){const e=l("ExternalLinkIcon");return s(),r("div",null,[o,a("ul",null,[a("li",null,[a("a",c,[n("MyBatis下载地址"),h(e)])])]),b])}const B=t(d,[["render",u],["__file","10-1678262703839.html.vue"]]);export{B as default};
