const myApp = document.getElementById("myApp");

myApp.addEventListener('click', ()=> {
	let nombre = prompt('Ingrese su nombre:');
    if (nombre == null || nombre == "" )
    {
        alert('No ha completado correctamente el campo. Intente de nuevo.');
    } else {
        alert('¡Hola ' + nombre + ' !');
    }	    
});