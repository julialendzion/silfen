function getData() {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get("id");
  const url = "https://kea21-6a0c.restdb.io/rest/products/" + id;
  const options = {
    headers: {
      "x-apikey": "6176a6518597142da1745a51",
    },
  };

  fetch(url, options)
    .then((res) => res.json())
    .then((response) => {
      showData(response);
    })
    .catch((err) => {
      console.error(err);
    });
}
getData();

function showData(product) {
  console.log(product);
  document.querySelector("#back").href = `shop` + product.back_to + `.html`;
  document.querySelector("#back").textContent = `SHOP  ` + product.back_to;
  document.querySelector(".img .productimage").src = product.img_url;
  document.querySelector(".img .productimage").alt = product.name;
  document.querySelector(".about h1").textContent = product.name;
  document.querySelector(".about .description").textContent = product.description;
  document.querySelector(".about .price").textContent = `price: ${product.price} DKK`;
  document.querySelector("#details").textContent = product.fabric;
  document.querySelector("#details2").textContent = product.measurements;
  document.querySelector("#delivery").textContent = product.delivery;

  const array = product.colours;

  if (array.includes("blue")) {
    console.log("blue");
    document.querySelector("#dot1").classList.add("blue");
  } else {
    console.log("doesn't have this colour");
  }

  if (array.includes("pink")) {
    console.log("pink");
    document.querySelector("#dot2").classList.add("pink");
  } else {
    console.log("doesn't have this colour");
  }
  if (array.includes("rose")) {
    console.log("rose");
    document.querySelector("#dot3").classList.add("rose");
  } else {
    console.log("doesn't have this colour");
  }

  if (array.includes("gray")) {
    console.log("gray");
    document.querySelector("#dot4").classList.add("gray");
  } else {
    console.log("doesn't have this colour");
  }
  if (array.includes("yellow")) {
    console.log("yellow");
    document.querySelector("#dot5").classList.add("yellow");
  } else {
    console.log("doesn't have this colour");
  }

  document.querySelector("#clickhere").addEventListener("click", openDetails);
  document.querySelector("#clickhere2").addEventListener("click", openDelivery);
}

function openDetails() {
  document.querySelector("#details").classList.toggle("hidden");
  document.querySelector("#details2").classList.toggle("hidden");
}

function openDelivery() {
  document.querySelector("#delivery").classList.toggle("hidden");
}
