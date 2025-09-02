
/*Aca va todo el codigo del script para que se cargue bien el DOM */
document.addEventListener('DOMContentLoaded', () => {
        document.getElementById('formulario').addEventListener('submit', function(event) {
        event.preventDefault();

        //
        const consumoEnergiaInput = document.getElementById('consumo_energia');
        const noSeEnergia = document.getElementById('no_se_energia').checked;
        let consumoEnergia = 0; // kWh/mes
        if (!noSeEnergia && consumoEnergiaInput.value) {
            consumoEnergia = parseFloat(consumoEnergiaInput.value);
        }else {
            consumoEnergia = 300
        }
        // Factor de emisión(kg CO2e por kWh)
        const factorEmisionEnergia = 0.486;
        // Huella anual energía 
        const huellaEnergia = consumoEnergia * 12 * factorEmisionEnergia;

        //
        const calefaccion = document.querySelector('input[name="calefaccion"]:checked');
        let factorCalefaccion = 0;
        if (calefaccion) {
            switch(calefaccion.value) {
                case 'gas_natural': factorCalefaccion = 800 * 1,95; break;
                case 'butano': factorCalefaccion =300 * 2.96; break;
                case 'gasoil': factorCalefaccion = 1400 * 2.48 ; break;
                case 'electricidad': factorCalefaccion = 3500 * 0.486; break;
                case 'leña_pellets': factorCalefaccion =  2000 * 1.6; break;
                case 'no_lo_se_calefaccion': factorCalefaccion = 3000; break;
            }
        }
        //huella anual de calefaccion
        const huellaCalefaccion = factorCalefaccion;


        const aire = document.querySelector('input[name="aire_acondicionado"]:checked');
        let factorAire = 0;
        if (aire) {
            switch(aire.value) {
                case 'si_mucho': factorAire = 850; break;
                case 'si_poco': factorAire = 400; break;
                case 'no_tengo_aire': factorAire = 0; break;
            }
        }
        // Huella anual aire acondicionado
        const huellaAire = factorAire;

        //////Tema movilidad
        const kmVehiculoInput = document.getElementById('km_vehiculo');
        const noSeKmVehiculo = document.getElementById('no_se_vehiculo').checked;
        const noTengoVehiculo = document.getElementById('no_tengo_vehiculo').checked;
        let kmVehiculo = 0;
        if (!noSeKmVehiculo && !noTengoVehiculo && kmVehiculoInput.value) {
            kmVehiculo = parseFloat(kmVehiculoInput.value);
        }
        const combustibleVehiculo = document.querySelector('input[name="combustible_vehiculo"]:checked');
        let factorCombustible = 0;
        if (combustibleVehiculo) {
            switch(combustibleVehiculo.value) {
                case 'gasolina': factorCombustible = 0; break;
                case 'diesel': factorCombustible =0 ; break;
                case 'hibrido_no': factorCombustible =0 ; break;
                case 'electrico': factorCombustible = 0; break;
                case 'no_uso_vehiculo': factorCombustible = 0; break;
            }
        }
        // Huella anual vehículo privado
        const huellaVehiculo = kmVehiculo * factorCombustible;

    });
})