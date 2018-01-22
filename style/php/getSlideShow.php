<?php
$filenameArray = [];

$handle = opendir(dirname(realpath(__FILE__)).'/images/slideshow');
        while($file = readdir($handle)){
            if($file !== '.' && $file !== '..'){
                array_push($filenameArray, "images/$file");
            }
        }

for (int i=0; i<$filenameArray.length();i++){
   echo $filenameArray[i];
}
?>
