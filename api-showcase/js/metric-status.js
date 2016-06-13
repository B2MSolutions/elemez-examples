elemez.sigmaStatus = {
  update: function(sigma, message, phrases) {
    phrases = phrases || {};
    var good = phrases.good || ' is good today';
    var normal = phrases.normal || ' is normal today';
    var bad = phrases.bad || ' is bad today';

    var statuses = {
      good: {icon: 'uk-icon-thumbs-o-up', message: message + good},
      normal: {icon: 'uk-icon-balance-scale', message: message + normal},
      bad: {icon: 'uk-icon-warning', message: message + bad}
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
