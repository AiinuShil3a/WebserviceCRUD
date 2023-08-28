const LinkURL =
  "http://172.20.10.2:5000/Restaurants/";

const menu = async () => {
  const url = new URL(document.location).searchParams;
  const id = url.get("id");
  const restaurantID = await fetch(LinkURL + `${id}`, {
    method: "GET",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const DETAILMENU = await restaurantID.json();
  ShowMenu(DETAILMENU);
};

const ShowMenu = (DETAILMENU) => {
  console.log("show all book");
  // console.log(dataAllBook);
  let dateCre = DETAILMENU.createdAt;
  let dateUp = DETAILMENU.updatedAt;


  const div = document.createElement("div");
  div.className = "col-12";
  const card = `
    <div class="row g-0 bg-light position-relative">
    <div class="col-md-6 mb-md-0 p-md-4">
      <img src="${DETAILMENU.Img}" class="w-100" alt="...">
    </div>
    <div class="col-md-6 p-4 ps-md-0">
      <h2 class="mt-0">${DETAILMENU.name}</h2>
      <h5 class="mt-0">ประเภท</h5>
      <p>${DETAILMENU.type}</p>
      <h5 class="mt-0">Created Date</h5>
      <p>${DETAILMENU.createdAt}</p>
      <h5 class="mt-0">Updated Date</h5>
      <p>${DETAILMENU.updatedAt}</p>

    </div>
  </div>`;
  div.innerHTML = card;
  const DETAIL = document.querySelector(".row");
  DETAIL.appendChild(div);
};

function main() {
    menu();
}

main();
