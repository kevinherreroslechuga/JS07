

const boton = document.getElementById('boton')
const carga = document.getElementById('gif')
const tabla = document.getElementById('tablal')
boton.addEventListener("click", contenidoJson);

const contenido = tabla.querySelector("tbody");
contenido.innerHTML = null; 
    
async function contenidoJson() {
         let usuariosJson = JSON.parse(localStorage.getItem("guardadoTabla"));  
        const response = await fetch('https://reqres.in/api/users?delay=3'); 
        const data = await response.json(); 
        datos = data["data"]; 
        let respuestaJ = JSON.stringify(usuariosJson); 
        localStorage.setItem("guaradoTabla", respuestaJ);
     for(const userj of datos){
        contenido.innerHTML+=
        `

        <tr>
        <th scope="row">${userj.id}</th>
        <td>${userj.first_name}</td>
        <td>${userj.last_name}</td>
        <td>${userj.email}>/td>
        <td><img src="${userj.avatar}" class="rounded-circle"></img></td>
 
        </tr>`;
        ;
    }

}