
var url = 'http://localhost:5000/configFile';
var storedText;

fetch(url)
  .then(function(response) {
    response.text().then(function(text) {
      storedText = text;
        done()});
  });


  function done(){
    getfile("band")
    getfile("channel_bandwidth_MHz")
    getfile("common_scs")
    getfile("dl_arfcn")
    getfile("pci")
    getfile("plmn")
    getfile("tac")

  }
  function getfile(key) {
    const lineas = storedText.split('\n');
  
      // Buscar la línea que contiene el texto deseado
      const indiceDeLinea = lineas.findIndex(linea => linea.includes(key));
  
      // Verificar si se encontró la línea
      if (indiceDeLinea !== -1) {
          const selectedLine = lineas[indiceDeLinea]
          const numero = selectedLine.split(":")
          console.log(numero);
          document.getElementById(key).value = numero[1]
        }
  }