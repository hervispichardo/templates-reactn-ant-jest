import * as R from 'ramda';

//Group

const groupProp = attr => R.pipe(
  R.groupBy(R.prop(attr)),
  R.map(R.head),
);

const groupById = groupProp('id');


// Objecs

const objToArray = obj => R.values(obj)

const renameKeys = R.curry((keysMap, obj) =>
  R.reduce((acc, key) => R.assoc(keysMap[key] || key, obj[key], acc), {}, R.keys(obj))
);


//Strings

const trunk = (str, num = 14) => {
  return str.substring(0, num) + "...";
}


//Others

const copyToClipboard = (str) => {
  let el = document.createElement('textarea');
  el.value = str;
  el.setAttribute('readonly', '');
  el.style = {position: 'absolute', left: '-9999px'};
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
}


export {
  groupProp,
  groupById,
  objToArray,
  renameKeys,
  trunk,
  copyToClipboard,
}