(function() {
  function getDisruptions(callback) {
    var apigClient = apigClientFactory.newClient({apiKey: localStorage.elemezKey}); //prod prod
    var params = {
      token: localStorage.elemezToken,
      from: moment.utc().subtract(15, 'days').valueOf(),
      to: moment.utc().valueOf()
    };
    var body = {};
    var additionalParams = {};

    apigClient.disruptionsGet(params, body, additionalParams)
      .then(result => callback(result)).catch(result => {
        console.log("ERROR: ", result);
      });
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
    // hljs.highlightBlock($('.response-json')[0]);

    elemez.sigmaStatus.update(trend.data.data.attributes.sigma, "Disruptions level");
  }

  function fetchServerData() {
    getDisruptions(function(disruptionsTrend) {
      chartData = _.map(disruptionsTrend.data.data.attributes.trend,
                        (item) => ({x: item.utc, y: item.value}));

      populateOtherValues(disruptionsTrend);
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
