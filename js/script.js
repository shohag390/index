const cardContanear = document.getElementById("cardContanear");

fetch("https://jsonplaceholder.typicode.com/todos")
    .then(res => res.json())
    .then(data => {
        showItem(data)
    })


const showItem = (items) => {
    for (const item of items) {
        const card = document.createElement("div");
        card.classList = "p-[20px] text-[gray] rounded-md card";
        cardContanear.appendChild(card)
        const userId = document.createElement("p");
        userId.innerText = item.id;
        card.appendChild(userId);
        const cardname = document.createElement("h4");
        cardname.classList = "line-clamp-1";
        card.appendChild(cardname);
        cardname.innerText = item.title;
        const button = document.createElement("button")
        button.innerText = "More Details";
        button.classList = "py-[7px] px-[20px] border rounded-md mt-[20px] bg-[green] text-[white]";
        card.appendChild(button);
    }
}