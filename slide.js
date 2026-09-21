(function () {
  var root = document.documentElement;
  function fit() {
    var k = Math.min(window.innerWidth / 1280, window.innerHeight / 720);
    root.style.setProperty('--scale', k);
  }
  window.addEventListener('resize', fit);
  fit();

  function pad(n) { return (n < 10 ? '0' : '') + n; }

  document.addEventListener('keydown', function (e) {
    var b = document.body;
    var n = parseInt(b.getAttribute('data-index'), 10);
    var t = parseInt(b.getAttribute('data-total'), 10);
    var k = e.key;
    if (k === 'f' || k === 'F') {
      if (!document.fullscreenElement) { root.requestFullscreen(); } else { document.exitFullscreen(); }
      return;
    }
    if (k === 'i' || k === 'I') { location.href = 'index.html'; return; }
    var go = null;
    if (k === 'ArrowRight' || k === 'PageDown' || k === ' ' || k === 'Enter') go = n + 1;
    if (k === 'ArrowLeft' || k === 'PageUp' || k === 'Backspace') go = n - 1;
    if (k === 'Home') go = 1;
    if (k === 'End') go = t;
    if (go && go >= 1 && go <= t) { e.preventDefault(); location.href = pad(go) + '.html'; }
  });
})();
