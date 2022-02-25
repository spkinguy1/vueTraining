// har Vue app faghat mitoone roo yek htmlElement mount she
// too data() , data save mikonim ke be onvan expresion estefade mishe be in shekl {{}}
// va too methods , function haro negah midarim :)
let vm = Vue.createApp({
    data() {
        return{
            firstName : "",
            lastName : "",
            buffer:1,
        }
    },
    methods: {
        checkboxHandler() {
            let checkbox = document.getElementById("ezdevaj")
            let message = document.getElementById("ezdevajMessage")

            if (checkbox.checked == true) {
                message.innerText = "متأهل"
                message.style.color = "rgb(0, 87, 22)"               
            } else {
                message.innerText = "مجرد" 
                message.style.color = "rgb(90, 90, 90)"
            }     
        },
        checkboxConvert() {
            let checkbox = document.getElementById("ezdevaj")

            if (checkbox.checked == true) {        
                return "\u2714"   
            } else {
                return "\u2716"
            }     
        },
        register() {
            let edu = document.getElementById("edu")
            let table = document.getElementById("wrapper2")
            
            table.innerHTML += `
            <tr id="${vm.buffer}" class="addElement">
                <td>${vm.buffer++}</td>
                <td>${vm.firstName +" " +vm.lastName}</td>
                <td>${edu.value}</td>
                <td>${vm.checkboxConvert()}</td>
                <td><button class="deletebutton">حذف</button></td>
            </tr>`
            let btns = document.querySelectorAll(`.deletebutton`)

            for (let btn of btns) {
                btn.addEventListener('click', (e) =>{
                    e.target.parentElement.parentElement.remove()
                    vm.buffer--
                })
            }  
        },
        deleteItem(e) {
            let deleteField = document.getElementById("deleteField")
            if (deleteField.value != "") {
                let item = document.getElementById(deleteField.value)
                if (item != null || "" || undefined) {
                
                    item.remove(item)
                }
            }
        },

    }
}).mount('#app')



