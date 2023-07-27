const genRestaurantCard = (restaurant) => {
    const card = document.createElement("div")
    card.className = "card";
    card.style = "width: 18rem;";
    const resCard = `
        <img src="${restaurant.Img}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${restaurant.name}</h5>
            <p class="card-text">${restaurant.type}</p>
            <a href="#" class="btn btn-warning">Go somewhere</a>
            <a href="#" class="btn btn-warning">Go somewhere</a>

        </div>
        `;
        card.innerHTML = resCard;

        const restaurants = document.querySelector("#restaurants");
        //console.log(card);
        restaurants.appendChild(card);
}

const onlode = async() => {
    const getAll = await fetch("http://localhost:5000/Restaurants", {
        method: "GET", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
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
}


const main = () => {
    onlode();
}
main();