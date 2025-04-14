<?php
    include_once './db.class.php';
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: GET");
    header("Content-Type: application/json");

    $method = $_SERVER["REQUEST_METHOD"];
    if ($method != "GET") {
        header("HTTP/1.1 405 Method Not Allowed");
        header("Allow: POST");
        echo json_encode(array("message" => "Method Not Allowed"));
        exit();
    }

    $objcon = new DB;

    $query = "SELECT * FROM pages;";

    $result = $objcon->fetchAll($query);

    if ($result) {
        echo json_encode($result);
    } else {
        echo json_encode(array("message" => "No records found."));
    }
    $objcon->closeConnection();
?>
