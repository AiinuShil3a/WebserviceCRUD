const addRestaurant = async () => {
  const name = document.getElementById("name").value;
  const type = document.getElementById("type").value;
  const Image = document.getElementById("Img").value;

  if (name && type && Image) {
    //call
    const params = {
      name: name,
      type: type,
      Img: Image,
    };
    try {
      const restaurant = await fetch(
        "http://localhost:5000/RestaurantShil3aiinu",
        {
          method: "POST", // *GET, POST, PUT, DELETE, etc.
          mode: "cors", // no-cors, *cors, same-origin
          cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
          credentials: "same-origin", // include, *same-origin, omit
          headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: JSON.stringify(params),
        }
      )
        .then((response) => {
          return response.json();
        })
        .then((restaurant) => {
          alert("New Menu No." + restaurant.id);
        });
    } catch (error) {
      alert("can't add new restaurant menu");
    }
  } else {
    alert("All field are require");
  }
};
