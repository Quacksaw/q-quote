import angular from 'angular';
import angularMeteor from 'angular-meteor';
import { Order } from '../../api/order.js';

import template from './showPrice.html';

class DisplayCtrl {
	constructor($scope) {
		$scope.viewModel(this);
		
	this.quantity = 12;
	this.baseColor = "not chosen";
	this.printColors = 0;
	
	this.shortSleeve = function() {
		this.shirtStyle = "Short Sleeve";
	};
	this.longSleeve = function() {
		this.shirtStyle = "Long Sleeve";		
	};
	this.tankTop = function() {
		this.shirtStyle = "Tank Top";
	};
	this.costEa = function() {
		var tC = this.calculate();
		return tC/this.quantity;
	}
	this.calculate = function() {
		if (this.baseColor === "White"){
			var eaCost = this.printColors*this.order[0].cpc;
			var fCost = eaCost*this.quantity;
			return fCost;
			}
		else if (this.baseColor === "Light"){
			var eaCost = this.printColors*this.order[0].cpc;
			var fCost = eaCost*this.quantity;
			return fCost;
			}
		else if (this.baseColor === "Dark"){
			var eaCost = this.printColors*this.order[0].cpc;
			var fCost = eaCost*this.quantity;
			return fCost;
			}
		else {
			var eaCost = this.printColors*this.order[0].cpc;
			var fCost = eaCost*this.quantity;
			return fCost;
		 }
	};	
		this.helpers({
			order2() {
				return Order.find({});
			}
		}),
		this.helpers({
			order() {
				return Order.find({name:this.getReactively('currentProfile')});
			}
		})		
	};
	
	addNewProfile() {
		Order.insert(	
			{
				name:this.newName,
				blanks:[this.newSS,this.newLS],
				cpc:this.costPerColor
			}
		);	
		this.newSS = '';
		this.newLS = '';	
		this.newName = '';
		this.costPerColor = '';
	}	
}

export default angular.module('displayModule', [
	angularMeteor
])
	.component('costDisplay', {
		templateUrl: 'imports/components/display/showPrice.html',
		controller: ['$scope', DisplayCtrl]
});

