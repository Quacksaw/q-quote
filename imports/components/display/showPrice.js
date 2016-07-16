import angular from 'angular';
import angularMeteor from 'angular-meteor';
import { Order } from '../../api/order.js';

import template from './showPrice.html';

class DisplayCtrl {
	constructor($scope) {
		$scope.viewModel(this);
		
	this.quantity = 12;
	this.baseColor = "not chosen";
	this.baseCost = [4,0];
	this.printColors = 0;
	this.costPerColor = 1;
	
	this.shortSleeve = function() {
		this.baseCost[0] = 4;
		this.shirtStyle = "Short Sleeve";
	};
	this.longSleeve = function() {
		this.baseCost[0] = 7;
		this.shirtStyle = "Long Sleeve";
		
	};
	this.tankTop = function() {
		this.baseCost[0] = 5;
		this.shirtStyle = "Tank Top";
	};
	this.costEa = function() {
		var tC = this.calculate();
		return tC/this.quantity;
	}
	this.calculate = function() {
		if (this.baseColor === "White"){
			this.baseCost[1]=0;
			var eaCost = this.baseCost[0]+this.baseCost[1]+this.printColors*this.costPerColor;
			var fCost = eaCost*this.quantity;
			return fCost;
			}
		else if (this.baseColor === "Light"){
			this.baseCost[1]=1;
			var eaCost = this.baseCost[0]+this.baseCost[1]+this.printColors*this.costPerColor;
			var fCost = eaCost*this.quantity;
			return fCost;
			}
		else if (this.baseColor === "Dark"){
			this.baseCost[1]=2;
			var eaCost = this.baseCost[0]+this.baseCost[1]+this.printColors*this.costPerColor;
			var fCost = eaCost*this.quantity;
			return fCost;
			}
		else {
			var eaCost = this.baseCost[0]+this.baseCost[1]+this.printColors*this.costPerColor;
			var fCost = eaCost*this.quantity;
			return fCost;
		 }
	};	

	// db.order.insert({ thingy: "Value One!", thinger: [5,0] }); //
		this.helpers({
			order() {
				return Order.find({});
			}
		})

		
	}
}

export default angular.module('displayModule', [
	angularMeteor
])
	.component('costDisplay', {
		templateUrl: 'imports/components/display/showPrice.html',
		controller: ['$scope', DisplayCtrl]
});

