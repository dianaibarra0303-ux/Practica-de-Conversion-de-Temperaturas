const celsiusInput = document.getElementById('celsius');
        const convertBtn = document.getElementById('convertBtn');
        const errorMessage = document.getElementById('error-message');
        const resultsDiv = document.getElementById('results');
        const celsiusResult = document.getElementById('celsiusResult');
        const fahrenheitResult = document.getElementById('fahrenheitResult');
        const kelvinResult = document.getElementById('kelvinResult');

       
        function esNumeroValido(valor) {
            valor = valor.trim();
            if (valor === '') {
                return false;
            }
            const numero = Number(valor);
            return !isNaN(numero) && isFinite(numero);
        }
        function convertirTemperatura(celsius) {
            const fahrenheit = (celsius * 9/5) + 32;
            const kelvin = celsius + 273.15;
            
            return {
                celsius: celsius,
                fahrenheit: fahrenheit.toFixed(2),
                kelvin: kelvin.toFixed(2)
            };
        }
        function mostrarResultados(temperaturas) {
            celsiusResult.textContent = temperaturas.celsius;
            fahrenheitResult.textContent = temperaturas.fahrenheit;
            kelvinResult.textContent = temperaturas.kelvin;
            
            resultsDiv.style.display = 'block';
            errorMessage.style.display = 'none';
        }
        function mostrarError() {
            errorMessage.style.display = 'block';
            resultsDiv.style.display = 'none';
            celsiusInput.style.borderColor = '#d32f2f';
            celsiusInput.focus();
        }
        function limpiarError() {
            errorMessage.style.display = 'none';
            celsiusInput.style.borderColor = '#ddd';
        }
        convertBtn.addEventListener('click', function() {
            const valorInput = celsiusInput.value;
            
            if (esNumeroValido(valorInput)) {
                const celsius = Number(valorInput);
                const temperaturas = convertirTemperatura(celsius);
                mostrarResultados(temperaturas);
            } else {
                mostrarError();
            }
        });
        celsiusInput.addEventListener('input', function() {
            limpiarError();
        });
        celsiusInput.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                convertBtn.click();
            }
        });
  