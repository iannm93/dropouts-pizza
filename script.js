let gallery = document.querySelector("#gallery")
let galleryImage = document.querySelector(".galleryImage")
let imageTarget = document.getElementById("img-target")

async function instagram(){
const url = 'https://graph.instagram.com/me/media?fields=id,caption,permalink,media_url&access_token=IGQVJYS3NiUkx0N0ZAlajVSZAGpzamtUd1JNMlI2S2NYRzQwSmx2bWx3MEtKOXlxSkdMM0VrREYwRGhxX2FhUzdiRlVNcHF0aVlRUzduQS14bkNVT2FVbC1pM045Mnk2TlFwTy0zazduVUxmenJzZAmlQWQZDZD'
let data = await fetch(url)
let response = await data.json();
console.log(response)
let allImages = []
for (let i = 0 ; i<response.data.length; i++){
    let eachImage = `  
    <div id="card" class="card" style="width: 18rem;">
    
    <img src="${response.data[i].media_url}" class="card-img-top" alt="...">
    <div class="card-body">
      <p class="card-text text-center">${response.data[i].caption}</p>
    </div>
  </div>
  
`

allImages.push(eachImage)
imageTarget.innerHTML= allImages

// let igimg = document.createElement("img")
// igimg.src = response.data[i].media_url
// console.log(igimg)
// igimg.style.height = "300px"

// igimg.style.padding = "15px"
// igimg.className = "img-fluid"
// gallery.append(igimg)
}
console.log(allImages)

console.log(gallery)
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

console.log(typeof(42.1))