const burger = document.querySelector('.hamburger');
const navContainer = document.querySelector('.navigation-container');

function toggleBurger() {
    burger.classList.toggle('is-active');
    navContainer.classList.toggle('visible');
}

const allCommentsData = [{
    imgUrl: "./images/Ellipse 11.png",
    starUrl: "./images/star.png",
    rating: 5,
    name: "Michel William",
    job: "CEO of Company",
    message: "I am very fortunate to trust my company to allies and now our income is increasing. We are try to added more services."
},{
    imgUrl: "./images/Background.png",
    starUrl: "./images/star.png",
    rating: 4,
    name: "Wichel Milliam",
    job: "Janitor",
    message: "Wow this didn't suck"
},{
    imgUrl: "./images/Ellipse 11.png",
    starUrl: "./images/star.png",
    rating: 5,
    name: "Kichel Zilliam",
    job: "Courier",
    message: "LOVE IT LOREM IPSUM!!!"
}
]

let counter = 0;

const arrowLeft = document.querySelector('.arrow-left');
const arrowRight = document.querySelector('.arrow-right');

arrowLeft.addEventListener('click', function(){
    if (counter > 0){
        counter--;
        console.log('left');
        console.log(counter);
        placeForComment.innerHTML = createComment(allCommentsData[counter]);
    }
});
arrowRight.addEventListener('click', function(){
    if(counter < allCommentsData.length-1){
        counter++;
        console.log('right');
        console.log(counter);
        placeForComment.innerHTML = createComment(allCommentsData[counter]);
    }
});

const placeForComment = document.querySelector('.comment-wrapper');
//allCommentsData.forEach(item => placeForComment.innerHTML += createComment(item));

placeForComment.innerHTML = createComment(allCommentsData[counter]);

function createComment(commentData) {
    let stars = ``;
    for(let i = 0; i<commentData.rating; i++){
        stars += `<img src="${commentData.starUrl}">`;
    }
    return `<div class="first-row flex-between">
                    <img src="${commentData.imgUrl}">
                    <div class="stars">
                        ${stars}
                    </div>
                </div>
                <p class="client-name">${commentData.name}</p>
                <p class="grey-text job">${commentData.job}</p>
                <p class="grey-text message">${commentData.message}</p>
            `
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