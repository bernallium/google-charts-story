 // Load the Visualization API and the corechart package.
    google.charts.load('current', {'packages':['corechart', 'timeline', 'geochart', 'map'], 
      'mapsApiKey': 'AIzaSyAJwNeJkNO_4KW7DhRe3xLPDwWDQo5Jc5w'
    });

    // Set a callback to run when the Google Visualization API is loaded.
    google.charts.setOnLoadCallback(drawTimeline);
    google.charts.setOnLoadCallback(drawRegionsMap);
    google.charts.setOnLoadCallback(drawPie);

    // ─────────────────────────────────────────────────────────────────

    function drawRegionsMap() {
      var data = google.visualization.arrayToDataTable([
        ['Country', 'Popularity'],
        ['Canada', 200],
      ]);

      var options = {
        region: 'CA',
        displayMode: 'text',
        colorAxis: {colors: ['#00853f', 'black', '#e31b23']},
        backgroundColor: '#81d4fa',
        datalessRegionColor: '#f8bbd0',
        defaultColor: '#f5f5f5',
      };

      var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

      chart.draw(data, options);
    }

    // ────────────────────────────────────────────────────────────────────────────────

    function drawTimeline() {
      var container = document.getElementById('timeline');
      var chart = new google.visualization.Timeline(container);
      var dataTable = new google.visualization.DataTable();

      dataTable.addColumn({ type: 'string', id: 'Event' });
      dataTable.addColumn({ type: 'string', id: 'Event' });
      dataTable.addColumn({ type: 'date', id: 'Start' });
      dataTable.addColumn({ type: 'date', id: 'End' });
      dataTable.addRows([
        [ 'Highschool 👨‍🎓', 'Pope John Paul II CSS', new Date(2006, 8, 01),  new Date(2010, 8, 1) ],
        [ 'University 👨‍🔬', 'University of Toronto - Studying Biochem and Human Biology' , new Date(2010, 8, 01),  new Date(2015, 4, 1) ],
        [ 'Applications for Pharmacy School 📝', 'PCAT', new Date(2015, 4, 01),  new Date(2016, 8, 1) ],
        [ 'Pharmacy School 💊', 'Lesle Dan Factulty of Pharmacy', new Date(2016, 8, 1),  new Date(2017, 8, 1) ],
        [ 'Self taught coding 🤓', 'Let the coding begin!', new Date(2017, 4, 01),  new Date(2018, 8, 1) ],
        [ 'Continuuing Education 📚', 'Ryerson University', new Date(2018, 8, 01),  new Date(2019, 8, 1) ],
        [ 'Coding Bootcamp 👨‍💻', 'General Assembly Toronto', new Date(2020, 1, 18),  new Date(2020, 4, 8) ],
        ]);

      var options = {
        timeline: { 
          showRowLabels: true, // Default false
          groupByRowLabel: false // Default false
        }
      };
      
      chart.draw(dataTable, options);
    }

    // ─────────────────────────────────────────────────────────────────

    function drawPie() {

      var data = google.visualization.arrayToDataTable([
        ['Skill', 'Amount'],
        ['Lectures 👂',     30],
        ['Ice breakers 🧊',      10],
        ['Coding 👨‍💻',  50],
        ['Pair programming 👯‍♀️', 10],
        ['Coffee ☕️', 300]
      ]);

      var options = {
        title: 'A typical day at General Assembly 👨‍💻',
        is3D: true,
      };

      var chart = new google.visualization.PieChart(document.getElementById('pie_div'));

      chart.draw(data, options);
    }