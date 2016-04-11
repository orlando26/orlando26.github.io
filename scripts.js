var data = [
  {
    z: [[1, 20, 30, 50, 1], [20, 1, 60, 80, 30], [30, 60, 1, -10, 20]],
    x: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    y: ['Morning', 'Afternoon', 'Evening'],
    type: 'heatmap'
  }
];
var map = document.getElementById('map');
Plotly.newPlot(map, data);

alasql('select * from xlsx("https://www.dropbox.com/s/qrz5b0ebb9x32e4/Sintomatologias-vs-citocinas-pacientes-con-influenza-B.xlsx?dl=0",{headers:true, sheetid:"Sheet2", range:"A1:B6"})',
           [],function(data) {
                console.log(data);
    });