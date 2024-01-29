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
    <li onclick="mostrarPagina('pagina3', 'estudios')">Formación</li>
    <li onclick="mostrarPagina('pagina4', 'proyectos')">Proyectos Personales</li>
</ul>`,

    expprofesional: `<ul>
    <li onclick="mostrarPagina('pagina1', 'aboutme')">About me</li>
    <li id="focus" onclick="mostrarPagina('pagina2', 'expprofesional')">Experiencia profesional</li>
    <li onclick="mostrarPagina('pagina3', 'estudios')">Formación</li>
    <li onclick="mostrarPagina('pagina4', 'proyectos')">Proyectos Personales</li>
</ul>`,

    estudios: `<ul>
    <li onclick="mostrarPagina('pagina1', 'aboutme')">About me</li>
    <li onclick="mostrarPagina('pagina2', 'expprofesional')">Experiencia profesional</li>
    <li id="focus" onclick="mostrarPagina('pagina3', 'estudios')">Formación</li>
    <li onclick="mostrarPagina('pagina4', 'proyectos')">Proyectos Personales</li>
</ul>`,

    proyectos: `<ul>
    <li onclick="mostrarPagina('pagina1', 'aboutme')">About me</li>
    <li onclick="mostrarPagina('pagina2', 'expprofesional')">Experiencia profesional</li>
    <li onclick="mostrarPagina('pagina3', 'estudios')">Formación</li>
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

    pagina2: `<h2>Experiencia Profesional</h2>
    <div class="exp">
        <div class="exp-hijos exp1">
            <h3>Administrador de sistemas | Minorisa sistemas & Everywan</h3>
            <p>Sant Frutiós de Bages</p>
            <p>Tascas:</p>
            <ul>
                <li>Contrato de practicas (350h)</li>
                <li>Administrar sistemas</li>
                <li>Resolución de incidencias via telefónica</li>
            </ul>
        </div>
        <div class="exp-hijos exp2" >
            <h3>Administrador de sistemas | Minorisa sistemas & Everywan</h3>
            <p>Sant Fruitós de Bages</p>
            <p>09/22 - 02/23</p>
            <p>Tareas:</p>
            <ul>
                <li>Administrador de sistemas</li>
                <li>Resolución de incidencias</li>
                <li>Administrador de servidores Azure</li>
                <li>Active Directory</li>
                <li>VoIP</li>
                <li>Microsoft 365</li>
            </ul>
        </div>
    </div>`,
    
    pagina3: `<h2>Formació</h2>
    <div class="formacion">
        <div class="hijoformacion estudios">
            <h3>Estudios</h3>
            <p><strong>CFGM - Sistemas Microinformáticos y redes</strong></p>
            <p>IES Castellet | Finalizado 2023</p>
            <br>
            <p><strong>CFGS - Desarrollo de aplicaciones multiplataforma</strong>
            </p>
            <p>IES Castellet | 2023 - Actualmente</p>
        </div>
        <div class="hijoformacion idiomas">
            <h3>Idiomas</h3>
            <p><strong>Catalán & Castellano</strong> | Nivel: B2</p>
            <p><strong>Inglés</strong> | Nivel: B1</p>
        </div>
        <div class="hijoformacion informatica">
            <h3>Informatica</h3>
            <div class="infoflex">
                <div class="infohijo infohijo1">
                    <p><strong>Ofimática</strong> | Nivel: Profesional</p>
                    <p><strong>Seguirdad Informatica</strong> | Nivel Avanzado</p>
                    <p><strong>Base de datos</strong> | Nivel: Avanzado</p>
                    <p><strong>Python</strong> | Nivel: Avanzado</p>
                </div>
                <div class="infohijo infohijo2">
                    <p><strong>Redes Locales</strong> | Nivel: Profesional</p>
                    <p><Strong>Montaje de hardware</Strong> | Nivel: Experto</p>
                    <p><strong>HTML & CSS</strong> | Nivel: Avanzado</p>
                    <p><strong>Sistemas Operativos</strong> | Nivel: Avanzado</p>
                </div>
            </div>
        </div>
    </div>`,
    pagina4: `<div class="proyectos">
    <h2>Proyectos Personales</h2>
    <div class="flexproyectos">
        <div class="hijoproyectos">
            <h5><a href="https://twitter.com/PromileDev">Promile</h5>
            <img src="https://cdn.discordapp.com/attachments/1167243389520056361/1167243482088345640/promile.png?ex=65bc2934&is=65a9b434&hm=41b2a9eec6920e43c10386f736764f09c43116f8121f669841dfc65166b43765&" alt=""></a>
        </div>
        <div class="hijoproyectos">
            <h5><a href="">Allistix</h5>
            <img src="https://media.discordapp.net/attachments/1067020998626525234/1071127563478499398/Allistix_Logo_NIGGER.png?ex=65bd2d47&is=65aab847&hm=17f4a5f515c44011d18a04ebbb99b17b7b0ae11bb2f27315931699ebb12aa060&=&format=webp&quality=lossless&width=874&height=874" alt=""></a>
        </div>
        <div class="hijoproyectos">
            <h5><a href="https://twitter.com/PrimeCostTR">PrimeCost</h5>
            <img src="https://media.discordapp.net/attachments/854088843883315240/1199877108105748480/primecost2.png?ex=65c423a3&is=65b1aea3&hm=dae82b9380d2a054cc4108de3fcf91b174fca4ebb426b20bc71846ba8d1310a5&=&format=webp&quality=lossless" alt=""></a>
        </div>
    </div>
</div>`
}