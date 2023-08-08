var app = angular.module('htmlCV', []);

app.controller('cvController', ['$http', function($http) {
  var ctrl = this;
  ctrl.cvItems = {};
  $http.get('data.json').success(function(data) {
    ctrl.cvItems = data;
  });
  this.shortName = function() {
    return `${this.cvItems.firstName} ${this.cvItems.lastName}`;
  };
  this.fullName = function() {
    return `${this.cvItems.firstName} ${this.cvItems.middleName} ${this.cvItems.lastName}`;
  };
  
  this.skillsetMap = {
    1: "Theoretical Knowledge",
    2: "Some Experience",
    3: "Significant Experience",
    4: "Expertise",
    5: "Proficiency"
  };
  this.skillsetPhonetic = function(skillset) {
    return this.skillsetMap[skillset];
  };
}]);

app.filter('rawHtml', ['$sce', function($sce){
  return function(val) {
    return $sce.trustAsHtml(val);
  };
}]);