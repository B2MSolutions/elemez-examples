elemez.tokens = {
  registerHandlers: function() {
    $('.submit-tokens-button').click(e => {this.saveTokens(); e.preventDefault();});
    $('.foget-tokens-link').click(e => {this.forgetTokens(); e.preventDefault();});
    $('.elemez-key').val(localStorage.elemezKey);
    $('.elemez-token ').val(localStorage.elemezToken);
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
      elemez.showMain();
    }
  },
  forgetTokens: function() {
    delete localStorage.removeItem('elemezKey');
    delete localStorage.removeItem('elemezToken');

    this.changeTokensFormVisibility(true);
    elemez.hideMain();
  }
};

elemez.tokens.registerHandlers();
