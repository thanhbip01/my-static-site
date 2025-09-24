const thean = document.querySelector(".product");

async function getAllTable() {
  const data = await getAll(URL_TABLE);
 //kiem  ve the 
 const tablew1 = document.querySelector(".tablewhy");
 console.log(tablew1);
 const tables = document.querySelector(".tables")
console.log(tables);

 
  data.forEach((e) => {
    if (e.status) {
       tablew1.innerHTML += `<option value="${e.id}">Table ${e.id}</option>`;
    }
        if (e.status) {
       tables.innerHTML += `<option value="${e.id}">Table ${e.id}</option>`;
    }
    const anhgi = e.status ? "../img/b.png " : "../img/1.png";
    const buton = e.status
      ? `  <button onClick=addTable(${e.id}) class=" addtable btn btn-success rounded-pill px-4">
                      ADD
                    </button>
                    <button onClick=showcard(${e.id}) class="thecard btn btn-danger rounded-pill px-4 "  data-bs-toggle="modal"
        data-bs-target="#cartModal">
                      CART
                    </button>`
                    
      : `   <button onClick=showTable(${e.id})
                    type="button"
                    class="btn btn-warning rounded-pill px-4"
                    data-bs-toggle="modal"
                    data-bs-target="#bookingModal"
                  >
                    <i class="bi bi-calendar-event"></i> BOOKING
                  </button>`;
    thean.innerHTML += `
    <div class="col-12 col-md-6 col-lg-3 mb-4">
              <div class="card text-center p-3">
                        <div class="table d-flex justify-content-between px-1">
          <span class="badge bg-danger rounded-circle px-2">${e.id}</span>
          <i class="bi bi-pencil-square text-danger"></i>
        </div>
                <img
                  src=${anhgi}
                  class="card-img-top"
                  alt="Family at table"
                />
                <div class="card-body">
                  <div class="d-flex justify-content-around">
                  ${buton}
                  </div>
                </div>
              </div>
            </div>`;
  });
}
getAllTable();

function showTable(id) {
    const naw = document.getElementById("bookingtable");
    naw.addEventListener("click", () => {
    const customername = document.getElementById("customer");
    const quantity = document.getElementById("quantity");

    const item = {
      "id": id,
      "quantity": quantity.value,
      "nameCustomer": customername.value,
      "status": true
    }

    edit(URL_TABLE, item);
  })

}



