var randomNumberBetween10and60;
// repeat every 10 seconds by default
var repeatEvery = 10000;
setInterval(function() {

  // mete los textos entre comillas y separados por comas
  var textos = [];

  var randomText = Math.floor(Math.random() * textos.length);


  function dispatch(target, eventType, char) {
     var evt = document.createEvent("TextEvent");
     evt.initTextEvent (eventType, true, true, window, char, 0, "en-US");
     target.focus();
     target.dispatchEvent(evt);
  }


  // dispatch(document.querySelector("#compose-input div"), "textInput", "hello!");
  //
  // dispatch(document.querySelector(".input-emoji div"), "textInput", textos[randomText]);
  console.log(textos[randomText]);

  function triggerClick() {
    var event = new MouseEvent('click', {
      'view': window,
      'bubbles': true,
      'cancelable': true
    });
    document.querySelector(".icon.btn-icon.icon-send").dispatchEvent(event)
  }
  // triggerClick()
}, 10000);
