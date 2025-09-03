/*Aca va todo el codigo del script para que se cargue bien el DOM */

document.addEventListener("DOMContentLoaded", () => {
  const botonD = document.getElementById("oscuro");
  const nav = document.querySelector("nav");
  const body = document.querySelector("body");
  const footer = document.querySelector("footer")

  botonD.addEventListener("click", () => {
    if (body.classList.contains("oscuro")) {
      // Si ya está oscuro, volvemos a claro
      nav.classList.remove("dark");
      body.classList.remove("oscuro");
      footer.classList.remove("dark");
      nav.classList.add("claro");
      body.classList.add("natural");
      footer.classList.add("claro");
    } else {
      // Si está claro, vamos a oscuro
      nav.classList.remove("claro");
      body.classList.remove("natural");
      footer.classList.remove("claro");
      nav.classList.add("dark");
      body.classList.add("oscuro");
      footer.classList.add("dark");
    }
  });

  document
    .getElementById("formulario")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      //
      const consumoEnergiaInput = document.getElementById("consumo_energia");
      const noSeEnergia = document.getElementById("no_se_energia").checked;
      let consumoEnergia = 0; // kWh/mes
      if (!noSeEnergia && consumoEnergiaInput.value) {
        consumoEnergia = parseFloat(consumoEnergiaInput.value);
      } else {
        consumoEnergia = 300;
      }
      // Factor de emisión(kg CO2e por kWh)
      const factorEmisionEnergia = 0.486;
      // Huella anual energía
      const huellaEnergia = consumoEnergia * 12 * factorEmisionEnergia;

      //
      const calefaccion = document.querySelector(
        'input[name="calefaccion"]:checked'
      );
      let factorCalefaccion = 0;
      if (calefaccion) {
        switch (calefaccion.value) {
          case "gas_natural":
            (factorCalefaccion = 800 * 1), 95; // 
            break;
          case "butano":
            factorCalefaccion = 300 * 2.96;
            break;
          case "gasoil":
            factorCalefaccion = 1400 * 2.48;
            break;
          case "electricidad":
            factorCalefaccion = 3500 * 0.486;
            break;
          case "leña_pellets":
            factorCalefaccion = 2000 * 1.6;
            break;
          case "no_lo_se_calefaccion":
            factorCalefaccion = 3000;
            break;
        }
      }
      //huella anual de calefaccion
      const huellaCalefaccion = factorCalefaccion;

      const aire = document.querySelector(
        'input[name="aire_acondicionado"]:checked'
      );
      let factorAire = 0;
      if (aire) {
        switch (aire.value) {
          case "si_mucho":
            factorAire = 850;
            break;
          case "si_poco":
            factorAire = 400;
            break;
          case "no_tengo_aire":
            factorAire = 0;
            break;
        }
      }
      // Huella anual aire acondicionado
      const huellaAire = factorAire;

      //////Tema movilidad
      const kmVehiculoInput = document.getElementById("km_vehiculo");
      const noSeKmVehiculo = document.getElementById("no_se_vehiculo").checked;
      const noTengoVehiculo =
        document.getElementById("no_tengo_vehiculo").checked;
      let kmVehiculo = 0;
      if (!noSeKmVehiculo && !noTengoVehiculo && kmVehiculoInput.value) {
        kmVehiculo = parseFloat(kmVehiculoInput.value);
      }
      const combustibleVehiculo = document.querySelector(
        'input[name="combustible_vehiculo"]:checked'
      );
      let factorCombustible = 0;
      if (combustibleVehiculo) {
        switch (combustibleVehiculo.value) {
          case "gasolina":
            factorCombustible = 2.37;
            break;
          case "diesel":
            factorCombustible = 2.77;
            break;
          case "hibrido_no":
            factorCombustible = 1.82;
            break;
          case "electrico":
            factorCombustible = 0.3;
            break;
          case "no_uso_vehiculo":
            factorCombustible = 0;
            break;
        }
      }
      // Huella anual vehículo privado
      const huellaVehiculo = kmVehiculo * factorCombustible;

      /////Transporte público
      const transportePublico = document.querySelector(
        'input[name="transporte_publico"]:checked'
      );
      let factorTransportePublico = 0;
      if (transportePublico) {
        switch (transportePublico.value) {
          case "2_3dias":
            factorTransportePublico = -260;
            break;
          case "4_5dias":
            factorTransportePublico = -468;
            break;
          case "6_7dias":
            factorTransportePublico = -676;
            break;
          case "no_uso_trasporte_publico":
            factorTransportePublico = 0;
            break;
        }
      }
      // Huella anual transporte público (estimación)
      const huellaTransportePublico = factorTransportePublico; // al año

      ////Vuelos
      const vuelosNac =
        parseFloat(document.getElementById("vuelos_nac").value) || 0;
      const vuelosInt =
        parseFloat(document.getElementById("vuelos_int").value) || 0;
      const factorVueloNac = 1050 * 0.324;
      const factorVueloInt = 7500 * 0.324;
      const huellaVuelos =
        vuelosNac * factorVueloNac + vuelosInt * factorVueloInt;

      //////Tema consumo
      const dieta = document.querySelector('input[name="dieta"]:checked');
      let factorDieta = 0;
      if (dieta) {
        switch (dieta.value) {
          case "equilibrada":
            factorDieta = 5.34*365;
            break;
          case "carnes_rojas":
            factorDieta = 7.28*365;
            break;
          case "pescetariana":
            factorDieta = 3.81*365;
            break;
          case "vegetariana":
            factorDieta = 3.33*365;
            break;
          case "vegana":
            factorDieta = 2.16*365;
            break;
        }
      }///Estos valores son estimaciones promedio basadas en estudios globales 
      // (como los de la FAO o IPCC) y pueden variar según regiones o hábitos individuales.

      const origenComida = document.querySelector(
        'input[name="origen_comida"]:checked'
      );
      let factorOrigenComida = 0;
      if (origenComida) {
        switch (origenComida.value) {
          case "origen_local":
            factorOrigenComida = -150;
            break;
          case "envasados_procesados":
            factorOrigenComida = 300;
            break;
          case "no_me_importa":
            factorOrigenComida = 0;
            break;
        }
      }

      const comidaSobrante = document.querySelector(
        'input[name="comida_sobrante"]:checked'
      );
      let factorComidaSobrante = 0;
      if (comidaSobrante) {
        switch (comidaSobrante.value) {
          case "aprovecho":
            factorComidaSobrante = -200;
            break;
          case "tiro_algo":
            factorComidaSobrante = +250;
            break;
          case "no_importa_desperdicio":
            factorComidaSobrante = 0;
            break;
        }
      }
      // Huella anual alimentación (ejemplo suma simple)
      const huellaAlimentacion =
        factorDieta + factorOrigenComida + factorComidaSobrante;

      ///////Tema consumo
      const ropaNueva = document.querySelector(
        'input[name="ropa_nueva"]:checked'
      );
      let factorRopaNueva = 0;
      if (ropaNueva) {
        switch (ropaNueva.value) {
          case "varias_veces":
            factorRopaNueva = 300;
            break;
          case "una_cada_dos":
            factorRopaNueva = 150;
            break;
          case "poco_al_año":
            factorRopaNueva = 50;
            break;
          case "nunca_segunda_mano":
            factorRopaNueva = -100;
            break;
        }
      }

      const dispElectronicos = document.querySelector(
        'input[name="disp_electronicos"]:checked'
      );
      let factorDispElectronicos = 0;
      if (dispElectronicos) {
        switch (dispElectronicos.value) {
          case "uno_dos_año":
            factorDispElectronicos = 200;
            break;
          case "tres_cuatro_año":
            factorDispElectronicos = 400;
            break;
          case "cuatro_año":
            factorDispElectronicos = 600;
            break;
        }
      }

      const donasVendes = document.querySelector(
        'input[name="donas_vendes"]:checked'
      );
      let factorDonasVendes = 0;
      if (donasVendes) {
        switch (donasVendes.value) {
          case "frecuente_dono":
            factorDonasVendes = -80;
            break;
          case "aveces_dono":
            factorDonasVendes = -40;
            break;
          case "tiro_regalo":
            factorDonasVendes = 100;
            break;
        }
      }
      // Huella anual consumo
      const huellaConsumo =
        factorRopaNueva + factorDispElectronicos + factorDonasVendes;

      /////////////Tema Residuos
      const reciclas = document.querySelector('input[name="reciclas"]:checked');
      let factorReciclas = 0;
      if (reciclas) {
        switch (reciclas.value) {
          case "siempre":
            factorReciclas = -150;
            break;
          case "aveces":
            factorReciclas = -50;
            break;
          case "casi_nunca":
            factorReciclas = 100;
            break;
        }
      }

      const basuraGenerada = document.querySelector(
        'input[name="basura_generada"]:checked'
      );
      let factorBasuraGenerada = 0;
      if (basuraGenerada) {
        switch (basuraGenerada.value) {
          case "muy_poca":
            factorBasuraGenerada = -100;
            break;
          case "moderada":
            factorBasuraGenerada = 0;
            break;
          case "bastante":
            factorBasuraGenerada = 200;
            break;
        }
      }

      const bolsasBasuraInput = document.getElementById("bolsas_basura");
      const noSeBolsas = document.getElementById("no_se_basura").checked;
      let bolsasBasura = 0;
      if (!noSeBolsas && bolsasBasuraInput.value) {
        bolsasBasura = parseFloat(bolsasBasuraInput.value);
      }
      const factorBolsasBasura = 0;
      const huellaResiduos =
        factorReciclas +
        factorBasuraGenerada +
        bolsasBasura * factorBolsasBasura;


        const personasInput = document.getElementById("personas")
        if (personasInput.value){
            huellaCasa = (huellaEnergia + huellaCalefaccion + huellaAire+ huellaResiduos+huellaVehiculo)/personasInput.value
        }

      // Suma total huella anual
      const huellaTotal =
        (huellaCasa +
        huellaTransportePublico +
        huellaVuelos +
        huellaAlimentacion +
        huellaConsumo)/1000

      alert(
        "Tu huella de carbono estimada anual es: " +
          huellaTotal.toFixed(1) +
          " T CO2e"
      );
    });


  const btnComenzar = document.getElementById("btnComenzar");
  const inicio = document.getElementById("inicio");
  const cardsContainer = document.getElementById("cardsContainer");
  const controls = document.getElementById("botones");
  const btnAtras = document.getElementById("btnAtras");
  const btnSiguiente = document.getElementById("btnSiguiente");

  const cards = document.querySelectorAll(".card");
  let currentCard = 0;

  // Ocultar todas las cards
  function mostrarCard(index) {
    cards.forEach((card, i) => {
      card.classList.toggle("hidden", i !== index);
    });

    // Mostrar / ocultar botones
  const btnCalcular = document.getElementById("btnCalcular");

  if (index === 0) {
    // Primera pregunta → solo mostrar siguiente
    btnAtras.classList.add("hidden");
    btnSiguiente.classList.remove("hidden");
    btnCalcular.classList.add("hidden")
  } else if (index === cards.length - 1) {
    // Última pregunta → solo mostrar atrás y calcular
    btnAtras.classList.remove("hidden");
    btnSiguiente.classList.add("hidden");
    btnCalcular.classList.remove("hidden");
  } else {
    // Pregunta intermedia → mostrar atrás y siguiente
    btnAtras.classList.remove("hidden");
    btnSiguiente.classList.remove("hidden");
    btnCalcular.classList.add("hidden");
  }
  }

  // Al hacer click en comenzar
  btnComenzar.addEventListener("click", () => {
    inicio.classList.add("hidden"); // oculto intro
    cardsContainer.classList.remove("hidden");
    controls.classList.remove("hidden");
    mostrarCard(currentCard);
  });

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
});
