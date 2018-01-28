<?php
    // print_r($_FILES);
    // print_r($_POST);
        if($_SERVER["REQUEST_METHOD"] == "POST"){

            if (!is_dir('uploads')) {
                mkdir('uploads', 0777, true);
                // echo "create folder";
                // Upload file
                $temp = explode(".", $_FILES["image"]["name"]);
                $newfilename = round(microtime(true)) . '.' . end($temp);
                move_uploaded_file($_FILES['image']['tmp_name'], './uploads/' . $newfilename);
                // print_r($_SERVER);
                echo "uploads/" .  $newfilename;
            }else{
                // Upload file
                // echo "folder created";
                $temp = explode(".", $_FILES["image"]["name"]);
                $newfilename = round(microtime(true)) . '.' . end($temp);
                move_uploaded_file($_FILES['image']['tmp_name'], './uploads/' . $newfilename);
                // print_r($_SERVER);
                echo "uploads/" .  $newfilename;
            }
        }
?>
