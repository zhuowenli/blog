---
title: 响应式WEB设计
subline: Responsive WEB Design
categories: frontend
tags: [design, responsive]
img: 7
---

这是<a href="http://alistapart.com/author/emarcotte">Ethan Marcotte</a>于2010年在<a href="http://alistapart.com/">A List Part</a>上发布的一篇关于响应式的<a href="http://alistapart.com/article/responsive-web-design">文章</a>。文章介绍了响应式互联网设计作为一种不可逆转的技术和设计潮流的背景、基本原理和发展趋势。并首次提出了响应式布局这个沿用至今的概念。

<figure class="quote" id="figure1">
 <blockquote>
  我们在印刷中获得的控制力事实上是一种缺陷，不应再继承到 Web 设计中。我们知道，Web 没有这样的局限，因此应基于弹性而设计，在这之前我们需要“萬物作而不辭”。
 </blockquote>
 <figcaption>
  —John Allsopp, “<a href="{{ site.BASE_PATH }}/a-dao-of-web-design.html">WEB 设计之道</a>”
 </figcaption>
</figure>

<p>
 英国建筑设计师 Christopher Wren 曾打趣说：他选择的领域“意在永恒” —— 多么引人入胜！我们的互联网业则常让人感觉“意在下周”。建筑是一门学科，它有web所没有的持久性。
</p>
<p>
 基础决定平面，平面决定构架，构架又塑造立面，建筑设计流程的每一个进阶都有着越来越强的不可变性。创作上的每一个决定都造就着一个实实在在的空间，使人们得以在里面居住几十年，甚至几个世纪。
</p>
<p>
 然而，在互联网上，这是一个完全不一样的问题。我们的网页的设计是短暂的，经常被修改或者在一两年内就被替换。当我们设计项目时，需要和太多无形的需求进行协商——视窗的尺寸、屏幕的分辨率、用户的洗好、系统的自带字体，这些仅仅是其中的几个例子...我们需要逐渐的改变以适应用户的需求。而多年来，我们已经变成这方面的“专家”了。
</p>
<p>
 然而这一切也正在改变，改变的速度也许比我们愿意接受的要快。移动终端浏览量可望在三年到五年内超过PC端。三个主流视频游戏机有两个配备了浏览器（其中一个相当优良），还有形形色色的鼠标、键盘（正常或者T9）、操纵杆、触摸屏等等。总之，我们面临着更多的设备，输入模式，并且比以往更多的浏览器。
</p>
<p>
 近年来，我的客户中越来越多的公司要求在他们的项目中加上一个独立的“iPhone网站”。我认为这是一个很有趣的想法：表面上它肯定了移动WebKit作为浏览器引擎的高质量，并且反映了对固定电脑终端的超越是个强大的商业趋势。但作为一名设计师，我感到是我们需要检讨自己为何经常依赖这样的要求来帮助我们把要解决的问题划分为小块。我们常用子域名来把移动终端对网站的要求与那个“非移动网站”划分开来。但下一步呢？再加一个“iPad网站”？再加一个“诺基亚N90”网站？我们真的可以继续为每一个新的用户终端定量身定做吗？我们应该如何适应我们的产品开发？
</p>

<h2>以弹性为基础</h2>

<p>让我们来看一个<a href="http://d.alistapart.com/responsive-web-design/ex/ex-site-flexible.html">栗子</a>。我建立了一个简单的杂志页面。它是基于两栏的<a href="http://alistapart.com/article/fluidgrids">流体网格</a>，加上若干弹性图片分布在页面中。作为一个非固定的布局的倡导者，认为这种布局因其不确定性而更能经受未来的考验。弹性设计不对浏览器的宽度作任何假设，因而能优雅地适应不论是水平式的还是竖直式的终端设备。</p>

