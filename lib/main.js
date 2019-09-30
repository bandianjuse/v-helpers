import lodash from 'lodash';
import moment from 'moment';
import accounting from 'accounting';

const install = (Vue, options) => {
  const name = (options && options.name) || '$utils';
  const filterNames = [
    'camelCase', 
    'capitalize', 
    'endsWith', 
    'escape', 
    'escapeRegExp', 
    'kebabCase', 
    'lowerCase', 
    'lowerFirst', 
    'pad',
    'padEnd',
    'padStart',
    'parseInt',
    'repeat',
    'snakeCase',
    'startsWith',
    'template',
    'toLower',
    'toUpper',
    'trim',
    'trimEnd',
    'truncate',
    'unescape',
    'upperFirst',
    'words',
  ];

  Vue[name] = lodash;
  Vue[name].moment = lodash;
  Vue[name].accounting = accounting;
  Vue.prototype[name] = lodash;
  Vue.prototype[name].moment = moment;
  Vue.prototype[name].accounting = accounting;

  if (options && options.expand && options.expand instanceof Object) {
    Object.keys(options.expand).forEach((item) => {
      Vue[name][item] = options.expand[item];
      Vue.prototype[name][item] = options.expand[item];
    });
  }

  filterNames.forEach((item) => {
    Vue.filter(`@${item}`, (...arg) => lodash[item](...arg));
  });
  Vue.filter('@formatDate', (value, format) => moment(value).format(format));
  Vue.filter('@formatMoney', (value, decimal = 2) => accounting.formatMoney(value, '', decimal));
};

var main = {
  install,
};
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default main;
