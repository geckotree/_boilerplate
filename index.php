<?php
$pageTitle = 'Template File';
$pageDescription = '';
$currentPage = 'home';

include_once('snippets/head.php');
?>

<div class="page-wrap">
	<?php include_once('snippets/nav.php'); ?>

	<div class="section-padding--tb section-padding--lr">
		<div class="wrap">
			<main class="main-content">
				<div class="wrap__inner">
					<h1>Components</h1>
					<ul>
						<li><a href="components/nav.php">Sticky Nav</a></li>
						<li><a href="components/footer.php">Footer</a></li>
						<li><a href="components/article.php">Article</a></li>
						<li><a href="components/author.php">Author</a></li>
						<li><a href="components/news.php">News</a></li>
						<li><a href="components/sidebar.php">Sticky Sidebar</a></li>
					</ul>
				</div> <!-- .wrap__inner -->
			</main>
		</div> <!-- .wrap -->
	</div> <!-- .section-padding -->
</div> <!-- .page-wrap -->

<?php 
include_once('snippets/foot.php'); 
?>