<figure class="img">
 <a href="http://d.alistapart.com/responsive-web-design/ex/ex-site-flexible.html">
  <img src="http://d.alistapart.com/responsive-web-design/fig/f-img-default-wide.jpg" alt="">
 </a>
 <figcaption>
  大尺寸的图片会以超大尺寸显示。我们的这个设计布局尽管是弹性的，但对于分辨率和视图（Viewport）尺寸的变化不能很好地响应。
 </figcaption>
</figure>

<p>
 然而，无论是固定式还是非固定式布局，没有一种设计能够超越其原本所意图的媒体环境而天衣无缝地进行伸缩。在我们的例子中，布局非常适合于在浏览器窗口的大小，但是很不幸，在非常小的尺寸。当屏幕小于800×600像素时，左上角题标背后的插画边缘很快被裁去，导航部分的文字的分行变得很不雅观，而右下侧的图片则缩小到难以辨认的地步。而同样受到影响的不仅仅是低分辨率的一端，在宽屏显示器中图片则很快变成笨重的超大尺寸，令周围的文字内容不堪排挤。
</p>
<p>
 总之，我们的弹性设计在以普通电脑显示屏为出发点的环境下能够游刃有余，但超出这个范围之外优化程度就远远不够了。
</p>

<h2>向响应式发展</h2>

<p>“敏感建筑”是一个新的学科，正开始探讨实体空间应该如何对身处其间的人进行交互的问题。通过内嵌的感应装置和拉伸材料的组合，同时将气候控制系统与运动感应器结合还能够根据空间所容纳的人数多少来调节室温和环境光。某些公司已研制了“智能玻璃技术”，这种玻璃能够在室内人数达到一定密度的时候变为不透明以增加私密性。</p>

<p>Michael Fox 和 Miles Kemp 在他们的著作 <cite>Interactive Architecture</cite> 中描述这种更具适应性的做法是：“一种多次循环的系统，这个系统就是一次对话，一次持续而建设性的信息交流。”。我理解的重点在“持续而建设性的信息交流”上，因为这里有一个微妙而又强有力的区别：与其为特定的空间体验而创建不可变的空间。他们建议居民和建筑结构之间可以互相影响。</p>

<p>这是我们前进的方向。与其为越来越多不同的互联网设备量身定做一个个相互割裂的设计， 我们应该把这些设计需要当作同一个体验的不同层面来处理。我们的设计可以针对一个理想的视觉体验，而同时嵌入各种基于互联网标准的技术使其更有弹性，更能适应不同媒体的呈现。简言之，我们应该推行响应式互联网设计。但是，要怎么实现呢？</p>

<h2>使用媒体查询(media query)</h2>

<p>自从<code>CSS2.1</code>以来。我们的样式表逐渐从<a href="http://www.w3.org/TR/CSS21/media.html">媒体类型</a>中取得了一些终端设备的意识。如果你曾经写过一个<a href="http://alistapart.com/article/goingtoprint">打印样式表</a>，那你已经熟悉这个概念了：</p>

```html
<link rel="stylesheet" type="text/css" href="core.css" media="screen"/>
<link rel="stylesheet" type="text/css" href="print.css" media="print"/>
```

<p>为了能使设计的适用范围不仅局限于格式整齐的打印件，CSS的规范中包括了相当多的可适用媒体类别， 分别为各种特定的互联网终端设备所设计。但是，大多数浏览器和设备从未真正接受了W3C的规范，许多的媒体类型不完全被执行，或者完全忽略。</p>

<p>值得庆幸的是W3C在CSS3的规范中创建了媒体查询（"<a href="http://www.w3.org/TR/css3-mediaqueries/">media queries</a>")，用以在媒体类别的基础上加以改善。从而提高与不同媒体类型的兼容性。媒体查询不仅允许我们针对某些类别的设备，并且可以检查正在渲染工作中的设备的物理特性。例如，随着移动WebKit的普及，媒体查询可以用来指定iPhone，Android手机等等的样式表。具体方法是在<code>link</code>中加上这样一个<code>media</code>：</p>

