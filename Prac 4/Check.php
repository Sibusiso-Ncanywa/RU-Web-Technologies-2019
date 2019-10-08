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
if(empty($UserN)){
	echo "Please fill in the sentence box";
}
else{
	echo $UserN;
}
?>

</h1>
</body>
</html>