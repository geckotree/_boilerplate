<?php 
$pageTitle = 'Modules';
$currentPage = 'modules';

include_once('snippets/head.php');
include_once('snippets/nav.php'); 
?>

<main class="" style="padding:40px;">
	<section class="" style="padding-bottom:80px;">
		<header class="sg-doc-header">
			<h1 class="sg-doc-header__heading">Navigation</h1>
			<button class="sg-doc-header__button button button--primary">
				Code <i class="sg-icon--download" aria-hidden="true"></i>
			</button>
		</header>
		<?php include_once('modules/nav.php'); ?>
	</section>

	<section class="" style="padding-bottom:80px;">
		<header class="sg-doc-header">
			<h1 class="sg-doc-header__heading">Footer</h1>
			<button class="sg-doc-header__button button button--primary">
				Code <i class="sg-icon--download" aria-hidden="true"></i>
			</button>
		</header>
		<?php include_once('modules/footer.php'); ?>
	</section>

	<section class="">
		<header class="sg-doc-header">
			<h1 class="sg-doc-header__heading">Article</h1>
			<button class="sg-doc-header__button button button--primary">
				Code <i class="sg-icon--download" aria-hidden="true"></i>
			</button>
		</header>
		<?php include_once('modules/article.php'); ?>
	</section>
</main>

<?php include_once('snippets/foot.php'); ?>