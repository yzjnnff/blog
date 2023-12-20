import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as r,d as e,f as i,a as t}from"./app-8b1f81e0.js";const a={},l=i(`<h2 id="tcp-ip-网络体系" tabindex="-1"><a class="header-anchor" href="#tcp-ip-网络体系" aria-hidden="true">#</a> TCP/IP 网络体系</h2><p>TCP/IP 体系结构分为四层，是事实上的国际标准，各层如下所示：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>--- 应用层 ---
--- 运输层 ---
--- 网络层 ---
--- 网络接口层 ---
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>应用层</strong>为用户提供应用功能，拥有不同的应用层协议，用来定义应用进程间的交互规则，以完成特定的网络应用，例如 HTTP（万维网）、SMTP（电子邮件）、DNS（域名查询）、FTP（文件传输） 等等；</li><li><strong>运输层</strong>负责为<strong>两台主机中的进程</strong>提供通信服务，其中的两个重要协议是 TCP 和 UDP： <ul><li>TCP 提供<strong>面向连接的、可靠的</strong>数据传输服务；</li><li>UDP 提供<strong>无连接的、不可靠的</strong>传输服务。</li></ul></li><li><strong>网络层</strong>中负责为两台主机提供通信服务，选择合适的路由将数据传递到目标主机，它的核心协议是 IP 协议；</li><li><strong>网络接口层</strong>并没有规定什么具体的内容，目的是可以互联全世界不同的网络接口。</li></ul><h2 id="举例-浏览器与服务器" tabindex="-1"><a class="header-anchor" href="#举例-浏览器与服务器" aria-hidden="true">#</a> 举例：浏览器与服务器</h2><p>客户端与服务器之间的基于网络的通信，实际上就是客户端浏览器进程（如 Chrome）和服务器中的服务器进程（如 Apache）之间的基于网络的通信。</p><p>应用层按 HTTP 协议的规定，构建一个 HTTP 请求报文，应用层将该报文交给运输层处理；</p>`,7),o=t("p",null,"运输层给 HTTP 报文添加一个 TCP 首部，该首部的作用主要是为了区分应用进程以及实现可靠传输，使之成为 TCP 报文段，然后将其交给网络层处理；",-1),d=t("p",null,"网络层给 TCP 报文段添加一个 IP 首部，使之成为 IP 数据报，该首部的作用是为了使 IP 数据报在互联网上选择合适的路由进行传输（被路由器转发），然后将其交给网络接口层处理；",-1),c=t("p",null,"网络接口层在 IP 数据报的前面加上 MAC 头部（作用是为了找到目标主机），并封装成数据帧（Data frame）发送到网络上。",-1);function P(u,T){return s(),r("div",null,[l,e(" TODO HTTP 报文内容 "),o,e(" TODO TCP 首部格式 "),d,c,e(" TODO 通信图 ")])}const _=n(a,[["render",P],["__file","001-network-model.html.vue"]]);export{_ as default};
