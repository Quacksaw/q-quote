import angular from 'angular';
import angularMeteor from 'angular-meteor';
import { Order } from '../../api/order.js';
import { Tasks } from '../../api/tasks.js';

import template from './showPrice.html';

class DisplayCtrl {
	constructor($scope) {
		$scope.viewModel(this);
		
    this.helpers({
		tasks() {
			return Tasks.find({});
		}
    });

    this.helpers({
		order() {
			return Order.find({});
		}
    });
	this.baseColor = "not chosen";
	this.test = [50,10];
	this.tst = "other stuff";
	
	this.downOne = function() {
		this.test[0] -= 1;
	};

	this.calculate = function(inpa) {
		var inpa = inpa;
		return this.test[0]*this.newCost*inpa;
	};
		
  }
    addTask(newTask) {
    // Insert a task into the collection
    Tasks.insert({
      text: newTask,
      createdAt: new Date
    });
 
    // Clear form
    this.newTask = '';
  }
	setChecked(task){
		Tasks.update(task._id, {
			$set: {
				checked : !task.checked
			},
		});
	}
	
	removeTask(task) {Tasks.remove(task._id);}
	
    updateQty(newQty) {
    // Update quantity saved in the collection
    Order.update({
      quantity: newQty
    });
 
  }  

}


export default angular.module('displayModule', [
	angularMeteor
])
	.component('costDisplay', {
		templateUrl: 'imports/components/display/showPrice.html',
		controller: ['$scope', DisplayCtrl]
});

