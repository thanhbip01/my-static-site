

const account = document.getElementById("account")
account.addEventListener("click", (e) => {
    const namef = document.getElementById("namef");
const emails = document.getElementById("emails");
const pass = document.getElementById("pass");
const passw = document.getElementById("passw");
// check hai pass phai giong nhau ne khac hien loi vaf return , con khong thi cho add 
    e.preventDefault();
      const user = {         
      name:  namef.value,
      email: emails.value ,
      password: pass.value 
    } 
  add(URL_ACOUN, user) 
})

// tao mot file login.js lam chuc nang login 


