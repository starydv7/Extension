var second = 0;
function max(val) {
  return val > 9 ? val : "0" + val;
}
setInterval(function ()
 {
  document.getElementById("seconds").innerHTML = max(++second % 60);
  document.getElementById("minutes").innerHTML = max(parseInt(second / 60, 10));
}, 1000);