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
					<h1>Index</h1>
				</div> <!-- .wrap__inner -->
			</main>
		</div> <!-- .wrap -->
	</div> <!-- .section-padding -->
</div> <!-- .page-wrap -->

<?php 
include_once('snippets/foot.php'); 
?>