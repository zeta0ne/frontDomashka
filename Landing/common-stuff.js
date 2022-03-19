const burger = document.querySelector('.hamburger');
const navContainer = document.querySelector('.navigation-container');

function toggleBurger() {
    burger.classList.toggle('is-active');
    navContainer.classList.toggle('visible');
}

const allCommentsData = [{
    img: "./images/Ellipse 11.png",
    star: "",
    rating: 5,
    name: "Michel William",
    job: "CEO of Company",
    message: "I am very fortunate to trust my company to allies and now our income is increasing. We are try to added more services."
}

]

function createComment(commentData) {
    return `<div class="text-wrapper">
                <div class="first-row flex-between">
                    <img src="${commentData.img}">
                    <div class="stars">
                        <img src="./images/star.png">
                        <img src="./images/star.png">
                        <img src="./images/star.png">
                        <img src="./images/star.png">
                        <img src="./images/star.png">
                    </div>
                </div>
                <p class="client-name">${commentData.name}</p>
                <p class="grey-text job">${commentData.job}</p>
                <p class="grey-text message">${commentData.message}</p>
            </div>`
}

const allCardsData = [{
    planName: 'Basic',
    price: 25,
    link: '#',
    list: `<ul>
            <li>Limited projects</li>
            <li>Sync across devices</li>
            <li>Sharing permission</li>
            <li>30 Days version history</li>
        </ul>`
},
{
    planName: 'Standard',
    price: 75,
    link: '#',
    list: `<ul>
            <li>Everything in free</li>
            <li>Sync across devices</li>
            <li>Share with 5 teams</li>
            <li>30 Days version history</li>
        </ul>`
},
{
    planName: 'Pro',
    price: 125,
    link: '#',
    list: `<ul>
            <li>Unlimited projects</li>
            <li>Sync across devices</li>
            <li>Unlimited sharing</li>
            <li>Unlimited version history</li>
        </ul>`
}
];

const pricingCards = document.querySelector('.pricing-cards');
allCardsData.forEach(item => pricingCards.innerHTML += createPricingCard(item));
const secondCard = pricingCards.querySelectorAll('.price-card')[1];
secondCard.classList.add('dark');

function monthlyPrice(){
    const price = pricingCards.querySelectorAll('.price');
    for (let i = 0; i < price.length; i++){
        const newPrice = allCardsData[i].price;
        price[i].innerHTML = `$${newPrice}`;
    }
}

function yearlyPrice(){
    const price = pricingCards.querySelectorAll('.price');
    for (let i = 0; i < price.length; i++){
        const newPrice = allCardsData[i].price * 12;
        price[i].innerHTML = `<span style="
        text-decoration: line-through; 
        font-weight: 300;">
            $${newPrice}
        </span> $${newPrice*0.75}`;
    }
}

function createPricingCard(cardData) {
    return `
    <div class="price-card">
        <div class="plan-name">${cardData.planName}</div>
        <h2 class="price">$${cardData.price}</h2>
        <p class="p-m">Per member, Per month</p>
        <button class="start"><a href="${cardData.link}">Get started</a></button>
        <div class="list">${cardData.list}</div>
    </div>
    `
}