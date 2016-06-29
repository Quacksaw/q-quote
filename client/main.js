import angular from 'angular';
import angularMeteor from 'angular-meteor';
import displayModule from '../imports/components/display/showPrice';

angular.module('quote-calc', [
	angularMeteor,
	displayModule.name
]);

