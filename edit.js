const showDetail = async () => {
    const url = new URL(document.location).searchParams;
    const id = url.get("id");
    console.log(id);
    if (id) {
      try {
        const url =
          "http://localhost:5000/Restaurants/";
        console.log(url + id);
        const Menu = await fetch(url + id, {
          method: "GET",
          mode: "cors",
          cache: "no-cache",
          credentials: "same-origin",
          headers: {
            "Content-Type": "application/json",
          },
        }).then((response) => response.json());
        console.log(Menu);
        document.getElementById("name").value = Menu.name;
        document.getElementById("type").value = Menu.type;
        document.getElementById("Img").value = Menu.Img;
      } catch (error) {
        alert(`Menu id ${id} is not found`);
      }
    } else {
      alert("Menu id is missing");
    }
  };

  const edit = async () => {
    const url = new URL(document.location).searchParams;
    const id = url.get("id");
    const name = document.getElementById("name").value;
    const type = document.getElementById("type").value;
    const image = document.getElementById("Img").value;

    const data = {
      name: name,
      type: type,
      Img: image,

    };
    try {
      console.log("http://172.20.10.2:5000/RestaurantShil3aiinu/"+`${id}`);
      const restaurant = await fetch(
        "http://localhost:5000/RestaurantShil3aiinu/"+`${id}`,
        {
          method: "PUT", // *GET, POST, PUT, DELETE, etc.
          mode: "cors", // no-cors, *cors, same-origin
          cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
          credentials: "same-origin", // include, *same-origin, omit
          headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: JSON.stringify(data),
        }
      )
      .then((response) => response.json())
      .then(() => {
        alert("ผมแก้ข้อมูลได้แล้วคับอาจารย์ สำเร็จ!!");
      });
    } catch (error) {
      alert(error);      
    }
  };
  