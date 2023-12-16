const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const dns = domains.map(item => item.split('.').reverse());
  const result = dns.reduce((accum, item) => {
    let dnsStr= '';
    item.forEach((element) => {
      dnsStr = dnsStr.concat('.').concat(element);
      accum[dnsStr] = accum[dnsStr] ? accum[dnsStr] + 1 : 1;
    });
    return accum;
  }, {})
  return result;
}

module.exports = {
  getDNSStats
};
