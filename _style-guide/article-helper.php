<?php 
$pageTitle = 'Article Helper';
$currentPage = 'article-helper';

include_once('snippets/head.php');
include_once('snippets/nav.php'); 
?>

<section class="sg-side-content">
	<h1><span style="font-weight:normal;">Article</span> helper</h1>
	<p>Colour gives us personality. Our colour palette is bright and bold while remaining fresh and approachable. It is meant to evoke emotion within our brand as our users experience and build on our services. The boldness and strength of the palette allow for a unique but simple learning experience. While we rely primarily on three main values, the extended palette allows us room to grow and reach outside the standard usage.</p>
	<p>The orange and blue slate are used about 75% of the time. They are supported by a foundation of greys and white, and complimented by some additional soft yellows and greens. When pairing colours, create a hieracy by using high-contrast colours in conjunction with softer less domoinate values.</p>
</section>

<main class="sg-main-content">
	<section class="sg-article-helper__section">
		<h3 class="sg-doc-header__heading">Topic</h3>
		<button class="sg-doc-header__button button button--primary">Save <i class="sg-icon--save" aria-hidden="true"></i></button>

		<input type="text" class="input" placeholder="Article title">
	</section>
	
	<section class="sg-article-helper__section">
		<h3>Audience</h3>
		
		<ul class="sg-article-helper__list">
			<li class="sg-article-helper__item">
				<label for="sgBeginner" class="label">Beginner</label>
				<input type="radio" name="audience" class="input--radio" id="sgBeginner">
			</li>
			<li class="sg-article-helper__item">
				<label for="sgIntermediate" class="label">Intermediate</label>
				<input type="radio" name="audience" class="input--radio" id="sgIntermediate">
			</li>
			<li class="sg-article-helper__item">
				<label for="sgProfessional" class="label">Professional</label>
				<input type="radio" name="audience" class="input--radio" id="sgProfessional">
			</li>
			<li class="sg-article-helper__item">
				<label for="sgExecutive" class="label">Executive</label>
				<input type="radio" name="audience" class="input--radio" id="sgExecutive">
			</li>
		</ul>
	</section>

	<section class="sg-article-helper__section">
		<h3>Structure</h3>
		
		<ul class="sg-article-helper__list">
			<li class="sg-article-helper__item">
				<label for="sgList" class="label">List</label>
				<input type="radio" name="structure" class="input--radio" id="sgList">
			</li>
			<li class="sg-article-helper__item">
				<label for="sgHowTo" class="label">How-To</label>
				<input type="radio" name="structure" class="input--radio" id="sgHowTo">
			</li>
			<li class="sg-article-helper__item">
				<label for="sgNews" class="label">News</label>
				<input type="radio" name="structure" class="input--radio" id="sgNews">
			</li>
			<li class="sg-article-helper__item">
				<label for="sgQA" class="label">Q&amp;A</label>
				<input type="radio" name="structure" class="input--radio" id="sgQA">
			</li>
			<li class="sg-article-helper__item">
				<label for="sgOpinion" class="label">Opinion</label>
				<input type="radio" name="structure" class="input--radio" id="sgOpinion">
			</li>
			<li class="sg-article-helper__item">
				<label for="sgCurated" class="label">Curated</label>
				<input type="radio" name="structure" class="input--radio" id="sgCurated">
			</li>
		</ul>
	</section>

	<section class="sg-article-helper__section">
		<h3>Format</h3>
		
		<ul class="sg-article-helper__list">
			<li class="sg-article-helper__item">
				<label for="sgTextArticle" class="label">Text</label>
				<input type="radio" name="format" class="input--radio" id="sgTextArticle">
			</li>
			<li class="sg-article-helper__item">
				<label for="sgGraphic" class="label">Graphic</label>
				<input type="radio" name="format" class="input--radio" id="sgGraphic">
			</li>
			<li class="sg-article-helper__item">
				<label for="sgSlides" class="label">Slides</label>
				<input type="radio" name="format" class="input--radio" id="sgSlides">
			</li>
			<li class="sg-article-helper__item">
				<label for="sgAudio" class="label">Audio</label>
				<input type="radio" name="format" class="input--radio" id="sgAudio">
			</li>
			<li class="sg-article-helper__item">
				<label for="sgVideo" class="label">Video</label>
				<input type="radio" name="format" class="input--radio" id="sgVideo">
			</li>
		</ul>
	</section>
</main>

<?php include_once('snippets/foot.php'); ?>