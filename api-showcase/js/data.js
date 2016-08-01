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
      .catch(function(result) {
        elemez.hideSpinner();
        elemez.tokens.badTokenOrKeyNotification();
        elemez.tokens.forgetTokens();
      });
  }

  //---------------------CHARTS---------------------
  var currentChart = null;
  var currentMobileWifiChart = null;
  var chartData = null;
  var chartMobileData = null;
  var chartWifiData = null;

  var chartsTable = {
    line: showLineChart,
    bar: showBarChart
  };

  function changeChartType(newType) {
    currentChart.destroy();
    chartsTable[newType]();
  };

  function showMobileWifiPie() {
    var ctx = $("#mobileWifiPie");

    console.log(chartMobileData);
    var something = new Chart(ctx,{
      type: 'pie',
      data: {
        labels: [
          "Mobile today",
          "WiFi today"
        ],
        datasets: [
          {
            data: [_.last(chartMobileData).y, _.last(chartWifiData).y,],
            backgroundColor: [
              "#97C7DC",
              "#B69EE1"
            ],
            hoverBackgroundColor: [
              "#6FB1B8",
              "#7A60AE"
            ]
          }]
      }
    });
  };

  function showMobileWifiChart() {
    var ctx = $("#mobileWifiChart");
    currentMobileWifiChart = new Chart(ctx, {
      type: 'line',
      data: {
        datasets: [{
          label: 'Mobile data',
          data: chartMobileData,
          backgroundColor: '#97C7DC',
          borderColor: "#6FB1B8"
        }, {
          label: 'WiFi data',
          data: chartWifiData,
          backgroundColor: '#B69EE1',
          borderColor: "#7A60AE"
        }]
      },
      options: {
        tooltips: {
          callbacks: {
            label: function(item) { return humanData(item.yLabel); }
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
                return "  " + humanData(value);
              }
            }
          }]
        }
      }
    });
  }

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
        tooltips: {
          callbacks: {
            label: function(item) { return humanData(item.yLabel); }
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
                return "  " + humanData(value);
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
        tooltips: {
          callbacks: {
            label: function(item) { return humanData(item.yLabel); }
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
                return "  " + humanData(value);
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

    elemez.sigmaStatus.update(trend.data.data.attributes.sigma, "", {
      good: "Today's a good day for data usage",
      normal: "Today's a normal day for data usage",
      bad: "Today's a bad day for data usage"
    });
  }

  function fetchServerData() {
    elemez.showSpinner();
    getData(function(data) {
      chartData = _.map(data.data.data.attributes.total.trend,
                        function(item) {return {x: item.utc, y: item.value};});

      chartMobileData = _.map(data.data.data.attributes.mobile.trend,
                              function(item) {return {x: item.utc, y: item.value};});

      chartWifiData = _.map(data.data.data.attributes.other.trend,
                            function(item) {return {x: item.utc, y: item.value};});

      elemez.hideSpinner();
      elemez.showMain();

      populateOtherValues(data);
      chartsTable['bar']();
      showMobileWifiChart();
      showMobileWifiPie();
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
