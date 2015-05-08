minesweeper.controller('GameCtrl', function GameCtrl($scope) {
    // $scope.gamestatus = GameFactory.gamestatus;
    // $scope.gamelevel = GameFactory.gamelevel;
    // $scope.minefield = {row1: [], row2: [], row3: []};
    // $scope.minefield.rows = [];
    //
    // $scope.gamepiece = GameFactory.gamepiece;
    // $scope.spaces = [];

    $scope.spaces = [];

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
            $scope.spaces.push({ position: i, bomb: false, clue: null, show: false, row: 0, column: 0 });
        }
        var bomb_positions = $scope.bombPositionGenerator();
        bomb_positions.forEach(function(bomb_position) {
            $scope.spaces[bomb_position - 1].bomb = true;
            $scope.spaces[bomb_position - 1].clue = "B";
        });
        console.log(bomb_positions);
        // console.log(spaces);
        //
        // if (space.bomb == true) {
        //     space.clue = "bomb";
        // }


    }


    $scope.testBomb = function(test) {
        if (test.bomb === true) {
            // console.log("bomb");
            $(test).addClass("clicked");
        }
        else {
            // console.log("not bomb");
        }
    }

    $scope.cluecount = function(space) {
        var i = space.position-1;
        x = 8;
        var clue_count = 8;
        if (space.bomb) {
            space.clue = "B";
        }
        else if (((i-1)%4 == 0) || ($scope.spaces[(i-1)].bomb)) {
            clue_count--;
        }
        // else {
        //     if ($scope.spaces[(i+1)].bomb) {
        //         clue_count --;
        //     }
        //     if ($scope.spaces[(i-1)].bomb) {
        //         clue_count --;
        //     }
        //     if ($scope.spaces[(x+i)].bomb) {
        //         clue_count --;
        //     }
        //     if ($scope.spaces[(i-x)].bomb) {
        //         clue_count --;
        //     }
        //     if ($scope.spaces[(i+x-1)].bomb) {
        //         clue_count --;
        //     }
        //     if ($scope.spaces[(i+x+1)].bomb) {
        //         clue_count --;
        //     }
        //     if ($scope.spaces[(i-(x-1))].bomb) {
        //         clue_count --;
        //     }
        //     if ($scope.spaces[(i-x-1)].bomb) {
        //         clue_count --;
        //     }

            space.clue = clue_count;
            console.log(space.clue);
        }


    }


    $scope.clickButton = function(space) {
        $scope.testBomb(space);
        $scope.cluecount(space);
        space.show = true;
    }
});





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
