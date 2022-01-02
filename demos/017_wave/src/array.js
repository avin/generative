export function compressArray(freqs, count) {
  const result = [];

  const chunkSize = Math.floor(freqs.length / count);

  for (let i = 0; i < count; i += 1) {
    let subResult = 0;

    for (let j = 0; j < chunkSize; j += 1) {
      subResult += freqs[i * chunkSize + j];
    }
    result.push(subResult / chunkSize);
  }

  return result;
}
