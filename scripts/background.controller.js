(function() {
'use strict';

    angular
        .module('app.background')
        .controller('BackgroundController', BackgroundController);

    BackgroundController.$inject = ['$http'];
    function BackgroundController($http) {
        var sc = this;
        sc.summary = null;
        sc.experience = {};
        sc.skills = {};
        sc.education = {};
        
        activate();

        ////////////////

        function activate() { 
            $http.get('data/data.json').then(function (response) {
                sc.summary = response.data.summary;
                sc.experience = response.data.experience;
                sc.skills = response.data.skills;
                sc.education = response.data.education;
            })
        }
    }
})();