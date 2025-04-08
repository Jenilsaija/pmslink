<?php
    include_once './config.php';
    class DB {
        private $host = DB_HOST;
        private $db_name = DB_NAME;
        private $username = DB_USER;
        private $password = DB_PASS;
        public $conn;

        public function __construct() {
            $this->getConnection(); // Auto-connect
        }    

        public function getConnection() {
            $this->conn = null;
            try {
                $this->conn = new PDO("mysql:host={$this->host};dbname={$this->db_name}", $this->username, $this->password);
                $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            } catch(PDOException $exception) {
                echo "Connection error: " . $exception->getMessage();
            }
            return $this->conn;
        }

        public function closeConnection() {
            $this->conn = null;
        }

        public function executeQuery($query, $params = []) {
            $stmt = $this->conn->prepare($query);
            foreach ($params as $key => $value) {
                $stmt->bindValue($key, $value);
            }
            if ($stmt->execute()) {
                return $stmt;
            } else {
                return false;
            }
        }

        public function fetchAll($query, $params = []) {
            $stmt = $this->executeQuery($query, $params);
            if ($stmt) {
                return $stmt->fetchAll(PDO::FETCH_ASSOC);
            } else {
                return false;
            }
        }

        public function fetchOne($query, $params = []) {
            $stmt = $this->executeQuery($query, $params);
            if ($stmt) {
                return $stmt->fetch(PDO::FETCH_ASSOC);
            } else {
                return false;
            }
        }

    }
?>