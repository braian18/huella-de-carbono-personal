/*Aca va todo el codigo del script para que se cargue bien el DOM */

document.addEventListener("DOMContentLoaded", () => {
  const botonD = document.getElementById("oscuro");
  const nav = document.querySelector("nav");
  const body = document.querySelector("body");

  botonD.addEventListener("click", () => {
    if (body.classList.contains("oscuro")) {
      // Si ya está oscuro, volvemos a claro
      nav.classList.remove("dark");
      body.classList.remove("oscuro");
      nav.classList.add("claro");
      body.classList.add("natural");
    } else {
      // Si está claro, vamos a oscuro
      nav.classList.remove("claro");
      body.classList.remove("natural");
      nav.classList.add("dark");
      body.classList.add("oscuro");
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
            (factorCalefaccion = 800 * 1), 95;
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
          case "2dias":
            factorTransportePublico = 0;
            break;
          case "3_4dias":
            factorTransportePublico = 0;
            break;
          case "5_6dias":
            factorTransportePublico = 0;
            break;
          case "no_uso_trasporte_publico":
            factorTransportePublico = 0;
            break;
        }
      }
      // Huella anual transporte público (estimación)
      const huellaTransportePublico = factorTransportePublico * 52; // semanas al año

      ////Vuelos
      const vuelosNac =
        parseFloat(document.getElementById("vuelos_nac").value) || 0;
      const vuelosInt =
        parseFloat(document.getElementById("vuelos_int").value) || 0;
      const factorVueloNac = 0;
      const factorVueloInt = 0;
      const huellaVuelos =
        vuelosNac * factorVueloNac + vuelosInt * factorVueloInt;

      //////Tema consumo
      const dieta = document.querySelector('input[name="dieta"]:checked');
      let factorDieta = 0;
      if (dieta) {
        switch (dieta.value) {
          case "equilibrada":
            factorDieta = 0;
            break;
          case "carnes_rojas":
            factorDieta = 0;
            break;
          case "pescetariana":
            factorDieta = 0;
            break;
          case "vegetariana":
            factorDieta = 0;
            break;
          case "vegana":
            factorDieta = 0;
            break;
        }
      }

      const origenComida = document.querySelector(
        'input[name="origen_comida"]:checked'
      );
      let factorOrigenComida = 0;
      if (origenComida) {
        switch (origenComida.value) {
          case "origen_local":
            factorOrigenComida = 0;
            break;
          case "envasados_procesados":
            factorOrigenComida = 0;
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
            factorComidaSobrante = 0;
            break;
          case "tiro_algo":
            factorComidaSobrante = 0;
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
            factorRopaNueva = 0;
            break;
          case "una_cada_dos":
            factorRopaNueva = 0;
            break;
          case "poco_al_año":
            factorRopaNueva = 0;
            break;
          case "nunca_segunda_mano":
            factorRopaNueva = 0;
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
            factorDispElectronicos = 0;
            break;
          case "tres_cuatro_año":
            factorDispElectronicos = 0;
            break;
          case "cuatro_año":
            factorDispElectronicos = 0;
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
            factorDonasVendes = 0;
            break;
          case "aveces_dono":
            factorDonasVendes = 0;
            break;
          case "tiro_regalo":
            factorDonasVendes = 0;
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
            factorReciclas = 0;
            break;
          case "aveces":
            factorReciclas = 0;
            break;
          case "casi_nunca":
            factorReciclas = 0;
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
            factorBasuraGenerada = 0;
            break;
          case "moderada":
            factorBasuraGenerada = 0;
            break;
          case "bastante":
            factorBasuraGenerada = 0;
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

      // Suma total huella anual
      const huellaTotal =
        huellaEnergia +
        huellaCalefaccion +
        huellaAire +
        huellaVehiculo +
        huellaTransportePublico +
        huellaVuelos +
        huellaAlimentacion +
        huellaConsumo +
        huellaResiduos;

      alert(
        "Tu huella de carbono estimada anual es: " +
          huellaTotal.toFixed(2) +
          " kg CO2e"
      );
    });
});
