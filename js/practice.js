const car = {
    vehicles: 'Car',
    imageURL: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FyfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=400&q=60',
    farePerKilo: 3,
    capacity: 11,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum laborum exercitationem necessitatibus quod ducimus repellendus.'
}

const bus = {
    vehicles: 'Bus',
    imageURL: "https://images.unsplash.com/photo-1568286353270-72b907e129bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
    farePerKilo: 2,
    capacity: 40,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum laborum exercitationem necessitatibus quod ducimus repellendus.'
}
const bike = {
    vehicles: 'Bike',
    imageURL: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmlrZXxlbnwwfDB8MHx8&auto=format&fit=crop&w=400&q=60",
    farePerKilo: 4,
    capacity: 3,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum laborum exercitationem necessitatibus quod ducimus repellendus.'
}

const train = {
    vehicles: 'Train',
    imageURL: "https://images.unsplash.com/photo-1541427468627-a89a96e5ca1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dHJhaW58ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60",
    farePerKilo: 10,
    capacity: 300,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum laborum exercitationem necessitatibus quod ducimus repellendus.'
}
const aeroplane = {
    vehicles: 'Aeroplane',
    imageURL: "https://images.unsplash.com/photo-1542296332-2e4473faf563?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGFlcm9wbGFuZXxlbnwwfDB8MHx8&auto=format&fit=crop&w=400&q=60",
    farePerKilo: 50,
    capacity: 200,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum laborum exercitationem necessitatibus quod ducimus repellendus.'
}
const allServices = [car, bike, bus, aeroplane, train]

for (let service of allServices) {
    DisplayAllServices(service)
}


function DisplayAllServices(services) {
    const displayServiceField = document.getElementById('services-field')
    const div = document.createElement('div')
    div.innerHTML = `
            <div class="card my-3 mx-auto" style="max-width: 540px;">
            <div class="row g-0">
            <div class="col-md-4">
            <img src="${services.imageURL}" class="img-fluid rounded-start h-100" alt="...">
            </div>
            <div class="col-md-8">
            <div class="card-body">
                <h5 class="card-title">Transport Mood: ${services.vehicles} </h5>
                <p class="card-text"> ${services.description} </p>
                <p class="card-text"><small class="text-muted"> Fare Per Kilo: ${services.farePerKilo} ::: Capacity: ${services.capacity} </small></p>
                <button onclick='openModal(${JSON.stringify(services)})' type="button" class="btn btn-primary px-4 py-2" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Book Now
                </button>
            </div>
            </div>
        </div>
        </div>
    `

    displayServiceField.append(div)
}

function openModal(obj){
    const modalBody = document.getElementById('modal-body')
    modalBody.innerHTML = `
    <div class="card" style="width: 18rem;">
    <img src="${obj.imageURL}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${obj.vehicles}</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <p class="card-text"><small class="text-muted">Fare: <span id='fare-field'>00</span> </small></p>
      <p class="card-text"><small class="text-muted">Tax: <span id='tax-field'>00</span> </small></p>
      <p class="card-text"><small class="text-muted">Total: <span id='total-field'>00</span> </small></p>
      <div class="d-flex my-5 flex-column" role="search">
      <input id="distance-field" class="form-control m-2" type="number" placeholder="Enter Distance(KM)" aria-label="Search">
      <input id="cars-number" class="form-control m-2" type="number" placeholder="How many cars do you need?" aria-label="Search">
      <button onclick='calculate(${JSON.stringify(obj)})' class="btn btn-outline-success" type="submit">Calculate</button>
    </div>
    </div>
  </div>
    `
}


function calculate(obj){
    // get some id for display 
    const fareDisplay = document.getElementById('fare-field')
    const taxDisplay = document.getElementById('tax-field')
    const totalDisplay = document.getElementById('total-field')

    const distance = document.getElementById('distance-field')
    const carsNumber = document.getElementById('cars-number')

    // calculate and set value 
    // calculate fare and display 
    fareCost = parseFloat(distance.value) * parseFloat(carsNumber.value) * obj.farePerKilo
    fareDisplay.innerText = fareCost
    // calculate tax and display 
    const taxAmount = fareCost * 0.05
    taxDisplay.innerText = taxAmount

    // calculate total and display
    const totalAmount = fareCost + taxAmount
    totalDisplay.innerText = totalAmount 

}


// working with searching button 
// document.getElementById('form').addEventListener('submit', function(event){
//     event.preventDefault()
//     const searchingElement = document.getElementById('search-field')
//     for(let element of allServices){
//         if(searchingElement.value.toLowerCase() == element.vehicles.toLowerCase()){
//             document.getElementById('services-field').innerHTML = ''
//             DisplayAllServices(element)
//         }

//     }

//     searchingElement.value = ''

// })

const searchingElement = document.getElementById('search-field')
searchingElement.addEventListener('keyup',  function(event){
    event.preventDefault()
    let value = event.target.value
    for(let element of allServices){
        if(value.toLowerCase() == element.vehicles.toLowerCase()){
            document.getElementById('services-field').innerHTML = ''
            DisplayAllServices(element)

        }
    }
})
