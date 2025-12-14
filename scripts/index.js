const modalFunc = () => {
  const modal = document.querySelector(".cart-modal__overlay");
  const cartBtn = document.querySelector("#cart-button");

  const openModal = () => {
    modal.classList.add("open");
  };

  const closeModal = () => {
    modal.classList.remove("open");
  };

  cartBtn.addEventListener("click", () => {
    openModal();
  });

  modal.addEventListener("click", (event) => {
    if (
      event.target.classList.contains("cart-modal__overlay") ||
      event.target.closest(".cart-modal__header--close")
    ) {
      closeModal();
    }
  });
};

const restsFunc = () => {
  const container = document.querySelector("#rests-container");

  const restArray = [
    {
      id: 0,
      title: "Пицца плюс",
      time: 50,
      rating: 4.5,
      price: 900,
      type: "Пицца",
      image: "pizza-plus.jpg",
    },

    {
      id: 1,
      title: "Тануки",
      time: 50,
      rating: 4.5,
      price: 900,
      type: "Пицца",
      image: "tanuki.jpg",
    },

    {
      id: 2,
      title: "FoodBand",
      time: 50,
      rating: 4.5,
      price: 900,
      type: "Пицца",
      image: "foodband.jpg",
    },

    {
      id: 3,
      title: "Жадина-пицца",
      time: 50,
      rating: 4.5,
      price: 900,
      type: "Пицца",
      image: "jadina-pizza.jpg",
    },

    {
      id: 4,
      title: "Точка еды",
      time: 50,
      rating: 4.5,
      price: 900,
      type: "Пицца",
      image: "tochka-edy.jpg",
    },

    {
      id: 5,
      title: "PizzaBurger",
      time: 50,
      rating: 4.5,
      price: 900,
      type: "Пицца",
      image: "pizzaburger.jpg",
    },
  ];

  const loading = () => {
    container.innerHTML =
      '<p style="width: 100%; text-align: center;">Загрузка</p>';
  };

  const randerRests = (array) => {
    container.innerHTML = "";

    array.forEach((card) => {
      container.insertAdjacentHTML(
        "beforeend",
        `<a href="./goods.html?id=${card.id}" class="products-card">
                <div class="products-card__image">
                  <img src="./images/rests/${card.image}" alt="${card.image}" />
                </div>
                <div class="products-card__description">
                  <div class="products-card__description-row">
                    <h3 class="products-card__description--title">
                      ${card.title}
                    </h3>
                    <div class="products-card__description--badge">${card.time} мин</div>
                  </div>
                  <div class="products-card__description-row">
                    <div class="products-card__description-info">
                      <div class="products-card__description-info--rating">
                        <img src="./images/rests/star.svg" alt="star" />
                        ${card.rating}
                      </div>
                      <div class="products-card__description-info--price">
                        От ${card.price} ₽
                      </div>
                      <div class="products-card__description-info--group">
                        ${card.type}
                      </div>
                    </div>
                  </div>
                </div>
              </a>`
      );
    });
  };

  if (container) {
    loading();
    setTimeout(() => {
      randerRests(restArray);
    }, 1000);
  }
};

const goodsFunc = () => {
  const container = document.querySelector("#goods-container");

  const goodsArray = [
    {
      id: 0,
      name: "Ролл угорь стандарт",
      description: "Рис, угорь, соус унаги, <br>кунжут, водоросли нори.",
      price: 250,
      image: "roll-ugor'.jpg",
    },

    {
      id: 1,
      name: "Калифорния лосось стандарт",
      description:
        "Рис, лосось, авокадо, огурец, майонез, икра масаго, водоросли нори.",
      price: 395,
      image: "california-losos'.jpg",
    },

    {
      id: 2,
      name: "Окинава стандарт",
      description:
        " Рис, креветка отварная, сыр сливочный, лосось, огурец свежий...",
      price: 250,
      image: "okinava.jpg",
    },

    {
      id: 3,
      name: "Цезарь маки хl",
      description:
        "Рис, куриная грудка копченая, икра масаго, томат, айсберг, соус цезарь...",
      price: 250,
      image: "cesar'.jpg",
    },

    {
      id: 4,
      name: "Ясай маки стандарт 185 г",
      description:
        "Рис, помидор свежий, перец болгарский, авокадо, огурец, айсберг",
      price: 250,
      image: "yasai.jpg",
    },

    {
      id: 5,
      name: "Ролл с креветкой стандарт",
      description:
        "Рис, водоросли нори, креветки отварные, сыр сливочный, огурцы",
      price: 250,
      image: "krevetka.jpg",
    },
  ];

  const loading = () => {
    container.innerHTML =
      '<p style="width: 100%; text-align: center;">Загрузка</p>';
  };

  const randerGoods = (array) => {
    container.innerHTML = "";

    array.forEach((card) => {
      container.insertAdjacentHTML(
        "beforeend",
        `<div class="products-card">
                <div class="products-card__image">
                  <img src="./images/goods/${card.image}" alt="${card.image}" />
                </div>
                <div class="products-card__description">
                  <div class="products-card__description-row">
                    <h4 class="products-card__description--name">
                      ${card.name}
                    </h4>
                  </div>
                  <div class="products-card__description-row">
                    <p class="products-card__description--text">
                      ${card.description}
                    </p>
                  </div>
                  <div class="products-card__description-row">
                    <div class="products-card__description-controls">
                      <button class="btn btn-primary">
                        В корзину
                        <div class="icon-container">
                          <img
                            src="./images/white-shopping-cart.svg"
                            alt="user-icon"
                          />
                        </div>
                      </button>
                      <span class="products-card__description-controls--price"
                        >${card.price} ₽</span
                      >
                    </div>
                  </div>
                </div>
              </div>`
      );
    });
  };

  if (container) {
    loading();
    setTimeout(() => {
      randerGoods(goodsArray);
    }, 1000);
  }
};

modalFunc();
restsFunc();
goodsFunc();
