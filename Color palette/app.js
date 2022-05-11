function generate() {
  var noOfShades = document.querySelector('#number').value;
  var r = 150;
  var g = 0;
  var b = 0;
  var str = [];
  for (var i = 0; i < noOfShades; i++) {
    r += 15;
    g += 23;
    b += 23;
    str.push(
      "<div class='swatch' style='background-color:rgb(" +
        r +
        ',' +
        g +
        ',' +
        b +
        ")'></div>"
    );
  }
  document.querySelector('#op').innerHTML = str.reverse().join('');
  console.log(str.reverse().join(''));
}
