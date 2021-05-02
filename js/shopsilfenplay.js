const url = `https://kea21-6a0c.restdb.io/rest/products?q={"back_to":"play"}`;

//API key

//560263607f98025500000000?s=t
//The API key
const options = {
  headers: {
    "x-apikey": "60339bce5ad3610fb5bb64e6",
  },
};

//chosing the filtering buttons, fetching
document.querySelector("#shopsilfenPlay").onclick = () => {
  filter("play");
};

function filterIcon() {
  document.querySelector("#silfenplay").classList.remove("hidden");
  document.querySelector("#silfen").classList.add("hidden");
}
//filer function- changing the url
function filter(filter_type) {
  console.log("filering", filter_type);
  document.querySelector("section").innerHTML = "";
  fetch(
    `https://kea21-6a0c.restdb.io/rest/products?filter=${filter_type}`,
    options
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      showData(data);
    });
  filterIcon();
}

fetch(url, options)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    showData(data);
  });

function showData(data) {
  console.log("data", data);
  data.forEach(product);
}

function product(data) {
  //grab the template

  const template = document.querySelector("template").content;
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
