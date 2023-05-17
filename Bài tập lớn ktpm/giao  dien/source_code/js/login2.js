const loginsec = document.querySelector('.login-section');
const loginlink = document.querySelector('.login-link');
const registerlink = document.querySelector('.register-link');

registerlink.addEventListener('click', () => {
  loginsec.classList.add('active');
});

loginlink.addEventListener('click', () => {
  loginsec.classList.remove('active');
});

const signupForm = document.querySelector(".register form");
signupForm.addEventListener("submit", function(event) {
  event.preventDefault(); // Ngăn chặn việc gửi form đi

  const username = document.querySelector("input[name='username']").value;
  const email = document.querySelector("input[name='email']").value;
  const password = document.querySelector("input[name='password']").value;
  const agree = document.querySelector("input[name='agree']").checked;

  if (!agree) {
    alert("Bạn cần đồng ý với điều khoản sử dụng trước khi đăng ký.");
  } else {
    fetch("https://sheetdb.io/api/v1/q21zrespzd8tq", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: username,
        email: email,
        password: password
      })
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      alert("Đăng ký thành công!");
      // window.location.href="login2.html";
      
    })
    .catch(error => {
      console.error(error);
      alert("Đăng ký thất bại!");
    });
    
  }

  const loginButton = document.querySelector(".btn");
loginButton.addEventListener("click", function(event) {
  event.preventDefault(); // Ngăn chặn việc tải lại trang

  const email = document.querySelector("input[type='email']").value;
  const password = document.querySelector("input[type='password']").value;

  if (email === "" || password === "") {
    alert("Vui lòng nhập đầy đủ thông tin đăng nhập");
  } else {
    fetch("https://sheetdb.io/api/v1/q21zrespzd8tq", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(data => {
        const user = data.find(item => item.email === email && item.password === password);
        if (user) {
          window.location.href = "index.html";
        } else {
          alert("Thông tin đăng nhập không chính xác");
        }
      })
      .catch(error => console.error(error));
  }
});


});