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
					<h1>Modules</h1>
					<ul>
						<li><a href="modules/nav.php">Sticky Nav</a></li>
						<li><a href="modules/footer.php">Footer</a></li>
						<li><a href="modules/article.php">Article</a></li>
						<li><a href="modules/author.php">Author</a></li>
						<li><a href="modules/news.php">News</a></li>
						<li><a href="modules/sidebar.php">Sticky Sidebar</a></li>
						<li><a href="modules/toggle.php">Toggle</a></li>
					</ul>
				</div> <!-- .wrap__inner -->
			</main>
		</div> <!-- .wrap -->
	</div> <!-- .section-padding -->
</div> <!-- .page-wrap -->

<?php 
include_once('snippets/foot.php'); 
?>