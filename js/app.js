const cars = {
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


// set total services

function ourServices(services) {
    const servicesField = document.getElementById('services-field')
    const element = document.createElement('div')
    const stringData = JSON.stringify(services)
    element.innerHTML = `
    
    <div class="card my-4 mx-auto" style="max-width: 540px;">
    <div class="row g-0">
      <div class="col-md-4">
        <img src="${services.imageURL}" class="img-fluid rounded-start h-100" alt="...">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">Transpose Mood: ${services.vehicles}</h5>
          <p class="card-text">${services.description}</p>
          <p class="card-text"><small class="text-muted">Fare Per Kilo: ${services.farePerKilo} //Capacity: ${services.capacity}</small></p>
          <button onclick='booking(${stringData})' type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
            BOOk NOW
            </button>
        </div>
      </div>
    </div>
  </div>
  `

    servicesField.appendChild(element)
}

const services = [cars, bus, bike]
function DisplayAllServices(arr){
  for(let service of arr){
    ourServices(service)
  }
}
DisplayAllServices(services)


// handling the booking part 


function booking(obj) {
    const modalBody = document.getElementById('modal-body')
    const modalTitle = document.getElementById('exampleModalLabel')
    modalTitle.innerText = obj.vehicles
    modalBody.innerHTML = `
    <div class="card" style="width: 18rem;">
    <img src="${obj.imageURL}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Vehicle Mood: ${obj.vehicles}</h5>
      <p class="card-text"> ${obj.description} </p>
      <p class="card-text"><small class="text-muted">Fare Per Kilo: ${obj.farePerKilo} //Capacity: ${obj.capacity}</small></p>
      <p class="card-text"><small class="text-muted">Fare: $ <span id="show-fare"></span> </small></p>
      <p class="card-text"><small class="text-muted">Tax: $ <span id="show-tax"></span> </small></p>
      <p class="card-text"><small class="text-muted">Total: $ <span id="show-total"></span> </small></p>
      
      <div class="d-flex flex-column" role="search">
      <input id="distance" class="form-control m-2" type="number" placeholder="Enter you distance" aria-label="Search">
      <input id="quantity" class="form-control m-2" type="number" placeholder="Enter car quantity" aria-label="Search">
      <button onclick='calculateFare(${JSON.stringify(obj)})' class="btn btn-outline-success mx-auto" type="submit">Search</button>
    </div>
    </div>
  </div>
    `
}


function calculateFare(obj){
    const distance = document.getElementById('distance')
    const quantity = document.getElementById('quantity')
    const DisplayFare = document.getElementById('show-fare')
    const DisplayTax = document.getElementById('show-tax')
    const DisplayTotal = document.getElementById('show-total')

    // calculate fare 
    const fareCost = parseFloat(distance.value) * parseFloat(quantity.value) * obj.farePerKilo
    DisplayFare.innerText = fareCost
    const taxCost = fareCost * 0.05
    DisplayTax.innerText = taxCost
    const total = fareCost + taxCost
    DisplayTotal.innerText = total

    distance.value = ''
    quantity.value = ''

}


// working with search btn 
document.getElementById('search-btn').addEventListener('click', function(){
  const searchingElement = document.getElementById('search-field').value
  for(let service of services){
    if(searchingElement.toLowerCase() == service.vehicles.toLowerCase()){
      document.getElementById('services-field').innerHTML = ''
      ourServices(service)
      return
    }
  }
})

