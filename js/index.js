function getData() {
  fetch("https://kea21-6a0c.restdb.io/rest/products", {
    method: "GET",
    headers: {
      "x-apikey": "60339bce5ad3610fb5bb64e6",
    },
  })
    .then((res) => res.json())
    .then((response) => {
      showData(response);
    })
    .catch((err) => {
      console.error(err);
    });
}
getData();

function showData(data) {
  console.log(data.slice(0, 4));

  //grab the template

  const template = document.querySelector("#product-template").content;
  // data.forEach((data) => {

  data.slice(0, 4).forEach((data) => {
    //clone
    const copy = template.cloneNode(true);

    //adjust stuff
    copy.querySelector("h2").textContent = data.name;
    copy.querySelector("#bagimg").src = data.img_url;
    copy.querySelector("p").textContent = data.price + `,-`;
    copy.querySelector("a").href = `product.html?id=${data._id}`;
    //copy.querySelector("article img").alt = data.productdisplayname;
    // copy.querySelector("h3 span").textContent = post.username;
    // copy.querySelector("a.readmore").href = `article.html?article=${post._id}`;
    //apend it
    document.querySelector(".products").appendChild(copy);
  });
}

document.querySelector("#img3").addEventListener("mouseover", sale);
function sale() {
  console.log("hovering works");

  document.querySelector("#par").style.display = "inline-block";
  document.querySelector("#img3").addEventListener("mouseout", saleOut);
}
function saleOut() {
  document.querySelector("#par").style.display = "none";
}

//BURGER MENU WORKING//
document
  .querySelector("#burgermenuBtn")
  .addEventListener("click", ShowBurgermenu);

function ShowBurgermenu() {
  document.querySelector("#cos").classList.toggle("burgerContent");
  document.querySelector("#cos").classList.toggle("burgerContentOpen");
  console.log("show menu");
}
