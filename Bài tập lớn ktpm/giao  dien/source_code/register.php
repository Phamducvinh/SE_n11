<?php
// Kiểm tra xem biểu mẫu HTML đã được gửi đi hay chưa
if ($_SERVER["REQUEST_METHOD"] == "POST") {

  // Lấy thông tin người dùng từ biểu mẫu HTML
  $username = $_POST["username"];
  $email = $_POST["email"];
  $password = $_POST["password"];

  // Tạo kết nối đến cơ sở dữ liệu
  $servername = "localhost";
  $username_db = "root";
  $password_db = "29042003viet";
  $dbname = "sign_up";
  $conn = mysqli_connect($servername, $username_db, $password_db, $dbname);

  // Kiểm tra kết nối đến cơ sở dữ liệu
  if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
  }

  // Tạo truy vấn SQL để chèn dữ liệu vào bảng users
  $sql = "INSERT INTO users (username, email, password) VALUES ('$username', '$email', '$password')";

  // Thực thi truy vấn SQL và kiểm tra xem có lỗi hay không
  if (mysqli_query($conn, $sql)) {
    echo "Đăng ký tài khoản thành công!";
  } else {
    echo "Lỗi: " . $sql . "<br>" . mysqli_error($conn);
  }

  // Đóng kết nối đến cơ sở dữ liệu
  mysqli_close($conn);
}
?>