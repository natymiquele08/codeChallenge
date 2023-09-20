const DATA_URL= 'https://jsonplaceholder.typicode.com/users'
const container = document.getElementById("data");

function showData(dataArray){
    for (const item of dataArray){
        container.innerHTML += 
        ` 
        <tr> 
        <td>${item.name}</td>
        <td>${item.username}</td>
        <td>${item.email}</td>
        <td>${item.phone}</td>
        <td>${item.website}</td>

        <td> <button id="eliminarBtn"> Eliminar </button></td>
        
        </tr>
        `
    }
}


fetch(DATA_URL)
.then(response => response.json())
.then(data => {
    showData(data)
})

setTimeout(showData(data), 1500);



    







    




