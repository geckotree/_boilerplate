<?php 
include_once('../snippets/head.php');
include_once('../snippets/nav.php'); 
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

		<nav class="nav nav--main" role="navigation">
			<ul class="nav__list">
				<li class="nav__item">
					<a href="<?php echo $baseURL; ?>/index.php" class="nav__link">About us</a>
				</li>
				<li class="nav__item">
					<a href="<?php echo $baseURL; ?>/index.php" class="nav__link">Work</a>
				</li>
				<li class="nav__item">
					<a href="<?php echo $baseURL; ?>/index.php" class="nav__link">Clients</a>
				</li>
				<li class="nav__item">
					<a href="<?php echo $baseURL; ?>/index.php" class="nav__link">Resources</a>
				</li>
				<li class="nav__item">
					<a href="<?php echo $baseURL; ?>/index.php" class="nav__link">Contact</a>
				</li>
				<li class="nav__item">
					<a href="<?php echo $baseURL; ?>/index.php" class="nav__link">About us</a>
				</li>
				<li class="nav__item">
					<a href="<?php echo $baseURL; ?>/index.php" class="nav__link">Work</a>
				</li>
				<li class="nav__item">
					<a href="<?php echo $baseURL; ?>/index.php" class="nav__link">Clients</a>
				</li>
				<li class="nav__item">
					<a href="<?php echo $baseURL; ?>/index.php" class="nav__link">Resources</a>
				</li>
				<li class="nav__item">
					<a href="<?php echo $baseURL; ?>/index.php" class="nav__link">Contact</a>
				</li>
			</ul>
		</nav>

        <main class="main-content" role="main">
                <h1>THE BODY</h1>
        </main>

    </div>
</div>

<?php include_once('../snippets/foot.php'); ?>