const listItem = document.querySelectorAll(" .item");
// console.log(th12);
const tro = document.querySelector(" .back"); // su kien don appAeven
// console.log(tro);
const listBox = document.querySelectorAll(" .box");

const the1 = document.querySelector(".anh");
// console.log(the1);

tro.addEventListener("click", () => {
  listItem.forEach((e) => {
    e.classList.toggle("d-none");
  });
  the1.classList.toggle("anh");
});
//

const theme = document.querySelectorAll(" .anh li"); //add nhieeuf the
// console.log(theme);
theme.forEach((e, index) => {
  e.addEventListener("click", () => {
    listBox.forEach((a) => {
      a.style.display = "none";
    });
    listBox[index].style.display = "block";
  });
});
// xem lai 
const avatar = document.getElementById("avatar");
const menu = document.getElementById("menu");
avatar.addEventListener("click", (e) => {
  menu.classList.toggle("show");
  e.stopPropagation();
});
document.addEventListener("click", () => {
  menu.classList.remove("show");
});


function logout () {
  window.location.href = "login.html";
}