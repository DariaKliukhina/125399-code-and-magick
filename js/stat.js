'use strict';
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 16;
var BAR_GAP = 50;
var BAR_WIDTH = 40;
var BAR_HEIGHT = 150;
var CONGRATS_HEIGHT = BAR_GAP + FONT_GAP * 2 + GAP * 2;
var BAR_X = CLOUD_X + BAR_GAP;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

var getRandomNumber = function (min, max) {
  var randNumber = min + Math.random() * (max - min);
  return randNumber;
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = 'PT Mono 16px';
  ctx.fillText('Ура вы победили!', CLOUD_X + GAP, BAR_GAP);
  ctx.fillText('Список результатов:', CLOUD_X + GAP, BAR_GAP + FONT_GAP + GAP);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {

    ctx.fillStyle = '#000';
    ctx.fillText(names[i], BAR_X + (BAR_WIDTH + BAR_GAP) * i, CONGRATS_HEIGHT + BAR_HEIGHT + GAP * 2);

    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255,0,0,1)';
    } else {
      ctx.fillStyle = 'rgba(24,62,214,' + getRandomNumber(0.1, 1) + ')';
    }
    ctx.fillRect(BAR_X + (BAR_WIDTH + BAR_GAP) * i, CONGRATS_HEIGHT + (BAR_HEIGHT - (BAR_HEIGHT * times[i]) / maxTime), BAR_WIDTH, (BAR_HEIGHT * times[i]) / maxTime);
  }

};
