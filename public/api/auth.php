<?php
/**
 * Application class
 *
 * @package    pmslink
 * @author     Jenil
 * @version    1.0
 */
    include_once './db.class.php';
    require_once './jwt.class.php';
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
    header("Content-Type: application/json");

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
    $jwt = new JWT("PMS_Link_MADE_BY_TEC-h-L-ink..Solving");

    $arrResponse = array("status" => "false", "message" => "Something went wrong");

    switch (strtoupper($requestData["action"])) {
        case "LOGIN":
            $email = $requestData["email"];
            $password = $requestData["password"];
            $query = "SELECT * FROM users WHERE email = '".$email."'";
            $objResult = $objcon->fetchOne($query);
            if ($objResult) {
                if (password_verify($password, $objResult["password"])) {
                    $token = $jwt->generate(array("user_id" => $objResult["recid"],"name"=> $objResult["name"],"email" => $objResult["email"]));
                    $arrResponse = array("status" => "true", "message" => "Login successful", "token" => $token);
                } else {
                    $arrResponse = array("status" => "false", "message" => "Invalid password");
                }
            } else {
                $arrResponse = array("status" => "false", "message" => "User not found");
            }
            break;

        case "SIGNUP":
            $email = $requestData["email"];
            $password = $requestData["password"];
            $name = $requestData["name"];

            //check email already exists.
            $query = "SELECT * FROM users WHERE email = '".$email."'";
            $objResult = $objcon->fetchOne($query);

            if ($objResult  ) {
                $arrResponse = array("status" => "false", "message" => "Email already exists");
            }else{
                //insert new user
                $query = "INSERT INTO users (email, password, name) VALUES (:email, :password, :name)";
                $params = array(
                    ':email' => $email,
                    ':password' => password_hash($password, PASSWORD_BCRYPT),
                    ':name' => $name
                );
                if ($objcon->executeQuery($query, $params)) {
                    $arrResponse = array("status" => "true", "message" => "User registered successfully");
                } else {
                    $arrResponse = array("status" => "false", "message" => "Failed to register user");
                }
            }
            break;

        default:
            $arrResponse = array("status" => "false", "message" => "Invalid action");
            break;
    }

    print json_encode($arrResponse);
    exit();
?>