const e=JSON.parse('{"key":"v-1acac46e","path":"/backend/spring/SpringCloudAlibaba/40/12-1686635365872.html","title":"如何使用","lang":"zh-CN","frontmatter":{"title":"如何使用","order":20,"date":"2023-06-13T00:00:00.000Z","index":false,"permalink":"/backend/spring/SpringCloudAlibaba/40/12-1686635365872.html","description":"Sentinel 可以简单的分为 Sentinel 核心库和 Dashboard。核心库不依赖 Dashboard，但是结合 Dashboard 可以取得最好的效果。 这篇文章主要介绍 Sentinel 核心库的使用。如果希望有一个最快最直接的了解，可以参考 新手指南 (https://github.com/alibaba/Sentinel/wiki/...","head":[["meta",{"property":"og:url","content":"https://notes.819000.xyz/backend/spring/SpringCloudAlibaba/40/12-1686635365872.html"}],["meta",{"property":"og:site_name","content":"个人笔记"}],["meta",{"property":"og:title","content":"如何使用"}],["meta",{"property":"og:description","content":"Sentinel 可以简单的分为 Sentinel 核心库和 Dashboard。核心库不依赖 Dashboard，但是结合 Dashboard 可以取得最好的效果。 这篇文章主要介绍 Sentinel 核心库的使用。如果希望有一个最快最直接的了解，可以参考 新手指南 (https://github.com/alibaba/Sentinel/wiki/..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-06-13T09:43:56.000Z"}],["meta",{"property":"article:published_time","content":"2023-06-13T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-06-13T09:43:56.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"如何使用\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-06-13T00:00:00.000Z\\",\\"dateModified\\":\\"2023-06-13T09:43:56.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"定义资源","slug":"定义资源","link":"#定义资源","children":[{"level":3,"title":"方式一：主流框架的默认适配","slug":"方式一-主流框架的默认适配","link":"#方式一-主流框架的默认适配","children":[]},{"level":3,"title":"方式二：抛出异常的方式定义资源","slug":"方式二-抛出异常的方式定义资源","link":"#方式二-抛出异常的方式定义资源","children":[]},{"level":3,"title":"方式三：返回布尔值方式定义资源","slug":"方式三-返回布尔值方式定义资源","link":"#方式三-返回布尔值方式定义资源","children":[]},{"level":3,"title":"方式四：注解方式定义资源","slug":"方式四-注解方式定义资源","link":"#方式四-注解方式定义资源","children":[]},{"level":3,"title":"方式五：异步调用支持","slug":"方式五-异步调用支持","link":"#方式五-异步调用支持","children":[]}]},{"level":2,"title":"规则的种类","slug":"规则的种类","link":"#规则的种类","children":[{"level":3,"title":"流量控制规则 (FlowRule)","slug":"流量控制规则-flowrule","link":"#流量控制规则-flowrule","children":[]},{"level":3,"title":"熔断降级规则 (DegradeRule)","slug":"熔断降级规则-degraderule","link":"#熔断降级规则-degraderule","children":[]},{"level":3,"title":"系统保护规则 (SystemRule)","slug":"系统保护规则-systemrule","link":"#系统保护规则-systemrule","children":[]},{"level":3,"title":"访问控制规则 (AuthorityRule)","slug":"访问控制规则-authorityrule","link":"#访问控制规则-authorityrule","children":[]},{"level":3,"title":"热点规则 (ParamFlowRule)","slug":"热点规则-paramflowrule","link":"#热点规则-paramflowrule","children":[]}]},{"level":2,"title":"查询更改规则","slug":"查询更改规则","link":"#查询更改规则","children":[]},{"level":2,"title":"定制自己的持久化规则","slug":"定制自己的持久化规则","link":"#定制自己的持久化规则","children":[]},{"level":2,"title":"规则生效的效果","slug":"规则生效的效果","link":"#规则生效的效果","children":[{"level":3,"title":"判断限流降级异常","slug":"判断限流降级异常","link":"#判断限流降级异常","children":[]},{"level":3,"title":"block 事件","slug":"block-事件","link":"#block-事件","children":[]}]},{"level":2,"title":"其它 API","slug":"其它-api","link":"#其它-api","children":[{"level":3,"title":"业务异常统计 Tracer","slug":"业务异常统计-tracer","link":"#业务异常统计-tracer","children":[]},{"level":3,"title":"上下文工具类 ContextUtil","slug":"上下文工具类-contextutil","link":"#上下文工具类-contextutil","children":[]}]},{"level":2,"title":"Dashboard","slug":"dashboard","link":"#dashboard","children":[]}],"git":{"createdTime":1686649436000,"updatedTime":1686649436000,"contributors":[{"name":"liguangni","email":"liguangfenglucky@163.com","commits":1}]},"readingTime":{"minutes":14.61,"words":4382},"filePathRelative":"backend/spring/SpringCloudAlibaba/40.Sentinel/20.如何使用.md","localizedDate":"2023年6月13日","autoDesc":true}');export{e as data};
