<?php
/*
define("MYSQL_HOST", "mysql:host=localhost;dbname=id8410745_pwutm");
define("MYSQL_USER", "id8410745_root");
define("MYSQL_PASSWORD", "rootroot");
*/
define("MYSQL_HOST", "mysql:host=localhost;dbname=id5025067_noticias");
define("MYSQL_USER", "id5025067_news");
define("MYSQL_PASSWORD", "1234567890");

// FUNCIÓN DE CONEXIÓN CON LA BASE DE DATOS MYSQL
function conectaDb()
{
    try {
        $tmp = new PDO(MYSQL_HOST, MYSQL_USER, MYSQL_PASSWORD);
        $tmp->setAttribute(PDO::MYSQL_ATTR_USE_BUFFERED_QUERY, true);
        $tmp->exec("set names utf8mb4");
        return($tmp);
    } catch(PDOException $e) {
        cabecera("Error grave", MENU_PRINCIPAL);
        print "    <p>Error: No puede conectarse con la base de datos.</p>\n";
        print "\n";
        print "    <p>Error: " . $e->getMessage() . "</p>\n";
        pie();
        exit();
    }
}
$db = conectaDB();
?>