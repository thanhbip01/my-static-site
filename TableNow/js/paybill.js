async function showPayBill(id)  { //ham showbill de chay ben oder va gan vo ham showpay
  const orders = await getAll(URL_ORDER);
  const billData = orders.find(e => e.id == id);

  if (!billData) {
    document.getElementById("foodbills");
    return;
  }

  const tbody = document.getElementById("foodbills");
  tbody.innerHTML = "";

  let total = 0;

  billData.bill.forEach((item, index) => {
    const food = dataFood.find(f => f.id == item.idFood);
    const price = Number(food.price) * Number(item.quantity);
    total += price;

    tbody.innerHTML += `
      <tr>
        <th scope="row">${index + 1}</th>
        <td><img src="${food.urlimg}" class="img-fluid" style="max-width: 40px" /></td>
        <td>${food.name}</td>
        <td>${item.quantity}</td>
        <td>$${price}</td>
      </tr>
    `;
  });

  tbody.innerHTML += `
    <tr class="fw-bold">
      <td colspan="4" class="text-end">Total</td>
      <td>$<span id="totalPay">${total}</span></td>
    </tr>
  `;
}

document.querySelector(".tables").addEventListener("change", function(e) {
  const tableId = e.target.value.replace("Table ", ""); 
  showPayBill(tableId);
});
  // const chosetab = document.querySelector(".chosetab");
  // const onpay = document.querySelector(".onpay");
  // onpay.addEventListener("click",() =>{
  //   console.log(onpay.value);
  // }) ham loc gia tri