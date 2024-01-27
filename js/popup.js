document.addEventListener('DOMContentLoaded', function() {
  var checkButton = document.getElementById('collectEvents');
  checkButton.addEventListener('click', function() {
    changeBackgroundColorToRed();
  }, false);
}, false);

function changeBackgroundColorToRed() {
  document.body.style.backgroundColor = 'red';
}