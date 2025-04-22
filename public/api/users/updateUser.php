<?php

    $arrResponse = array(
        "status" => false,
        "message" =>"Something went wrong"
    );
    $objcon = new DB;

    $updateParams = $requestData["update"];

    if (isset($updateParams["email"])) {
        if (empty($updateParams["email"]) || !isset($updateParams["email"])) {
            $arrResponse["message"] = "Email is required";
            print json_encode($arrResponse);
            exit();
        }

         //verify email format
        if (!filter_var($updateParams["email"], FILTER_VALIDATE_EMAIL)) {
            $arrResponse["message"] = "Invalid email format";
            print json_encode($arrResponse);
            exit();
        }
    }else if (isset($updateParams["oldpassword"])) {
        //check enterd old password is correct or not. 

        $selectquery = "Select * from users where recid=".ASUSERID;
        $objrslt = $objcon->fetchone($selectquery);

        if (!password_verify($updateParams["oldpassword"],$objrslt["password"])) {
            $arrResponse["message"] = "Invalid Current Password";
            print json_encode($arrResponse);
            exit();
        }
    }

   
    $insertinto = "UPDATE users SET";
    $strset = "";

    foreach ($requestData["update"] as $key => $value) {
        switch($key){
            case "name":
                $strset .= " name='".$value."',";
                break;
            case "email":
                $strset .= " email='".$value."'";
                break;
            case "password":
                $pwvalue = password_hash($value, PASSWORD_BCRYPT);
                $strset .= " password=".json_encode($pwvalue);
                break; 
        }
    }

    $strQuery = $insertinto. $strset . " WHERE recid=". ASUSERID;
    $objuprslt = $objcon->fetchAll($strQuery);

    if ($objuprslt > 0) {
        $arrResponse=array(
            "status"=>true,
            "message"=>"User Updated Successfully"
        );

    }else{
        $arrResponse["message"] = "User Not Updated Successfully";
    }
?>