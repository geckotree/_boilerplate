<?php
$pageTitle = 'Creative web design team based in the UK';
$pageDescription = 'Geckotree is a web design and development team based in the UK. We specialise in responsive web design &amp; development.';
$currentPage = 'home';

include_once('snippets/head.php');
?>

<div class="page-wrap">
	<?php include_once('snippets/nav.php'); ?>

	<div class="section-padding--tb section-padding--lr">
		<div class="wrap">
			<main class="main-content">
				<div class="wrap__inner">
					<h1>Index</h1>
					<a href="https://twitter.com/intent/tweet?url=<?php echo $_SERVER['REQUEST_URI'] ?>">tweet</a>
				</div> <!-- .wrap__inner -->
			</main>
		</div> <!-- .wrap -->
	</div> <!-- .section-padding -->
</div> <!-- .page-wrap -->

<?php 
include_once('snippets/foot.php'); 
?>