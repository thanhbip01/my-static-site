function showChart() {
  chartQuantity();
  chartTotal();
}
showChart();

async function chartQuantity() {
  const tables = await getAll(URL_TABLE);

  const ctx = document.createElement("canvas");
  document.querySelector(".bar-chart").appendChild(ctx);

  new Chart(ctx, {
    type: "bar",
    data: {
      labels: tables.map((e) => `Table ${e.id}`),
      datasets: [
        {
          label: "REVENUE TOTAL ($)",
          data: tables.map((e) => parseInt(e.quantity)),
          backgroundColor: "#c5487a",
          borderColor: "#c5487a",
          borderWidth: 1,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
    },
  });
}

async function chartTotal() {
  const foodbills = await getAll(URL_BILLS);

  const data = [];

  foodbills.forEach((element) => {
    const index = data.findIndex((e) => e.id == element.idTable);
    if (index == -1) {
      data.push({ id: element.idTable, total: parseInt(element.total) });
    } else {
      data[index].total += parseInt(element.total);
    }
  });

  console.log(data);

  const ctx = document.createElement("canvas");
  document.querySelector(".line-chart").appendChild(ctx);

  new Chart(ctx, {
    type: "line",
    data: {
      labels: data.map(e => `Table ${e.id}`),
      datasets: [
        {
          label: "My First Dataset",
          data: data.map(e => parseInt(e.total)) ,
          fill: false,
          borderColor: "rgb(75, 192, 192)",
          tension: 0.1,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
    },
  });
}
// google