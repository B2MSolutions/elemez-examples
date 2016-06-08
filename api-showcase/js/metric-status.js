elemez.sigmaStatus = {
  update: function(sigma, message, reverse) {
    //should be updated for reverse
    var statuses = {
      good: {icon: 'uk-icon-thumbs-o-up', message: message + ' is good today'},
      normal: {icon: 'uk-icon-balance-scale', message: message + ' is normal today'},
      bad: {icon: 'uk-icon-warning', message: message + ' is bad today'}
    };

    if (sigma > 1) {
      $('.metric-status').addClass(statuses.bad.icon);
      $('.metric-message').text(statuses.bad.message);
    } else if (sigma >= -1 && sigma <= 1) {
      $('.metric-status').addClass(statuses.normal.icon);
      $('.metric-message').text(statuses.normal.message);
    } else {
      $('.metric-status').addClass(statuses.good.icon);
      $('.metric-message').text(statuses.good.message);
    }
  }
};
