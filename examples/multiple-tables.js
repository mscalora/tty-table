var Table = require('../');

const header = [
  { value: 'col1' },
  { value: 'col2' }
];

const rows = [[1, 2]];

const header2 = [
  { value: 'col1' },
  { value: 'col2' },
  { value: 'col3' }
];

const rows2 = [
  [1, 2, 3],
  [03,34,99]
];

var a = Table(header2, rows2);
debugger;
console.log(a.render());

var b = Table(header, rows);
debugger;
console.log(b.render());

//console.log(Table(header2, rows2).render());
//console.log(Table(header, rows).render());
