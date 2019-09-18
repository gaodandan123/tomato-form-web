
export default function paramsStringify(params = {}) {
  const paramsArray = [];
  let values = '';
  Object.keys(params).forEach((k) => {
    switch (typeof params[k]) {
      case 'string':
        values = params[k].trim();
        break;
      case 'undefined':
        values = '';
        break;
      default:
        values = params[k];
        break;
    }
    paramsArray.push(`${k}=${encodeURIComponent(values)}`);
  });
  return paramsArray.join('&');
}
