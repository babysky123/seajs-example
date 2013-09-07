define(function(require,exports,module) {
	var $ = require("jquery");
	var random = require("./random");
	function Spinning(contId) {
		this.container = $(contId);
		this.imgs = this.container.find("img");
		this.timer = null;
	}
	Spinning.prototype  = {
		init : function() {
			this.imgs.each(function() {
				var rand = random(-10,10);
				$(this).css({
					top : rand + 'px'
				});
			});
			this.randomRotate();
		},
		randomRotate : function() {
			this.imgs.each(function() {
				var rand = random(-360,360);
				$(this).css({
					transform : "rotate(" + rand + "deg)"
				});
			});
		},
		startTimer : function() {
			var me = this;
			this.timer = setInterval(function() {
				me.randomRotate();
			} , 3000);
		},
		removeTimer : function() {
			clearInterval(this.timer);
		},
		bindEvt : function() {
			var me = this;
			this.container.mouseenter(function() {
				me.removeTimer();
			}).mouseleave(function() {
				me.startTimer();
			});
			this.container.on('mouseover' , 'img' , function(e) {
				$(this).fadeTo(200 , 1);
				$(this).css({
					transform : "rotate(0deg)"
				});
			}).on("mouseout" , 'img' , function() {
				$(this).fadeTo(200 , .6);
				$(this).css({
					transform : 'rotate(' + random(-360,360) + 'deg)'
				});
			});
		},
		render : function() {
			this.init();
			this.bindEvt();
			this.startTimer();
		}
	};
	Spinning.prototype.constructor = Spinning;
	module.exports = Spinning;
});
