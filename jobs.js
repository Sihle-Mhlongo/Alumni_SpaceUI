var app = angular.module("jobSearchApp", []);

app.controller("JobSearchController", function ($http) {
    var vm = this;
    vm.jobResults = [];

    vm.searchJobs = function () {
        // Simulated data - replace with actual API call
        vm.jobResults = [
            {
                title: "Frontend Developer",
                company: "Nedbank",
                location: "Johannesburg, Gauteng",
                description: "Senior developer wanted with minimum of 2yrs experience.",
                applicationLink: 'https://www.nedbank.com'
            },
            {
                title: "Backend Developer",
                company: "FNB group",
                location: "Pretoria central, Gauteng",
                description: "Strong personality, and must have minimum expereince of 3yrs in the required field.",
                applicationLink: 'https://www.fnb.com'
            },
            // Add more job listings here...
        ];
    };
});