```html
<link rel="stylesheet" type="text/css" media="screen and (max-device-width: 480px)" href="shetland.css"/>
```

<p>查询中包含两个组成部分：</p>
<ol>
 <li>媒体类型(<code>screen</code>), and</li>
 <li>括号中的查询内容，是指定设备最大宽度(<code>max-device-width</code>)，以及目标值是(<code>480px</code>)</li>
</ol>

<p>
 查询以简明的英语表明我们需要检验设备水平方向的最大分辨率（<code>max-device-width</code>）是否<code>480px</code>。如果检验通过——也就是说，如果设计确实是呈现在类似iPhone的小屏幕上——那么设备则载入指定的样式表<code>shetland.css</code>。否则，这个链接则被忽略。
</p>

<p>
 设计师们以往也试验过具有分辨率意识的布局，不过那些试验大多依赖于JavaScript驱动的方法，比如 Cameron Adams 的 <a href="http://www.themaninblue.com/experiment/ResolutionLayout/">Resolution layout</a>。然而媒体查询则明确地提供了<a href="http://www.w3.org/TR/css3-mediaqueries/#media1">一系列媒体属性</a>，不仅仅是屏幕分辨率而已，从而大大地扩展了查询的可能范围。并且，你还可以用一次查询同时检验多项属性的数值，用关键词and把多个查询内容连接在一起：
</p>

```html
<link rel="stylesheet" type="css" media="screen and (max-device-width: 480px) and (resolution: 163dpi)" href="shetland.css">
```

<p>
 除此之外，我们不仅能够把媒体查询放置在<code>link</code>之中，还可以用<code>@media</code>在CSS样式表内进行媒体查询：
</p>

```css
@media screen and (max-device-width: 480px){
 .column{
  float:none;
 }
}
```

<p>
 或者作为<code>@import</code>输入指令的一部分：
</p>

```css
@import url("shetland.css") screen and (max-device-width: 480px);
```

<p>
 以上的每一个例子，效果其实都是一样的：一旦设备通过媒体查询的检验，相关的CSS样式表即施加到源码上。媒体查询简言之就是条件注释（<a href="http://msdn.microsoft.com/en-us/library/ms537512(VS.85).aspx">conditional comments</a>）。不同的是我们并非针对某个浏览器的某个版本，而是随着设计布局逐渐超越其初始的理想分辨率，对产生的问题进行有意识的矫正罢了。
</p>

<h2>改变、响应和进阶</h2>

<p>来看看我们最初的设计的页面中的那些基本图片吧。在默认状态的布局下，相关的CSS是这样的：</p>

```css
.figure {
 float: left;
 margin: 0 3.317535545023696682% 1.5em 0;   /* 21px / 633px */
 width: 31.121642969984202211%;             /* 197px / 633px */
}
li#f-mycroft,li#f-winter {
 margin-right: 0;
}
```

<p>在这里我省略了一些字体上的定义而把焦点集中在布局上：每一个<code>.figure</code>类别的图片元素都定义在包含其在内的栏宽的三分之一左右，最右边的两个图片（<code>li#f-mycroft和li#f-winter</code>）的右侧外边距（<code>margin</code>）定为零。这个设置只要在viewport的大小与初始设计目标比较没有太大改变的情况下都能呈现得比较好。有了媒体查询，我们就可以作与分辨率相关的局部调整，使设计方案能更好地适应显示设备的变化。</p>

<p>
 首先，我们把视区在某一分辨率界限值（比如说<code>600px</code>）以下的页面作线性调整。所以在样式表的下方我们加上一段<code>@media</code>定义，如下：
</p>

```css
@media screen and (max-width: 600px) {
 .mast,.intro,.main,.footer {
  float: none;
  width: auto;
 }
}
```

