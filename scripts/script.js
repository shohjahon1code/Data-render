const elForm = document.querySelector(".form");
const elCards = document.querySelector(".cards");
const elSelect = document.querySelector(".select");
const elSearchInput = elForm.querySelector("#search");
const elDelete = document.querySelector("#btn-delete");

// render data in html
function renderData(data) {
  elCards.textContent = "";
  data.forEach((item) => {
    const elCard = document.createElement("div");
    elCard.className = "col-12 col-md-6 col-xl-3 mb-3";
    elCard.innerHTML = `
    <div class="card text-white bg-dark mb-3 h-100 shadow-lg">
      <h4 class="card-header text-info">${item.name}</h4>
      <div class="card-body">
        <h5 class="card-title">${item.email}</h5>
        <p class="card-text">
        ${item.body}
        </p>
        </div>
        <button data-id="${item.id}" data-bs-toggle="modal"
        data-bs-target="#staticBackdrop" class="btn btn-primary del-btn">Delete</button>
        
  </div>
    `;
    elCards.appendChild(elCard);
  });
}

//select and filter
const renderSelectOpt = (data) => {
  const array = [];
  data.forEach((item) => {
    if (!array.includes(item.postId)) {
      array.push(item.postId);
    }
  });
  array.forEach((item) => {
    const option = document.createElement("option");
    option.value = item;
    option.textContent = item;
    elSelect.appendChild(option);
  });
};

// filter selectOptions
const selectItems = () => {
  const selectValue = elSelect.value;
  const selectFilter = data.filter(
    (item) => item.postId == selectValue || selectValue == "all"
  );

  if (selectFilter.length > 0) {
    renderData(selectFilter);
  } else {
    alert("Invalid Value");
  }
};

// search Items from datas
const searchItems = () => {
  const searchValue = elSearchInput.value.trim();
  const elSearchRegx = new RegExp(searchValue, "gi");
  const elSearchFilter = data.filter((item) => item.name.match(elSearchRegx));

  if (elSearchFilter.length > 0) {
    renderData(elSearchFilter);
  } else {
    alert("Input valid value!");
    elSearchInput.value = "";
  }
};

// delete Items
elCards.addEventListener("click", (evt) => {
  if (evt.target.matches(".del-btn")) {
    elDelete.addEventListener("click", () => {
      const id = evt.target.dataset.id;
      const filteredArray = data.filter((item) => {
        if (item.id != id) {
          return evt.target;
        }
      });
      data = filteredArray;
      renderData(data);
    });
  }
});

elSearchInput.addEventListener("input", () => {
  searchItems();
});

elSelect.addEventListener("change", () => {
  selectItems();
});

renderData(data);
renderSelectOpt(data);
