(function() {
  function getBatteryLows(callback) {
    var apigClient = apigClientFactory.newClient({apiKey: localStorage.elemezKey}); //prod prod
    var params = {
      'x-api-key': localStorage.elemezKey,
      token: localStorage.elemezToken,
      from: moment.utc().subtract(15, 'days').valueOf(),
      to: moment.utc().valueOf()
    };
    var body = {};
    var additionalParams = {};

    apigClient.batteryLowGet(params, body, additionalParams)
      .then(function(result) {callback(result);})
      .catch(function(result) {
        elemez.hideSpinner();
        elemez.tokens.badTokenOrKeyNotification();
        elemez.tokens.forgetTokens();
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

    var ctx = $("#batteryLowsChart");

    currentChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: _.map(chartData, 'x'),
        datasets: [{
          label: 'Low Battery Events',
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

    var ctx = $("#batteryLowsChart");
    currentChart = new Chart(ctx, {
      type: 'line',
      data: {
        datasets: [{
          label: 'Low Battery Events',
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

    elemez.sigmaStatus.update(trend.data.data.attributes.sigma, "Low Battery Events level");
  }

  function fetchServerData() {
    elemez.showSpinner();
    getBatteryLows(function(batteryLows) {
      chartData = _.map(batteryLows.data.data.attributes.trend,
                        function(item) {return {x: item.utc, y: item.value};});

      elemez.hideSpinner();
      elemez.showMain();

      populateOtherValues(batteryLows);
      chartsTable['bar']();
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
