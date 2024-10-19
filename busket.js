const localData = JSON.parse(localStorage.getItem("cartList"))
let cartList =[]
const desserts = document.querySelector(".desserts")
if(localData){ 
    cartList = localData
}
domRender(cartList)
function domRender(list){
    list.forEach(item=>{
        desserts.innerHTML+=`
                            <div class = "dessert">
                                <img src="${item.img}" alt="${item.name}" onerror="this.src='https://harvestcakes.com/static/img/product_not_found.png'">
                                <h3>${item.name}</h3>
                            <div>
                                <p>${item.price}AZN</p>
                                <button>${item.count}</button>
                            </div>
                            </div>`
    })
}
