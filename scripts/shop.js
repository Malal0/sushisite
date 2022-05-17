const foodItems = [
    {
        title: "Caterpillar Roll",
        price: 2.95,
        img: "https://order.kurasushi.com/uploads/1/3/4/5/134522373/s934172392851576524_p65_i2_w800.jpeg?width=320"
    },
    {
        title: "Golden Crunchy Roll",
        price: 2.95,
        img: "https://order.kurasushi.com/uploads/1/3/4/5/134522373/s934172392851576524_p115_i3_w800.jpeg?width=320"
    },
    {
        title: "Ikura Norimaki",
        price: 2.95,
        img: "https://order.kurasushi.com/uploads/1/3/4/5/134522373/s934172392851576524_p87_i3_w800.jpeg?width=320"
    },
    {
        title: "Kappa Maki",
        price: 2.95,
        img: "https://order.kurasushi.com/uploads/1/3/4/5/134522373/s934172392851576524_p112_i2_w800.jpeg?width=320"
    },
    {
        title: "Kura Roll",
        price: 2.95,
        img: "https://order.kurasushi.com/uploads/1/3/4/5/134522373/s934172392851576524_p41_i2_w800.jpeg?width=320"
    },
    {
        title: "Philadelphia Roll",
        price: 2.95,
        img: "https://order.kurasushi.com/uploads/1/3/4/5/134522373/s934172392851576524_p21_i3_w800.jpeg?width=320"
    },
    {
        title: "",
        price: 2.95,
        img: ""
    },
    {
        title: "Shrimp Avocado Roll",
        price: 2.95,
        img: "https://order.kurasushi.com/uploads/1/3/4/5/134522373/s934172392851576524_p107_i2_w800.jpeg?width=320"
    }
]
//      Shop Javascript     //
const shopProducts = document.querySelector('.shop-products');

foodItems.forEach(child => {
    let div = document.createElement("div");
    div.classList.add("shop-item");
    div.innerHTML = `
    <img src=${child.img} class="productImg" alt="pic"/>
    <p class="productTitle">${child.title}</p>
    <p class="productPrice">$${child.price}</p>
    <div class="shop-item-button">
    <button data-value="-1">-</button>
    <p class="productAmount">0</p>
    <button data-value="1">+</button>
    </div>
    `;

    shopProducts.appendChild(div);
});

const shopProductsArray = Array.from(shopProducts.children);

shopProductsArray.forEach(child => {
    const buttons = child.querySelectorAll("[data-value]");
    const amount = child.querySelector(".productAmount")

    let initial = 0;
    buttons.forEach(btn => btn.addEventListener("click", () => {
        const dv = parseInt(btn.dataset.value);

        if (dv == 1) {
            initial++
            amount.textContent = initial;
        } else if (dv == -1 && initial > 0) {
            initial--
            amount.textContent = initial;
        };
    }));
});