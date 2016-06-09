(function() {
  function getDisruptions(callback) {
    var apigClient = apigClientFactory.newClient({apiKey: localStorage.elemezKey}); //prod prod
    var params = {
      'x-api-key': localStorage.elemezKey,
      token: localStorage.elemezToken,
      from: moment.utc().subtract(15, 'days').valueOf(),
      to: moment.utc().valueOf()
    };
    var body = {};
    var additionalParams = {};

    apigClient.disruptionsGet(params, body, additionalParams)
      .then(function(result) {callback(result);})
      .catch(function(result) {console.log("ERROR: ", result);});
  }

  //---------------------CHARTS---------------------
  var currentChart = null;
  var currentMeanChart = null;

  var chartData = null;
  var percentageMeanChartData = null;

  var chartsTable = {
    line: showLineChart,
    bar: showBarChart
  };

  function changeChartType(newType) {
    currentChart.destroy();
    chartsTable[newType]();
  };

  function showMeanBarChart() {
    if (currentMeanChart) currentMeanChart.destroy();

    var ctx = $("#disruptionsMeanChart");

    currentMeanChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: _.map(percentageMeanChartData, 'x'),
        datasets: [{
          label: 'Relative number of disruptions',
          data: _.map(percentageMeanChartData, 'y'),
          backgroundColor: '#CCBFE8',
          borderWidth: 2,
          borderColor: "#7A60AE"
        }]
      },
      options: {
        tooltips: {
          callbacks: {
            label: function(item) { return parseFloat(item.yLabel.toFixed(2)) + "%"; }
          }
        },
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
                return parseFloat(value.toFixed(2)) + "%";
              }
            }
          }]
        }
      }
    });
  }

  function showBarChart() {
    if (currentChart) currentChart.destroy();

    var ctx = $("#disruptionsChart");

    currentChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: _.map(chartData, 'x'),
        datasets: [{
          label: 'Disruptions',
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
          }]
        }
      }
    });
  }

  function showLineChart() {
    if (currentChart) currentChart.destroy();

    var ctx = $("#disruptionsChart");
    currentChart = new Chart(ctx, {
      type: 'line',
      data: {
        datasets: [{
          label: 'Disruptions',
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
          }]
        }
      }
    });
  }

  function populateOtherValues(trend) {
    $('#stddev').text(trend.data.data.attributes.stddev.toFixed(2));
    $('#mean').text(trend.data.data.attributes.mean.toFixed(2));
    $('#total').text(trend.data.data.attributes.total);
    $('#sigma').text(trend.data.data.attributes.sigma);

    $('.response-json').text(JSON.stringify(trend, ' ', 2));
    $('pre code').each(function(i, block) {
      hljs.highlightBlock(block);
    });

    elemez.sigmaStatus.update(trend.data.data.attributes.sigma, "Disruptions level");
  }

  function fetchServerData() {
    elemez.showSpinner();
    getDisruptions(function(disruptionsTrend) {
      chartData = _.map(disruptionsTrend.data.data.attributes.trend,
                        function(item) {return {x: item.utc, y: item.value};});

      var mean = disruptionsTrend.data.data.attributes.mean;
      percentageMeanChartData = _.map(disruptionsTrend.data.data.attributes.trend,
                                      function(item) {
                                        return {x: item.utc, y: (item.value / mean) * 100};
                                      });

      elemez.hideSpinner();
      elemez.showMain();

      populateOtherValues(disruptionsTrend);
      chartsTable['line']();
      showMeanBarChart();
    });
  }

  function start() {
    if(elemez.tokens.present()) {
      elemez.tokens.changeTokensFormVisibility(false);
      fetchServerData();
    } else {
      elemez.tokens.changeTokensFormVisibility(true);
    }
  }

  window.elemez.showSpinner = _.partial(elemez.changeVisibility, '.spinner', true);
  window.elemez.hideSpinner = _.partial(elemez.changeVisibility, '.spinner', false);
  window.elemez.hideMain = _.partial(elemez.changeVisibility, '.main-section, .footer', false);
  window.elemez.showMain = _.partial(elemez.changeVisibility, '.main-section, .footer', true);
  window.elemez.fetchServerData = fetchServerData;
  window.elemez.changeChartType = changeChartType;
  window.elemez.start = start;
})();
