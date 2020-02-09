/**
 * Get number phase
 * @param time
 * @param duration
 * @param totalPhases
 */
export function getPhase(time, duration, totalPhases) {
  const res = (time % duration) / duration / (1 / totalPhases);
  const phase = Math.trunc(res);
  return [phase, res - phase];
}

/**
 * Async sleep
 * @param time
 * @returns {Promise<any>}
 */
export function sleep(time) {
  return new Promise(r => {
    setTimeout(r, time);
  });
}
