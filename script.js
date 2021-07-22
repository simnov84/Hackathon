async function fetchdata() {
    const users = await fetch(
      "https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline",
      {
        method: "GET"
      }
    );
    const makeup = await users.json();
    loaddata(makeup);
  }
  function loaddata(makeup) {
    const product = document.createElement("div");
    makeup.forEach((user) => {
      const usercontainer = document.createElement("div");
      usercontainer.className = "container";
      usercontainer.innerHTML = `
      
      <img src="${user.image_link}" class="center">
      <div><span>Name:</span> ${user.name}</div><br>
      <div><span>Brand:</span> ${user.brand}</div><br>
      <div><span>Price:</span> ${user.price}</div><br>
      
      <p>${user.description}</p><br>
      <a href="${user.product_link}" target ="_blank">Click here</a><br>
    `;
      product.append(usercontainer);
    });
    document.body.append(product);
  }
  fetchdata();