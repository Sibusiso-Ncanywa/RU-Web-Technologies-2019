<?php

$UserN = strtoupper($_POST["TheName"]);

?>

<!DOCTYPE html>
<html>
<head>
	<title>Hello World</title>
</head>
<body>
<h1> 
	Upper caps sentence: 
<?php
echo $UserN;
?>

</h1>
</body>
</html>