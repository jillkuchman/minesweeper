minesweeper.controller('GameCtrl', function GameCtrl($scope) {
    // $scope.gamestatus = GameFactory.gamestatus;
    // $scope.gamelevel = GameFactory.gamelevel;
    // $scope.minefield = {row1: [], row2: [], row3: []};
    // $scope.minefield.rows = [];
    //
    // $scope.gamepiece = GameFactory.gamepiece;
    // $scope.spaces = [];

    $scope.spaces = [];
    // $scope.i = 0;

    $scope.bombPositionGenerator = function() {
        unique_random_numbers = [];
        while (unique_random_numbers.length < 10) {
            var random_number = Math.floor(Math.random()*64) + 1;
            if (unique_random_numbers.indexOf(random_number) == -1) {
                // Yay! new random number
                unique_random_numbers.push( random_number );
            }
        }
        return unique_random_numbers;
    }

    $scope.newGame = function() {
        var spaces = $scope.spaces;
        for ( i = 1; i < 65; i++) {
            $scope.spaces.push({ position: i, bomb: false, clue: null });
        }
        var bomb_positions = $scope.bombPositionGenerator();
        bomb_positions.forEach(function(bomb_position) {
            $scope.spaces[bomb_position - 1].bomb = true;
        });

    }

});


// unique_random_numbers is an array containing 3 unique numbers in the given range


// for i in range(0,100) {
//     downrow = 1;
//     row.push(buttonhtml)
//     if i%10 === 0 {
//         groupofrows.push(row)
//         row=[]
//         downrow++;
//     }
// }
//
// spaces = [{}, {Bomb}, {},
//
// create new game: generate spaces array of 64 piece objects, ten of them are bombs
// then go into for loop:
//
//
//     row = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//     minefield = []
//     array.push (row into minefield)
//     minefield = [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]]
//     reset row: row = []
//     row = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
//     minefield = [   [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
//                     [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
//                 ]
//
//
// we want ten random numbers btn 1 and 64, and those will be the positions of the bombs
// bombs array: [ten random numbers between 0 and 63]
// if
//
