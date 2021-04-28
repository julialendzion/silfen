const url = "https://kea21-6a0c.restdb.io/rest/products";

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
  filter("499");
};

function filterIcon() {
  document.querySelector("#silfenplay").classList.toggle("hidden");
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