<p>
 如果你在一个标准的现代台式电脑浏览器内打开我们更新了的<a href="http://www.alistapart.com/d/responsive-web-design/ex/ex-site-linearize.html">设计页面</a>，将视窗缩小到<code>600px</code>以下，媒体查询会取消页面主要元素的悬浮属性，并将其依照文件顺序竖向堆叠起来。这样，我们的设计的小型版就成型了，只是其中的图片仍旧不能智能地伸缩。如果我们引进另一个媒体查询，便能够做出相应的改变了：
</p>

```css
@media screen and (max-width: 400px) {
 .figure,li#f-mycroft {
  margin-right: 3.317535545023696682%;    /* 21px / 633px */
  width: 48.341232227488151658%;          /* 306px / 633px */
 }
 li#f-watson,li#f-moriarty {
  margin-right: 0;
 }
}
```

<figure class="img">
 <a href="http://www.alistapart.com/d/responsive-web-design/ex/ex-site-linearize.html">
  <img src="http://d.alistapart.com/responsive-web-design/fig/f-img-narrow.jpg" alt="">
 </a>
 <figcaption>
  我们的人像图片能够响应性地改变布局以更好地<a href="http://d.alistapart.com/responsive-web-design/ex/ex-site-mini.html">适应小屏幕的呈现</a>。
 </figcaption>
</figure>

<p>
 不用体意这里毫无规则的百分数，我们只是修改了早先的弹性网格以适应新的<a href="http://alistapart.com/article/fluidgrids">线性布局</a>。总之，这里我们在视区宽度小于400px的情况下把<a href="http://d.alistapart.com/responsive-web-design/ex/ex-site-mini.html">三栏式的布局变为双栏式</a>，从而使图片显得更为突出。
</p>

<p>
 事实上，我们也可以用同样的方法来处理宽屏的情况。在高分辨率下可以采用<a href="http://d.alistapart.com/responsive-web-design/ex/ex-site-larger.html">六个一排的方式</a>排列所有的图片：
</p>

```css
@media screen and (min-width: 1300px) {
 .figure,li#f-mycroft {
  margin-right: 3.317535545023696682%;    /* 21px / 633px */
  width: 13.902053712480252764%;          /* 88px / 633px */
 }
}
```

<p>这样我们的图片在分辨率的<a href="http://www.alistapart.com/d/responsive-web-design/ex/ex-site-linearize.html">高端和低端</a>都能够优雅地呈现，从而能随着视窗宽度和设备分辨率的改变优化页面布局。</p>

<figure class="img">
 <a href="http://www.alistapart.com/d/responsive-web-design/ex/ex-site-linearize.html">
  <img src="http://d.alistapart.com/responsive-web-design/fig/f-img-widescreen.jpg" alt="">
 </a>
 <figcaption>
  通过新的媒体查询定义一个较宽的最小宽度值，我们成功地将图片调整成横<a href="http://www.alistapart.com/d/responsive-web-design/ex/ex-site-linearize.html">排式布局</a>。
 </figcaption>
</figure>

<p>然而，这仅仅是个开端。利用嵌入CSS的媒体查询，可以改变的远远不止几个图片的位置，我们可以为每个分辨率区间选择性地引入<a href="http://d.alistapart.com/responsive-web-design/ex/ex-site-FINAL.html">不同的布局设计</a>，可以在宽屏模式下让导航部分更为突出，或者在小型屏幕中将导航移到题标之上。</p>

<figure class="img">
 <a href="http://d.alistapart.com/responsive-web-design/ex/ex-site-FINAL.html">
  <img src="http://d.alistapart.com/responsive-web-design/fig/f-nav-narrow.jpg" alt="">
 </a>
 <figcaption>
  通过响应式设计，我们不仅能够在小型设备中线形化地组织内容，还能够在<a href="http://d.alistapart.com/responsive-web-design/ex/ex-site-FINAL.html">一系列不同的显示设备</a>上将设计做到最优化。
 </figcaption>
</figure>

