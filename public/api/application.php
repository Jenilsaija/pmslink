<?php
/**
 * Application class
 *
 * @package    pmslink
 * @author     Jenil
 * @version    1.0
 */
    include_once './db.class.php';
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

    $requestData = $_SERVER ?? null;

    var_dump($requestData);die;

    print json_encode("Hello World!");
?>