let gallery = document.querySelector("#gallery");
let galleryImage = document.querySelector(".galleryImage");
let imageTarget = document.getElementById("img-target");
let reviewBody = document.getElementById("review-body")

let reviews = [
  {
    text: "We attended my sons all day wrestling tournament on Saturday at Escondido high school. We noticed this man setting up something. We asked what he was selling and he told us pizza. He had a nice set up.. looked like a wood fire oven. Later in that day we decided to order a pizza with a few of his toppings. Kinda of pricey but let me tell you well worth the money. Great size pizza, fresh toppings and oh so delicious!! This to me was better than any papa johns or domino's. I ended up buying him a coffee. This dude was super cool and awesome. I would highly recommend his services",
    star: 5,
    name: "Steven B.",
  },
  {
    text: "We just had them at our Office for our Thanksgiving party-ish thing.  It was tremendous!  I love their pizza, everything is so fresh, and hot.  We just had the pizza's and salad.  I hear they have great cheesesteaks.  Maybe we can get those next time.  They came set up and fed over 100 people in like 2 hours.   Their crew was organized and on it!  Thank you boss and thank you DropOuts Pizza.",
    star: 5,
    name: "Lisa M.",
  },
  {
    text: "Used them before covid for work lunches.   Now using them for a surprise going away party with Wings and Pizza.   Try their new Ghost kitchen at doods deli if you aren't going to hire them for n event.  It's totally worth it",
    star: 5,
    name: "L M.",
  },
  {
    text: "Fredo is the best. He provides amazing service and even more amazing food with all fresh ingredients.",
    star: 5,
    name: "Alondra A."
  },
  {
    text:"So we decided to drive by our favorite brewery's second location and seen they were open. ( Never know lately) and Dropout Pizza was serving. Very light and tasty crust with fresh ingredients. We ordered a second one. Yeah, that good. Expect a nice small pie here. So you can order a few different ones. 5 stars.",
    star: 5,
    name: "Jim E."
  },
  {
    text:"If you're looking for a great Pizza place in Escondido and nearby areas, i'd highly recommend to go to Dropout Pizza! The pizza is delicious and the quality is superb! Don't miss out on this place!",
    star:5,
    name:"Paul D."

  },
  {
    text:"I used Fredo and Dropout for a dealer event we sponsored last October. They were a hit! Everyone got 3rds, the pizzas were amazing. Very friendly service, showed up on time at our location, and got wood fired pizzas going right away. We will definitely use them again- without question. I usually do street tacos, but this was much more popular with my dealers. Thanks again Fredo!",
    star: 5,
    name: "Sam S."
  },
];



let reviewGenerator = function(){
let randomReview = reviews[Math.floor(Math.random()*reviews.length)]
reviewBody.textContent = randomReview.text
console.log(reviewBody)

}

reviewGenerator();

// query params for yelp API
// https://api.yelp.com/v3/businesses/ct27inqcT971zbGcxqp-qA/reviews

// authorization for headers
// XZR6vdKcPk0t6_gS6id7Kg8lfsBsWj1VVlhH9NeddjVJcCzfsfDm6kMJIN7K0viaoh2Nf7VcTRlmjOLmArJyHcsuJtf7bFsd2HG9gw10JcSqQKKdfYnYx

async function instagram() {
  const url =
    "https://graph.instagram.com/me/media?fields=id,caption,permalink,media_url&access_token=IGQVJYS3NiUkx0N0ZAlajVSZAGpzamtUd1JNMlI2S2NYRzQwSmx2bWx3MEtKOXlxSkdMM0VrREYwRGhxX2FhUzdiRlVNcHF0aVlRUzduQS14bkNVT2FVbC1pM045Mnk2TlFwTy0zazduVUxmenJzZAmlQWQZDZD";
  let data = await fetch(url);
  let response = await data.json();
  console.log(response);
  response.data[0].media_url.className = "shit";
  response.data[response.data.length - 1].className = "fuck";
  let allImages = [];
  for (let i = 0; i < response.data.length; i++) {
    let eachImage = `  
    <div id="card" class="card" style="width: 18rem;">
    
    <img src="${response.data[i].media_url}" class="card-img-top" alt="...">
    <div class="card-body">
      <p id="small-text" class= "text-start">guys!! 2 chances to get your flatbreadfix... you can be cool and come see @bigoemeffer at @purebrewingvista or @groovncoogan in san marcos at @wildbarrelbrewing. it's up to you but you know where the parties at!</p>
    </div>
  </div>
  
`;

    allImages.push(eachImage);
    imageTarget.innerHTML = allImages;

    // let igimg = document.createElement("img")
    // igimg.src = response.data[i].media_url
    // console.log(igimg)
    // igimg.style.height = "300px"

    // igimg.style.padding = "15px"
    // igimg.className = "img-fluid"
    // gallery.append(igimg)
  }
  console.log(allImages);

  console.log(gallery);
}

instagram();

// IGQVJYS3NiUkx0N0ZAlajVSZAGpzamtUd1JNMlI2S2NYRzQwSmx2bWx3MEtKOXlxSkdMM0VrREYwRGhxX2FhUzdiRlVNcHF0aVlRUzduQS14bkNVT2FVbC1pM045Mnk2TlFwTy0zazduVUxmenJzZAmlQWQZDZD

// permalink,media_url,

// const instagram = async () =>{

//     const url = 'https://graph.instagram.com/me/media?fields=id,caption,permalink,media_url&access_token=IGQVJYS3NiUkx0N0ZAlajVSZAGpzamtUd1JNMlI2S2NYRzQwSmx2bWx3MEtKOXlxSkdMM0VrREYwRGhxX2FhUzdiRlVNcHF0aVlRUzduQS14bkNVT2FVbC1pM045Mnk2TlFwTy0zazduVUxmenJzZAmlQWQZDZD'
//     let data = await fetch(url)
//     let response = await data.json();
//     console.log(response)
//     let allImages = []
//     for (let i = 0 ; i<response.data.length; i++){
//         let eachImage = `
//         <div class="card" style="width: 18rem;">
//         <img src="${response.data[i].media_url}" class="card-img-top" alt="...">
//         <div class="card-body">
//         <p class="card-text text-center">${response.data[i].caption}</p>
//         </div>
//         </div>

// `

// allImages.push(eachImage)
// imageTarget.innerHTML= allImages

// }
// console.log(allImages)

// console.log(gallery)
// }

console.log(typeof 42.1);
