const loginsec=document.querySelector('.login-section')
const loginlink=document.querySelector('.login-link')
const registerlink=document.querySelector('.register-link')
registerlink.addEventListener('click',()=>{
    loginsec.classList.add('active')
})
loginlink.addEventListener('click',()=>{
    loginsec.classList.remove('active')
})

const loginButton = document.querySelector(".btn");
loginButton.addEventListener("click", function(event) {
  event.preventDefault(); // Ngăn chặn việc tải lại trang

  const email = document.querySelector("input[type='email']").value;
  const password = document.querySelector("input[type='password']").value;

  if (email === "" || password === "") {
    alert("Vui lòng nhập đầy đủ thông tin đăng nhập");
  } else {
    window.location.href = "index.html";
  }
});

const registerButton = document.querySelector(".register .btn");
registerButton.addEventListener("click", function(event) {
  event.preventDefault(); // Ngăn chặn việc tải lại trang

  // Lấy giá trị các trường đăng ký tài khoản
  const username = document.querySelector(".register input[type='text']").value;
  const email = document.querySelector(".register input[type='email']").value;
  const password = document.querySelector(".register input[type='password']").value;
  const agree = document.querySelector(".register input[type='checkbox']").checked;

  // Kiểm tra thông tin đăng ký tài khoản có đầy đủ không
  if (username === "" || email === "" || password === "" || !agree) {
    alert("Vui lòng nhập đầy đủ thông tin đăng ký tài khoản và chấp nhận điều khoản sử dụng");
  } else {
    // Hiển thị thông báo đăng ký tài khoản thành công
    alert("Đăng ký tài khoản thành công");

    // Chuyển hướng về trang đăng nhập
    window.location.href = "login2.html";
  }
});

const loginForm = document.querySelector('.login-section .login form');

loginForm.addEventListener('submit', function(e) {
  e.preventDefault(); // Ngăn chặn trình duyệt gửi yêu cầu đăng nhập mặc định
  
  const email = loginForm.querySelector('input[type="email"]').value;
  const password = loginForm.querySelector('input[type="password"]').value;
  
  // Gửi yêu cầu đăng nhập đến máy chủ qua AJAX
  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'register_login.php'); // Thay thế check_login.php bằng tên tệp xử lý đăng nhập của bạn
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xhr.onload = function() {
    if (xhr.status === 200) {
      const response = JSON.parse(xhr.responseText);
      if (response.success) {
        // Chuyển hướng đến trang index.html nếu đăng nhập thành công
        window.location.href = 'index.html';
      } else {
        alert(response.message);
      }
    } else {
      alert('Đã xảy ra lỗi khi đăng nhập');
    }
  };
  xhr.send('email=' + encodeURIComponent(email) + '&password=' + encodeURIComponent(password));
});