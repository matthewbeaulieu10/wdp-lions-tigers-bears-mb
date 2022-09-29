let timer
let deleteFirstPhotoDelay

// async function start() {
    
//         const response = await fetch("https://random.dog/woof.json")
//         const data = await response.json()
//         console.log(data)
    
    
// }

//start()

function getAnimal() {
    animal = document.getElementById("list").value
    showAnimal(animal)
}

async function showAnimal(animal) { 
    if (animal == "d") {
        const response = await fetch("https://random.dog/woof.json")
        const data = await response.json()
        console.log(data.url)
        try {
            document.getElementById("slideshow").innerHTML = `
            <div class="slide" style="background-image:url('${data.url}')"></div>
            `
        } catch {
            console.log("uh oh")
        }
    }
}

async function loadByAnimal() {
    if (breed != "Choose a dog breed") {
        const response = await fetch(`https://dog.ceo/api/breed/${breed}/images`)
        const data = await response.json()
        createSlideshow(data.message)
    }
}

// function createSlideshow(images) {
//     let now = 0
//     clearInterval(timer)
//     clearTimeout(deleteFirstPhotoDelay)
//     document.getElementById("slideshow").innerHTML = `
//     <div class="slide" style="background-image: url('${images[0]}')"></div>
//     <div class="slide" style="background-image: url('${images[1]}')"></div>
//     `
//     now += 2 
//     timer = setInterval(nextSlide, 3000)
    
//     function nextSlide() {
//         document.getElementById("slideshow").insertAdjacentHTML("beforeend", `<div class="slide" style="background-image: url('${images[now]}')"></div>`)
//         deleteFirstPhotoDelay = setTimeout(removeSLide(), 1000)
//         if (now + 1 >= images.length) {
//             now = 0
//         } else {
//             now++
//         }
    
//     }

//     function removeSlide() {
//         document.querySelector(".slide").remove()
//     }

    
// }

