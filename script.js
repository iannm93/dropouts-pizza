// import reviewss from "./API"
let gallery = document.querySelector("#gallery");
let imageTarget = document.getElementById("img-target");
let nameTargetOne = document.getElementById("name-target-1");
let reviewBodyOne = document.getElementById("review-body-1");
let starContainerOne = document.getElementById("star-container-1");
let nameTargetTwo = document.getElementById("name-target-2");
let reviewBodyTwo = document.getElementById("review-body-2");
let starContainerTwo = document.getElementById("star-container-2");
let nameTargetThree = document.getElementById("name-target-3");
let reviewBodyThree = document.getElementById("review-body-3");
let starContainerThree = document.getElementById("star-container-3");
let seeMore = document.getElementById("see-more");
let leaveReview = document.getElementById("leave-review");
let instagramInUpdate = document.getElementById("ig-link");
let phoneNumber = document.getElementById("phone-number")

let igLinkForUpdate = () => {
  window.open("https://www.instagram.com/dropoutspizza/");
};

let seeMoreReviews = () => {
  window.open(
    "https://www.google.com/search?q=google+reviews+drop+outs+pizza&rlz=1C1CHBF_enUS866US866&oq=google+reviews+drop+outs+pizza&aqs=chrome..69i57j69i64.6013j0j7&sourceid=chrome&ie=UTF-8#lrd=0x80dbf56fd14d3803:0x763af43311db62ae,1,,,"
  );
};
let writeReview = () => {
  window.open(
    "https://www.google.com/search?q=google+reviews+drop+outs+pizza&rlz=1C1CHBF_enUS866US866&oq=google+reviews+drop+outs+pizza&aqs=chrome..69i57j69i64.6013j0j7&sourceid=chrome&ie=UTF-8#lrd=0x80dbf56fd14d3803:0x763af43311db62ae,3,,,"
  );
};
let call = () =>{
  window.open(`${phoneNumber.textContent}`);
}

// ------------ START EVENT LISTENERS ------------------
phoneNumber.addEventListener("click", call)
leaveReview.addEventListener("click", writeReview);
seeMore.addEventListener("click", seeMoreReviews);
instagramInUpdate.addEventListener("click", igLinkForUpdate);
// ------------ END EVENT LISTENERS ------------------

let reviews = [
  {
    text: "We attended my sons all day wrestling tournament on Saturday at Escondido high school. We noticed this man setting up something. We asked what he was selling and he told us pizza. He had a nice set up.. looked like a wood fire oven. Later in that day we decided to order a pizza with a few of his toppings. Kinda of pricey but let me tell you well worth the money. Great size pizza, fresh toppings and oh so delicious!! This to me was better than any papa johns or domino's. I ended up buying him a coffee. This dude was super cool and awesome. I would highly recommend his services",
    star: 5,
    name: "- Steven B.",
  },
  {
    text: "We just had them at our Office for our Thanksgiving party-ish thing.  It was tremendous!  I love their pizza, everything is so fresh, and hot.  We just had the pizza's and salad.  I hear they have great cheesesteaks.  Maybe we can get those next time.  They came set up and fed over 100 people in like 2 hours.   Their crew was organized and on it!  Thank you boss and thank you DropOuts Pizza.",
    star: 5,
    name: "- Lisa M.",
  },
  {
    text: "Used them before covid for work lunches.   Now using them for a surprise going away party with Wings and Pizza.   Try their new Ghost kitchen at doods deli if you aren't going to hire them for n event.  It's totally worth it",
    star: 5,
    name: "- L M.",
  },
  {
    text: "Fredo is the best. He provides amazing service and even more amazing food with all fresh ingredients.",
    star: 5,
    name: "- Alondra A.",
  },
  {
    text: "So we decided to drive by our favorite brewery's second location and seen they were open. ( Never know lately) and Dropout Pizza was serving. Very light and tasty crust with fresh ingredients. We ordered a second one. Yeah, that good. Expect a nice small pie here. So you can order a few different ones. 5 stars.",
    star: 5,
    name: "- Jim E.",
  },
  {
    text: "If you're looking for a great Pizza place in Escondido and nearby areas, i'd highly recommend to go to Dropout Pizza! The pizza is delicious and the quality is superb! Don't miss out on this place!",
    star: 5,
    name: "- Paul D.",
  },
  {
    text: "I used Fredo and Dropout for a dealer event we sponsored last October. They were a hit! Everyone got 3rds, the pizzas were amazing. Very friendly service, showed up on time at our location, and got wood fired pizzas going right away. We will definitely use them again- without question. I usually do street tacos, but this was much more popular with my dealers. Thanks again Fredo!",
    star: 5,
    name: "- Sam S.",
  },
];



