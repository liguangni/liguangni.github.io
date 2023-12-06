import{_ as n,o as s,c as a,f as p}from"./app-765121fc.js";const t={},e=p(`<h2 id="分页插件的配置" tabindex="-1"><a class="header-anchor" href="#分页插件的配置" aria-hidden="true">#</a> 分页插件的配置</h2><h3 id="添加依赖" tabindex="-1"><a class="header-anchor" href="#添加依赖" aria-hidden="true">#</a> 添加依赖</h3><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token comment">&lt;!-- https://mvnrepository.com/artifact/com.github.pagehelper/pagehelper --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.github.pagehelper<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>pagehelper<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>5.2.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="配置分页插件" tabindex="-1"><a class="header-anchor" href="#配置分页插件" aria-hidden="true">#</a> 配置分页插件</h3><ul><li>在MyBatis的核心配置文件（mybatis-config.xml）中配置插件</li><li><img src="https://jihulab.com/byzh123/images/-/raw/images/pictures/2023/03/13_16_32_18_配置分页插件.png" alt="配置分页插件" tabindex="0" loading="lazy"><figcaption>配置分页插件</figcaption></li></ul><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>plugins</span><span class="token punctuation">&gt;</span></span>
	<span class="token comment">&lt;!--设置分页插件--&gt;</span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>plugin</span> <span class="token attr-name">interceptor</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>com.github.pagehelper.PageInterceptor<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>plugin</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>plugins</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="分页插件的使用" tabindex="-1"><a class="header-anchor" href="#分页插件的使用" aria-hidden="true">#</a> 分页插件的使用</h2><h3 id="开启分页功能" tabindex="-1"><a class="header-anchor" href="#开启分页功能" aria-hidden="true">#</a> 开启分页功能</h3><p>在查询功能之前使用<code>PageHelper.startPage(int pageNum, int pageSize)</code>开启分页功能</p><ul><li>pageNum：当前页的页码</li><li>pageSize：每页显示的条数</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testPageHelper</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
	<span class="token class-name">InputStream</span> is <span class="token operator">=</span> <span class="token class-name">Resources</span><span class="token punctuation">.</span><span class="token function">getResourceAsStream</span><span class="token punctuation">(</span><span class="token string">&quot;mybatis-config.xml&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token class-name">SqlSessionFactoryBuilder</span> sqlSessionFactoryBuilder <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SqlSessionFactoryBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token class-name">SqlSessionFactory</span> sqlSessionFactory <span class="token operator">=</span> sqlSessionFactoryBuilder<span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span>is<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token class-name">SqlSession</span> sqlSession <span class="token operator">=</span> sqlSessionFactory<span class="token punctuation">.</span><span class="token function">openSession</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token class-name">EmpMapper</span> mapper <span class="token operator">=</span> sqlSession<span class="token punctuation">.</span><span class="token function">getMapper</span><span class="token punctuation">(</span><span class="token class-name">EmpMapper</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token comment">//访问第一页，每页四条数据</span>
	<span class="token class-name">PageHelper</span><span class="token punctuation">.</span><span class="token function">startPage</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Emp</span><span class="token punctuation">&gt;</span></span> emps <span class="token operator">=</span> mapper<span class="token punctuation">.</span><span class="token function">selectByExample</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	emps<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token operator">::</span><span class="token function">println</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://jihulab.com/byzh123/images/-/raw/images/pictures/2023/03/13_16_31_18_分页测试结果.png" alt="开启分页功能" tabindex="0" loading="lazy"><figcaption>开启分页功能</figcaption></figure><h3 id="分页相关数据" tabindex="-1"><a class="header-anchor" href="#分页相关数据" aria-hidden="true">#</a> 分页相关数据</h3><h4 id="方法一-直接输出" tabindex="-1"><a class="header-anchor" href="#方法一-直接输出" aria-hidden="true">#</a> 方法一：直接输出</h4><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testPageHelper</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
	<span class="token class-name">InputStream</span> is <span class="token operator">=</span> <span class="token class-name">Resources</span><span class="token punctuation">.</span><span class="token function">getResourceAsStream</span><span class="token punctuation">(</span><span class="token string">&quot;mybatis-config.xml&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token class-name">SqlSessionFactoryBuilder</span> sqlSessionFactoryBuilder <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SqlSessionFactoryBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token class-name">SqlSessionFactory</span> sqlSessionFactory <span class="token operator">=</span> sqlSessionFactoryBuilder<span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span>is<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token class-name">SqlSession</span> sqlSession <span class="token operator">=</span> sqlSessionFactory<span class="token punctuation">.</span><span class="token function">openSession</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token class-name">EmpMapper</span> mapper <span class="token operator">=</span> sqlSession<span class="token punctuation">.</span><span class="token function">getMapper</span><span class="token punctuation">(</span><span class="token class-name">EmpMapper</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token comment">//访问第一页，每页四条数据</span>
	<span class="token class-name">Page</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> page <span class="token operator">=</span> <span class="token class-name">PageHelper</span><span class="token punctuation">.</span><span class="token function">startPage</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Emp</span><span class="token punctuation">&gt;</span></span> emps <span class="token operator">=</span> mapper<span class="token punctuation">.</span><span class="token function">selectByExample</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token comment">//在查询到List集合后，打印分页数据</span>
	<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>page<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>分页相关数据：</li></ul><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>Page<span class="token punctuation">{</span>
    count=<span class="token boolean">true</span><span class="token punctuation">,</span> 
    pageNum=<span class="token number">1</span><span class="token punctuation">,</span> 
    pageSize=<span class="token number">4</span><span class="token punctuation">,</span> 
    startRow=<span class="token number">0</span><span class="token punctuation">,</span> 
    endRow=<span class="token number">4</span><span class="token punctuation">,</span> 
    total=<span class="token number">8</span><span class="token punctuation">,</span> 
    pages=<span class="token number">2</span><span class="token punctuation">,</span> 
    reasonable=<span class="token boolean">false</span><span class="token punctuation">,</span> p
    ageSizeZero=<span class="token boolean">false</span>
<span class="token punctuation">}</span><span class="token punctuation">[</span>Emp<span class="token punctuation">{</span>eid=<span class="token number">1</span><span class="token punctuation">,</span> empName=&#39;admin&#39;<span class="token punctuation">,</span> age=<span class="token number">22</span><span class="token punctuation">,</span> sex=&#39;男&#39;<span class="token punctuation">,</span> email=&#39;<span class="token number">456</span>@qq.com&#39;<span class="token punctuation">,</span> did=<span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">,</span> Emp<span class="token punctuation">{</span>eid=<span class="token number">2</span><span class="token punctuation">,</span> empName=&#39;admin2&#39;<span class="token punctuation">,</span> age=<span class="token number">22</span><span class="token punctuation">,</span> sex=&#39;男&#39;<span class="token punctuation">,</span> email=&#39;<span class="token number">456</span>@qq.com&#39;<span class="token punctuation">,</span> did=<span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">,</span> Emp<span class="token punctuation">{</span>eid=<span class="token number">3</span><span class="token punctuation">,</span> empName=&#39;王五&#39;<span class="token punctuation">,</span> age=<span class="token number">12</span><span class="token punctuation">,</span> sex=&#39;女&#39;<span class="token punctuation">,</span> email=&#39;<span class="token number">123</span>@qq.com&#39;<span class="token punctuation">,</span> did=<span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">,</span> Emp<span class="token punctuation">{</span>eid=<span class="token number">4</span><span class="token punctuation">,</span> empName=&#39;赵六&#39;<span class="token punctuation">,</span> age=<span class="token number">32</span><span class="token punctuation">,</span> sex=&#39;男&#39;<span class="token punctuation">,</span> email=&#39;<span class="token number">123</span>@qq.com&#39;<span class="token punctuation">,</span> did=<span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="方法二使用pageinfo" tabindex="-1"><a class="header-anchor" href="#方法二使用pageinfo" aria-hidden="true">#</a> 方法二使用PageInfo</h4><ul><li>在查询获取list集合之后，使用<code>PageInfo&lt;T&gt; pageInfo = new PageInfo&lt;&gt;(List&lt;T&gt; list, intnavigatePages)</code>获取分页相关数据</li><li>list：分页之后的数据 <ul><li>navigatePages：导航分页的页码数</li></ul></li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testPageHelper</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
	<span class="token class-name">InputStream</span> is <span class="token operator">=</span> <span class="token class-name">Resources</span><span class="token punctuation">.</span><span class="token function">getResourceAsStream</span><span class="token punctuation">(</span><span class="token string">&quot;mybatis-config.xml&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token class-name">SqlSessionFactoryBuilder</span> sqlSessionFactoryBuilder <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SqlSessionFactoryBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token class-name">SqlSessionFactory</span> sqlSessionFactory <span class="token operator">=</span> sqlSessionFactoryBuilder<span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span>is<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token class-name">SqlSession</span> sqlSession <span class="token operator">=</span> sqlSessionFactory<span class="token punctuation">.</span><span class="token function">openSession</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token class-name">EmpMapper</span> mapper <span class="token operator">=</span> sqlSession<span class="token punctuation">.</span><span class="token function">getMapper</span><span class="token punctuation">(</span><span class="token class-name">EmpMapper</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token class-name">PageHelper</span><span class="token punctuation">.</span><span class="token function">startPage</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Emp</span><span class="token punctuation">&gt;</span></span> emps <span class="token operator">=</span> mapper<span class="token punctuation">.</span><span class="token function">selectByExample</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token class-name">PageInfo</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Emp</span><span class="token punctuation">&gt;</span></span> page <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PageInfo</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span>emps<span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>page<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>分页相关数据：</li></ul><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>PageInfo<span class="token punctuation">{</span>
    pageNum=<span class="token number">1</span><span class="token punctuation">,</span> pageSize=<span class="token number">4</span><span class="token punctuation">,</span> size=<span class="token number">4</span><span class="token punctuation">,</span> startRow=<span class="token number">1</span><span class="token punctuation">,</span> endRow=<span class="token number">4</span><span class="token punctuation">,</span> total=<span class="token number">8</span><span class="token punctuation">,</span> pages=<span class="token number">2</span><span class="token punctuation">,</span> 
    
    list=Page<span class="token punctuation">{</span>count=<span class="token boolean">true</span><span class="token punctuation">,</span> pageNum=<span class="token number">1</span><span class="token punctuation">,</span> pageSize=<span class="token number">4</span><span class="token punctuation">,</span> startRow=<span class="token number">0</span><span class="token punctuation">,</span> endRow=<span class="token number">4</span><span class="token punctuation">,</span> total=<span class="token number">8</span><span class="token punctuation">,</span> pages=<span class="token number">2</span><span class="token punctuation">,</span> 
    reasonable=<span class="token boolean">false</span><span class="token punctuation">,</span> pageSizeZero=<span class="token boolean">false</span>
<span class="token punctuation">}</span><span class="token punctuation">[</span>Emp<span class="token punctuation">{</span>eid=<span class="token number">1</span><span class="token punctuation">,</span> empName=&#39;admin&#39;<span class="token punctuation">,</span> age=<span class="token number">22</span><span class="token punctuation">,</span> sex=&#39;男&#39;<span class="token punctuation">,</span> email=&#39;<span class="token number">456</span>@qq.com&#39;<span class="token punctuation">,</span> did=<span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">,</span> Emp<span class="token punctuation">{</span>eid=<span class="token number">2</span><span class="token punctuation">,</span> empName=&#39;admin2&#39;<span class="token punctuation">,</span> age=<span class="token number">22</span><span class="token punctuation">,</span> sex=&#39;男&#39;<span class="token punctuation">,</span> email=&#39;<span class="token number">456</span>@qq.com&#39;<span class="token punctuation">,</span> did=<span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">,</span> Emp<span class="token punctuation">{</span>eid=<span class="token number">3</span><span class="token punctuation">,</span> empName=&#39;王五&#39;<span class="token punctuation">,</span> age=<span class="token number">12</span><span class="token punctuation">,</span> sex=&#39;女&#39;<span class="token punctuation">,</span> email=&#39;<span class="token number">123</span>@qq.com&#39;<span class="token punctuation">,</span> did=<span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">,</span> Emp<span class="token punctuation">{</span>eid=<span class="token number">4</span><span class="token punctuation">,</span> empName=&#39;赵六&#39;<span class="token punctuation">,</span> age=<span class="token number">32</span><span class="token punctuation">,</span> sex=&#39;男&#39;<span class="token punctuation">,</span> email=&#39;<span class="token number">123</span>@qq.com&#39;<span class="token punctuation">,</span> did=<span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span> 

    prePage=<span class="token number">0</span><span class="token punctuation">,</span> nextPage=<span class="token number">2</span><span class="token punctuation">,</span> isFirstPage=<span class="token boolean">true</span><span class="token punctuation">,</span> isLastPage=<span class="token boolean">false</span><span class="token punctuation">,</span> 
    hasPreviousPage=<span class="token boolean">false</span><span class="token punctuation">,</span> hasNextPage=<span class="token boolean">true</span><span class="token punctuation">,</span> navigatePages=<span class="token number">5</span><span class="token punctuation">,</span> navigateFirstPage=<span class="token number">1</span><span class="token punctuation">,</span> 
	navigateLastPage=<span class="token number">2</span><span class="token punctuation">,</span> navigatepageNums=<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>其中list中的数据等同于方法一中直接输出的page数据</li></ul><h4 id="常用数据" tabindex="-1"><a class="header-anchor" href="#常用数据" aria-hidden="true">#</a> 常用数据：</h4><ul><li>pageNum：当前页的页码</li><li>pageSize：每页显示的条数</li><li>size：当前页显示的真实条数</li><li>total：总记录数</li><li>pages：总页数</li><li>prePage：上一页的页码</li><li>nextPage：下一页的页码</li><li>isFirstPage/isLastPage：是否为第一页/最后一页</li><li>hasPreviousPage/hasNextPage：是否存在上一页/下一页</li><li>navigatePages：导航分页的页码数</li><li>navigatepageNums：导航分页的页码，[1,2,3,4,5]</li></ul>`,25),o=[e];function c(l,i){return s(),a("div",null,o)}const k=n(t,[["render",c],["__file","40-1678693681542.html.vue"]]);export{k as default};