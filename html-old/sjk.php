<?php
// 数据库配置信息
$host = 'localhost';
$username = 'root';
$password = '';
$dbname = 'exampledb';
 
// 创建数据库连接
$conn = new mysqli($host, $username, $password, $dbname);
 
// 检查连接
if ($conn->connect_error) {
    die("连接失败: " . $conn->connect_error);
}
 
// 创建数据库表
$sql = "CREATE TABLE IF NOT EXISTS users (
id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
firstname VARCHAR(30) NOT NULL,
lastname VARCHAR(30) NOT NULL,
email VARCHAR(50),
reg_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
)";
 
if ($conn->query($sql) === TRUE) {
    echo "Table users created successfully";
} else {
    echo "创建表错误: " . $conn->error;
}
 
// 插入新记录
$sql = "INSERT INTO users (firstname, lastname, email)
VALUES ('John', 'Doe', 'john@example.com')";
 
if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "插入错误: " . $conn->error;
}
 
// 检索记录
$sql = "SELECT id, firstname, lastname FROM users";
$result = $conn->query($sql);
 
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        echo "id: " . $row["id"]. " - Name: " . $row["firstname"]. " " . $row["lastname"]. "<br>";
    }
} else {
    echo "0 结果";
}
 
// 关闭数据库连接
$conn->close();
?>