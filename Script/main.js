// Menu de mobile
const logoMenu = document.querySelector(".menu-logo")
const mobileNav = document.querySelector(".nav")

logoMenu.addEventListener("click", function showMenu(){
    mobileNav.classList.toggle("inactive")
})


//Formulario de identificación y validación de datos
const sendFormId = document.querySelector(".id-form")
const documentType = document.querySelector(".select-document")
const userAge = document.querySelector(".select-age")
const idData = document.querySelector(".id-container")
const idMessage = document.querySelector(".welcome-msg")

sendFormId.addEventListener("submit", function sendInfo(){
    const idNumber = document.getElementById("document")
    const name = document.getElementById("name")
    const surname = document.getElementById("surname")
    event.preventDefault()

    if(documentType.selectedIndex === 0){
        alert("Seleccione un tipo de documento")
    }
    else{
        idMessage.innerHTML = `Bienvenido <b>${name.value}</b> <b>${surname.value}</b> del grupo de los <b>${userAge.value}</b>, identificado con ${documentType.value} número <b>${idNumber.value}</b>`

        idMessage.classList.remove("inactive")
        idData.classList.add("inactive")
    }
})

//Formulario de calculadora de calorías


const sendCalculateForm = document.querySelector(".calories-calc")

sendCalculateForm.addEventListener("submit", function result(){
    const age = document.getElementById("age")
    const weight = document.getElementById("weight")
    const height = document.getElementById("height")
    const womanCheckBox = document.querySelector(".check-woman").checked
    const manCheckBox = document.querySelector(".check-man").checked
    const activitySelect = document.querySelector(".physical-activity-select")
    const totalCalories = document.querySelector(".total-calories")
    event.preventDefault()
    
    let calories
    if(activitySelect.selectedIndex === 0){
        alert("Seleccione el tipo de actividad física")
    }
    else{
        if(womanCheckBox){
            calories = activitySelect.value * (10 * weight.value) + (6.25 * height.value) - (5 * age.value) - 161             
            render()
        }
        if(manCheckBox){
            calories = activitySelect.value * (10 * weight.value) + (6.25 * height.value) - (5 * age.value) + 5               
            render()
        }
        console.log(calories)
        function render(){
        totalCalories.innerHTML = `Calorías diarias recomendadas ${calories}`
        }
    }
})




// const multiplicadorTMB = {
//     peso: 10,
//     altura: 6.25,
//     edad: 5
// }

//     //Formula hombres: valor actividad x (10 x peso en kg) + (6,25 × altura en cm) - (5 × edad en años) + 5

//     //Formula mujeres: valor actividad x (10 x peso en kg) + (6,25 × altura en cm) - (5 × edad en años) - 161


// // totalCalorias.value = `${Math.floor(calculoCalorias)} kcal`;