<p>
 其实响应式设计并不仅限于改变布局。通过媒体查询我们能够相当精确地对页面进行重构：包括在小屏幕上扩大链接的目标区，从而更好地遵循触摸屏的费茨定律（<a href="http://en.wikipedia.org/wiki/Fitts%27s_law">Fitts' Law</a>）；包括对某些元素有选择性地显示或隐藏，从而改善页面的导航功能；还包括设置<a href="http://d.alistapart.com/responsive-web-design/ex/ex-article.html">响应式排字法</a>，渐进地改变字体大小和行距，从而为显示设备提供最优化的阅读体验。
</p>

<h2>技术说明</h2>

<p>
 应当指出的是标准的现代浏览器对媒体查询的支持度是相对高的。台式电脑浏览器中例如Safari 3以上、Chrome、Firefox 3.5以上，以及Opera 7以上都自带媒体查询解析，近年的移动浏览器中Opera和WebKit也一样。当然，那些台式机浏览器的旧版本就无法支持媒体查询了。而微软尽管承诺了要在<a href="http://ie.microsoft.com/testdrive/HTML5/CSS3MediaQueries/">IE 9中支持媒体查询</a>，但目前为止Internet Explore仍没有出台自带的媒体查询功能。
</p>

<p>
 不过，对旧版浏览器的媒体查询支持有兴趣的，可以在JavaScript中找到一线希望：
</p>

<ol>
 <li>
  2007年的一个<a href="http://plugins.jquery.com/project/MediaQueries">jQuery插件</a>可以实现一些有限的媒体查询，只在单独链接中支持媒体属性里的<code>min-width</code>和<code>max-width</code>。
 </li>
 <li>
  近期推出的<a href="http://code.google.com/p/css3-mediaqueries-js/">css3-mediaqueries.js</a>代码库承诺了要为IE 5以上、Firefox 1以上以及Safari 2提供通过<code>@media</code>解析、测试和应用媒体查询的能力。尽管这一技术还比较稚嫩，但我个人认为它的功能颇为强大，有意关注它的进一步发展。
 </li>
</ol>

<p>
 当然有的人不愿意使用Javascript，也很可以理解，这就反而证明了以<a href="http://alistapart.com/article/fluidgrids">弹性网格</a>为基础的布局的重要性了，因为在无视媒体查询的设备和浏览器中这样的设计才能保证享有一定的灵活性。
</p>

<h2>未来之路</h2>

<p>
 流动网格、弹性图片和媒体查询是响应式互联网设计的三大技术成分，但是崭新的思路也是必不可少的。与其把同样的内容割裂成不同设备专属的体验，我们可以通过媒体查询，渐进增强式地将一个设计在不同的阅读环境中加以优化。这么说并不是要绝对否定在任何情况下使用针对特定设备的独立网站，比如当移动用户在你的网站上的商业目的相比固定电脑用户要单一得多的时候，为两种情况分别输送不同的内容可能是最好的方法。
</p>

<p>
 然而我们也不需要固守在那样的设计思路里。如今越来越需要我们的设计能够呈现在一系列多种多样的体验之中。响应式设计为我们指出了一条未来的路，是我们终于可以依照万物生灭的规律来进行设计了。
</p>

<h2>关于作者</h2>

<p>
 <a href="http://alistapart.com/author/emarcotte">Ethan Marcotte</a>，互联网设计师和开发者，深入关注完美的设计、优雅的代码，以及两者的相互关系。多年来伊森与包括圣丹斯电影节、斯坦福大学、纽约杂志和今日秀等客户合作愉快。他在<a href="http://twitter.com/beep">推特</a>上嘻笑怒骂，希望长大了能够成为势不可挡的<a href="http://unstoppablerobotninja.com/">机器忍者</a>。他最近出版的著作是《<cite><a href="http://www.abookapart.com/products/responsive-web-design">响应式互联网设计</a></cite>》。
</p>
