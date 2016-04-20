var app = angular.module('app', [])

app.directive('customNav', function() {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'app/templates/navbar.html' 
  }
})


app.directive('customFooter', function() {
  return {
    restrict: 'A',
    templateUrl: 'app/templates/footer.html'
  }
})

app.directive('highlight', function() {
  return {
    scope: {
    },
    restrict: 'A',
    link: function($scope, element, attrs) {
      element.on('click', function() {
        element.css('border', 'solid red')
        element.css('color', 'red')
      })
    }
  }
})

app.directive('profile', function() {
  return {
    restrict: 'E',
    scope: {
      nombre: '=',
      occupation: '='
    },
    transclude: true,
    template: '<p>My name is {{nombre}}, my occupation is {{occupation}}. <ng-transclude></ng-transclude>'
  }
})

app.directive('customStuff', function() {
  return {
    restrict: 'E',
    replace: true,
    template: '<h1>¡Ay, caramba!</h1>'
  }
})
