var mmr = require('../');
var test = require('tape');
var isFunction = require('lodash.isfunction');
var isNull = require('lodash.isnull');
var isPlainObject = require('lodash.isplainobject');

test('exports a function', function(t) {
  t.plan(1);
  t.ok(isFunction(mmr));
});

test('works', function(t) {
  t.plan(3);
  t.doesNotThrow(function() {
    mmr('Turtle the Cat', function(error, response) {
      t.ok(isNull(error));
      t.ok(isPlainObject(response));
    });
  });
});