<?php
	$pageTitle = 'Template: Push nav';
	$pageDescription = '';
	$currentPage = 'push-nav';

	include_once('../snippets/head.php');
?>
<div id="pageWrap">
    <div id="pageWrapInner">
        <header class="page-header clearfix" role="banner">
			<div class="wrap clearfix">
				<a href="<?php echo $baseURL; ?>/index.php" class="logo">
					<i class="icon--logo"></i>
				</a>
				<button class="button--primary toggle--nav--main" data-toggle="nav--main">menu</button>
			</div>
        </header>

		<?php include_once('../snippets/nav--push.php'); ?>

        <main class="main-content" role="main">
                <h1>THE BODY</h1>
        </main>

    </div>
</div>
<?php include_once('../snippets/foot.php'); ?>