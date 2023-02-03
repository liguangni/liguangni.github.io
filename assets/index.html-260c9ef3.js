import{_ as i,V as l,W as o,X as a,Z as e,$ as n,Y as t,a0 as r,F as d}from"./framework-46cd12e0.js";const c={},p=e("ul",null,[e("li",null,[e("a",{href:"#%E5%88%A0%E9%99%A4%E6%89%80%E6%9C%89%E8%AE%B0%E5%BD%95"},"删除所有记录")]),e("li",null,[e("a",{href:"#%E5%88%A0%E9%99%A4%E4%B8%8A%E6%AC%A1%E8%AE%B0%E5%BD%95"},"删除上次记录")]),e("li",null,[e("a",{href:"#%E5%8F%82%E8%80%83%E8%B5%84%E6%96%99"},"参考资料")])],-1),m=r(`<h2 id="删除所有记录" tabindex="-1"><a class="header-anchor" href="#删除所有记录" aria-hidden="true">#</a> 删除所有记录</h2><p>不小心把密码或其他敏感信息提交到git，想清空所有commit信息记录，就像形成一个全新的仓库，且代码不变。</p><ol><li><p>切换到新的分支</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> checkout <span class="token parameter variable">--orphan</span> latest_branch
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>缓存所有文件（除了.gitignore中声名排除的）</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> <span class="token function">add</span> <span class="token parameter variable">-A</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>提交跟踪过的文件</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> commit <span class="token parameter variable">-am</span> <span class="token string">&quot;commit message&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>删除master分支</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> branch <span class="token parameter variable">-D</span> master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>重命名当前分支为master</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> branch <span class="token parameter variable">-m</span> master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>提交到远程master分支</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> push <span class="token parameter variable">-f</span> origin master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ol><p>以上是删除所有提交记录，那么如何修改内容覆盖上次记录呢？</p><h2 id="删除上次记录" tabindex="-1"><a class="header-anchor" href="#删除上次记录" aria-hidden="true">#</a> 删除上次记录</h2><p>如你只是想修改上次提交的代码，做一次更完美的commit，可以这样</p><p>（1）<code>git reset commitId</code>，(注：不要带--hard)到上个版本</p><p>（2）<code>git stash</code>，暂存修改</p><p>（3）<code>git push --force</code>, 强制push,远程的最新的一次commit被删除</p><p>（4）<code>git stash pop</code>，释放暂存的修改，开始修改代码</p><p>（5）<code>git add .</code> -&gt; <code>git commit -m &quot;massage&quot;</code> -&gt; <code>git push</code></p><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>`,12),u={href:"https://my.oschina.net/18y/blog/3064211",target:"_blank",rel:"noopener noreferrer"},h={href:"https://segmentfault.com/q/1010000002898735",target:"_blank",rel:"noopener noreferrer"};function g(b,v){const s=d("ExternalLinkIcon");return l(),o("div",null,[a(" START doctoc generated TOC please keep comment here to allow auto update "),a(" DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE "),p,a(" END doctoc generated TOC please keep comment here to allow auto update "),m,e("ul",null,[e("li",null,[e("a",u,[n("https://my.oschina.net/18y/blog/3064211"),t(s)])]),e("li",null,[e("a",h,[n("https://segmentfault.com/q/1010000002898735"),t(s)])])])])}const E=i(c,[["render",g],["__file","index.html.vue"]]);export{E as default};
