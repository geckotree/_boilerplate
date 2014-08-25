<?php $baseURL = 'http://localhost/~rob/_boilerplate/'; ?>

<!doctype html>
<!--[if IE 7]> <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]> <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html lang="en" class="preload no-js"> <!—<![endif]-->
<head>
	<meta charset="utf-8">

	<title><?php echo $pageTitle ?></title>
	<meta name="description" content="<?php echo $pageDescription ?>">

	<link rel="author" href=""> <!-- http://humanstxt.org -->
	<meta name="robots" content="index, follow"> <!-- http://www.robotstxt.org -->
	<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no, minimal-ui">

	<script type="text/javascript" src="//use.typekit.net/dmp1bpt.js"></script>
	<script type="text/javascript">try{Typekit.load();}catch(e){}</script>

	<!--[if lt IE 9]>
		<script src="<?php echo $baseURL; ?>/assets/js/production/html5shiv.min.js"></script>
		<link rel="stylesheet" href="<?php echo $baseURL; ?>/assets/css/production/style-ie.min.css">
	<![endif]-->

	<!--[if gt IE 8]><!-->
		<link rel="stylesheet" href="<?php echo $baseURL; ?>/assets/css/production/style.min.css" /> <!-- STYLESHEET FOR IE8+ & MODERN BROWSERS -->
	<!--<![endif]-->

	<script src="<?php echo $baseURL; ?>/assets/js/production/head-script.min.js" async></script>

	<!-- FAVICONS -->
	<link rel="shortcut icon" href="assets/img/favicon.png">
	<link rel="apple-touch-icon-precomposed" sizes="144x144" href="assets/img/144.jpg">
	<link rel="apple-touch-icon-precomposed" sizes="114x114" href="assets/img/114.jpg">
	<link rel="apple-touch-icon-precomposed" sizes="72x72" href="assets/img/72.jpg">
	<link rel="apple-touch-icon-precomposed" sizes="57x57" href="assets/img/57.jpg">

	<!-- OPEN GRAPH - http://ogp.me -->
	<meta property="og:title" content="<?php echo $pageTitle ?>" />
	<meta property="og:description" content="<?php echo $pageDescription ?>" />
	<meta property="og:url" content="<?php echo $pageDescription ?>" />
	<meta property="og:image" content="" />
	<meta property="og:type" content="company" />
	
	<!-- TWITTER CARD - https://dev.twitter.com/docs/cards/markup-reference -->
	<meta name="twitter:title" content="<?php echo $pageTitle ?>" />
	<meta name="twitter:description" content="<?php echo $pageDescription ?>" />
	<meta name="twitter:url" content="<?php echo $_SERVER['REQUEST_URI'] ?>" />
	<meta name="twitter:image" content="" />
	<meta name="twitter:creator" value="" />
</head>

<body class="<?php echo $currentPage ?>">
		