#!/usr/bin/env node
var assert = require('assert');
var RightmoveScraper = require('./rightmove_scraper');
var scraper = new RightmoveScraper();
var testsCompleted = 0;


function getPropertiesTest() {
	assert(scraper.getProperties('121', 'house') instanceof Array, 'getProperties function should return an array of houses in B98 area');
	testsCompleted++;

	assert.equal(true, scraper.getProperties('121', 'house')[0]['propertyType'].indexOf('house') > -1, 'Any of the returned properties should be a house');
	testsCompleted++;

	assert.equal(true, scraper.getProperties('121', 'house')[0]['address'].indexOf('B98') > -1, 'Any of the properties returned should be in B98');
	testsCompleted++;
}

function filterPropertyTypesTest() {
	var unfilteredProperties = [ { identifier: 41627775, price: 139950, propertyType: 'maisonette' },
														   { identifier: 59212718, price: 159950, propertyType: 'terraced house' }]

	assert.equal(1, scraper.filterPropertyTypes(unfilteredProperties, 'house').length, 'filterPropertyTypes function should return only the specified property types')
	testsCompleted++;
}

getPropertiesTest();
filterPropertyTypesTest();
console.log('Number of tests completed: ' + testsCompleted);