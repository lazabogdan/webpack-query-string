var mout = require('mout');
var Qs = require('qs');
var defaults = { encode: false, arrayFormat: 'brackets' };

module.exports = function(params, options) {
	options = options || {};
	options = mout.object.merge(defaults, options);
	return Qs.stringify(params, options);
}