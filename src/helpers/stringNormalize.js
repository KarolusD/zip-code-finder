// returning normalized string ex. łabądź => labadz

function stringNormalize(string) {
  return string.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

export default stringNormalize;
