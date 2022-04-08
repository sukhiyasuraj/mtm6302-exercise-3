//Retrive Form 
const $form = document.getElementById('form')
//Full Name content
const $name = document.getElementById('name')
//get Employment Status
const $empStatus = document.getElementById('empStatus')
//Qualifications data
const $qualification = document.getElementById('formtext')
//Check Box data terms and condition
const $tandc = document.getElementById('tandc')
// Submit Button
const $submit = document.getElementById('submit')
//Save Button
const $save = document.getElementById('save')
//Date and Time div
const $dt = document.getElementById('dt')
//Modal 
const $modal = document.getElementById('modal')


function job(){
html.push(`<h1>Job Listing</h1>
<form id="form">
    <div id="dt"></div>
    <div class="mb-3">
        <label id="name">Full Name</label>
        <input id="text" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">        </div>
    </div>
    <label for="Employment">Current Employment Status </label>
    <div class="dropdown mt-3">
      <select class="form-select" aria-label="Default select example" id="empStatus">
        <option selected>Select an option</option>
        <option value="Full-Time">Full Time</option>
        <option value="Part-Time">Part Time</option>
        <option value="Unemployed">Unemployed</option>
      </select>
      </div>
      <br>
    <div class="mb-3">
        <label for="qualifications">What are your qualifications</label>
        <textarea class="form-control p-5" id="formtext"></textarea>
    </div>
    <div class="mb-3 form-check">
        <input type="checkbox" class="form-check-input" id="tandc">
        <label class="tandc" for="termsandcondition">Accept the Terms and Conditions</label>
    </div>
    <div class="button_form_bottom">
        <button id="save" type="save" class="btn btn-dark save">Save</button>
        <button id="submit" type="submit" class="btn btn-primary submit">Submit</button>
    </div> 
</form> 

    `)
}


function resetForm(){
    push.HTML(``)
}



// SAVE BUTTON 
      $save.addEventListener('click', function(e){

        e.preventDefault();


        const listingData = {
            empStatus: $empStatus.value,
            qualification: $qualification.value,
            tandc: $tandc.checked,
            name: $name.value
        }
        localStorage.setItem('listingData', JSON.stringify(listingData))
        
        dt()
        

        console.log($name.value)
    })
// Get Data from local storage to prevent it even on the refresh

const refreshPrevent = localStorage.getItem('listingData')
//puting data back to the variable
if(refreshPrevent){
    const listingData = JSON.parse(refreshPrevent)
    $name.value = listingData.name
    $empStatus.value = listingData.empStatus
    $qualification.value = listingData.qualification
    $tandc.checked = listingData.tandc
    dt()
}
console.log($name.value)
//Submit Button

$form.addEventListener('submit', function(e){
    

    $dt.style.display = 'none'
    
    localStorage.clear();

    console.log('submit')

    $modal.style.display = 'block'

    form.reset()

    e.preventDefault();
    

})

// Date and Time

function dt(){
    const dt = new Date()

    const options = {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        year: 'numeric',
        hour: '2-digit',
        minutes: '2-digit'
    }

    $dt.textContent = dt.toLocaleString('en-CA', options)
}


$modal.addEventListener('click', function(e){
    if(e.target.dataset.bsDismiss) {
      $form.reset()
  
      $modal.style.display = 'none'
    }
  })

