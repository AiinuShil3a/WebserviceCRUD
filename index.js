const genRestaurantCard = (restaurant) => {
  const card = document.createElement("div");
  card.className = "card";
  card.style = "width: 18rem;";
  const resCard = `
  <a href="detail.html?id=${restaurant.id}">
          <img src="${restaurant.Img}" class="card-img-top" alt="...">
  </a>
          <div class="card-body">
              <h5 class="card-title">${restaurant.name}</h5>
              <p class="card-text">${restaurant.type}</p>
              <a href="edit.html?id=${restaurant.id}" class="btn btn-warning">Edit</a>
              <br>
              <br>
  
              <button type="submit" class="btn btn-danger" onclick="return confirm('กรุณายืนยันการลบข้อมูล ??') , deleteMenu(${restaurant.id})">Delete</button>
  
          </div>
 
          `;
  card.innerHTML = resCard;

  const restaurants = document.querySelector("#restaurants");
  //console.log(card);
  restaurants.appendChild(card);
};

const onload = async () => {
  const getAll = await fetch("http://localhost:5000/Restaurants", {
    method: "GET", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
  }).then((response) => {
    return response.json();
  });
  //console.log(getAll.json());
  getAll.forEach((restaurant) => genRestaurantCard(restaurant));
};

const deleteMenu = async (id) => {
  try {
    console.log(id);
    console.log("http://localhost:5000/RestaurantShil3aiinu/" + `${id}`);
    const DELETE = await fetch(
      "http://localhost:5000/RestaurantShil3aiinu/" + `${id}`,
      {
        method: "DELETE", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((restaurant) => {
        alert("Delete menu No." + id);
        console.log(id);
        location.reload();
      });
  } catch (error) {
    alert("can't Delete restaurant menu");
  }
};

const searchMenu = async (event) => {
  // await ต้องมี async
  const keyword = event.target.value;
  console.log(keyword);
  if (keyword != "" && event.key === "Enter") {
    console.log("http://localhost:5000/Restaurants/" + `${keyword}`);
    
    const getOne = await fetch(
      "http://localhost:5000/Restaurants/",
      {
        method: "GET",
        mode: "cors",
        cache: "no-cache",
        Credentials: "same-original",
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((response) => {
      return response.json();
    });
    let menu = getOne.filter((restaurant) => restaurant.name.includes(keyword));
    console.log(menu);

    removeAllResult();

    menu.slice(0, 20).forEach((restaurant) => {
      genRestaurantCard(restaurant);
    });
  }
};

const removeAllResult = () => {
  const Element = document.querySelector("#restaurants");
  Element.innerHTML = "";
};

const main = () => {
  const inputElement = document.querySelector(".search");
  inputElement.addEventListener("keydown", searchMenu);
  
};

//เรียกทำงานตัว script
main();
