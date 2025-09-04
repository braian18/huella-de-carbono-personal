PROYECTO HUELLA DE CARBONO
---------------------------------------------------------------------------------------------
<img width="366" height="746" alt="image" src="Muestra.jpg" />



🌍 CALCULADORA DE HUELLA DE CARBONO (CO2e)

La huella de carbono es la cantidad total de gases de efecto invernadero emitidos directa o indirectamente por una persona, organización o producto.  
Con esta calculadora podés estimar tu impacto ambiental en base a preguntas relacionadas con -energía, transporte y hábitos de consumo-.  
Con la calculadora de Huella de Carbono queremos CONCIENTIZAR sobre la importancia de reducir emisiones y promover un futuro más sostenible. 🌱


---------------------------------------------------------------------------------------------

TECNOLOGIAS UTILIZADAS

HTML5: Se utilizó para definir la estructura y el contenido del proyecto.

CSS3: Se utilizó para el diseño y las animaciones.

JavaScript: Se utilizó para darle funcionalidad al proyecto.

Tailwind CSS: Se utilizó para darle estilo y un diseño responsive al proyecto.

---------------------------------------------------------------------------------------------

🔹 INSTALACIÒN 

1- Clonar el repositorio:
git clone https://github.com/usuario/huella-de-carbono-personal.git

2 - Entrar en la carpeta del proyecto:
cd huella-de-carbono-personal

🔹 EJECUCIÒN

1-Abrir el archivo index.html en cualquier navegador web.

¡Y listo! Ya puedes empezar a usar la aplicación.

---------------------------------------------------------------------------------------------

💻 FRAGMENTOS DEL CODIGO RELEVANTES

1. HTML – Pregunta del formulario
Ejemplo de cómo está estructurada una pregunta en index.html

         <div class="card w-full sm:w-1/2 p-6 border rounded-2xl shadow-lg hidden">
                <div class="flex justify-center" id="residuos-2">
                    <div class="flex flex-col gap-2 w-full sm:w-1/2" id="conteiner">
                        <h1>¿Como describirias la cantidad de basura que generas?</h1>
                        <input type="radio" name="basura_generada" value="muy_poca" id="muy_poca">Muy poca
                        <input type="radio" name="basura_generada" value="moderada" id="moderada">Moderada
                        <input type="radio" name="basura_generada" value="bastante" id="bastante">Bastante
                    </div>
                </div>
            </div>

         

2. CSS – Estilos personalizados para modo claro/oscuro
  Definición de fondos dinámicos en style.css
<img width="567" height="236" alt="image" src="https://github.com/user-attachments/assets/dc824e63-8d43-4f9d-a653-79be26a17d1e" />

3. JavaScript – Botones de navegación

         // Botón siguiente
         btnSiguiente.addEventListener("click", () => {
           if (currentCard < cards.length - 1) {
             currentCard++;
             mostrarCard(currentCard);
           }
         });
         
         // Botón atrás
         btnAtras.addEventListener("click", () => {
           if (currentCard > 0) {
             currentCard--;
             mostrarCard(currentCard);
           }
         });

---------------------------------------------------------------------------------------------

REFERENCIAS UTILIZADAS

Esta proyecto para calcular la huella de carbono personal utiliza datos agregados y procesados provenientes 

de diversas fuentes externas, estas incluyen a:

IPCC - Intergovernmental Panel on Climate Change [https://www.ipcc.ch/]

Cammesa - Compañía Administradora del Mercado Mayorista Eléctrico [https://cammesaweb.cammesa.com/mater/]

Scarborough et al. (2023) - Datos sobre impactos ambientales de dietas en el Reino Unido [https://doi.org/10.1038/s43016-023-00795-w]

Secretaria de Energia - Informes de la Subsecretaría de Transición y Planeamiento Energético [https://datos.gob.ar/el/dataset/energia-calculo-factor-emision-co2-red-argentina-energia-electrica]


---------------------------------------------------------------------------------------------

USO DE RAMAS:

main → versión estable.

inicioDeProyecto → se creo la base y se introdujo el contenido basico de la pagina.

funcionalidad_form → se creo el script para añadirle funcinalidad al formulario.

menu → se creo el navbar aparte de añadir otros estilos.

diseño-responsive → se le añadio la cualidad responsive al proyecto.

---------------------------------------------------------------------------------------------

INTEGRANTES

 Franco Exequiel, Retamal

 Braian Ariel, Villarroel
            
 Alexis Guillermo, Bautista Escobar

 Vanesa Ailen, Vila

