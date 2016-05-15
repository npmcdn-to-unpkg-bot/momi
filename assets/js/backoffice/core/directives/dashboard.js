angular.module('core').run(['gridsterConfig', function(gridsterConfig) {
    gridsterConfig.columns = 24; // the width of the grid, in columns
    gridsterConfig.pushing = true; // whether to push other items out of the way on move or resize
    gridsterConfig.floating = true; // whether to automatically float items up so they stack (you can temporarily disable if you are adding unsorted items with ng-repeat)
    gridsterConfig.swapping = false; // whether or not to have items of the same size switch places instead of pushing down if they are the same size
    gridsterConfig.width = 'auto'; // can be an integer or 'auto'. 'auto' scales gridster to be the full width of its containing element
    gridsterConfig.colWidth = 'auto'; // can be an integer or 'auto'.  'auto' uses the pixel width of the element divided by 'columns'
    gridsterConfig.rowHeight = 'match'; // can be an integer or 'match'.  Match uses the colWidth, giving you square widgets.
    gridsterConfig.margins = [20, 20]; // the pixel distance between each widget
    gridsterConfig.outerMargin = true; // whether margins apply to outer edges of the grid
    gridsterConfig.isMobile = false; // stacks the grid items if true
    gridsterConfig.mobileBreakPoint = 600; // if the screen is not wider that this, remove the grid layout and stack the items
    gridsterConfig.mobileModeEnabled = true; // whether or not to toggle mobile mode when screen width is less than mobileBreakPoint
    gridsterConfig.minColumns = 1; // the minimum columns the grid must have
    gridsterConfig.minRows = 2; // the minimum height of the grid, in rows
    gridsterConfig.maxRows = 100;
    gridsterConfig.defaultSizeX = 6; // the default width of a gridster item, if not specifed
    gridsterConfig.defaultSizeY = 4; // the default height of a gridster item, if not specified
    gridsterConfig.minSizeX = 1; // minimum column width of an item
    gridsterConfig.maxSizeX = null; // maximum column width of an item
    gridsterConfig.minSizeY = 1; // minumum row height of an item
    gridsterConfig.maxSizeY = null; // maximum row height of an item
    gridsterConfig.resizable = {
        enabled: false,
        // handles: ['se','nw','sw','ne'],
        handles: ['n', 'e', 's', 'w', 'ne', 'se', 'sw', 'nw'],
    };
    gridsterConfig.draggable = {
        enabled: false,
    };
}]);



angular.module('core')
  .directive('dashboard',function (widgetService,$compile){
    'use strict';

    return {
      scope: false,
      replace: true,
      templateUrl: 'js/backoffice/core/partials/dashboard.html',
      controller:function($scope,$element,$attrs,$transclude,$rootScope,$state,usSpinnerService){
        $rootScope.startSpin = function(){
            usSpinnerService.spin('mainSpinner');
        }
        $rootScope.stopSpin = function(){
            setTimeout(function(){
                
            usSpinnerService.stop('mainSpinner');
            },500)
        }


        $scope.widgetList = widgetService.list;
        console.log(widgetService.list);
        this.test ="yopaaa";
        $scope.columnwidth = 0;
        $scope.columnheight = 0;

        $scope.initSwipe =function(to,from){
            console.log('SWIPEINIT');
            // if(to.parent == 'dashboard' )
            // {
            //     $('.pageDash').addClass('pageVisible').removeClass('pageAfter');
            //     $('.page1').addClass('pageAfter').removeClass('pageVisible');
            // }

        

        }
        $scope.swipe =function(to,from){
            // console.log(to);
            console.log('SWIPE');
            
            if(to.name == 'dashboard' )
            {
                $('.pageDash').addClass('pageVisible').removeClass('pageAfter pageBefore');
                $('.page1').addClass('pageAfter').removeClass('pageVisible pageBefore');
                $('.page2').addClass('pageAfter').removeClass('pageVisible pageBefore');
            }else 
            if(to.parent == 'dashboard' )
            {
                $('.pageDash').addClass('pageBefore').removeClass('pageVisible pageAfter');
                $('.page1').addClass('pageVisible').removeClass('pageAfter pageBefore');
                $('.page2').addClass('pageAfter').removeClass('pageVisible pageBefore');
            }
            else 
            {

                
                $('.pageDash').addClass('pageBefore').removeClass('pageVisible pageAfter');
                $('.page1').addClass('pageBefore').removeClass('pageVisible pageAfter');
                $('.page2').addClass('pageVisible').removeClass('pageAfter pageBefore');
            }


        }
        // $scope.swipeback =function(){
        //   console.log('SWIPEswipeback');
        //   $('.pageVisible').addClass('pageAfter').removeClass('pageVisible');
        //   // $('.pageAfter').addClass('pageVisible').removeClass('pageAfter');
        //   $('.pageBefore').addClass('pageVisible').removeClass('pageBefore');
        // }
        
        $scope.swipe($state.current)
        // $scope.$on('$viewContentLoading',function(e,t){
        //   console.log('$viewContentLoaded');
        //   if($state.current.name != "dashboard")
        //     $scope.swipe()
          
          
        // });
        $scope.$on('$stateChangeSuccess',function (e,toState,toParams,fromState,fromParams){
          console.log('$stateChangeSuccess');
            $rootScope.previousState = fromState;

            $scope.swipe(toState, fromState)
        });
        $scope.$on('$stateChangeStart',function (e,toState,toParams,fromState,fromParams){
          console.log('$stateChangeStart');
            $scope.initSwipe(toState, fromState)
        });
        // INIT FIRST SWIPE IF view is on right page
        // if($state.current.name != "dashboard")
        //   $scope.swipe()
        // console.log($state.current.name);
        // $scope.$on('$stateChangeSuccess',function(e,t){
     
          
          
        // });
        

      },
      link:function(scope,element,attrs){
          scope.currentTheme = 'bg1';
          scope.$on('changeTheme',function(e,theme){
            scope.currentTheme = theme;
          })
          scope.$on('restoreDefault',function(e,theme){
            scope.widgetList = widgetService.defaultList;
            console.log(scope.widgetList);
          })


          scope.$on('gridster-resizable-changed', function(e,gridster) {
            scope.columnwidth = gridster.curColWidth -20;
            scope.columnheight = gridster.curRowHeight -20;
            
          })
          scope.$on('gridster-resize', function(gridster) {
            console.log('RESIZE grid CHANGE');
          })


      }
    };

});