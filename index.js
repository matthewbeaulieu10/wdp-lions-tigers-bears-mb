//retrieves the value from the drop down menu and passes it to show animal
function getAnimal() {
    animal = document.getElementById("list").value
    showAnimal(animal)
}

//determines what kinda animal the user wants
//accesses the data from that API
//creates a slide element inside the slideshow div using the data
async function showAnimal(animal) { 
    if (animal == "d") {
        
        const response = await fetch("https://random.dog/woof.json")
        const data = await response.json()
        
        document.getElementById("slideshow").innerHTML = `
        <div class="slide" style="background-image:url('${data.url}')"></div>
        `     
    }

    else if (animal == "c"){
        const response = await fetch("https://aws.random.cat/meow")
        const data = await response.json()
        
        document.getElementById("slideshow").innerHTML = `
        <div class="slide" style="background-image:url('${data.file}')"></div>
        `     
    }

    else if (animal == "f"){
        const response = await fetch("https://randomfox.ca/floof/")
        const data = await response.json()

    
        
        document.getElementById("slideshow").innerHTML = `
        <div class="slide" style="background-image:url('${data.image}')"></div>
        `     
    }
}
