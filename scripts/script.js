
const fullName = document.querySelector("#fullname")
const alamat = document.getElementById('alamat')


const BASE_URL = "https://jsonplaceholder.typicode.com/users/4"

async function getDataUser(){
    try {
        const response = await fetch(BASE_URL)
        const data = await response.json()

        fullName.innerText = data.name
        alamat.innerText = data.address.street

        console.log("BERHASIL", {data})
    } catch(error){
        console.log("Error aowkaowkao", {error})
    }
}

getDataUser()

console.log(BASE_URL)