<?php
$pageTitle = 'Template File';
$pageDescription = '';
$currentPage = 'home';

include_once('snippets/head.php');
?>

<div class="page-wrap">
	<header class="page-header" id="pageHeader" role="banner">
		<div class="wrap clearfix">
			<div class="page-header__inner clearfix">
				<a href="index.php" class="logo">
					<i class="icon--logo"></i>
				</a>
				<button class="button--primary toggle-main-nav" id="toggleMainNav">Menu</button>
			</div> <!-- .page-header__inner -->

			<nav class="main-nav" role="navigation">
				<ul class="main-nav__list ls-none">
					<li class="main-nav__item">
						<a href="" class="main-nav__link">Services</a>
					</li>
					<li class="main-nav__item">
						<a href="" class="main-nav__link">Work</a>
					</li>
					<li class="main-nav__item">
						<a href="" class="main-nav__link">About</a>
					</li>
					<li class="main-nav__item">
						<a href="news.php" class="main-nav__link">Blog</a>
					</li>
					<li class="main-nav__item">
						<a href="" class="main-nav__link">Contact</a>
					</li>
				</ul>
			</nav>
		</div> <!-- .wrap--large -->
	</header>

	<main class="main-content">
		<div class="section-padding--tb section-padding--lr">
			<div class="wrap">
				<div class="wrap__inner">
					<h1>Components</h1>
					<ul>
						<li><a href="components/nav.php">Nav</a></li>
						<li><a href="components/footer.php">Footer</a></li>
						<li><a href="components/article.php">Article</a></li>
						<li><a href="components/author.php">Author</a></li>
						<li><a href="components/news.php">News</a></li>
					</ul>
				</div> <!-- .wrap__inner -->
			</div> <!-- .wrap -->
		</div> <!-- .section-padding -->
	</main>
</div> <!-- .page-wrap -->

<?php 
include_once('snippets/foot.php'); 
?>