/// <reference path="F:\Dropbox\Data\VS\Web\Ref\js\_all.ts" />
(function () {
    'use strict';

    angular
        .module('app.profile', ['firebase'])
        .controller('ProfileController', function ($scope, $firebaseObject, $firebaseArray) {
            var vm = this;
            vm.account = {};
            vm.summary = null;
            vm.experience = {};
            vm.skills = {};
            vm.education = {};
            vm.project = {};
            vm.current_item = 0;


            var ref = new Firebase("https://dack.firebaseio.com/");    
            var obj = $firebaseObject(ref);
            
            obj.$bindTo($scope, "data").then(function () {
                vm.summary = $scope.data.summary;
                vm.account = $scope.data.account;
            });            
            
            vm.project = $firebaseArray(ref.child("project"));
            vm.education = $firebaseArray(ref.child("education"));
            vm.experience = $firebaseArray(ref.child("experience"));            
            vm.skills = $firebaseArray(ref.child("skills"));
            
            vm.check = function (params) {
                if (parseFloat(params) > 99)
                    return "99+";
                return params;
            }

            vm.checkItem = function (params) {
                vm.current_item = parseFloat(params);
            }

            vm.update_account = function () {
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

                $scope.data.account = vm.account;

                vm.new_name = undefined;
                vm.new_edu = undefined;
                vm.new_pos = undefined;
                vm.new_company = undefined;
                vm.new_country = undefined;
                vm.new_industry = undefined;
                vm.new_current = undefined;
                vm.new_previous = undefined;
            }

            vm.update_summary = function () {
                if (vm.new_summary != undefined)
                    vm.summary = vm.new_summary;
                
                obj.summary = vm.new_summary;
                obj.$save();
                vm.new_summary = undefined;
            }

            vm.add_exp = function () {
                vm.experience.$add({
                    companyName: vm.new_companyName,
                    companyUrl: vm.new_url,
                    companyLogo: vm.new_logo,
                    title: vm.new_title,
                    startPeriod: vm.new_start,
                    endPeriod: vm.new_end,
                    duration: vm.new_duration,
                    location: vm.new_location,
                    description: vm.new_description
                });
                
                vm.new_companyName = undefined;
                vm.new_url = undefined;
                vm.new_logo = undefined;
                vm.new_title = undefined;
                vm.new_start = undefined;
                vm.new_end = undefined;
                vm.new_duration = undefined;
                vm.new_location = undefined;
                vm.new_description = undefined;
            }

            vm.update_exp = function () {
                if (vm.update_companyName != undefined)
                    vm.experience[vm.current_item].companyName = vm.update_companyName;
                if (vm.update_title != undefined)
                    vm.experience[vm.current_item].title = vm.update_title;
                if (vm.update_url != undefined)
                    vm.experience[vm.current_item].companyUrl = vm.update_url;
                if (vm.update_logo != undefined)
                    vm.experience[vm.current_item].companyLogo = vm.update_logo;
                if (vm.update_start != undefined)
                    vm.experience[vm.current_item].startPeriod = vm.update_start;
                if (vm.update_end != undefined)
                    vm.experience[vm.current_item].endPeriod = vm.update_end;
                if (vm.update_duration != undefined)
                    vm.experience[vm.current_item].duration = vm.update_duration;
                if (vm.update_location != undefined)
                    vm.experience[vm.current_item].location = vm.update_location;
                if (vm.update_description != undefined)
                    vm.experience[vm.current_item].description = vm.update_description;

                vm.update_companyName = undefined;
                vm.update_url = undefined;
                vm.update_logo = undefined;
                vm.update_title = undefined;
                vm.update_start = undefined;
                vm.update_end = undefined;
                vm.update_duration = undefined;
                vm.update_location = undefined;
                vm.update_description = undefined;
            }

            $scope.add_skill = function () {
                vm.skills.$add({
                    name: vm.new_skill,
                    endorsers: vm.new_endorsers
                });
                
                vm.new_skill = undefined;
                vm.new_endorsers = undefined;
            }

            vm.update_skill = function () {
                if (vm.update_skill_name != undefined)
                    vm.skills[vm.current_item].name = vm.update_skill_name;
                if (vm.update_endorsers != undefined)
                    vm.skills[vm.current_item].endorsers = vm.update_endorsers;

                vm.update_skill = undefined;
                vm.update_endorsers = undefined;
            }

            vm.add_project = function () {
                vm.project.$add({
                    name: vm.new_project,
                    date: vm.new_date,
                    description: vm.new_project_des
                });

                vm.new_project = undefined;
                vm.new_date = undefined;
                vm.new_project_des = undefined;
            }

            vm.update_project = function () {
                if (vm.update_project_name != undefined)
                    vm.project[vm.current_item].name = vm.update_project_name;
                if (vm.update_date != undefined)
                    vm.project[vm.current_item].date = vm.update_date;
                if (vm.update_project_des != undefined)
                    vm.project[vm.current_item].description = vm.update_project_des;

                vm.update_project_name = undefined;
                vm.update_project_des = undefined;
                vm.update_date = undefined;
            }

            vm.add_edu = function () {
                vm.education.$add({
                    name: vm.new_edu,
                    url: vm.new_edu_url,
                    logo: vm.new_edu_logo,
                    title: vm.new_edu_title,
                    startPeriod: vm.new_edu_start,
                    endPeriod: vm.new_edu_end
                })

                vm.new_edu = undefined;
                vm.new_edu_end = undefined;
                vm.new_edu_title = undefined;
                vm.new_edu_logo = undefined;
                vm.new_edu_start = undefined;
                vm.new_edu_url = undefined;
            }

            vm.update_edu = function () {
                if (vm.update_edu_name != undefined)
                    vm.education[vm.current_item].name = vm.update_edu_name;
                if (vm.update_edu_url != undefined)
                    vm.education[vm.current_item].url = vm.update_edu_url;
                if (vm.update_edu_logo != undefined)
                    vm.education[vm.current_item].logo = vm.update_edu_logo;
                if (vm.update_edu_title != undefined)
                    vm.education[vm.current_item].title = vm.update_edu_title;
                if (vm.update_edu_start != undefined)
                    vm.education[vm.current_item].startPeriod = vm.update_edu_start;
                if (vm.update_edu_end != undefined)
                    vm.education[vm.current_item].endPeriod = vm.update_edu_end;

                vm.update_edu_name = undefined;
                vm.update_edu_url = undefined;
                vm.update_edu_logo = undefined;
                vm.update_edu_title = undefined;
                vm.update_edu_start = undefined;
                vm.update_edu_end = undefined;
            }

            $scope.initModals = function () {
                $('.modal-trigger').leanModal(); // Initialize the modals
            }
        });
})();