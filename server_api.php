<?php
	$url = 'http://144.76.40.182:8080/api/server';

	$result = file_get_contents($url . http_build_query($_REQUEST), false, stream_context_create(array(
		'http' => array(
			'method'  => 'GET',
			'header'  => 'Content-type: application/x-www-form-urlencoded'
		)
	)));

	echo $result;
?>
