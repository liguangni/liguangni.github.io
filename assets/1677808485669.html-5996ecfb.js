import{_ as n,r as s,o as d,c as r,d as a,e,b as t,f as l}from"./app-765121fc.js";const c={},o=a("h2",{id:"下载nodejs安装包",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#下载nodejs安装包","aria-hidden":"true"},"#"),e(" 下载NodeJS安装包")],-1),g={href:"https://nodejs.org/en/",target:"_blank",rel:"noopener noreferrer"},p=a("br",null,null,-1),u=a("br",null,null,-1),m=a("img",{src:"https://jihulab.com/byzh123/images/-/raw/images/pictures/2023/03/3_10_43_30_0fe2329681f04ef6b56e2dc8e34ea968.png",alt:"image.png",loading:"lazy"},null,-1),h=l(`<h2 id="安装nodejs" tabindex="-1"><a class="header-anchor" href="#安装nodejs" aria-hidden="true">#</a> 安装NodeJS</h2><ul><li>双击下载msi文件，点击下一步</li></ul><figure><img src="https://jihulab.com/byzh123/images/-/raw/images/pictures/2023/03/3_10_43_35_fc5e5c72f109447db4789cd73f80374e.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure><ul><li>同意协议文件</li></ul><figure><img src="https://jihulab.com/byzh123/images/-/raw/images/pictures/2023/03/3_10_38_51_e7b99e240d994467ac1134765350cb32.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure><ul><li>选择安装路径</li></ul><figure><img src="https://jihulab.com/byzh123/images/-/raw/images/pictures/2023/03/3_10_38_51_70a667854ab64161b2809eea66f1abb2.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure><ul><li>选择需要安装的模块</li></ul><figure><img src="https://jihulab.com/byzh123/images/-/raw/images/pictures/2023/03/3_10_43_43_7de7dadbd78d441585c0247e7b416820.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure><ul><li>点击下一步,直至点击&quot;安装&quot;按钮，等待NodeJS安装完成</li></ul><figure><img src="https://jihulab.com/byzh123/images/-/raw/images/pictures/2023/03/3_10_43_48_70d13cadfc8a42919287674a4ebb83ce.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure><figure><img src="https://jihulab.com/byzh123/images/-/raw/images/pictures/2023/03/3_10_38_51_60a961cf900848788874e63f62aa47a4.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure><h2 id="验证安装" tabindex="-1"><a class="header-anchor" href="#验证安装" aria-hidden="true">#</a> 验证安装</h2><p>打开命令行界面，依次输入命令，查看NodeJS是否安装成功</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code># 查看环境变量配置信息
echo <span class="token operator">%</span><span class="token constant">PATH</span><span class="token operator">%</span>
# 查看NodeJS版本信息
node <span class="token operator">-</span>v
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://jihulab.com/byzh123/images/-/raw/images/pictures/2023/03/3_10_43_54_f7a0d7cad94a4631b67b1f7272b83897.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure><h2 id="修改模块目录" tabindex="-1"><a class="header-anchor" href="#修改模块目录" aria-hidden="true">#</a> 修改模块目录</h2><p>由于NodeJS安装时，会默认在用户文件夹下的AppData/Roaming文件夹下创建两个目录: npm 和 npm-cache(没见到npm-cache是因为没有用过，使用后就会生成缓存目录了)<br> 为了方便管理，我们可以修改为自定义的文件夹。</p><h3 id="创建目标文件夹" tabindex="-1"><a class="header-anchor" href="#创建目标文件夹" aria-hidden="true">#</a> 创建目标文件夹</h3><p>现在NodeJS安装目录下新建两个子目录:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mkdir node_cache
mkdir node_global
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://jihulab.com/byzh123/images/-/raw/images/pictures/2023/03/3_10_43_59_a6a30c78036143b29b890335069ed80e.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure><h3 id="执行命令修改" tabindex="-1"><a class="header-anchor" href="#执行命令修改" aria-hidden="true">#</a> 执行命令修改</h3><p>依次执行如下命令，更改目标文件夹配置，注意修改为自己的路径</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm config set prefix &quot;C:\\APP\\nodejs\\node_global&quot;
npm config set cache &quot;C:\\APP\\nodejs\\node_cache&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://jihulab.com/byzh123/images/-/raw/images/pictures/2023/03/3_10_44_3_07dcbf4362514d459a8dcb69f117b043.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure><h3 id="检查修改" tabindex="-1"><a class="header-anchor" href="#检查修改" aria-hidden="true">#</a> 检查修改</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>npm list <span class="token operator">-</span>global
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>通过上述命令检查修改是否生效</p><figure><img src="https://jihulab.com/byzh123/images/-/raw/images/pictures/2023/03/3_10_44_8_8dc45ae75946453ca9f4b30c4590e0f7.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure><h2 id="配置自定义镜像" tabindex="-1"><a class="header-anchor" href="#配置自定义镜像" aria-hidden="true">#</a> 配置自定义镜像</h2><h3 id="配置自定义镜像-1" tabindex="-1"><a class="header-anchor" href="#配置自定义镜像-1" aria-hidden="true">#</a> 配置自定义镜像</h3><p>为了提升速度，可以为NodeJS配置自定义的镜像，命令如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> config <span class="token builtin class-name">set</span> <span class="token assign-left variable">registry</span><span class="token operator">=</span>http://registry.npm.taobao.org

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="检查配置信息" tabindex="-1"><a class="header-anchor" href="#检查配置信息" aria-hidden="true">#</a> 检查配置信息</h3><p>配置完成后，输入如下命令，我们检查所有的配置信息</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm config list
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://jihulab.com/byzh123/images/-/raw/images/pictures/2023/03/3_10_38_52_28e671df23c8465c882f67496a92e186.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure><h3 id="查看镜像地址配置" tabindex="-1"><a class="header-anchor" href="#查看镜像地址配置" aria-hidden="true">#</a> 查看镜像地址配置</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm config get registry
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="重新安装npm" tabindex="-1"><a class="header-anchor" href="#重新安装npm" aria-hidden="true">#</a> 重新安装NPM</h2><h3 id="重新执行命令安装npm" tabindex="-1"><a class="header-anchor" href="#重新执行命令安装npm" aria-hidden="true">#</a> 重新执行命令安装npm</h3><p>为了避免尝试全局安装软件包时看到EACCES错误等权限问题，要使用节点版本管理器重新安装npm。<br> 以管理员身份运行如下命令:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>npm install npm <span class="token operator">-</span>g

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://jihulab.com/byzh123/images/-/raw/images/pictures/2023/03/3_10_38_52_f8b54b2722094f7f80e09400efeec782.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure><h3 id="配置环境变量" tabindex="-1"><a class="header-anchor" href="#配置环境变量" aria-hidden="true">#</a> 配置环境变量</h3><h4 id="设置node-path" tabindex="-1"><a class="header-anchor" href="#设置node-path" aria-hidden="true">#</a> 设置NODE_PATH</h4><p>由于默认的模块C:\\APP\\nodejs\\node_modules 目录已经变为<br> C:\\APP\\nodejs\\node_global\\node_modules 目录，如果直接运行npm install等命令会报错的。<br> 所以需要增加环境变量NODE_PATH 内容是：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>C:\\APP\\nodejs\\node_global\\node_modules
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://jihulab.com/byzh123/images/-/raw/images/pictures/2023/03/3_10_38_52_ffe911705e65461ca7755cddead08388.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure><h4 id="设置path" tabindex="-1"><a class="header-anchor" href="#设置path" aria-hidden="true">#</a> 设置PATH</h4><p>添加用户变量中 PATH 的值：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>C:\\APP\\nodejs\\node_global
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>附:</p><blockquote><p>删除淘宝镜像</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>npm config <span class="token keyword">delete</span> registry
npm config <span class="token keyword">delete</span> disturl
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>CNMP</p></blockquote><p>大家通过cnpm来使用淘宝镜像：<br> 重新安装一个cnpm，可以轻松实现镜像的自由选择<br> 以后想用国内镜像就用cnpm，国外镜像就用npm</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> cnpm <span class="token parameter variable">--registry</span><span class="token operator">=</span>https://registry.npm.taobao.org

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container warning"><p class="hint-container-title">注意:</p><p>cnpm 经常会有问题，所以在很多地方不推荐使用</p></div>`,60);function b(f,v){const i=s("ExternalLinkIcon");return d(),r("div",null,[o,a("p",null,[e("下载地址："),a("a",g,[e("https://nodejs.org/en/"),t(i)]),e("，选择对应的版本下载即可。"),p,e(" 本例以16.13.1 LTS长期服务版本为例进行安装讲解。"),u,m]),h])}const x=n(c,[["render",b],["__file","1677808485669.html.vue"]]);export{x as default};