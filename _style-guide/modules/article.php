<?php 
include_once('../snippets/head.php');
include_once('../snippets/nav.php'); 
?>

<div class="section-padding--tb section-padding--lr">
	<div class="wrap">
		<main class="main-content">
			<article class="article" itemscope itemtype="http://schema.org/Article">
				<header class="article__header">
					<h1 class="article__heading tera" itemprop="name">Optimising for <a href="">60fps</a> everywhere</h1>
					<ul class="article__list--meta ls-none">
						<li class="article__item--meta" itemprop="author">
							Rob Simpson
						</li>
						<li class="article__item--meta">
							<time datetime="2014-05-20T00:00:00+00:00" pubdate="pubdate">20th</time>
							<time datetime="2014-05-20T00:00:00+00:00" pubdate="pubdate">May</time>
							<time datetime="2014-05-20T00:00:00+00:00" pubdate="pubdate">2014</time>
							<meta itemprop="dateCreated" content="2014-05-20">
						</li>
					</ul>
				</header>

				<div class="wrap__inner" itemprop="articleBody">
					<p class="intro">With the latest update to GoSquared we set ourselves the target of achieving a smooth 60 frames per second for all the core UI and animation, across all devices.</p>
					<p>There is no silver bullet in the matter of making web pages and web apps render efficiently — instead the best approach is to understand the different things that can cause a page to render slowly, and optimise them in turn, following some basic rules and best practices.</p>

					<h2>What actually happens in the browser?</h2>
					<p>Before understanding how to optimise web sites and applications for efficient rendering, it’s important to understand what is actually going on in the browser between the code you write and the pixels being drawn to screen. There are six different tasks a browser performs to accomplish all this:</p>
					<ul>
						<li>downloading and parsing HTML, CSS and JavaScript</li>
						<li>evaluating JavaScript</li>
						<li>calculating styles for elements</li>
						<li>laying out elements on the page</li>
						<li>painting the actual pixels of elements</li>
						<li>compositing layers to the screen</li>
					</ul>
					<p>This post is only really focussing on the aspects related to achieving smooth animations without visual delay. I won’t focus on the parts about downloading and parsing assets.</p>

					<h2>Only 16ms per frame</h2>
					<p>Before understanding how to optimise web sites and applications for efficient rendering, it’s important to understand what is actually going on in the browser between the code you write and the pixels being drawn to screen. There are six different tasks a browser performs to accomplish all this:</p>
					<ol>
						<li>downloading and parsing HTML, CSS and JavaScript</li>
						<li>evaluating JavaScript</li>
						<li>calculating styles for elements</li>
						<li>laying out elements on the page</li>
						<li>painting the actual pixels of elements</li>
						<li>compositing layers to the screen</li>
					</ol>
					<p>This post is only really focussing on the aspects related to achieving smooth animations without visual delay. I won’t focus on the parts about downloading and parsing assets.</p>
				</div> <!-- .wrap__inner -->

				<figure class="wrap__image">
					<picture>
						<source srcset="http://placehold.it/1200x800, http://placehold.it/1800x1200 2x" media="(min-width: 900px)">
						<source srcset="http://placehold.it/900x600, http://placehold.it/1350x900 2x" media="(min-width: 450px)">
						<img src="http://placehold.it/450x300" srcset="http://placehold.it/675x450 2x" alt="This is a generated image">
					</picture>
					<figcaption><span class="small-caps">FIG. 1</span> - This is a generated image.</figcaption>
				</figure>

				<div class="wrap__inner">
					<p>What is happening here is that for every iteration of the loop, the browser has to make sure that all queued changes are applied in order to calculate the value of <code>someOtherElement.offsetWidth</code>, and then apply the updated <code>width</code> style to the next element in the array. This updated width attribute will then <em>invalidate</em> the <code>offsetWidth</code> property on <code>someOtherElement</code>, meaning that for the next iteration the browser will have to perform more expensive operations in order to calculate this value.</p>
					<figure class="wrap__image--alt">
						<picture>
							<img src="http://placehold.it/450x300" srcset="http://placehold.it/675x450 2x" alt="This is a generated image">
						</picture>
						<figcaption><span class="small-caps">FIG. 2</span> - This is a generated image.</figcaption>
					</figure>
					<p>What is happening here is that for every iteration of the loop, the browser has to make sure that all queued changes are applied in order to calculate the value of <code>someOtherElement.offsetWidth</code>, and then apply the updated <code>width</code> style to the next element in the array. This updated width attribute will then <em>invalidate</em> the <code>offsetWidth</code> property on <code>someOtherElement</code>, meaning that for the next iteration the browser will have to perform more expensive operations in order to calculate this value. What is happening here is that for every iteration of the loop, the browser has to make sure that all queued changes are applied in order to calculate the value of <code>someOtherElement.offsetWidth</code>, and then apply the updated <code>width</code> style to the next element in the array. This updated width attribute will then <em>invalidate</em> the <code>offsetWidth</code> property on <code>someOtherElement</code>, meaning that for the next iteration the browser will have to perform more expensive operations in order to calculate this value.</p>
				</div> <!-- .wrap__inner -->
			</article>
		</main>
	</div> <!-- .wrap -->
</div> <!-- .section-padding -->

<?php include_once('../snippets/foot.php'); ?>
