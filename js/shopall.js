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
  console.log(data);

  //grab the template

  const template = document.querySelector("#product-template").content;
  data.forEach((data) => {
    //clone
    const copy = template.cloneNode(true);

    //adjust stuff
    copy.querySelector("h2").textContent = data.name;
    copy.querySelector("#img").src = data.img_url;
    copy.querySelector("p").textContent = data.price + `,-`;
    copy.querySelector("a").href = `product.html?id=${data._id}`;
    //copy.querySelector("article img").alt = data.productdisplayname;
    // copy.querySelector("h3 span").textContent = post.username;
    // copy.querySelector("a.readmore").href = `article.html?article=${post._id}`;
    //apend it
    document.querySelector("section").appendChild(copy);
  });
}

//filtering menu drop-downs working

document.querySelector("#catbtn").onclick = () => {
  filterMenu();
};
document.querySelector("#colbtn").onclick = () => {
  filterMenu2();
};
document.querySelector("#sizbtn").onclick = () => {
  filterMenu3();
};
document.querySelector("#pribtn").onclick = () => {
  filterMenu4();
};

function filterMenu() {
  document.querySelector("#category").classList.toggle("hidden");
  document.querySelector("#catbtn span").classList.toggle("rotate");
}
function filterMenu2() {
  document.querySelector("#colour").classList.toggle("hidden");
  document.querySelector("#colbtn span").classList.toggle("rotate");
}
function filterMenu3() {
  document.querySelector("#size").classList.toggle("hidden");
  document.querySelector("#sizbtn span").classList.toggle("rotate");
}
function filterMenu4() {
  document.querySelector("#price").classList.toggle("hidden");
  document.querySelector("#pribtn span").classList.toggle("rotate");
}
