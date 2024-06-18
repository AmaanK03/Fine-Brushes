// array to store the data for each card 
const cardData = [
    {
        address: "Lake Serenity",
        image: "https://i0.wp.com/doodlewash.com/wp-content/uploads/2020/06/Step-13-Watercolor-Monochromatic-Painting-copy.jpg?ssl=1",
        description: "A serene watercolor painting depicting a tranquil lake with reflections of surrounding trees and distant mountains."
    },
    {
        address: "Abstract Waves",
        image: "https://i.pinimg.com/originals/55/c2/6e/55c26ee44e65962d57d6fd3b95915071.jpg",
        description: "An abstract watercolor artwork featuring dynamic waves in shades of blue and green, creating a sense of movement and calmness."
    },
    {
        address: "Waterfall Symphony",
        image: "https://artlogic-res.cloudinary.com/w_345,c_limit,f_auto,fl_lossy,q_auto/ws-artlogicwebsite0746/usr/images/feature_panels/images_and_objects/58/wheatley-jenny-fishing-boat-greece.jpg",
        description: "A detailed watercolor painting capturing the beauty of a waterfall, with light and shadows playing on the cascading water and surrounding rocks."
    },
    {
        address: "Sunset Reflections",
        image: "https://www.rileystreet.com/cdn/shop/articles/shutterstock_410271079_1024x1024.jpg?v=1624398205",
        description: "A picturesque watercolor scene depicting a tranquil sunset reflecting on the water's surface, creating a serene atmosphere."
    },
    {
        address: "Ocean Dreams",
        image: "https://merideewar.com/cdn/shop/articles/a4d7ad5161c30404b6e8d8169571ca29xl_46bfdd3b-b1b2-4850-b75b-82f9bc727abc.jpg?v=1655548441",
        description: "A dreamy watercolor painting of the ocean, capturing the essence of waves and the vastness of the sea under a soft sky."
    },
    {
        address: "River Reflections",
        image: "https://m.media-amazon.com/images/I/91y9IrbmrTL.jpg",
        description: "A calming watercolor artwork portraying reflections on a tranquil river, with trees and sky mirrored in the water's surface."
    }
];


// function to define the card element 

function createCard(cardData) {

    //create a new div element for the card 
    const card =document.createElement('div');

    //add the 'card' class to the div 
    card.className = 'card' ; 

    // set the inner HTML of the card with the data from card data 

    card.innerHTML =  `

    <div class="card-header cart-image">
    ${cardData.address}
    <img class="card-img" src="${cardData.image}" />
    </div>

    <div class ="card-body">
    ${cardData.description}
    </div>

    <div class="card-footer">
      <button class="btn">Details</button>
      <button class="btn btn-outline">Contact Seller</button>
    </div>

    `;

    //return the card element 
    return card
}

// Get  the card grid element from the HTML file 

const cardGrid = document.getElementById('cardGrid');

// Loop through the card data and create a card for each time 

cardData.forEach(cardData => {

//create card element 
const cardElement = createCard(cardData);
// Add card element th the card grid
cardGrid.appendChild(cardElement); // Fixed here

});