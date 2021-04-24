// ipfs add medical data 
const node = await IPFS.create()

const data = 'Hello, <MEDBLOCK>'

// add your data to to IPFS - this can be a string, a Buffer,
// a stream of Buffers, etc
const results = node.add(data)

// we loop over the results because 'add' supports multiple 
// additions, but we only added one entry here so we only see
// one log line in the output
for await (const { cid } of results) {
  // CID (Content IDentifier) uniquely addresses the data
  // and can be used to get it again.
  console.log(cid.toString())
}


// ipfs retrieving medical data 
const node = await IPFS.create()

const stream = node.cat('QmPChd2hVbrJ6bfo3WBcTW4iZnpHm8TEzWkLHmLpXhF68A')
let data = ''

for await (const chunk of stream) {
  // chunks of data are returned as a Buffer, convert it back to a string
  data += chunk.toString()
}

console.log(data)


// TODO: add to the main index.html
angular.module('modalTest',['ui.bootstrap','dialogs'])
.controller('dialogServiceTest',function($scope,$rootScope,$timeout,$dialogs){
  $scope.confirmed = 'You have yet to be confirmed!';
  $scope.name = '"Your name here."';
  
  $scope.launch = function(which){
    var dlg = null;
    switch(which){
        
      // Error Dialog
      case 'error':
        dlg = $dialogs.error('MedBot1 Message: YOU ARE IN DANGER - LOCATION TRACKING GEO FENCING ACTIVATED');
        break;
        
      // Wait / Progress Dialog
      case 'wait':
        dlg = $dialogs.wait(msgs[i++],progress);
        fakeProgress();
        break;
        
      // Notify Dialog
      case 'notify':
        dlg = $dialogs.notify('MedBot3','Thank you for checking in with MedBot3 - Cancer health risk assessment.');
        break;
        
      // Confirm Dialog
      case 'confirm':
        dlg = $dialogs.confirm('MedBot4','MedBot4 Schedule doctor appointment in 2 weeks? Not feeling well.');
        dlg.result.then(function(btn){
          $scope.confirmed = 'You thought this quite awesome!';
        },function(btn){
          $scope.confirmed = 'Shame on you for not thinking this is awesome!';
        });
        break;
       
      // Create Your Own Dialog
      case 'create':
        dlg = $dialogs.create('/dialogs/whatsyourname.html','whatsYourNameCtrl',{},{key: false,back: 'static'});
        dlg.result.then(function(name){
          $scope.name = name;
        },function(){
          $scope.name = 'You decided not to enter in your name, that makes me sad.';
        });
        
        break;
    }; // end switch
  }; // end launch
  
  // for faking the progress bar in the wait dialog
  var progress = 25;
  var msgs = [
    'Hey I am Med Bot! I\'m waiting here...',
    'About half way done BE MY FRIEND',
    'Almost there?',
    'MEDBOT3 CHAT AI ACTIVATION'
  ];
  var i = 0;
  
  var fakeProgress = function(){
    $timeout(function(){
      if(progress < 100){
        progress += 25;
        $rootScope.$broadcast('dialogs.wait.progress',{msg: msgs[i++],'progress': progress});
        fakeProgress();
      }else{
        $rootScope.$broadcast('dialogs.wait.complete');
      }
    },1000);
  }; // end fakeProgress 
  
}) // end dialogsServiceTest
.controller('whatsYourNameCtrl',function($scope,$modalInstance,data){
  $scope.user = {name : ''};

  $scope.cancel = function(){
    $modalInstance.dismiss('canceled');  
  }; // end cancel
  
  $scope.save = function(){
    $modalInstance.close($scope.user.name);
  }; // end save
  
  $scope.hitEnter = function(evt){
    if(angular.equals(evt.keyCode,13) && !(angular.equals($scope.name,null) || angular.equals($scope.name,'')))
				$scope.save();
  }; // end hitEnter
}) // end whatsYourNameCtrl
.run(['$templateCache',function($templateCache){
  $templateCache.put('/dialogs/whatsyourname.html','<div class="modal"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h4 class="modal-title"><span class="glyphicon glyphicon-star"></span> User\'s Name</h4></div><div class="modal-body"><ng-form name="nameDialog" novalidate role="form"><div class="form-group input-group-lg" ng-class="{true: \'has-error\'}[nameDialog.username.$dirty && nameDialog.username.$invalid]"><label class="control-label" for="username">MedBot5 Add friend:</label><input type="text" class="form-control" name="username" id="username" ng-model="user.name" ng-keyup="hitEnter($event)" required><span class="help-block">MedBot5 Add FRIEND to social network with full name, first &amp; last.</span></div></ng-form></div><div class="modal-footer"><button type="button" class="btn btn-default" ng-click="cancel()">Cancel</button><button type="button" class="btn btn-primary" ng-click="save()" ng-disabled="(nameDialog.$dirty && nameDialog.$invalid) || nameDialog.$pristine">Save</button></div></div></div></div>');
}]); // end run / module


