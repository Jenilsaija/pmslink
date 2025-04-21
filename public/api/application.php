<?php
/**
 * Application class
 *
 * @package    pmslink
 * @author     Jenil
 * @version    1.0
 */
    include_once './db.class.php';
    include_once './jwt.class.php';
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
    header("Content-Type: application/json");
    $headers = apache_request_headers();

    $method = $_SERVER["REQUEST_METHOD"];
    if ($method != "POST") {
        header("HTTP/1.1 405 Method Not Allowed");
        header("Allow: POST");
        echo json_encode(array("message" => "Method Not Allowed"));
        exit();
    }

    $requestData = json_decode(file_get_contents('php://input'), true);
    if ($requestData === null) {
        http_response_code(400);
        echo json_encode(["error" => "Invalid JSON"]);
        exit();
    }

    $objcon = new DB;
    $jwt = new JWT(COMPANYSECRATE);

    //validate Token
    $authToken = !empty($headers["Authorization"]) ? $headers["Authorization"] : "";
    if (empty($authToken) || !isset($authToken)) {
        print json_encode(array("status"=>false,"message"=>"unAuthorized"));
        exit();
    }else{
        //verify token.
        $userData = $jwt->verify($authToken);
        if (!$userData) {
            print json_encode(array("status"=>false,"message"=>"Invalid Token"));
            exit();
        }else{
            define("ASUSERID",$userData["user_id"]);
        }
    }

    $arrResponse = array(
        "status" => false,
        "message" =>"Something went wrong"
    );


   switch ($requestData["action"]) {
    case 'USER.UPDATE':
        include_once './users/updateUser.php';
        break;

    case "USER.READ":
        $arrResponse =array (
            "status"=>true,
            "data" => $userData
        );
        break;
    
    default:
        $arrResponse["message"]="Invalid Action";
        break;
   }

    print json_encode($arrResponse);
    exit();
?>