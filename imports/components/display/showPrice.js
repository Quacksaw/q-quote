import angular from 'angular';
import angularMeteor from 'angular-meteor';
import { Order } from '../../api/order.js';
import { Tasks } from '../../api/tasks.js';

import template from './showPrice.html';

class DisplayCtrl {
	constructor($scope) {
		$scope.viewModel(this);

	this.baseColor = "not chosen";
	this.test = [50,10];
	this.tst = "other stuff";
	
	this.qtyButton = function(increment) {
		var inc = increment;
		this.quantity += inc;
	}
	
	this.downOne = function() {
		this.test[0] -= 1;
	};

	this.calculate = function(inpa) {
		var inpa = inpa;
		return this.test[0]*this.newCost*inpa;
	};	
	
  }
}

export default angular.module('displayModule', [
	angularMeteor
])
	.component('costDisplay', {
		templateUrl: 'imports/components/display/showPrice.html',
		controller: ['$scope', DisplayCtrl]
});

