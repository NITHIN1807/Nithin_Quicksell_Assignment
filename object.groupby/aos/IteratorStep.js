'use strict';

var IteratorComplete = require('es-abstract/2022/IteratorComplete');
var IteratorNext = require('./IteratorNext');
var Type = require('es-abstract/2022/Type');

var assertRecord = require('es-abstract/helpers/assertRecord');

// https://262.ecma-international.org/14.0/#sec-iteratorstep

module.exports = function IteratorStep(iteratorRecord) {
	assertRecord(Type, 'Iterator Record', 'iteratorRecord', iteratorRecord);

	var result = IteratorNext(iteratorRecord); // step 1
	var done = IteratorComplete(result); // step 2
	return done === true ? false : result; // steps 3-4
};

