<?php
    if (file_exists(__DIR__ . '/config.local.php')) {
        include_once __DIR__ . '/config.local.php';
    } else {
        // If you are seeing this, you need to create a config.local.php file.
        // See config.local.php.example for reference.
        // Do not commit config.local.php to version control.
        die('config.local.php not found. Please create it based on config.local.php.example');
    }
    define("DEBUG",false);
?>