<nav class="sg-main-nav" role="navigation">
	<a href="index.php" class="sg-main-nav__logo <?php if ($currentPage == "home") { ?>active<?php } ?>">
		<i class="icon--logo" aria-hidden="true"></i>
	</a>

	<a href="" class="sg-main-nav__link <?php if ($currentPage == "logo") { ?>active<?php } ?>">
		<i class="icon--design" aria-hidden="true"></i>
		<span class="sg-main-nav__label">Logo</span>
	</a>

	<a href="typography.php" class="sg-main-nav__link <?php if ($currentPage == "typography") { ?>active<?php } ?>">
		<i class="icon--briefcase" aria-hidden="true"></i>
		<span class="sg-main-nav__label">Typography</span>
	</a>

	<a href="colours.php" class="sg-main-nav__link <?php if ($currentPage == "colours") { ?>active<?php } ?>">
		<i class="icon--heart" aria-hidden="true"></i>
		<span class="sg-main-nav__label">Colours</span>
	</a>

	<a href="icons.php" class="sg-main-nav__link <?php if ($currentPage == "icons") { ?>active<?php } ?>">
		<i class="icon--send" aria-hidden="true"></i>
		<span class="sg-main-nav__label">Icons</span>
	</a>

	<a href="modules.php" class="sg-main-nav__link <?php if ($currentPage == "modules") { ?>active<?php } ?>">
		<i class="icon--feather" aria-hidden="true"></i>
		<span class="sg-main-nav__label">Modules</span>
	</a>

	<a href="article-helper.php" class="sg-main-nav__link sg-main-nav__link--detached <?php if ($currentPage == "article-helper") { ?>active<?php } ?>">
		<i class="icon--info" aria-hidden="true"></i>
		<span class="sg-main-nav__label">Help</span>
	</a>
</nav>

<div class="sg-page-wrap clearfix">