class Ksiazka {
    constructor(tytul, autor, przeczytana) {
      this.nicknick = tytul;
      this.surn = autor;
      this.read = przeczytana;
    }
    opiszKsiazke() {
      if (this.read === true) {
        console.log('Książka ma tytuł ' + this.nicknick + ',autorem jest ' + this.surn + ' i została przeczytana.');
      } else {
        console.log('Książka ma tytuł ' + this.nicknick + ',autorem jest ' + this.surn + ' i nie została przeczytana.');
      }
    }
  
  }
  
  var wiedzmin = new Ksiazka('Wiedźmin', "Andrzej Sapkowski", true);
  var saint = new Ksiazka('Mały Ksiązę', 'Antoine saint exupery', true);
  var krzyzacy = new Ksiazka('Krzyzacy', 'Henryk Sienkiewicz', false);
  
  console.log(wiedzmin);
  wiedzmin.opiszKsiazke();
  console.log(saint);
  saint.opiszKsiazke();
  console.log(krzyzacy);
  krzyzacy.opiszKsiazke();
  
  var tablicaGlobalna = [wiedzmin, saint, krzyzacy];
  console.log(tablicaGlobalna);

  function iloscPrzeczytanych(tablicaGlobalna) {
    var sum = 0;
    for (var i = 0; i < tablicaGlobalna.length; i++) {
      if (tablicaGlobalna[i].read) {
        sum++;
      }
    }
    return sum;
    
  }