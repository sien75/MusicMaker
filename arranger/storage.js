var trans = {
  'piano' : '0000_Aspirin',
  'bass' : '0390_Aspirin',
  'elecGuitar' : '0310_FluidR3_GM',
  'drum' : '36_6_JCLive',
  'snare' : '38_6_JCLive',
  'hihat' : '42_6_JCLive',
  'lowTom' : '43_6_JCLive',
  'midTom' : '47_6_JCLive',
  'highTom' : '50_6_JCLive',
  'crash1' : '49_6_JCLive',
  'crash2' : '57_6_JCLive',
  'ride' : '51_6_JCLive'
};
var instrumentsList = ['piano', 'bass', 'elecGuitar'];
var drumContent =['drum', 'snare', 'hihat', 'lowTom', 'midTom', 'highTom', 'crash1', 'crash2', 'ride'];

var C2 = 0+12*2, c2 = 1+12*2, D2 = 2+12*2, d2 = 3+12*2, E2 = 4+12*2, F2 = 5+12*2, f2 = 6+12*2, G2 = 7+12*2, g2 = 8+12*2, A2 = 9+12*2, a2 = 10+12*2, B2 = 11+12*2;
var C3 = 0+12*3, c3 = 1+12*3, D3 = 2+12*3, d3 = 3+12*3, E3 = 4+12*3, F3 = 5+12*3, f3 = 6+12*3, G3 = 7+12*3, g3 = 8+12*3, A3 = 9+12*3, a3 = 10+12*3, B3 = 11+12*3;
var C4 = 0+12*4, c4 = 1+12*4, D4 = 2+12*4, d4 = 3+12*4, E4 = 4+12*4, F4 = 5+12*4, f4 = 6+12*4, G4 = 7+12*4, g4 = 8+12*4, A4 = 9+12*4, a4 = 10+12*4, B4 = 11+12*4;
var C5 = 0+12*5, c5 = 1+12*5, D5 = 2+12*5, d5 = 3+12*5, E5 = 4+12*5, F5 = 5+12*5, f5 = 6+12*5, G5 = 7+12*5, g5 = 8+12*5, A5 = 9+12*5, a5 = 10+12*5, B5 = 11+12*5;
var C6 = 0+12*6, c6 = 1+12*6, D6 = 2+12*6, d6 = 3+12*6, E6 = 4+12*6, F6 = 5+12*6, f6 = 6+12*6, G6 = 7+12*6, g6 = 8+12*6, A6 = 9+12*6, a6 = 10+12*6, B6 = 11+12*6;

instrumentsList.forEach(function(instrument) {
  window['currentPlay_' + instrument] = new Array();
  window[instrument] = function(pitch, volume) {
    return {timbre:instrument, pitch:pitch||C4, volume:volume||0.5};
  };
});

drumContent.forEach(function(drum) {
  window['currentPlay_' + drum] = new Array();
  window[drum] = function(pitch, volume) {
    return {pitch: C4, timbre: drum, volume: volume || 0.5};
  }
});

window['drums'] = function(pitch, volume) {
  if(pitch == C4) return drum();
  if(pitch == c4) return snare();
  if(pitch == D4) return hihat();
  if(pitch == d4) return lowTom();
  if(pitch == E4) return midTom();
  if(pitch == F4) return highTom();
  if(pitch == f4) return crash1();
  if(pitch == G4) return crash2();
  if(pitch == g4) return ride();
  return 0;
}
