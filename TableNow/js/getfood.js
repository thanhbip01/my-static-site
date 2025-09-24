const theday = document.querySelector(" .food");
let dataFood ;
async function getAllFood(searh) {
  const data = await getAll(URL_FOOD);
   dataFood = data ;
   const dataFilter = data.filter((item) => item.name.toLowerCase().includes(searh.toLowerCase()));
    theday.innerHTML = "" ;
  dataFilter.forEach((e, index) => {
    const item = document.createElement("div");
    item.classList.add("col");
    item.innerHTML = `
      <div class="card text-center p-2" style=" border-radius: 10px;">
        <div class="d-flex justify-content-between px-1">
          <span class="badge rounded-circle px-2">${index + 1}</span>
          <i class="bi bi-pencil-square text-danger"></i>
          <div class="note align-content-end">
             <i  onClick=showidfood(${
               e.id
             }) class="delete h6 fa-solid fa-trash text-danger" data-bs-toggle="modal"
                    data-bs-target="#deleteModal"></i>     
             <i  onClick=showpro(${
               e.id
             }) data-bs-toggle="modal" data-bs-target="#foodModal" class="notes h6 fa-solid fa-pen-nib text-primary"></i>
          </div>
        </div> 
        <img src=${
          e.urlimg
        } class="card-img-top mx-auto" style=" height: 150px; object-fit: contain;" />
        <div class="card-body p-2">
          <h6 class="card-title mb-1">${e.name}</h6>
          <p class="text-danger fw-bold mb-2">${e.price} $</p>
          <div class="d-flex justify-content-center align-items-center gap-2">
            <button class="btn btn-sm btn-outline-danger minus">-</button>
            <span class="quantity">0</span>
            <button class="btn btn-sm btn-outline-danger plus">+</button>
          </div>
        </div>
      </div>`;
    theday.appendChild(item);
    const minus = item.querySelector(".minus");
    //  console.log(minus);
    const quantity = item.querySelector(".quantity");
    //  console.log(quantity);
    const plus = item.querySelector(".plus");
    // console.log(plus);
    minus.addEventListener("click", (e) => {
      if (quantity.innerText > 0) {
        quantity.innerText = parseInt(quantity.innerText) - 1;
      }
    });
    plus.addEventListener("click", (e) => {
      quantity.innerText = parseInt(quantity.innerText) + 1;
    });
  });
}
getAllFood("");
let idEdit;
const awn = document.getElementById("addfood");
awn.addEventListener("click", async () => {
  const foodname = document.getElementById("food");
  const price = document.getElementById("price");
  const urlimg = await uploadImageToCloudinary(file_food);
  const data = await getAll(URL_FOOD);

  let id = 1 ;
    data.forEach(e => {
       if(id == e.id){
         id++ ;
       }else {
         return;
       }
    })

    console.log(idEdit);
    
  const newFood = {
    id : idEdit ? idEdit : id ,
    name: foodname.value,
    price: price.value,
    urlimg: urlimg,
  };
  if (idEdit) {
    edit(URL_FOOD, newFood);
  } else {
    add(URL_FOOD, newFood);
  }
});
//edit
const foodimg = document.getElementById("foodimage");
foodimg.addEventListener("change", fileBook);
function showidfood(id) {
  const deletefood = document.getElementById("deletefood");
  deletefood.addEventListener("click", (e) => {
    deleted(URL_FOOD, id);
  });
}
async function showpro(id) {
  idEdit = id;
  const data = await getAll(URL_FOOD);
  const food = data.find((e) => e.id == id);
  const foodname = document.getElementById("food");
  foodname.value = food.name;
  const price = document.getElementById("price");
  price.value = food.price;
  const img = document.getElementById("img_food");
  img.src = food.urlimg;

  const aff = document.getElementById("addfood");
  aff.innerText = "Update Food ";
  const casea = document.getElementById("casea");
  casea.innerText = "Edit Food ";
}
const licker = document.getElementById("foodModal")
licker.addEventListener("click", resetModal);




async function resetModal() {
  idEdit = null;
  const foodname = document.getElementById("food");
  foodname.value = "";
  const price = document.getElementById("price");
  price.value = "";
  const img = document.getElementById("img_food");
  img.src = "../img/logo.jpg";

  const aff = document.getElementById("addfood");
  aff.innerText = "Add Food";
  const casea = document.getElementById("casea");
  casea.innerText = "Add Food";
}

 const searh = document.querySelector(".searh")
searh.addEventListener("change", () => {
  getAllFood(searh.value);
});
