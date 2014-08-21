<?php 
include_once('snippets/head.php');
include_once('snippets/nav.php'); 
?>

<header class="sg-page-header section-padding--lr">
	<h1 class="sg-page-header__heading mega">Modules</h1>
</header>

<main class="main-content">
	<div class="section-padding--lr">
		<section class="section-padding--tb">
			<header class="sg-section__header">
				<h1 class="sg-section__heading alpha">Navigation</h1>
				<button class="sg-section__button button button--primary">Code</button>
			</header>
			<?php include_once('modules/nav.php'); ?>
		</section>

		<section class="section-padding--tb">
			<header class="sg-section__header">
				<h1 class="sg-section__heading alpha">Footer</h1>
				<button class="sg-section__button button button--primary">Code</button>
			</header>
			<?php include_once('modules/footer.php'); ?>
		</section>

		<section class="section-padding--tb">
			<header class="sg-section__header">
				<h1 class="sg-section__heading alpha">Article</h1>
				<button class="sg-section__button button button--primary">Code</button>
			</header>
			<?php include_once('modules/article.php'); ?>
		</section>

		<!--<section class="section-padding--tb">
			<h1 class="sg-section__heading beta">
				<span class="sg-section__heading__inner">Article</span>
			</h1>
			<?php //include_once('modules/article.php'); ?>
		</section>-->
	</div>

	<!--<ul class="sg-main-content__list">
		<li><a href="modules/article.php">Article</a></li>
		<li><a href="modules/author.php">Author</a></li>
		<li><a href="modules/footer.php">Footer</a></li>
		<li><a href="modules/nav.php">Sticky Nav</a></li>
		<li><a href="modules/news.php">News</a></li>
		<li><a href="modules/push-nav.php">Push nav</a></li>
		<li><a href="modules/sidebar.php">Sticky Sidebar</a></li>
		<li><a href="modules/toggle.php">Toggle</a></li>
	</ul>-->
</main>

<?php include_once('snippets/foot.php'); ?>