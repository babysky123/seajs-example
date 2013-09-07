define(function(require,exports,module) {
	function randomone(start , end) {
	      var between = end - start + 1;
	      return Math.floor(Math.random() * between + start);
	}
	module.exports = randomone;
});
