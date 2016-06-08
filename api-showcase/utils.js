window.elemez = {};

window.elemez.changeVisibility = function(name, show) {
  if (show) $(name).removeClass('uk-hidden');
  else $(name).addClass('uk-hidden');
};
