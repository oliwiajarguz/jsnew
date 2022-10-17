class Ksiazka {
    constructor(tytul, autor, przeczytana) {
      this.nicknick = tytul;
      this.surn = autor;
      this.read = przeczytana;
    }
    opiszKsiazke() {
      if (this.read === true) {
        return ('Książka ma tytuł ' + this.nicknick + ',autorem jest ' + this.surn + ' i została przeczytana.');
      } else {
       return ('Książka ma tytuł ' + this.nicknick + ',autorem jest ' + this.surn + ' i nie została przeczytana.');
      }
    }
  
  }
  
  let wiedzmin = new Ksiazka('Wiedźmin', "Andrzej Sapkowski", true);
  let saint = new Ksiazka('Mały Ksiązę', 'Antoine saint exupery', true);
  let krzyzacy = new Ksiazka('Krzyzacy', 'Henryk Sienkiewicz', false);
  
  
  let tablicaGlobalna = [wiedzmin, saint, krzyzacy];

  function iloscPrzeczytanych(tablica) {
    let sum = 0;
    for (let i = 0; i < tablica.length; i++) {
    console.log(tablica[i].opiszKsiazke());
      if (tablica[i].read) {
        sum++;
      }
    }
    return sum;
    
  }
  console.log(iloscPrzeczytanych(tablicaGlobalna));