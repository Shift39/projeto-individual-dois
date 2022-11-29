// principal
  let linha = document.getElementById('grafico').getContext("2d");
  let lin = new Chart(linha, {
  type: 'line', 
  data: {labels: ["setor 1"], 
  datasets: [{
    label: "Media de temperatura do setor",
    fillColor: "rgba(220,220,220,0.2)",
    strokeColor: "rgba(220,220,220,1)",
    pointColor: "rgba(220,220,220,1)",
    pointStrokeColor: "#fff",
    pointHighlightFill: "#fff",
    pointHighlightStroke: "rgba(220,220,220,1)",
  data:[media]
  
  }]}
  });  
  //

  //primeiro de cima
  let primeiro = document.getElementById('primo')
  let primus = new Chart(primeiro, {
  type: 'doughnut', 
  data: {labels: ["CPU1"], 
  datasets: [{
  label: 'Uso da CPU',
  backgroundColor:['green'],
  data:[temperatura[0],50],
  fill: false
  }]}
  });
  //

        // segundo de cima
  let segundo = document.getElementById('secu')
  let secus = new Chart(segundo, {
    type: 'doughnut', 
    data: {labels: ["CPU2"], 
  datasets: [{
    label: 'Uso da CPU',
    backgroundColor:['rgb(255, 0, 0)'],
    data:[teste[0].temperatura, 5],
    fill: false
  }]}
  });
  //

    // terceiro de cima
  let terceiro = document.getElementById('terc')
  let tercius = new Chart(terceiro, {
    type: 'doughnut', 
    data: {labels: ["CPU3"], 
  datasets: [{
    label: 'Uso da CPU',
    backgroundColor:['yellow'],
    data:[teste[0].temperatura, 10],
    fill: false
      
  }]}
  });
    //


    // primeiro inferior
    let primo_inf = document.getElementById('g-um')
    let primus_inf = new Chart(primo_inf, {
    type: 'line', 
    data: {labels: ["1H","2H","3H","4H","5H","6H","7H"], 
  datasets: [{
    label: 'CPU',
    backgroundColor:['rgb(57, 255, 20)'],
    data:[frequencia[0],frequencia[1],frequencia[2],frequencia[3],frequencia[4],frequencia[5],frequencia[6]],
    fill: false
      
    }]}
    });
    //

    // segundo inferior
    let secu_inf = document.getElementById('g-dois')
    let secus_inf = new Chart(secu_inf, {
    type: 'line', 
    data: {labels: ["1H","2H","3H","4H","5H","6H","7H"], 
  datasets: [{
    label: 'Disco',
    backgroundColor:['rgb(57, 255, 20)'],
    data:[disco[0],disco[1],disco[2],disco[3],disco[4],disco[5],disco[6]],
    fill: false
  }]}
  });
    //

    // terceiro inferior
    let terc_inf = document.getElementById('g-tres')
    let tercis_inf = new Chart(terc_inf, {
    type: 'line', 
    data: {labels: ["1H","2H","3H","4H","5H","6H","7H"], 
  datasets: [{
    label: 'RAM',
    backgroundColor:['rgb(57, 255, 20)'],
    data:[ram[0],ram[1],ram[2],ram[3],ram[4],ram[5],ram[6]],
    fill: false
  }]}
      
  });
    //

