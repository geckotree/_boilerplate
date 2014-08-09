<?php 
$currentPage = 'modules';

include_once('snippets/head.php');
include_once('snippets/nav.php'); 
?>

<header class="sg-page-header section-padding--lr">
	<h1 class="sg-page-header__heading mega"><?php echo $currentPage; ?></h1>
</header>

<div class="section-padding--tb section-padding--lr">
	<div class="wrap">
		<main class="main-content">
			<h1>h1 - This is a heading element</h1>
			<h2>h2 - This is a heading element</h2>
			<h3>h3 - This is a heading element</h3>
			<h4>h4 - This is a heading element</h4>
			<h5>h5 - This is a heading element</h5>
		</main>
	</div> <!-- .wrap -->
</div> <!-- .section-padding -->

<?php include_once('../snippets/foot.php'); ?>