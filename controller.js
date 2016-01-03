(function(){
"use strict"
angular
  .module('main')
  .controller('MainController',function($scope,$timeout,$interval){
    $scope.image = "jack.jpeg"
    var images = ['one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen']
    var animations = ['spin','flip']
    var imageMax = images.length -1;
    var animationsMax = animations.length -1;
    var min = 0;
    var pickedRandomImages = [];
    var pickedRandomAnimations = [];

    var randomImages = function(){
      var x = Math.random() * (imageMax - min) + min;
      return  Math.round(x);
    }

    var randomAnimations = function(){
      var y = Math.random() * (animationsMax - min) + min;
      return  Math.round(y);
    }

    var popArrayItem = function(item,array){
      var currentIndex = array.indexOf(item);
      array.splice(currentIndex,1);
    }

    var picAnimations = function(){
      var random = randomImages();
      if(_.contains(pickedRandomImages,random)){
        return false;
      }else{
        pickedRandomImages.push(random);
        console.log(pickedRandomImages,'pickedRandomImages')
        $scope[images[random]] = 'multi-flip';
        $timeout(function(){$scope[images[random]]= 'spin'},11000);
        $timeout(function(){$scope[images[random]]= 'flip'},12000);
        $timeout(function(){$scope[images[random]]= 'shrink'},13000);
        $timeout(function(){$scope[images[random]]= 'expand'},14000);
        $timeout(function(){$scope[images[random]]= ''},15000);
        $timeout(function(){popArrayItem(random,pickedRandomImages)},14000);
      }
    }

    var divAnimations = function(){
      var random = randomAnimations();
      $scope['div'] = animations[random];
    }
    var hello = $interval(picAnimations,1000);
    var helloAgain = $interval(divAnimations,5000);

  })

})();
