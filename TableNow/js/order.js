const oderfood = document.querySelector(".oderfood");
oderfood.addEventListener("click", async () => {
  const tablew1 = document.querySelector(".tablewhy");
  if(!tablew1.value){
     alert("vui long chon ban");
     return;
  }
  const listfood = document.querySelectorAll(".food .col");
  const orderOld = await getAll(URL_ORDER);
  const billOld = orderOld.find((e) => e.id == tablew1.value);

  const bill = billOld ? billOld.bill : [];

  listfood.forEach((e) => {
    const quantity = e.querySelector(".quantity").innerText;
    if (quantity > 0) {
      const idFood = e.querySelector(".badge").innerText;
      const index = bill.findIndex((e) => e.idFood == idFood);
      if (index == -1) {
        bill.push({ idFood, quantity });
      } else {
        bill[index].quantity =
          parseInt(bill[index].quantity) + parseInt(quantity);
      }
    }
  });

  const order = {
    id: tablew1.value,
    bill: bill,
  };
  if (billOld) {
    edit(URL_ORDER, order);
  } else {
    add(URL_ORDER, order);
  }
});

// goi y  hien tai dang hien thi listBox[1] cho no none
// sau do minh cho listBox[2] hien ra
// kiem select cho chon table => bien,value = id ;
function addTable(id) {
  listBox[1].style.display = "none";
  listBox[2].style.display = "block";
  const tablewhys = document.querySelector(".tablewhy");
  tablewhys.value = id;
}
const config = document.getElementById("config");
config.addEventListener("click", showpay);

let idPay;

function showpay() {
  listBox[1].style.display = "none";
  listBox[3].style.display = "block";
  const tables = document.querySelector(".tables");
  tables.value = idPay;
  showPayBill(idPay);
}
async function showcard(id) {
  idPay = id;
  const orderOld = await getAll(URL_ORDER);
  const billOld = orderOld.find((e) => e.id == id);
  // kiếm  về thùng chứa tboby table gan nhat cua no
  const bills = document.getElementById("billfood");
  bills.innerHTML = ""; // reset lai de no chay lai
  billOld.bill.forEach((e, index) => {
    const food = dataFood.find((a) => a.id == e.idFood);
    // biến thung chua .innerHTML += va co reset lai
    bills.innerHTML += ` <tr>
                  <th scope="row">${index + 1}</th>
                  <td><img src="${
                    food.urlimg
                  }" class="img-fluid" style="max-width: 40px" /></td>
                  <td>${food.name}</td>
                  <td>${e.quantity}</td>
                  <td>${food.price * e.quantity}$</td>
                </tr>`;
  });
}

const tables = document.querySelector(".tables");
const onpay = document.querySelector(".onpay");
onpay.addEventListener("click", () => {
  const item = {
    id: tables.value,
    quantity: "",
    nameCustomer: "",
    status: false,
  };
  edit(URL_TABLE, item);
  const toltalpay = document.getElementById("totalPay");
  // dung edit url, item sau do lay du lieu tu db.json va sua theo gia tri . value da goi tu truoc
  const savebill = {
    idTable: tables.value,
    total: toltalpay.innerText,
    time: new Date(),
  };
  
  add(URL_BILLS, savebill);
});
