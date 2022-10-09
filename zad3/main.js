var array = [0, 1, 2, 3, 4, 5];

function name(times) {

  var result = 1;
  var another = 0;

  for (var i = 0; i < times.length; i++) {
    result *= times[i];
    another += times[i];
  }

  console.log(result);
  console.log(another);

}


console.log(name(array));

