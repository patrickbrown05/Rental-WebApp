// Generated by CoffeeScript 2.3.2
(function() {
  var exports;

  exports = this;

  this.compute = function() {
    var bills, numRoom;
    numRoom = inputForm.numRoomates.value;
    bills = inputForm.bills.value;
    return splitBills(numRoom);
  };

  this.splitBills = function(numRoom) {
    var $div, amountOwed, i, j, k, mainArray, mainString, output, ref, results, x;
    output = document.getElementById('output');
    //clear the output before proceeding
    output.innerHTML = '';
    //get an array from the user input in the textarea and split it by new line
    mainString = inputForm.bills.value;
    mainArray = mainString.split('\n');
    results = [];
    for (i = k = 0, ref = numRoom; k < ref; i = k += 1) {
      //create a div for each roommate
      createOutputDiv(i, output);
      $div = document.getElementById('roommate' + i);
      x = 0;
      results.push((function() {
        var l, len, results1;
        results1 = [];
        for (l = 0, len = mainArray.length; l < len; l++) {
          j = mainArray[l];
          x++;
          amountOwed = j / numRoom;
          results1.push($div.innerHTML += '<p>Bill ' + x + ': $' + amountOwed.toFixed(2) + '</p>');
        }
        return results1;
      })());
    }
    return results;
  };

  this.createOutputDiv = function(roomNum, output) {
    var newDiv;
    //this function creates an id using the number in the for loop above
    //and sets its ID = roommate and i then appends it to the output div
    newDiv = document.createElement('div');
    newDiv.id = 'roommate' + roomNum;
    newDiv.innerHTML = '<span>Roommate ' + roomNum + ': </span>';
    return output.appendChild(newDiv);
  };

}).call(this);
