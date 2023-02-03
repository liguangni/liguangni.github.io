import{_ as s,V as n,W as i,X as a,Z as e,a0 as t}from"./framework-46cd12e0.js";const d={},r=e("ul",null,[e("li",null,[e("a",{href:"#%E6%AD%A5%E9%AA%A4"},"步骤")]),e("li",null,[e("a",{href:"#%E5%A5%BD%E5%A4%84"},"好处")]),e("li",null,[e("a",{href:"#%E5%88%AB%E5%90%8D"},"别名")])],-1),o=t(`<h2 id="步骤" tabindex="-1"><a class="header-anchor" href="#步骤" aria-hidden="true">#</a> 步骤</h2><p>我们可以看到远程仓库中还有一个 SSH 的地址，因此我们也可以使用 SSH 实现免密码登录！</p><p>进入 C:\\Users\\Administrator.ssh 目录生成公钥</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>ssh-keygen <span class="token parameter variable">-t</span> rsa
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>执行后会生成两个文件</p><p>复制 <code>id_rsa.pub</code> 文件内容</p><p>Gitee：设置 -&gt;SSH公钥</p><p>GitHub：点击用户头像→Settings→SSH and GPG keys</p><p>这俩平台 ssh 可设置同一个</p><h2 id="好处" tabindex="-1"><a class="header-anchor" href="#好处" aria-hidden="true">#</a> 好处</h2><p>GitHub 服务器在国外，我们用 https 对仓库进行拉取、提交有时会链接不上，导致失败。</p><figure><img src="https://gcore.jsdelivr.net/gh/oddfar/static/img/20210520131856.png" alt="image-20210520131847003" tabindex="0" loading="lazy"><figcaption>image-20210520131847003</figcaption></figure><p>这时我们可以用 ssh 对项目就行管理</p><p>以 Gitee 为例：</p><figure><img src="https://gcore.jsdelivr.net/gh/oddfar/static/img/20210520132022.png" alt="image-20210520132020687" tabindex="0" loading="lazy"><figcaption>image-20210520132020687</figcaption></figure><h2 id="别名" tabindex="-1"><a class="header-anchor" href="#别名" aria-hidden="true">#</a> 别名</h2><p>对于用 https 已经克隆在本地的仓库，我们可以加个“别名”来进行 SSH 链接</p><p><strong>1）基本语法</strong></p><p><code>git remote -v </code> 查看当前所有远程地址别名</p><p><code>git remote add</code> 别名 远程地址</p><p><strong>2）案例</strong></p><p>我们提交到远程仓库的指令是：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> push 远程仓库地址 分支
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这个地址可以是 https 也可以是 ssh</p><p>但由于地址太长了，可以用“别名”代替地址！</p><p>添加别名：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> remote <span class="token function">add</span> <span class="token function">ssh</span> git@github.com:oddfar/docs.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>推送到远程仓库：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> push <span class="token function">ssh</span> master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr><p>我们 clone 项目，默认有个“别名” <code>origin</code> 指向我们 clone 时的远程仓库地址（https或ssh...）</p>`,31);function c(p,l){return n(),i("div",null,[a(" START doctoc generated TOC please keep comment here to allow auto update "),a(" DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE "),r,a(" END doctoc generated TOC please keep comment here to allow auto update "),o])}const g=s(d,[["render",c],["__file","index.html.vue"]]);export{g as default};
