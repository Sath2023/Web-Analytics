function startBlinking() {
  var color = document.getElementById("color").value.toLowerCase();
  var lights = document.querySelectorAll('.light');

  lights.forEach(function(light) {
    light.classList.remove('blink'); // Remove blinking from all lights
  });

  if (color === 'red') {
    document.getElementById('redLight').classList.add('blink');
  } else if (color === 'yellow') {
    document.getElementById('yellowLight').classList.add('blink');
  } else if (color === 'green') {
    document.getElementById('greenLight').classList.add('blink');
  }
}