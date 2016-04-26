(function() {
'use strict';

    angular
        .module('app.profile')
        .controller('ProfileController', ProfileController);

    ProfileController.$inject = ['$http'];
    function ProfileController($http) {
        var vm = this;
        vm.account = {};

        activate();

        ////////////////

        function activate() { 
            $http.get('data/data.json')
                .then(function(response){
                    vm.account = response.data.account;
                })
        }
    }
})();