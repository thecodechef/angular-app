angular.module('main', ['components'])

.controller('BeerCounter', function($scope, $locale) {
  $scope.beers = [0, 1, 2, 3, 4, 5, 6];
  $scope.beerForms = {
    0: 'no beers',
    one: '{} beer',
    other: '{} beers'
  };
});
