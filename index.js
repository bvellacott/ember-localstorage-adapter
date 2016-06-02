/* jshint node: true */
'use strict';

module.exports = {
 	name: 'ember-localstorage-adapter',
	included: function(app) {
       	// this._super.included(app);
	   	app.import(app.bowerDirectory + '/where-clause-evaluate/dist/where-eval.js');
	}
};
