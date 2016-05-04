/// <reference path="F:\Dropbox\Data\VS\Web\Ref\js\_all.ts" />
(function() {
'use strict';

    angular
        .module('app.profile', [])
        .controller('ProfileController', function ($scope, $http) {
            var vm = this;
            vm.account = {};
            vm.summary = null;
            vm.experience = {};
            vm.skills = {};
            vm.education = {};
            
            $http.get('data/data.json')
                .then(function(response){
                    vm.account = response.data.account;
                    vm.summary = response.data.summary;
                    vm.experience = response.data.experience;
                    vm.skills = response.data.skills;
                    vm.education = response.data.education;
                });
                
            vm.update = function () {
                if (vm.new_name != undefined)
                    vm.account.name = vm.new_name;
                if (vm.new_edu != undefined)
                    vm.account.education = vm.new_edu;
                if (vm.new_pos != undefined)
                    vm.account.position = vm.new_pos;
                if (vm.new_company != undefined)
                    vm.account.company = vm.new_company;
                if (vm.new_country != undefined)
                    vm.account.country = vm.new_country;
                if (vm.new_industry != undefined)
                    vm.account.industry = vm.new_industry;
                if (vm.new_current != undefined)
                    vm.account.currentwork = vm.new_current;
                if (vm.new_previous != undefined)
                    vm.account.previouswork = vm.new_previous;
                
                vm.new_name = undefined;    
                vm.new_edu = undefined;
                vm.new_pos = undefined;
                vm.new_company = undefined;
                vm.new_country = undefined;
                vm.new_industry = undefined;
                vm.new_current = undefined;
                vm.new_previous = undefined;    
            } 
        });
})();