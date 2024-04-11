import{_ as s,c as i,o as a,aq as n}from"./chunks/framework.8ChWP1Gj.js";const u=JSON.parse('{"title":"Redis","description":"","frontmatter":{},"headers":[],"relativePath":"docs/server/3.md","filePath":"docs/server/3.md","lastUpdated":1712799105000}'),e={name:"docs/server/3.md"},l=n(`<h1 id="redis" tabindex="-1">Redis <a class="header-anchor" href="#redis" aria-label="Permalink to &quot;Redis&quot;">​</a></h1><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> apt</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> update</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 安装</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> apt</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> redis-server</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 检查是否安装成功</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> status</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> redis-server</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>打印下面内容说明安装成功</p><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">●</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> redis-server.service</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> -</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Advanced</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> key-value</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> store</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">     Loaded:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> loaded</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (/lib/systemd/system/redis-server.service; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">enabled</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">vendor</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> preset:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> enabled</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">     Active:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> active</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (running) since Tue 2023-12-19 21:17:03 CST; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">1min</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 49s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ago</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">       Docs:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> http://redis.io/documentation,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">             man:redis-server(1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">   Main</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> PID:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 175808</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (redis-server)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">     Status:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Ready to accept connections&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      Tasks:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (limit: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1988</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">     Memory:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 2.7M</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        CPU:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 196ms</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">     CGroup:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /system.slice/redis-server.service</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">             └─175808</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;/usr/bin/redis-server 127.0.0.1:6379&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="配置-redis" tabindex="-1">配置 Redis <a class="header-anchor" href="#配置-redis" aria-label="Permalink to &quot;配置 Redis&quot;">​</a></h2><p>编辑 <code>/etc/redis/redis.conf</code> 文件，将 <code>bind 127.0.0.1</code> 这一行，将其改为：</p><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">bind</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0.0.0.0</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>修改完成之后重启生效</p><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> restart</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> redis-server</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="测试连接" tabindex="-1">测试连接 <a class="header-anchor" href="#测试连接" aria-label="Permalink to &quot;测试连接&quot;">​</a></h2><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 启动 redis</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">redis-cli</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 测试</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ping</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>执行 <code>ping</code> 之后返回 <code>PONG</code> 则代表成功</p><h2 id="端口" tabindex="-1">端口 <a class="header-anchor" href="#端口" aria-label="Permalink to &quot;端口&quot;">​</a></h2><p>redis 默认端口号是 6379</p>`,15),t=[l];function p(h,k,r,d,F,o){return a(),i("div",null,t)}const g=s(e,[["render",p]]);export{u as __pageData,g as default};