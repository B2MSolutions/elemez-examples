elemez.tokens = {
  registerHandlers: function() {
    $('.submit-tokens-button').click(function(e) {this.saveTokens(); e.preventDefault();}.bind(this));
    $('.foget-tokens-link').click(function(e) {this.forgetTokens(); e.preventDefault();}.bind(this));
    $('.elemez-key').val(localStorage.elemezKey);
    $('.elemez-token ').val(localStorage.elemezToken);
    $('.uk-alert-close.uk-close').click(function(e) {elemez.changeVisibility('.uk-alert', false); e.preventDefault();});
  },

  addTokensCallback: function(callback) {
    this.callback = callback;
  },
  present: function() {
    return localStorage.elemezKey && localStorage.elemezToken;
  },
  changeTokensFormVisibility: function(visible) {
    elemez.changeVisibility('.tokens-form', visible);
  },
  saveTokens: function() {
    var key = $('.elemez-key').val();
    var token = $('.elemez-token').val();

    if (key && token) {
      localStorage.elemezKey = key;
      localStorage.elemezToken = token;

      elemez.fetchServerData();
      this.changeTokensFormVisibility(false);
    }
  },
  forgetTokens: function() {
    delete localStorage.removeItem('elemezKey');
    delete localStorage.removeItem('elemezToken');

    this.changeTokensFormVisibility(true);
    elemez.hideMain();
  },
  badTokenOrKeyNotification: function() {
    elemez.changeVisibility('.uk-alert', true);
  }
};

elemez.tokens.registerHandlers();
