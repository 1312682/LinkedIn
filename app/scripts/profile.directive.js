(function() {
    'use strict';

    angular
        .module('app.profile')
        .directive('repeatDone', function () {
            return function (scope, element, attrs) {
                if (scope.$last) {
                    scope.$eval(attrs.repeatDone)
                }
            }
        });
})();