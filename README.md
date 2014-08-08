# opgg-mmr

Get [op.gg](http://op.gg/)'s matchmaking rating (MMR) for a League of Legends
player.

## Example

``` javascript
var mmr = require('opgg-mmr');

mmr('Turtle the Cat', function(error, response) {
  if (error) {
    throw error;
  }

  console.log(response);
  // => {
  // =>   log: '',
  // =>   tip: {
  // =>     status: '',
  // =>     leagueAverage: '',
  // =>     notice: ''
  // =>   },
  // =>   mmr: '2,669',
  // =>   class: ''
  // => }
});
```

## Installation

``` bash
$ npm install opgg-mmr
```

## API

``` javascript
var mmr = require('opgg-mmr');
```

### `mmr(username, callback)`

Queries op.gg for _String_ `username`'s MMR. Calls `callback(error, response)`.