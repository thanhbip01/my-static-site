const form = document.getElementById("loginForm");
const username = document.getElementById("username");
const password = document.getElementById("password");


form.addEventListener("submit", async function (e) {
  e.preventDefault();

  const userValue = username.value;
  const passValue = password.value;


    const accounts = await getAll(URL_ACOUN);// dung URL ben api tu get all va lay URL cua acoun
    
    const found = accounts.find((acc) => acc.name === userValue && acc.password === passValue);
   console.log(found);
   
    if (found) {
      alert("Đăng nhập thành công!");
      window.location.href = "Home.html";
    } else {
      alert("Sai tài khoản hoặc mật khẩu!");
    }
});



