import angular from 'angular';
import angularMeteor from 'angular-meteor';
import { Order } from '../../api/order.js';
import { Tasks } from '../../api/tasks.js';

import template from './showPrice.html';

class DisplayCtrl {
	constructor($scope) {
		$scope.viewModel(this);

	this.baseColor = "not chosen";
	
	this.test = [12,10];
	this.tst = "other stuff";
		
	if (this.baseColor === "White"){this.test[1]=4};
	if (this.baseColor === "Light"){this.test[1]=5};
	if (this.baseColor === "Dark"){this.test[1]=6};
	
	this.qtyButton = function(increment) {
		var inc = increment;
		this.quantity += inc;
	};
	
	this.downOne = function() {
		this.test[0] -= 1;
	};

	this.calculate = function() {
		return this.test[0]+this.test[1]+this.newCost*this.quantity;
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

