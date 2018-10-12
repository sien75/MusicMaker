this.posChange = {x : 0, y : 0};
this.scale_gain = 1;

document.getElementById('play').onclick = function() {
  player.play();
}

document.getElementById('setting').onclick = function() {
  setting.showSetting(-1);
}

body.oncontextmenu = function(e) {
  e.preventDefault();
}

canvas.onmousedown = function(e) {
  if(e.button == 2) {
    window['ifRightDown'] = true;
    window['rightPos'] = getPos(e);
  }
  else {
    window['ifLeftDown'] = true;
    window['leftDownPos'] = getPos(e);
    graphic.operateGrid(window['leftDownPos'], getPos(e), 'start');
  }
}

canvas.onmouseup = function(e) {
  if(e.button == 2) {
    window['ifRightDown'] = false;
  }
  else {
    window['ifLeftDown'] = false;
    graphic.operateGrid(window['leftDownPos'], getPos(e), 'stop');
  }
}

canvas.onmousemove = function(e) {
  if(window['ifRightDown']) {
    var currentPos = getPos(e);
    window['posChange'].x += (currentPos.x - window['rightPos'].x);
    window['posChange'].y += (currentPos.y - window['rightPos'].y);
    window['rightPos'] = currentPos;
    rePaint();
  }
  else if(window['ifLeftDown']) {
    graphic.operateGrid(window['leftDownPos'], getPos(e), 'move');
  }
}

if(document.addEventListener){
  document.addEventListener('DOMMouseScroll',scrollFunc,false);
}
window.onmousewheel = document.onmousewheel = scrollFunc;

function scrollFunc(e) {
  var delta = e.wheelDelta || e.detail,
    currentPos = getPos(e),
    correction = {x : 0, y : 0};
    correction.x += 1.1 * (currentPos.x - window['posChange'].x) - 0.05 * canvas.width;
    correction.y += 1.1 * (currentPos.y - window['posChange'].y) - 0.05 * canvas.height;
  if(delta > 0) {
    window['scale_gain'] *= 1.03;
    window['posChange'].x -= correction.x * 0.03;
    window['posChange'].y -= correction.y * 0.03;
  } else if(delta < 0) {
    window['scale_gain'] /= 1.03;
    window['posChange'].x += correction.x * 0.03;
    window['posChange'].y += correction.y * 0.03;
  }
  rePaint();
}

function getPos(e) {
  var bbox = canvas.getBoundingClientRect(),
    x = e.clientX - bbox.left * (canvas.width / bbox.width),
    y = e.clientY - bbox.top * (canvas.height / bbox.height);
    return {x : x, y : y};
}

window.onresize = function() {
  //add setting font size change
  //add canvas size change
}
