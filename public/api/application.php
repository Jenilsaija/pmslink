<?php
/**
 * Application class
 *
 * @package    pmslink
 * @author     Jenil
 * @version    1.0
 */
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
    header("Content-Type: application/json");

    $method = $_SERVER["REQUEST_METHOD"];
    if ($method != "POST") {
        header("HTTP/1.1 405 Method Not Allowed");
        header("Allow: POST");
        echo json_encode(array("message" => "Method Not Allowed"));
        exit;
    }
    
    require_once 'db.class.php';
    $objcon = new DB;

    print json_encode($objmain->getAllNotes());
?>