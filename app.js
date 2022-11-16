//CART ELEMETS
let Plussing = document.querySelector(".plus")
let Minusing = document.querySelector(".minus")
let digitEl = document.querySelector(".digit")
let digit = 0
cartNumEl = document.querySelector(".carted-num")


//cart element
price = 125
let addToCartEl = document.querySelector("#addtocart")
let originalPriceEl = document.querySelector(".original_price")
let multEl = document.querySelector(".mult")
let howManyEl = document.querySelector(".howmany")
let totalEl = document.querySelector(".total")
let priceSortEl = document.querySelector(".price_sort")
let biEl = document.querySelector(".bi")
let afterAddingEl = document.querySelector(".afteradding")


//making the number add after clicking the plus icon
Plussing.addEventListener("click", () =>{
digit += 1
digitEl.textContent = digit
})

//making the number subtract after clicking the minus icon
Minusing.addEventListener("click", () =>{
    if (digit > 0) {
        digit -= 1
        digitEl.textContent = digit
    } else {
        null
    }
    })

//making the number show above the cart after clicking the addtocart button
addToCartEl.addEventListener("click", (e) =>{
    e.preventDefault()
    cartNumEl.textContent = digit
    
})


//making the card visible after clicking the cart icon
const empty = document.createElement("span");
const text = document.createTextNode("The cart is empty");
empty.appendChild(text)

biEl.addEventListener("click", (e) =>{
    e.preventDefault()

    if (digit > 0) {
        originalPriceEl.textContent = "$" + price
        multEl.textContent = "x"
        howManyEl.textContent = digit
        totalEl.textContent =  "$" +125 * digit
    } else {
        afterAddingEl.appendChild(empty)
    }
    if (afterAddingEl.className == "afteradding") {
        afterAddingEl.className = "afteradding1";
      } else {
        afterAddingEl.className = "afteradding";
      }
})

//NAVBAR IN AND OUT 
hamburger = document.querySelector(".hamburger")
hamburger.onclick = ()=>{
    navbar = document.querySelector(".hide");
    navbar.classList.toggle("active");
}

// element.classList.toggle("mystyle");

//show whats on the card


    // cartNumEl = () => {
    //     if (cartNumEl.style.display ==="none" && digit > 0) {
    //         cartNumEl.display = "block" + digit
    //         cartNumEl.innerHTML = digit
    //     } else {
    //         cartedNumEl.display = "none"
    //     }
    // }

    // const element = document.getElementById("myDIV");
    // if (element.className == "myStyle") {
    //   element.className = "newStyle";
    // } else {
    //   element.className = "myStyle";
    // }