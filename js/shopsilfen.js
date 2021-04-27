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
    // copy.querySelector("h3 span").textContent = post.username;
    // copy.querySelector("a.readmore").href = `article.html?article=${post._id}`;
    //apend it
    document.querySelector("section").appendChild(copy);
  });
}
