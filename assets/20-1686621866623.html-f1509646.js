import{_ as r,U as o,V as t,W as e,a3 as a,a2 as l,a4 as i,I as d}from"./framework-0db41e67.js";const s={},p=i(`<h1 id="如何使用" tabindex="-1"><a class="header-anchor" href="#如何使用" aria-hidden="true">#</a> 如何使用</h1><h2 id="如何构建" tabindex="-1"><a class="header-anchor" href="#如何构建" aria-hidden="true">#</a> 如何构建</h2><ul><li>2022.x 分支对应的是 Spring Cloud 2022 与 Spring Boot 3.0.x，最低支持 JDK 17。</li><li>2021.x 分支对应的是 Spring Cloud 2021 与 Spring Boot 2.6.x，最低支持 JDK 1.8。</li><li>2020.0 分支对应的是 Spring Cloud 2020 与 Spring Boot 2.4.x，最低支持 JDK 1.8。</li><li>2.2.x 分支对应的是 Spring Cloud Hoxton 与 Spring Boot 2.2.x，最低支持 JDK 1.8。</li><li>greenwich 分支对应的是 Spring Cloud Greenwich 与 Spring Boot 2.1.x，最低支持 JDK 1.8。</li><li>finchley 分支对应的是 Spring Cloud Finchley 与 Spring Boot 2.0.x，最低支持 JDK 1.8。</li><li>1.x 分支对应的是 Spring Cloud Edgware 与 Spring Boot 1.x，最低支持 JDK 1.7。</li></ul><p>Spring Cloud 使用 Maven 来构建，最快的使用方式是将本项目 clone 到本地，然后执行以下命令：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>./mvnw install
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>执行完毕后，项目将被安装到本地 Maven 仓库。</p><h2 id="如何使用-1" tabindex="-1"><a class="header-anchor" href="#如何使用-1" aria-hidden="true">#</a> 如何使用</h2><h3 id="如何引入依赖" tabindex="-1"><a class="header-anchor" href="#如何引入依赖" aria-hidden="true">#</a> 如何引入依赖</h3><p>如果需要使用已发布的版本，在 <code>dependencyManagement</code> 中添加如下配置。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;dependencyManagement&gt;
    &lt;dependencies&gt;
        &lt;dependency&gt;
            &lt;groupId&gt;com.alibaba.cloud&lt;/groupId&gt;
            &lt;artifactId&gt;spring-cloud-alibaba-dependencies&lt;/artifactId&gt;
            &lt;version&gt;2022.0.0.0-RC2&lt;/version&gt;
            &lt;type&gt;pom&lt;/type&gt;
            &lt;scope&gt;import&lt;/scope&gt;
        &lt;/dependency&gt;
    &lt;/dependencies&gt;
&lt;/dependencyManagement&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),c=e("code",null,"dependencies",-1),b={href:"https://github.com/alibaba/spring-cloud-alibaba/wiki/%E7%89%88%E6%9C%AC%E8%AF%B4%E6%98%8E",target:"_blank",rel:"noopener noreferrer"},g=i('<h2 id="版本管理规范" tabindex="-1"><a class="header-anchor" href="#版本管理规范" aria-hidden="true">#</a> 版本管理规范</h2><p>项目的版本号格式为 x.x.x 的形式，其中 x 的数值类型为数字，从 0 开始取值，且不限于 0~9 这个范围。项目处于孵化器阶段时，第一位版本号固定使用 0，即版本号为 0.x.x 的格式。</p><p>由于 Spring Boot 1 和 Spring Boot 2 在 Actuator 模块的接口和注解有很大的变更，且 spring-cloud-commons 从 1.x.x 版本升级到 2.0.0 版本也有较大的变更，因此我们采取跟 SpringBoot 版本号一致的版本:</p><ul><li>1.5.x 版本适用于 Spring Boot 1.5.x</li><li>2.0.x 版本适用于 Spring Boot 2.0.x</li><li>2.1.x 版本适用于 Spring Boot 2.1.x</li><li>2.2.x 版本适用于 Spring Boot 2.2.x</li><li>2020.x 版本适用于 Spring Boot 2.4.x</li><li>2021.x 版本适用于 Spring Boot 2.6.x</li><li>2022.x 版本适用于 Spring Boot 3.0.x</li></ul><h2 id="演示-demo" tabindex="-1"><a class="header-anchor" href="#演示-demo" aria-hidden="true">#</a> 演示 Demo</h2><p>为了演示如何使用，Spring Cloud Alibaba 项目包含了一个子模块<code>spring-cloud-alibaba-examples</code>。此模块中提供了演示用的 example ，您可以阅读对应的 example 工程下的 readme 文档，根据里面的步骤来体验。</p><p>Example 列表：</p>',7),u={href:"https://github.com/alibaba/spring-cloud-alibaba/tree/2022.x/spring-cloud-alibaba-examples/sentinel-example/sentinel-core-example/readme-zh.md",target:"_blank",rel:"noopener noreferrer"},m={href:"https://github.com/alibaba/spring-cloud-alibaba/blob/2022.x/spring-cloud-alibaba-examples/nacos-example/nacos-config-example/readme-zh.md",target:"_blank",rel:"noopener noreferrer"},h={href:"https://github.com/alibaba/spring-cloud-alibaba/blob/2022.x/spring-cloud-alibaba-examples/nacos-example/nacos-discovery-example/readme-zh.md",target:"_blank",rel:"noopener noreferrer"},x={href:"https://github.com/alibaba/spring-cloud-alibaba/blob/2022.x/spring-cloud-alibaba-examples/rocketmq-example/readme-zh.md",target:"_blank",rel:"noopener noreferrer"},_={href:"https://github.com/alibaba/spring-cloud-alibaba/blob/2022.x/spring-cloud-alibaba-examples/seata-example/readme-zh.md",target:"_blank",rel:"noopener noreferrer"},v={href:"https://github.com/alibaba/aliyun-spring-boot/tree/master/aliyun-spring-boot-samples/aliyun-oss-spring-boot-sample",target:"_blank",rel:"noopener noreferrer"},f={href:"https://github.com/alibaba/aliyun-spring-boot/tree/master/aliyun-spring-boot-samples/aliyun-sms-spring-boot-sample",target:"_blank",rel:"noopener noreferrer"},S={href:"https://github.com/alibaba/aliyun-spring-boot",target:"_blank",rel:"noopener noreferrer"};function B(y,E){const n=d("ExternalLinkIcon");return o(),t("div",null,[p,e("p",null,[a("然后在 "),c,a(" 中添加自己所需使用的依赖即可使用。如果你想选择老版本，可以参考"),e("a",b,[a("版本说明"),l(n)]),a("。")]),g,e("p",null,[e("a",u,[a("Sentinel Example"),l(n)])]),e("p",null,[e("a",m,[a("Nacos Config Example"),l(n)])]),e("p",null,[e("a",h,[a("Nacos Discovery Example"),l(n)])]),e("p",null,[e("a",x,[a("RocketMQ Example"),l(n)])]),e("p",null,[e("a",_,[a("Seata Example"),l(n)])]),e("p",null,[e("a",v,[a("Alibaba Cloud OSS Example"),l(n)])]),e("p",null,[e("a",f,[a("Alibaba Cloud SMS Example"),l(n)])]),e("p",null,[e("a",S,[a("Alibaba Cloud SchedulerX Example"),l(n)])])])}const k=r(s,[["render",B],["__file","20-1686621866623.html.vue"]]);export{k as default};
