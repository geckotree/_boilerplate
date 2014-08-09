<?php 
include_once('../snippets/head.php');
include_once('../snippets/nav.php'); 
?>

<header class="page-header" id="pageHeader" role="banner">
	<div class="wrap clearfix">
		<div class="page-header__inner clearfix">
			<a href="index.php" class="logo">
				<i class="icon--logo"></i>
			</a>
			<button class="button--primary toggle--nav--main" id="toggleMainNav">Menu</button>
		</div> <!-- .page-header__inner -->

		<nav class="nav nav--main" role="navigation">
			<ul class="nav__list ls-none">
				<li class="nav__item">
					<a href="" class="nav__link">Services</a>
				</li>
				<li class="nav__item">
					<a href="" class="nav__link">Work</a>
				</li>
				<li class="nav__item">
					<a href="" class="nav__link">About</a>
				</li>
				<li class="nav__item">
					<a href="news.php" class="nav__link">Blog</a>
				</li>
				<li class="nav__item">
					<a href="" class="nav__link">Contact</a>
				</li>
			</ul>
		</nav>
	</div> <!-- .wrap--large -->
</header>

<?php include_once('../snippets/foot.php'); ?>