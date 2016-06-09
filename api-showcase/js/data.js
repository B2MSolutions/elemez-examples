(function() {
  function getData(callback) {
    var apigClient = apigClientFactory.newClient({apiKey: localStorage.elemezKey}); //prod prod
    var params = {
      'x-api-key': localStorage.elemezKey,
      token: localStorage.elemezToken,
      from: moment.utc().subtract(15, 'days').valueOf(),
      to: moment.utc().valueOf()
    };
    var body = {};
    var additionalParams = {};

    apigClient.dataGet(params, body, additionalParams)
      .then(function(result) {callback(result);})
      .catch(function(result) {console.log("ERROR: ", result);});
  }

  //---------------------CHARTS---------------------
  var currentChart = null;
  var chartData = null;

  var chartsTable = {
    line: showLineChart,
    bar: showBarChart
  };

  function changeChartType(newType) {
    currentChart.destroy();
    chartsTable[newType]();
  };

  function showBarChart() {
    if (currentChart) currentChart.destroy();

    var ctx = $("#dataChart");

    currentChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: _.map(chartData, 'x'),
        datasets: [{
          label: 'Total traffic',
          data: _.map(chartData, 'y'),
          backgroundColor: '#FFDA80',
          borderWidth: 2,
          borderColor: "#FFB069"
        }]
      },
      options: {
        scales: {
          xAxes: [{
            type: 'time',
            time: {
              tooltipFormat: "YYYY/MM/DD"
            }
          }],
          yAxes: [{
            ticks: {
              callback: function(value, index, values) {
                return humanData(value);
              }
            }
          }]
        }
      }
    });
  }

  function showLineChart() {
    if (currentChart) currentChart.destroy();

    var ctx = $("#dataChart");
    currentChart = new Chart(ctx, {
      type: 'line',
      data: {
        datasets: [{
          label: 'Total traffic',
          data: chartData,
          backgroundColor: '#FFDA80',
          borderColor: "#FFB069"
        }]
      },
      options: {
        scales: {
          xAxes: [{
            type: 'time',
            time: {
              tooltipFormat: "YYYY/MM/DD"
            }
          }],
          yAxes: [{
            ticks: {
              callback: function(value, index, values) {
                return humanData(value);
              }
            }
          }]
        }
      }
    });
  }

  function humanData(bytes) {
    var thresh = 1024;
    if(Math.abs(bytes) < thresh) {
      return bytes + ' B';
    }
    var units = ['KB','MB','GB','TB','PB','EB','ZB','YB'];
    var u = -1;
    do {
      bytes /= thresh;
      ++u;
    } while(Math.abs(bytes) >= thresh && u < units.length - 1);
    return bytes.toFixed(1)+' '+units[u];
  }

  function populateOtherValues(trend) {
    $('#stddev').text(humanData(trend.data.data.attributes.total.stddev));
    $('#mean').text(humanData(trend.data.data.attributes.total.mean));
    $('#total').text(humanData(trend.data.data.attributes.total.total));
    $('#sigma').text(trend.data.data.attributes.total.sigma);

    $('.response-json').text(JSON.stringify(trend, ' ', 2));
    $('pre code').each(function(i, block) {
      hljs.highlightBlock(block);
    });

    elemez.sigmaStatus.update(trend.data.data.attributes.sigma, "Data consumption level");
  }

  function fetchServerData() {
    getData(function(data) {
      chartData = _.map(data.data.data.attributes.total.trend,
                        function(item) {return {x: item.utc, y: item.value};});

      populateOtherValues(data);
      chartsTable['bar']();
    });
  }

  function start() {
    if(elemez.tokens.present()) {
      elemez.tokens.changeTokensFormVisibility(false);
      elemez.changeVisibility('.main-section', true);
      elemez.changeVisibility('.footer', true);
      fetchServerData();
    } else {
      elemez.tokens.changeTokensFormVisibility(true);
      elemez.changeVisibility('.main-section', false);
      elemez.changeVisibility('.footer', false);
    }
  }

  window.elemez.hideMain = _.partial(elemez.changeVisibility, '.main-section, .footer', false);
  window.elemez.showMain = _.partial(elemez.changeVisibility, '.main-section, .footer', true);
  window.elemez.fetchServerData = fetchServerData;
  window.elemez.changeChartType = changeChartType;
  window.elemez.start = start;
})();
