
function ciag(element) {

    let fstElement = 0;
    let scndElement= 1;
    let nextElement = fstElement+scndElement;

    if (element === 0) {
      return 0 ;
    }
    if (element === 1) {
      return 1;
    }
  
    if (element > 1) {
      for (let i = 2; i <= element; i++) {
  
        nextElement = fstElement + scndElement;
  
        fstElement = scndElement;
        scndElement = nextElement;
  
      }
      return nextElement;
    }
  
  }
  
  var zero = ciag(0); 
  var jeden = ciag(1); 
  var em12 = ciag(13); 
  
console.log(ciag(0));
console.log(ciag(1));
console.log(ciag(2));
console.log(ciag(3));
console.log(ciag(4));
console.log(ciag(5));
console.log(ciag(6));
console.log(ciag(7));
console.log(ciag(8));