const cardContanear = document.getElementById("cardContanear");

fetch("https://dummyjson.com/products")
    .then(res => res.json())
    .then(data => {
        showItem(data.products)
    })


const showItem = (items) => {
    for (const item of items) {
        console.log(item);

        const card = document.createElement("div");
        card.classList = "p-[20px] text-[gray] rounded-md card";
        cardContanear.appendChild(card)
        card.innerHTML = `
        <img class="h-[200px]" src=${item?.thumbnail} alt="">
        <h4 class="line-clamp-1">${item?.title}</h4>
        <p>$${item?.price}</p>
        
        `


    }
}