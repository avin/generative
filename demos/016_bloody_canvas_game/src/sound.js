const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

export function playSound(frequency, type, x, volume = 1) {
  const o = audioCtx.createOscillator();
  const g = audioCtx.createGain();
  o.connect(g);
  o.type = type;
  g.connect(audioCtx.destination);
  o.frequency.value = frequency;
  o.start();
  g.gain.value = volume;
  g.gain.exponentialRampToValueAtTime(0.00001, audioCtx.currentTime + x);

  setTimeout(() => {
    o.stop();
    o.disconnect();
  }, (x + 0.5) * 1000);
}
