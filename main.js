//write your code here to make the tests pass
var TennisGame = function (name1, name2) {
  this.playerOneScore = 0;
  this.playerTwoScore = 0;

  this.playerOneScores = function() { 
    this.playerOneScore+=1;
  };
  this.playerTwoScores = function() { 
    this.playerTwoScore+=1;
  };
  this.isDeuce = function () {
    if (this.playerOneScore >= 3 && this.playerOneScore === this.playerTwoScore){
      console.log ('true');
      return true;
    } else {
      console.log(false);
      return false;
    }
  };
  this.playerWithHighestScore = function () {
    if (this.playerOneScore > this.playerTwoScore){
      return name1;
    } else if (this.playerTwoScore > this.playerOneScore) {
      return name2;
    }
    
  };
  this.hasWinner = function () {
    if (this.playerOneScore > 3 && this.playerTwoScore <= 3) {
      return true;
    } else if (this.playerTwoScore > 3 && this.playerOneScore <=3) {
      return true;
    } else if (this.playerOneScore - this.playerTwoScore === 2 && this.playerOneScore > 3) {
      return true;
    } else if (this.playerTwoScore - this.playerOneScore === 2 && this.playerTwoScore > 3) {
      return true;
    } else {
      return false;
    }
     
  };
  this.hasAdvantage = function () {
     if (this.playerTwoScore +1 === this.playerOneScore && this.playerOneScore > 4) {
       return true;
     } else if (this.playerOneScore + 1 === this.playerTwoScore && this.playerTwoScore > 4) {
       return true;
     } else {
       return false;
     }
  };
  this.translateScore = function (score) {
    if (score === 0) {
      return 'Love';
    } else if (score === 1) {
       return 'Fifteen';
     } else if (score === 2){
       return 'Thirty';
     } else if (score === 3){
       return 'Forty';
     }
  };
  this.getScore = function () {
    if (this.playerOneScore === this.playerTwoScore && this.playerOneScore === 1){
      return 'Fifteen all';
    }else if (this.playerOneScore === this.playerTwoScore && this.playerOneScore === 2){
      return 'Thirty all';
    }else if (this.isDeuce()) {
      return 'Deuce';
    }else if (this.hasAdvantage() && this.playerOneScore > this.playerTwoScore) {
      return 'Adsvantage ' + name1;
    }else if (this.hasAdvantage() && this.playerTwoScore > this.playerOneScore) {
      return 'Advantage ' + name2;
    }else if (this.hasWinner() && this.playerOneScore > this.playerTwoScore ) {
      return name1 + ' wins';
    }else if (this.hasWinner() && this.playerTwoScore > this.playerOneScore) {
      return name2 + ' wins';
    }else {
      return this.translateScore(this.playerOneScore) + ', ' + this.translateScore(this.playerTwoScore); 
    }
  };
};







