<?php
$dir = "\style\images\ballet";
$handle = opendir(dirname(realpath(__FILE__)).$dir);
        while($file = readdir($handle)){
            if($file !== '.' && $file !== '..'){
                echo $file.'<br>';
            }
        }
?>
