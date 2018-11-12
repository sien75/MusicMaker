function Graphic() {
  var that = this;
  this.grids = [];
  this.others = [];

  this.init = function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight * 0.95 - 45;

    cav.fillStyle = 'black';cav.fillRect(0, 0, canvas.width, canvas.height);
    var label = 0, totalHeight = 0;
    for(; label < graphicInfo.numOfGraphics; label++) {
      that.addGraphic(label, 'grid',
        that.mainPositions(0, totalHeight, canvas.width, (canvas.height-14)*graphicInfo.gRows[label]/graphicInfo.gRows[0]+14, [0,0,1]) );
      totalHeight += (canvas.height - 14) * graphicInfo.gRows[label] / graphicInfo.gRows[0] + 14;
    }
  }

  this.exeGra = function () {
    cav.fillStyle = 'black';cav.fillRect(0, 0, canvas.width, canvas.height);
    var label = 0, totalHeight = 0;
    for(; label < graphicInfo.numOfGraphics; label++) {
      if(graphicInfo.gRows[label] == 0) continue;
      that.alterGraphic(label, 'position', that.mainPositions(0, totalHeight,
        canvas.width, (canvas.height-14)*graphicInfo.gRows[label]/graphicInfo.gRows0+14,
        [window['posChange'].x, window['posChange'].y, window['scale_gain']]) );
      totalHeight += (canvas.height-14)*graphicInfo.gRows[label]/graphicInfo.gRows0+14;
    }
  }

  this.addGraphic = function (label, type, position) {
    if(type == 'grid') {
      that.grids[label]= new Grid();
      that.grids[label].set(label, position);
    } else if(type == 'keyboard') {
      that.others[label] = new Keyboard();
      that.others[label].set(position, 5);
    } else if(type == 'drums') {
      that.others[label] = new Drums();
      that.others[label].set(position);
    }
  }

  this.alterGraphic = function (label, part, newDetail) {
    if(that.grids[label] != null && (part == 'musicScore' || part == 'position'))
      that.grids[label].alter(part, newDetail);
  }

  this.mainPositions = function(baseL, baseT, baseW, baseH, changes) {
    return {
        left : (baseL+ 7) * changes[2] + changes[0],
        top : (baseT + 7) * changes[2] + changes[1],
        width : (baseW - 14) * changes[2],
        height : (baseH - 14) * changes[2]
      };
  }

  this.operateGrid = function (s, e, state) {
    for(grid in that.grids) {
      var x1 = (s.x - that.grids[grid].position.left),
        y1 = (s.y - that.grids[grid].position.top),
        x2 = (e.x - that.grids[grid].position.left);
      if((x1 > 0 && x1 < that.grids[grid].position.height/graphicInfo.gRows[grid]*1.62*graphicInfo.gColumns)
      && (y1 > 0 && y1 < that.grids[grid].position.height)
      && (x2 > 0 && x2 < that.grids[grid].position.height/graphicInfo.gRows[grid]*1.62*graphicInfo.gColumns)) {
        if(state == 'move' || state == 'start') that.grids[grid].paintColor(y1, x1, x2, state);
        else if(state == 'stop') that.grids[grid].gridLogic(y1, x1, x2);
        return;
      }
    }
  }
}
