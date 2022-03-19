const burger = document.querySelector('.hamburger');
const navContainer = document.querySelector('.navigation-container');

function toggleBurger() {
    burger.classList.toggle('is-active');
    navContainer.classList.toggle('visible');
}

const allCardsData = [{
    planName: 'Basic',
    price: 25,
    link: '#'
},
{
    planName: 'Standard',
    price: 75,
    link: '#'
},
{
    planName: 'Pro',
    price: 125,
    link: '#'
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
        price[i].innerHTML = `<span style="text-decoration: line-through;">$${newPrice}</span> $${newPrice*0.75}`;
    }
}

function createPricingCard(cardData) {
    return `
    <div class="price-card">
        <div class="plan-name">${cardData.planName}</div>
        <h2 class="price">$${cardData.price}</h2>
        <p class="p-m">Per member, Per month</p>
        <button class="start"><a href="${cardData.link}">Get started</a></button>
        <div class="list">
            <ul>
                <li>Unlimited projects</li>
                <li>Sync across devices</li>
                <li>Sharing permission</li>
                <li>30 Days version history</li>
            </ul>
        </div>
    </div>
    `
}