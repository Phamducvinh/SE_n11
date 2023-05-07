<?php
$servername = "3306";
$username = "root";
$password = "29042003viet";

// Tạo kết nối đến MySQL
$conn = mysqli_connect($servername, $username, $password);

// Kiểm tra kết nối
if (!$conn) {
  die("Kết nối đến MySQL thất bại: " . mysqli_connect_error());
}
echo "Kết nối đến MySQL thành công";
?>