## xss
XSS 全称是 Cross Site Scripting，为了与“CSS”区分开来，故简称 XSS，翻译过来就是“跨站脚本”。XSS 攻击是指黑客往 HTML 文件中或者 DOM 中注入恶意脚本，从而在用户浏览页面时利用注入的恶意脚本对用户实施攻击的一种手段。

当页面被注入了恶意 JavaScript 脚本时，浏览器无法区分这些脚本是被恶意注入的还是正常的页面内容，所以恶意注入 JavaScript 脚本也拥有所有的脚本权限。

如果页面被注入了恶意 JavaScript 脚本，恶意脚本都能做哪些事情:
- **可以窃取 Cookie 信息**。恶意 JavaScript 可以通过“document.cookie”获取 Cookie 信息，然后通过 XMLHttpRequest 或者 Fetch 加上 CORS 功能将数据发送给恶意服务器；恶意服务器拿到用户的 Cookie 信息之后，就可以在其他电脑上模拟用户的登录，然后进行转账等操作。
- **可以监听用户行为**。恶意 JavaScript 可以使用“addEventListener”接口来监听键盘事件，比如可以获取用户输入的信用卡等信息，将其发送到恶意服务器。黑客掌握了这些信息之后，又可以做很多违法的事情。
- **可以通过修改 DOM 伪造**假的登录窗口，用来欺骗用户输入用户名和密码等信息。
- 还可以在页面内**生成浮窗广告**，这些广告会严重地影响用户体验。

xss攻击方式：
- 存储型 XSS 攻击
- 反射型 XSS 攻击
- 基于 DOM 的 XSS 攻击

xss攻击的防范：
> 无论是何种类型的 XSS 攻击，它们都有一个共同点，那就是首先往浏览器中注入恶意脚本，然后再通过恶意脚本将用户信息发送至黑客部署的恶意服务器上。
- 服务器对输入脚本进行过滤或转码
- 充分利用 CSP
    - CSP 有如下几个功能
    - 限制加载其他域下的资源文件，这样即使黑客插入了一个 JavaScript 文件，这个 JavaScript 文件也是无法被加载的；
    - 禁止向第三方域提交数据，这样用户数据也不会外泄；
    - 禁止执行内联脚本和未授权的脚本；
    - 还提供了上报机制，这样可以帮助我们尽快发现有哪些 XSS 攻击，以便尽快修复问题。
- 使用 HttpOnly 属性
    - 由于很多 XSS 攻击都是来盗用 Cookie 的，因此还可以通过使用 HttpOnly 属性来保护我们 Cookie 的安全。
    - 由于 JavaScript 无法读取设置了 HttpOnly 的 Cookie 数据，所以即使页面被注入了恶意 JavaScript 脚本，也是无法获取到设置了 HttpOnly 的数据。因此一些比较重要的数据我们建议设置 HttpOnly 标志。
- 我们还可以通过**添加验证码**防止脚本冒充用户提交危险操作。而对于一些不受信任的输入，还可以**限制其输入长度**，这样可以增大 XSS 攻击的难度。

## csrf
CSRF 英文全称是 Cross-site request forgery，所以又称为“跨站请求伪造”，是指黑客引诱用户打开黑客的网站，在黑客的网站中，利用用户的登录状态发起的跨站请求。简单来讲，CSRF 攻击就是黑客利用了用户的登录状态，并通过第三方的站点来做一些坏事。

和 XSS 不同的是，CSRF 攻击不需要将恶意代码注入用户的页面，仅仅是利用服务器的漏洞和用户的登录状态来实施攻击。

如何防止 CSRF 攻击
发起 CSRF 攻击的三个必要条件：
- 目标站点一定要有 CSRF 漏洞；
- 用户要登录过目标站点，并且在浏览器上保持有该站点的登录状态；
- 需要用户打开一个第三方站点，可以是黑客的站点，也可以是一些论坛。

1. 充分利用好 Cookie 的 SameSite 属性
- SameSite 选项通常有 Strict、Lax 和 None 三个值。
    - Strict 最为严格。如果 SameSite 的值是 Strict，那么浏览器会完全禁止第三方 Cookie。简言之，如果你从极客时间的页面中访问 InfoQ 的资源，而 InfoQ 的某些 Cookie 设置了 SameSite = Strict 的话，那么这些 Cookie 是不会被发送到 InfoQ 的服务器上的。只有你从 InfoQ 的站点去请求 InfoQ 的资源时，才会带上这些 Cookie。
    - Lax 相对宽松一点。在跨站点的情况下，从第三方站点的链接打开和从第三方站点提交 Get 方式的表单这两种方式都会携带 Cookie。但如果在第三方站点中使用 Post 方法，或者通过 img、iframe 等标签加载的 URL，这些场景都不会携带 Cookie。
    - 而如果使用 None 的话，在任何情况下都会发送 Cookie 数据。

2. 验证请求的来源站点
**在服务器端验证请求来源的站点**。由于 CSRF 攻击大多来自于第三方站点，因此服务器可以禁止来自第三方站点的请求。那么该怎么判断请求是否来自第三方站点呢？
HTTP 请求头中的 Referer 和 Origin 属性
- Referer 是 HTTP 请求头中的一个字段，记录了该 HTTP 请求的来源地址
- 在服务器端验证请求头中的 Referer 并不是太可靠，因此标准委员会又制定了 Origin 属性，在一些重要的场合，比如通过 XMLHttpRequest、Fecth 发起跨站请求或者通过 Post 方法发送请求时，都会带上 Origin 属性
- **Origin 属性只包含了域名信息，并没有包含具体的 URL 路径，这是 Origin 和 Referer 的一个主要区别。**在这里需要补充一点，Origin 的值之所以不包含详细路径信息，是有些站点因为安全考虑，不想把源站点的详细路径暴露给服务器。
- 服务器的策略是优先判断 Origin，如果请求头中没有包含 Origin 属性，再根据实际情况判断是否使用 Referer 值。

3. CSRF Token
服务器先生成一个 CSRF Token，在浏览器端如果要发起转账的请求，那么需要带上页面中的 CSRF Token，然后服务器会验证该 Token 是否合法。


> 参考：
>
> [跨站脚本攻击（XSS）：为什么Cookie中有HttpOnly属性？](https://time.geekbang.org/column/article/154110)
>
> [CSRF攻击：陌生链接不要随便点](https://time.geekbang.org/column/article/152807)