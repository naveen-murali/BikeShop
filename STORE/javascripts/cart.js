const cartCardRemove = document.querySelector('.cartCardRemove');
const rateOfProducts = document.querySelectorAll('.rateOfProduct');
const totalProductAmount = document.querySelector('#totalProductAmount');
const discount = document.querySelector('#discount');
const deliveryCharge = document.querySelector('#deliveryCharge');
const totalCartAmount = document.querySelector('#totalCartAmount');
const cartCards = document.querySelectorAll('.cartCard');


//todo: initial function calls
rateOfProduct_localString()
add_totalCartAmount()


//todo: changing the rateOfProduct to local string.
function rateOfProduct_localString() {
    rateOfProducts.forEach((product) => {
        product.textContent = parseFloat(product.textContent).toLocaleString('en-IN');
    })
}

//todo: getting rate from "obj's" "data" attribute.
function get_rate(obj, attribute) {
    return parseFloat(obj.getAttribute(`data-${attribute}`));
}
//todo: setting "data" to "obj's" 'data' attribute.
function set_rate(obj, attribute, data) {
    obj.setAttribute(`data-${attribute}`, data);
}

//todo: changing the all cartAmount to local string.
function cartAmount_to_localString() {
    totalProductAmount.textContent = get_rate(totalProductAmount, "totalProductAmount").toLocaleString('en-IN', { style: 'currency', currency: 'INR' })
    discount.textContent = get_rate(discount, "discount").toLocaleString('en-IN', { style: 'currency', currency: 'INR' })
    deliveryCharge.textContent = get_rate(deliveryCharge, "deliveryCharge").toLocaleString('en-IN', { style: 'currency', currency: 'INR' })
    totalCartAmount.textContent = get_rate(totalCartAmount, "totalCartAmount").toLocaleString('en-IN', { style: 'currency', currency: 'INR' })
}

//todo: adding the Total, Discount and Delivery Charges.
function add_totalCartAmount() {
    let amount = get_rate(totalProductAmount, "totalProductAmount") +
        get_rate(discount, "discount") +
        get_rate(deliveryCharge, "deliveryCharge");
    
    totalCartAmount.textContent = amount;
    set_rate(totalCartAmount, "totalCartAmount", amount)

    /* to transform to local string */
    cartAmount_to_localString()
}

//todo: removing the cart item.
function removeCard(id) {
    let cartCard = document.getElementById(`cartCard${id}`);
    let cartCards_list = Object.values(cartCards);
    let index = cartCards_list.indexOf(cartCard);
    let width = cartCards_list[index].clientHeight;
    
    cartCard.classList.add('colsed');

    for (let i = index; i < cartCards_list.length; i++){
        cartCards_list[i].style.transform = `translateY(-${width+11.2}px)`;
    }

    setTimeout(() => {
        cartCard.style.display = "none";
        for (let i = index; i < cartCards_list.length; i++){
            cartCards_list[i].style.transition = `none`;
            cartCards_list[i].style.transform = `translateY(0rem)`;
        }
    }, 300);

    setTimeout(() => {
        for (let i = index; i < cartCards_list.length; i++){
            cartCards_list[i].style.transition = "all 0.25s ease-out";
        }
    }, 350);

    let qtty = document.getElementById(`qtty${id}`);
    let product = document.getElementById(`rateOfProduct-${id}`);

    let Price = get_rate(totalProductAmount, "totalProductAmount") - get_rate(product, "rateOfProduct") * parseInt(qtty.textContent);
    let decDeliveryCharge = get_rate(deliveryCharge, "deliveryCharge") - get_rate(product, "deliveryCharge");
    
    set_rate(deliveryCharge, "deliveryCharge", decDeliveryCharge);
    set_rate(totalProductAmount, "totalProductAmount", Price);

    add_totalCartAmount();
}

//todo: incrementing the cart quantity.
function increment(id) {
    let qtty = document.getElementById(`qtty${id}`);
    let product = document.getElementById(`rateOfProduct-${id}`);

    let Price = get_rate(totalProductAmount, "totalProductAmount") + get_rate(product, "rateOfProduct");
    set_rate(totalProductAmount, "totalProductAmount", Price);

    qtty.textContent++;
    add_totalCartAmount();
}

//todo: decrementing the cart quantity and removing if it gets to lessthan 1.
function decrement(self, id) {
    let qtty = document.getElementById(`qtty${id}`);


    if (qtty.textContent > 1) {
        let product = document.getElementById(`rateOfProduct-${id}`);
        let Price = get_rate(totalProductAmount, "totalProductAmount") - get_rate(product, "rateOfProduct");
        set_rate(totalProductAmount, "totalProductAmount", Price);
        qtty.textContent--;

    }

    add_totalCartAmount();
}



