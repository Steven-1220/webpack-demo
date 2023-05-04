import jsonTest from './assets/JSON/data.json';

import './assets/scss/all.scss';

if (module.hot) {
  module.hot.accept();
}
function sum(a, b) {
  console.log(a + b);
}
sum(2, 4);
