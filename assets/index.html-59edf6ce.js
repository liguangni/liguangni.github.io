import{_ as n,V as a,W as s,a0 as t}from"./framework-46cd12e0.js";const p={},o=t(`<h2 id="演示代码" tabindex="-1"><a class="header-anchor" href="#演示代码" aria-hidden="true">#</a> 演示代码</h2><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>收集表单数据<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/javascript<span class="token punctuation">&quot;</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>../js/vue.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>root<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name">@submit.prevent</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>demo<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
				账号：<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-model.trim</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>userInfo.account<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">/&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">/&gt;</span></span>
				密码：<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>password<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>userInfo.password<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">/&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">/&gt;</span></span>
				年龄：<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>number<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-model.number</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>userInfo.age<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">/&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">/&gt;</span></span>
				性别：
				男<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>radio<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>sex<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>userInfo.sex<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>male<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
				女<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>radio<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>sex<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>userInfo.sex<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>female<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">/&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">/&gt;</span></span>
				爱好：
				学习<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>checkbox<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>userInfo.hobby<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>study<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
				打游戏<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>checkbox<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>userInfo.hobby<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>game<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
				吃饭<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>checkbox<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>userInfo.hobby<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>eat<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">/&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">/&gt;</span></span>
				所属校区：
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>userInfo.city<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
					<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>请选择校区<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>option</span><span class="token punctuation">&gt;</span></span>
					<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>beijing<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>北京<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>option</span><span class="token punctuation">&gt;</span></span>
					<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>shanghai<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>上海<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>option</span><span class="token punctuation">&gt;</span></span>
					<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>shenzhen<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>深圳<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>option</span><span class="token punctuation">&gt;</span></span>
					<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>wuhan<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>武汉<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>option</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">/&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">/&gt;</span></span>
				其他信息：
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>textarea</span> <span class="token attr-name">v-model.lazy</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>userInfo.other<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>textarea</span><span class="token punctuation">&gt;</span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">/&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">/&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>checkbox<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>userInfo.agree<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>阅读并接受<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.atguigu.com<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>《用户协议》<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span><span class="token punctuation">&gt;</span></span>提交<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>

	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/javascript<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
		Vue<span class="token punctuation">.</span>config<span class="token punctuation">.</span>productionTip <span class="token operator">=</span> <span class="token boolean">false</span>

		<span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
			<span class="token literal-property property">el</span><span class="token operator">:</span><span class="token string">&#39;#root&#39;</span><span class="token punctuation">,</span>
			<span class="token literal-property property">data</span><span class="token operator">:</span><span class="token punctuation">{</span>
				<span class="token literal-property property">userInfo</span><span class="token operator">:</span><span class="token punctuation">{</span>
					<span class="token literal-property property">account</span><span class="token operator">:</span><span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
					<span class="token literal-property property">password</span><span class="token operator">:</span><span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
					<span class="token literal-property property">age</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span>
					<span class="token literal-property property">sex</span><span class="token operator">:</span><span class="token string">&#39;female&#39;</span><span class="token punctuation">,</span>
					<span class="token literal-property property">hobby</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
					<span class="token literal-property property">city</span><span class="token operator">:</span><span class="token string">&#39;beijing&#39;</span><span class="token punctuation">,</span>
					<span class="token literal-property property">other</span><span class="token operator">:</span><span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
					<span class="token literal-property property">agree</span><span class="token operator">:</span><span class="token string">&#39;&#39;</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token function">demo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
					console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>userInfo<span class="token punctuation">)</span><span class="token punctuation">)</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span>
	</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><ol><li><p>若：<code>&lt;input type=&quot;text&quot;/&gt;</code>，则v-model收集的是value值，用户输入的内容就是value值</p></li><li><p>若：<code>&lt;input type=&quot;radio&quot;/&gt;</code>，则v-model收集的是value值，且要给标签配置value属性</p></li><li><p>若：<code>&lt;input type=&quot;checkbox&quot;/&gt;</code></p><ol><li><p>没有配置value属性，那么收集的是checked属性（勾选 or 未勾选，是布尔值）</p></li><li><p>配置了value属性：</p><ul><li><p>v-model的初始值是非数组，那么收集的就是checked（勾选 or 未勾选，是布尔值）</p></li><li><p>v-model的初始值是数组，那么收集的就是value组成的数组</p></li></ul></li></ol></li></ol><h2 id="v-model的三个修饰符" tabindex="-1"><a class="header-anchor" href="#v-model的三个修饰符" aria-hidden="true">#</a> v-model的三个修饰符：</h2><p>lazy：失去焦点后再收集数据</p><p>number：输入字符串转为有效的数字</p><p>trim：输入首尾空格过滤</p>`,8),e=[o];function c(l,u){return a(),s("div",null,e)}const k=n(p,[["render",c],["__file","index.html.vue"]]);export{k as default};
