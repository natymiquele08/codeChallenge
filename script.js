
fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(data => mostrarData(data))

const mostrarData = (data) => {
    console.log(data)
    let body= ''
    for(let i=0; i<data.length; i++){
        body += 
        ` 
        <tr> 
        <td>${data[i].name}</td>
        <td>${data[i].username}</td>
        <td>${data[i].email}</td>
        
        <td>${data[i].phone}</td>
        <td>${data[i].website}</td>

        <td> <button id="eliminarBtn"> Eliminar </button></td>
        
        </tr>
        `
    }

    document.getElementById("data").innerHTML= body
    
}



    




