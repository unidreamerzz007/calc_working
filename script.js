function buttonClick(val) {
  document.getElementById('screen').value += val;
}

function clearDisplay() {
  document.getElementById('screen').value = '';
}

function equalClick() {
  var text = document.getElementById('screen').value;
  try {
    var result = eval(text);
    document.getElementById('screen').value = result;
  } catch (e) {
    document.getElementById('screen').value = 'Error';
  }
}