<?php
$pageTitle = 'Creative web design team based in the UK';
$pageDescription = 'Geckotree is a web design and development team based in the UK. We specialise in responsive web design &amp; development.';
$currentPage = 'home';

include_once('snippets/head.php');
?>

<div class="page-wrap">
	<?php include_once('snippets/nav.php'); ?>
	<main class="section wrap wrap--large">
		<h1>Index</h1>

		<label for="input" class="label">input</label>
		<input type="text" class="input" id="input" placeholder="label">

		<label for="select" class="label">select</label>
		<div class="select-wrap">
			<select name="" class="select" id="select">
				<option value="option">option</option>
			</select>
		</div>

		<label for="textarea" class="label">textarea</label>
		<textarea name="" class="textarea" id="textarea" cols="30" rows="8"></textarea>

		<input type="radio" class="radio" id="radio1" name="radio">
		<input type="radio" class="radio" id="radio2" name="radio">

		<input type="checkbox" class="checkbox" id="checkbox1" name="checkbox">
		<input type="checkbox" class="checkbox" id="checkbox2" name="checkbox">

		<div class="table-responsive">
			<table class="table">
				<thead>
					<tr>
						<th>heading 1</th>
						<th>heading 2</th>
						<th>heading 3</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>something</td>
						<td>something</td>
						<td>something</td>
					</tr>
					<tr>
						<td>something</td>
						<td>something</td>
						<td>something</td>
					</tr>
				</tbody>
			</table>
		</div>
		<abbr title="hyper text markup language">HTML</abbr>
	</main>

<?php 
include_once('snippets/foot.php'); 
?>