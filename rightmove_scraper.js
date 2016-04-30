#!/usr/bin/env node
var RightMove = require('rightmove-scraper');
var prompt = require('prompt');

function RightmoveScraper(){}

RightmoveScraper.prototype.run = function()	{
	prompt.start();
	var self = this;

	prompt.get(['postcode', 'propertyType'], function (err, result) {
	  if (err) { return onErr(err); }
	  console.log('Command-line input received:');
	  console.log('  Postcode: ' + result.postcode);
	  console.log('  Property Type: ' + result.propertyType);
	  self.getProperties(result.postcode, result.propertyType);
	});

	function onErr(err) {
	  console.log(err);
	  return 1;
	}
}

RightmoveScraper.prototype.getProperties = function(postcode, propertyType)	{
	console.log('The 10 most recently listed properties (' + propertyType + ') in ' + postcode + ' are:')
	var properties = RightMove.byOutcode(postcode);
	console.log(this.filterPropertyTypes(properties, propertyType))
	return this.filterPropertyTypes(properties, propertyType)
}

RightmoveScraper.prototype.filterPropertyTypes = function(properties, propertyType)	{
	var filtered = properties.filter(function(property) {
		return property['propertyType'].indexOf(propertyType) > -1;
	});
	return filtered;
}

var rightmoveScraper = new RightmoveScraper();
rightmoveScraper.run();

module.exports = RightmoveScraper;
