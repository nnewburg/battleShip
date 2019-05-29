$(function() {
let shipClicked = false;
let shipsLeft = 5;

  $('body').on('click', '.ship', function(){
      if(shipClicked == false){
        $(this).css('backgroundColor', 'red');
        $(this).attr('id', 'selected');
        shipClicked = true;
      } else if(shipClicked == true){
          $('#selected').css('backgroundColor', 'white');
          $('#selected').removeAttr('id');
          shipClicked = false;
        }
  });

  $('body').on('click', '.boardTilePly', function(){

    let direction = $("#shipDirection").val();

    if(shipClicked && direction == "horizontal"){
      let currentTile = $(this).attr('id');
      currentTile = currentTile.replace(/[a-zA-Z]/g, '');
      if($('#selected').text() == 'Carrier'){
        for(let i = 0; i < 5; i++){
            let test = '#tokenPly'+(Number(currentTile) +i)
            $(test).css('backgroundColor', 'grey');
            $(test).addClass("occupiedShip");
          }
        $('#selected').remove();
        shipsLeft --;
      } else if($('#selected').text() == 'Battleship'){
          for(let i = 0; i < 4; i++){
            let test = '#tokenPly'+(Number(currentTile) +i)
            $(test).css('backgroundColor', 'grey');
            $(test).addClass("occupiedShip");
          }
          $('#selected').remove();
          shipsLeft --;
        } else if($('#selected').text() == 'Cruiser'){
            for(let i = 0; i < 3; i++){
              let test = '#tokenPly'+(Number(currentTile) +i)
              $(test).css('backgroundColor', 'grey');
              $(test).addClass("occupiedShip");
            }
        $('#selected').remove();
        shipsLeft --;
      } else if($('#selected').text() == 'Destroyer'){
        for(let i = 0; i < 2; i++){
          let test = '#tokenPly'+(Number(currentTile) +i)
          $(test).css('backgroundColor', 'grey');
          $(test).addClass("occupiedShip");
        }
        $('#selected').remove();
        shipsLeft --;
      }else if($('#selected').text() == 'Submarine'){
        for(let i = 0; i < 3; i++){
          let test = '#tokenPly'+(Number(currentTile) +i)
          $(test).css('backgroundColor', 'grey');
          $(test).addClass("occupiedShip");
        }
        $('#selected').remove();
        shipsLeft --;
      }

      if(shipsLeft === 0){
        $("#shipsToPlace").remove()
        $("#placementChoice").remove()
        let chart = $("<div>Click to Start Game</div>")
        $(chart).attr("id", "startGame");
        $('body').append(chart);
      }
    } else if(shipClicked && direction =="vertical"){
      let currentTile = $(this).attr('id');
      currentTile = currentTile.replace(/[a-zA-Z]/g, '');
      if($('#selected').text() == 'Carrier'){
        for(let i = 0; i < 5; i++){
            let test = '#tokenPly'+(Number(currentTile) +(i*10))
            $(test).css('backgroundColor', 'grey');
            $(test).addClass("occupiedShip");
          }
        $('#selected').remove();
        shipsLeft --;
      } else if($('#selected').text() == 'Battleship'){
          for(let i = 0; i < 4; i++){
            let test = '#tokenPly'+(Number(currentTile) +(i*10))
            $(test).css('backgroundColor', 'grey');
            $(test).addClass("occupiedShip");
          }
          $('#selected').remove();
          shipsLeft --;
        } else if($('#selected').text() == 'Cruiser'){
            for(let i = 0; i < 3; i++){
              let test = '#tokenPly'+(Number(currentTile) +(i*10))
              $(test).css('backgroundColor', 'grey');
              $(test).addClass("occupiedShip");
            }
        $('#selected').remove();
        shipsLeft --;
      } else if($('#selected').text() == 'Destroyer'){
        for(let i = 0; i < 2; i++){
          let test = '#tokenPly'+(Number(currentTile) +(i*10))
          $(test).css('backgroundColor', 'grey');
          $(test).addClass("occupiedShip");
        }
        $('#selected').remove();
        shipsLeft --;
      }else if($('#selected').text() == 'Submarine'){
        for(let i = 0; i < 3; i++){
          let test = '#tokenPly'+(Number(currentTile) +(i*10))
          $(test).css('backgroundColor', 'grey');
          $(test).addClass("occupiedShip");
        }
        $('#selected').remove();
        shipsLeft --;
      }

      if(shipsLeft === 0){
        $("#shipsToPlace").remove()
        $("#placementChoice").remove()
        let chart = $("<div>Click to Start Game</div>")
        $(chart).attr("id", "startGame");
        $('body').prepend(chart);
      }
    }
  });



});





