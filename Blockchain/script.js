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
        ]


$scope.dataTableOpt = {
   //custom datatable options 
  // or load data through ajax call also
  "aLengthMenu": [[10, 50, 100,-1], [10, 50, 100,'All']],
  };
});
