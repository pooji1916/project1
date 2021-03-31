<?php 


$mysqli = new mysqli('localhost','sdevil','','devil') or die(mysqli_error($mysqli));

if(isset($_POST['sub'])){
    $a = $_POST['fname'];
    $b = $_POST['fnum'];
    $c = $_POST['mail'];

    $mysqli->query("INSERT INTO cusdetails (name, number, email) VALUES('$a', '$b', '$c')") or die($mysqli->error);

}

if($mysqli->connect_error){
    echo("connection failed");
    die("Connection Failed");
}else{  
    echo("<h2><span style=font-size:150px;> Thank You! </span></h2>");
    echo("<sapn style=font-size:50px;> Your details have been recorded. We will contact you as soon as we can.</span>");
}

?>