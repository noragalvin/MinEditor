<?php
    // print_r($_FILES);
    // print_r($_POST);
        if($_SERVER["REQUEST_METHOD"] == "POST"){

            if (!file_exists('images')) {
                mkdir('images', 0777, true);
                // Upload file
                $temp = explode(".", $_FILES["image"]["name"]);
                $newfilename = round(microtime(true)) . '.' . end($temp);
                move_uploaded_file($_FILES['image']['tmp_name'], './images/' . $newfilename);
                // print_r($_SERVER);
                echo "images/" .  $newfilename;
            }else{
                // Upload file
                $temp = explode(".", $_FILES["image"]["name"]);
                $newfilename = round(microtime(true)) . '.' . end($temp);
                move_uploaded_file($_FILES['image']['tmp_name'], './images/' . $newfilename);
                // print_r($_SERVER);
                echo "images/" .  $newfilename;
            }
        }
?>
