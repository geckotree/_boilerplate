<?php $baseURL = 'http://localhost/~rob/_boilerplate/'; ?>

<!doctype html>
<!--[if IE 7]> <html lang="en" class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]> <html lang="en" class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html lang="en" class="no-js"> <!—<![endif]-->
<head>
	<meta charset="utf-8">

	<title><?php echo $pageTitle ?> &#149; geckotree</title>
	<meta name="description" content="<?php echo $pageDescription ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no, minimal-ui">
	<meta name="robots" content="index, follow"> <!-- http://www.robotstxt.org -->
	<link rel="author" href=""> <!-- http://humanstxt.org -->


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
	<link rel="icon" type="image/png" href="assets/img/brand-icons/favicon-196.png" sizes="196x196">
	<link rel="icon" type="image/png" href="assets/img/brand-icons/favicon-160.png" sizes="160x160">
	<link rel="icon" type="image/png" href="assets/img/brand-icons/favicon-96.png" sizes="96x96">
	<link rel="icon" type="image/png" href="assets/img/brand-icons/favicon-32.png" sizes="32x32">
	<link rel="icon" type="image/png" href="assets/img/brand-icons/favicon-16.png" sizes="16x16">

	<!-- APPLE ICONS -->
	<link rel="apple-touch-icon-precomposed" sizes="152x152" href="assets/img/brand-icons/apple-152.png">
	<link rel="apple-touch-icon-precomposed" sizes="144x144" href="assets/img/brand-icons/apple-144.png">
	<link rel="apple-touch-icon-precomposed" sizes="120x120" href="assets/img/brand-icons/apple-120.png">
	<link rel="apple-touch-icon-precomposed" sizes="114x114" href="assets/img/brand-icons/apple-114.png">
	<link rel="apple-touch-icon-precomposed" sizes="76x76" href="assets/img/brand-icons/apple-76.png">
	<link rel="apple-touch-icon-precomposed" sizes="72x72" href="assets/img/brand-icons/apple-72.png">
	<link rel="apple-touch-icon-precomposed" sizes="60x60" href="assets/img/brand-icons/apple-60.png">
	<link rel="apple-touch-icon-precomposed" sizes="57x57" href="assets/img/brand-icons/apple-57.png">

	<!-- MS APPLICATION ICON -->
	<meta name="msapplication-TileColor" content="#2b5797">
	<meta name="msapplication-TileImage" content="/mstile-144x144.png">

	<!-- OPEN GRAPH - http://ogp.me -->
	<meta property="og:title" content="<?php echo $pageTitle ?>" />
	<meta property="og:description" content="<?php echo $pageDescription ?>" />
	<meta property="og:url" content="<?php echo $_SERVER['REQUEST_URI'] ?>" />
	<meta property="og:image" content="" />
	<meta property="og:type" content="website" />

	<!-- TWITTER CARD - https://dev.twitter.com/docs/cards/markup-reference -->
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content="<?php echo $pageTitle ?>" />
	<meta name="twitter:description" content="<?php echo $pageDescription ?>" />
	<meta name="twitter:url" content="<?php echo $_SERVER['REQUEST_URI'] ?>" />
	<meta name="twitter:image" content="" />
	<meta name="twitter:site" content="@geckotree" />
	<meta name="twitter:creator" content="@geckotree" />
</head>

<body class="<?php echo $currentPage ?>">
		