<?php
if($_SERVER["REQUEST_METHOD"]=="POST"){
$file=fopen("info.txt","a");
if(fwrite($file,"
email :".$_POST["email"]."\n
name : ".$_POST["name"]."
")){
  echo "successfully writen";
}
else{
  echo "Fail to write file please try again";
}
fclose($file);
}