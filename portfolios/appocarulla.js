function mostrarPagina(pagina, seccion){
    var contenidoDiv = document.getElementById("insertar")
    contenidoDiv.innerHTML = paginas[pagina]
    var menu = document.getElementById("seccion")
    menu.innerHTML = menulateral[seccion]
}

const menulateral = {
    aboutme: `<ul>
    <li id="focus"  onclick="mostrarPagina('pagina1', 'aboutme')">About me</li>
    <li onclick="mostrarPagina('pagina2', 'expprofesional')">Experiencia profesional</li>
    <li onclick="mostrarPagina('pagina3', 'estudios')">Estudios</li>
    <li onclick="mostrarPagina('pagina4', 'proyectos')">Proyectos Personales</li>
</ul>`,

    expprofesional: `<ul>
    <li onclick="mostrarPagina('pagina1', 'aboutme')">About me</li>
    <li id="focus" onclick="mostrarPagina('pagina2', 'expprofesional')">Experiencia profesional</li>
    <li onclick="mostrarPagina('pagina3', 'estudios')">Estudios</li>
    <li onclick="mostrarPagina('pagina4', 'proyectos')">Proyectos Personales</li>
</ul>`,

    estudios: `<ul>
    <li onclick="mostrarPagina('pagina1', 'aboutme')">About me</li>
    <li onclick="mostrarPagina('pagina2', 'expprofesional')">Experiencia profesional</li>
    <li id="focus" onclick="mostrarPagina('pagina3', 'estudios')">Estudios</li>
    <li onclick="mostrarPagina('pagina4', 'proyectos')">Proyectos Personales</li>
</ul>`,

    proyectos: `<ul>
    <li onclick="mostrarPagina('pagina1', 'aboutme')">About me</li>
    <li onclick="mostrarPagina('pagina2', 'expprofesional')">Experiencia profesional</li>
    <li onclick="mostrarPagina('pagina3', 'estudios')">Estudios</li>
    <li id="focus" onclick="mostrarPagina('pagina4', 'proyectos')">Proyectos Personales</li>
</ul>`,
}

const paginas = {
    pagina1: `<h1>Oriol Carulla</h1>
    <p>Soy un administrador de sistemas informáticos y he trabajado con tecnologías como Azure, con servidores y Active Directory.</p> 
    <p>También trabajé en la resolución de incidencias para el cliente. En un futuro espero poder seguir formándome y especializarme en el análisis de datos. 
    </p> 
    <p>considero una persona que le gusta trabajar con el equipo y que resulta facil la comunicación y el saber escuchar. Tambien me resulta aprender cosas nuevas y por mi cuenta </p>
    <img src="https://cdn.discordapp.com/attachments/854088759363502100/1199734641490411541/IMG_20240124_161451_986.jpg?ex=65c39ef4&is=65b129f4&hm=9fceb53f970211e86866c140dde5b06ec0067e4f2d7f944c7e88760160e7a0fa&" alt="">`,

    pagina2: `<h1>HOLA MUNDO</h1>`
}