let reviewGenerator = function () {
  let randomReviewOne = reviews[Math.floor(Math.random() * reviews.length)];
  let randomReviewTwo = reviews[Math.floor(Math.random() * reviews.length)];
  let randomReviewThree = reviews[Math.floor(Math.random() * reviews.length)];
  // ----------------------RANDOM REVIEW 1-----------------------
  if (randomReviewOne.star === 5) {
    starContainerOne.innerHTML = `<img class= "img-fluid" id ="star-target"src="http://pluspng.com/img-png/star-png-star-vector-png-transparent-image-2000.png">
  <img class= "img-fluid" id ="star-target"src="http://pluspng.com/img-png/star-png-star-vector-png-transparent-image-2000.png">
  <img class= "img-fluid" id ="star-target"src="http://pluspng.com/img-png/star-png-star-vector-png-transparent-image-2000.png">
  <img class= "img-fluid" id ="star-target"src="http://pluspng.com/img-png/star-png-star-vector-png-transparent-image-2000.png">
  <img class= "img-fluid" id ="star-target"src="http://pluspng.com/img-png/star-png-star-vector-png-transparent-image-2000.png">
  `;
  }
  nameTargetOne.textContent = randomReviewOne.name;
  nameTargetOne.style.opacity = 0;
  starContainerOne.style.opacity = 0;
  reviewBodyOne.textContent = randomReviewOne.text;
  reviewBodyOne.style.opacity = 0;
  // ------------RANDOM REVIEW 2-------------------------
  if (randomReviewTwo.star === 5) {
    starContainerTwo.innerHTML = `<img class= "img-fluid" id ="star-target"src="http://pluspng.com/img-png/star-png-star-vector-png-transparent-image-2000.png">
  <img class= "img-fluid" id ="star-target"src="http://pluspng.com/img-png/star-png-star-vector-png-transparent-image-2000.png">
  <img class= "img-fluid" id ="star-target"src="http://pluspng.com/img-png/star-png-star-vector-png-transparent-image-2000.png">
  <img class= "img-fluid" id ="star-target"src="http://pluspng.com/img-png/star-png-star-vector-png-transparent-image-2000.png">
  <img class= "img-fluid" id ="star-target"src="http://pluspng.com/img-png/star-png-star-vector-png-transparent-image-2000.png">
  `;
  }
  nameTargetTwo.textContent = randomReviewTwo.name;
  nameTargetTwo.style.opacity = 0;
  starContainerTwo.style.opacity = 0;
  reviewBodyTwo.textContent = randomReviewTwo.text;
  reviewBodyTwo.style.opacity = 0;
  // --------------------RANDOM REVIEW 3-----------------------------------------------
  if (randomReviewThree.star === 5) {
    starContainerThree.innerHTML = `<img class= "img-fluid" id ="star-target"src="http://pluspng.com/img-png/star-png-star-vector-png-transparent-image-2000.png">
    <img class= "img-fluid" id ="star-target"src="http://pluspng.com/img-png/star-png-star-vector-png-transparent-image-2000.png">
    <img class= "img-fluid" id ="star-target"src="http://pluspng.com/img-png/star-png-star-vector-png-transparent-image-2000.png">
    <img class= "img-fluid" id ="star-target"src="http://pluspng.com/img-png/star-png-star-vector-png-transparent-image-2000.png">
    <img class= "img-fluid" id ="star-target"src="http://pluspng.com/img-png/star-png-star-vector-png-transparent-image-2000.png">
    `;
  }
  nameTargetThree.textContent = randomReviewThree.name;
  nameTargetThree.style.opacity = 0;
  starContainerThree.style.opacity = 0;
  reviewBodyThree.textContent = randomReviewThree.text;
  reviewBodyThree.style.opacity = 0;
  // -----------------------------------------------------------------
};

reviewGenerator();
let opacityFade = function () {
  let fadeOpacity = Number(
    window.getComputedStyle(reviewBodyOne).getPropertyValue("opacity")
  );
  if (reviewBodyOne.style.opacity <= 1) {
    fadeOpacity = fadeOpacity + 0.005;
    reviewBodyOne.style.opacity = fadeOpacity;
    nameTargetOne.style.opacity = fadeOpacity;
    starContainerOne.style.opacity = fadeOpacity;
    reviewBodyTwo.style.opacity = fadeOpacity;
    nameTargetTwo.style.opacity = fadeOpacity;
    starContainerTwo.style.opacity = fadeOpacity;
    reviewBodyThree.style.opacity = fadeOpacity;
    nameTargetThree.style.opacity = fadeOpacity;
    starContainerThree.style.opacity = fadeOpacity;
  }
};
setInterval(reviewGenerator, 10000);
setInterval(opacityFade, 10);

// query params for yelp API
// https://api.yelp.com/v3/businesses/ct27inqcT971zbGcxqp-qA/reviews

// authorization for headers
// XZR6vdKcPk0t6_gS6id7Kg8lfsBsWj1VVlhH9NeddjVJcCzfsfDm6kMJIN7K0viaoh2Nf7VcTRlmjOLmArJyHcsuJtf7bFsd2HG9gw10JcSqQKKdfYnYx

async function instagram(event) {
  const url =
    "https://graph.instagram.com/me/media?fields=id,caption,permalink,media_url&access_token=IGQVJWaHQtR00wUzVudkRxWS1wQVcwd1l1ejlhR1RrM094NTl5Rno4QnI2aW5ibHZAmRy1Fb1puaEpaeUdJYVhVc2cycG5CcDJQQUN5aXRJMW5JVjlPbS1OcnFUdGRwVXNCYkxFZAkNLalBKb0JiZA0xkVAZDZD";
  let data = await fetch(url);
  let response = await data.json();
  let goToInstagram = (event) => {
    let elementClicked = event.target;

    for (let j = 0; j < response.data.length; j++) {
      if (
        elementClicked.src === response.data[j].media_url ||
        elementClicked.textContent === response.data[j].caption
      ) {
        window.open(`${response.data[j].permalink}`)
      }
    }
  };

  let allImages = [];
  for (let i = 0; i < response.data.length; i++) {
    let eachImage = `  
    <div id="card" class="card" style="width: 18rem;">
    
    <img id="specific-image" src="${response.data[i].media_url}" class="card-img-top" alt="...">
    <div class="card-body">
    <p id="small-text" class= "text-start">${response.data[i].caption}</p>
    </div>
    </div>
    `;

    gallery.addEventListener("click", goToInstagram);
    // let smallText = document.getElementById("small-text")
    // imageTarget.addEventListener("click", goToInstagram)
    // smallText.addEventListener("click", goToInstagram)

    allImages.push(eachImage);
    imageTarget.innerHTML = allImages;
  }

}

instagram();

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