//Angularjs and jquery.datatable with ui.bootstrap and ui.utils

var app=angular.module('formvalid', ['ui.bootstrap','ui.utils']);
app.controller('validationCtrl',function($scope){
  $scope.data=[
        [
            "Tiger Nixon",
            "System Architect",
            "Edinburgh",
            "5421",
            "2011\/04\/25",
            "$320,800"
        ],
        [
            "Garrett Winters",
            "Accountant",
            "Tokyo",
            "8422",
            "2011\/07\/25",
            "$170,750"
        ],
        [
            "Ashton Cox",
            "Junior Technical Author",
            "San Francisco",
            "1562",
            "2009\/01\/12",
            "$86,000"
        ],
        [
            "Cedric Kelly",
            "Senior Javascript Developer",
            "Edinburgh",
            "6224",
            "2012\/03\/29",
            "$433,060"
        ],
        [
            "Airi Satou",
            "Accountant",
            "Tokyo",
            "5407",
            "2008\/11\/28",
            "$162,700"
        ],
        [
            "Brielle Williamson",
            "Integration Specialist",
            "New York",
            "4804",
            "2012\/12\/02",
            "$372,000"
        ],
        [
            "Herrod Chandler",
            "Sales Assistant",
            "San Francisco",
            "9608",
            "2012\/08\/06",
            "$137,500"
        ],
        [
            "Rhona Davidson",
            "Integration Specialist",
            "Tokyo",
            "6200",
            "2010\/10\/14",
            "$327,900"
        ],
        [
            "Colleen Hurst",
            "Javascript Developer",
            "San Francisco",
            "2360",
            "2009\/09\/15",
            "$205,500"
        ],
        [
            "Sonya Frost",
            "Software Engineer",
            "Edinburgh",
            "1667",
            "2008\/12\/13",
            "$103,600"
        ],
        [
            "Jena Gaines",
            "Office Manager",
            "London",
            "3814",
            "2008\/12\/19",
            "$90,560"
        ],
        [
            "Quinn Flynn",
            "Support Lead",
            "Edinburgh",
            "9497",
            "2013\/03\/03",
            "$342,000"
        ],
        [
            "Charde Marshall",
            "Regional Director",
            "San Francisco",
            "6741",
            "2008\/10\/16",
            "$470,600"
        ],
        [
            "Haley Kennedy",
            "Senior Marketing Designer",
            "London",
            "3597",
            "2012\/12\/18",
            "$313,500"
        ],
        [
            "Tatyana Fitzpatrick",
            "Regional Director",
            "London",
            "1965",
            "2010\/03\/17",
            "$385,750"
        ],
        [
            "Michael Silva",
            "Marketing Designer",
            "London",
            "1581",
            "2012\/11\/27",
            "$198,500"
        ],
        [
            "Paul Byrd",
            "Chief Financial Officer (CFO)",
            "New York",
            "3059",
            "2010\/06\/09",
            "$725,000"
        ],
        [
            "Gloria Little",
            "Systems Administrator",
            "New York",
            "1721",
            "2009\/04\/10",
            "$237,500"
        ],
        [
            "Bradley Greer",
            "Software Engineer",
            "London",
            "2558",
            "2012\/10\/13",
            "$132,000"
        ],
        [
            "Dai Rios",
            "Personnel Lead",
            "Edinburgh",
            "2290",
            "2012\/09\/26",
            "$217,500"
        ],
        [
            "Jenette Caldwell",
            "Development Lead",
            "New York",
            "1937",
            "2011\/09\/03",
            "$345,000"
        ],
        [
            "Yuri Berry",
            "Chief Marketing Officer (CMO)",
            "New York",
            "6154",
            "2009\/06\/25",
            "$675,000"
        ],
        [
            "Caesar Vance",
            "Pre-Sales Support",
            "New York",
            "8330",
            "2011\/12\/12",
            "$106,450"
        ],
        [
            "Doris Wilder",
            "Sales Assistant",
            "Sidney",
            "3023",
            "2010\/09\/20",
            "$85,600"
        ],
        [
            "Angelica Ramos",
            "Chief Executive Officer (CEO)",
            "London",
            "5797",
            "2009\/10\/09",
            "$1,200,000"
        ],
        [
            "Gavin Joyce",
            "Developer",
            "Edinburgh",
            "8822",
            "2010\/12\/22",
            "$92,575"
        ],
        [
            "Jennifer Chang",
            "Regional Director",
            "Singapore",
            "9239",
            "2010\/11\/14",
            "$357,650"
        ],
        [
            "Brenden Wagner",
            "Software Engineer",
            "San Francisco",
            "1314",
            "2011\/06\/07",
            "$206,850"
        ],
        [
            "Fiona Green",
            "Chief Operating Officer (COO)",
            "San Francisco",
            "2947",
            "2010\/03\/11",
            "$850,000"
        ],
        [
            "Shou Itou",
            "Regional Marketing",
            "Tokyo",
            "8899",
            "2011\/08\/14",
            "$163,000"
        ],
        [
            "Michelle House",
            "Integration Specialist",
            "Sidney",
            "2769",
            "2011\/06\/02",
            "$95,400"
        ],
        [
            "Suki Burks",
            "Developer",
            "London",
            "6832",
            "2009\/10\/22",
            "$114,500"
        ],
        [
            "Prescott Bartlett",
            "Technical Author",
            "London",
            "3606",
            "2011\/05\/07",
            "$145,000"
        ],
        [
            "Gavin Cortez",
            "Team Leader",
            "San Francisco",
            "2860",
            "2008\/10\/26",
            "$235,500"
        ],
        [
            "Martena Mccray",
            "Post-Sales support",
            "Edinburgh",
            "8240",
            "2011\/03\/09",
            "$324,050"
        ],
        [
            "Unity Butler",
            "Marketing Designer",
            "San Francisco",
            "5384",
            "2009\/12\/09",
            "$85,675"
        ],
        [
            "Howard Hatfield",
            "Office Manager",
            "San Francisco",
            "7031",
            "2008\/12\/16",
            "$164,500"
        ],
        [
            "Hope Fuentes",
            "Secretary",
            "San Francisco",
            "6318",
            "2010\/02\/12",
            "$109,850"
        ],
        [
            "Vivian Harrell",
            "Financial Controller",
            "San Francisco",
            "9422",
            "2009\/02\/14",
            "$452,500"
        ],
        [
            "Timothy Mooney",
            "Office Manager",
            "London",
            "7580",
            "2008\/12\/11",
            "$136,200"
        ],
        [
            "Jackson Bradshaw",
            "Director",
            "New York",
            "1042",
            "2008\/09\/26",
            "$645,750"
        ],
        [
            "Olivia Liang",
            "Support Engineer",
            "Singapore",
            "2120",
            "2011\/02\/03",
            "$234,500"
        ],
        [
            "Bruno Nash",
            "Software Engineer",
            "London",
            "6222",
            "2011\/05\/03",
            "$163,500"
        ],
        [
            "Sakura Yamamoto",
            "Support Engineer",
            "Tokyo",
            "9383",
            "2009\/08\/19",
            "$139,575"
        ],
        [
            "Thor Walton",
            "Developer",
            "New York",
            "8327",
            "2013\/08\/11",
            "$98,540"
        ],
        [
            "Finn Camacho",
            "Support Engineer",
            "San Francisco",
            "2927",
            "2009\/07\/07",
            "$87,500"
        ],
        [
            "Serge Baldwin",
            "Data Coordinator",
            "Singapore",
            "8352",
            "2012\/04\/09",
            "$138,575"
        ],
        [
            "Zenaida Frank",
            "Software Engineer",
            "New York",
            "7439",
            "2010\/01\/04",
            "$125,250"
        ],
        [
            "Zorita Serrano",
            "Software Engineer",
            "San Francisco",
            "4389",
            "2012\/06\/01",
            "$115,000"
        ],
        [
            "Jennifer Acosta",
            "Junior Javascript Developer",
            "Edinburgh",
            "3431",
            "2013\/02\/01",
            "$75,650"
        ],
        [
            "Cara Stevens",
            "Sales Assistant",
            "New York",
            "3990",
            "2011\/12\/06",
            "$145,600"
        ],
        [
            "Hermione Butler",
            "Regional Director",
            "London",
            "1016",
            "2011\/03\/21",
            "$356,250"
        ],
        [
            "Lael Greer",
            "Systems Administrator",
            "London",
            "6733",
            "2009\/02\/27",
            "$103,500"
        ],
        [
            "Jonas Alexander",
            "Developer",
            "San Francisco",
            "8196",
            "2010\/07\/14",
            "$86,500"
        ],
        [
            "Shad Decker",
            "Regional Director",
            "Edinburgh",
            "6373",
            "2008\/11\/13",
            "$183,000"
        ],
        [
            "Michael Bruce",
            "Javascript Developer",
            "Singapore",
            "5384",
            "2011\/06\/27",
            "$183,000"
        ],
        [
            "Donna Snider",
            "Customer Support",
            "New York",
            "4226",
            "2011\/01\/25",
            "$112,000"
        ]
    ]


$scope.dataTableOpt = {
   //custom datatable options 
  // or load data through ajax call also
  "aLengthMenu": [[10, 50, 100,-1], [10, 50, 100,'All']],
  };
});
