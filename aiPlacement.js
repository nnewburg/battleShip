$(function() {
$('body').on('click', '#startGame', function(){

  let oppBoard = []

  for(let i = 0; i < 10; i++){
    oppBoard[i] = [];
    for(let k = 0; k < 10; k++){
      oppBoard[i][k] = 0;
    }
  }



  function placeShip(size){
    let position = Math.floor(Math.random() * 2);
    let col = Math.floor(Math.random() * 10)
    for(let i = 0; i < size; i++ ){
      if(position == 0){
      oppBoard[col][i] = 1;
    }else{
      oppBoard[i][col] = 1;
    }
    }
  }

  placeShip(5);
  placeShip(4);
  placeShip(4);
  placeShip(3);
  placeShip(2);

  $('#startGame').html("Player's turn");
    $('body').on('click', '.boardTileOpp', function(){
      if($('#startGame').html() == "Player's turn"){
      let target = $(this).attr('id');
      console.log(oppBoard[0][1])
      target = target.replace(/[A-Za-z]/g, '');
      target = Number(target)
      let firstDigit = Math.floor(target/10)
      let secondDigit = target % 10;
        if(oppBoard[firstDigit][secondDigit] == 1){
          $(this).css('backgroundColor', 'red')
        } else {
          $(this).css('backgroundColor', 'grey')
        }
      $('#startGame').html("AI Turn");
      }
    });
  });





});