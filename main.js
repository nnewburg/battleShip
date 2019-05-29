$(function() {
  let guessTotal = [];
  const diffi = $('#aiDifficulty').val();
  const hardModeHits = [];
  // let playerBoard = generate2DArr();

    for(let i = 0; i < 100; i++){
      let tile = $("<div></div>");
      $(tile).addClass( "boardTileOpp" );
      $(tile).attr( 'id', 'tokenOpp' + i);
      $("#playBoardOpp").append(tile);
    }

    for(let i = 0; i < 100; i++){
      let tile = $("<div></div>");
      $(tile).addClass("boardTilePly");
      $(tile).attr( 'id', 'tokenPly' + i);
      $("#playBoardPlayer").append(tile);
    }

     $('body').on('click', '#startGame', function(){
        if($('#startGame').html() == "AI Turn" && diffi == "Easy"){
        let guessNum = Math.floor(Math.random() * 100)
        while(guessTotal.includes(guessNum)){
          guessNum = Math.floor(Math.random() * 100);
        }
        guessTotal.push(guessNum);
        let guess = '#tokenPly' + guessNum;

        if($(guess).hasClass("occupiedShip")){
          $(guess).css("backgroundColor", "red")
        } else {
          $(guess).css("backgroundColor", "green");
        }
     } else if($('#startGame').html() == "AI Turn" && diffi == "Hard"){

       //  let guess = bestAttacks(playerBoard, hardModeHits);
       //  if($(guess).hasClass("occupiedShip")){
       //    $(guess).css("backgroundColor", "red")
       //    guess = guess.replace(/[A-Za-z]/g, "");
       //    guess = Number(guess);
       //    let firstCoordinate = Math.floor(guess/10)
       //    let SecondCoordinate = guess % 10;
       //    hardModeHits.push([firstCoordinate, SecondCoordinate]);
       //    playerBoard[firstCoordinate][SecondCoordinate] = 1;
       //  } else {
       //    $(guess).css("backgroundColor", "green");
       //  }

       }

     $('#startGame').html("Player's turn")

      });


function bestAttacks(data, hits){
  for(let i = 0; i < hits.length; i++){
   let row = hits[i][0];
   let col = hits[i][1];
    if(data[row][col] == 1){
      if(data[row + 1][col] == 0){
          return '#tokenPly' + (row + 1) + col;
      } else if(data[row][col + 1] == 0){
           return '#tokenPly' + (row) + (col + 1);
      }else if(data[row - 1][col] == 0){
           return '#tokenPly' + (row - 1) + col;
      }else if(data[row][col -1] == 0){
           return '#tokenPly' + (row) + (col -1);
      }
    }
  }
  let guessNum = Math.floor(Math.random() * 100)
        while(guessTotal.includes(guessNum)){
          guessNum = Math.floor(Math.random() * 100);
        }
      return '#tokenPly' + guessNum;
}

// function generate2DArr{
//     let plyBoard = []
//     for(let i = 0; i < 10; i++){
//     plyBoard[i] = [];
//     for(let k = 0; k < 10; k++){
//       plyBoard[i][k] = 0;
//     }
//    }
//    return plyBoard
//   }


});


/*data parameter in the bestAttacks function needs to be a 2 dimensional array that creates the computers visulization of the player's board, hits is an array of 2 number arrays that adds when it makes a hit */



