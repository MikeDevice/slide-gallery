'use strict';

var Gallery = function() {
	this.images = [];
	this.currentImageIndex = 0;
};

Gallery.prototype.setCurrentImage = function(index) {
	var total = this.images.length;

	this.currentImageIndex = index;
};

Gallery.prototype.prev = function() {};

Gallery.prototype.next = function() {};

Gallery.prototype.add = function() {};

Gallery.prototype.remove = function() {};

Gallery.prototype.removeAll = function() {};

module.exports = Gallery;
