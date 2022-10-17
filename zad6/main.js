let jsonPracownicy = { 
    "pracownicy":[
        {"firstName": "Krystian", "lastName": "Dziopa"}, 
        {"firstName": "Anna", "lastName": "Szapiel"},
        {"firstName": "Piotr", "lastName": "Żmuda"}
    ]
};
console.log(jsonPracownicy.pracownicy[0]);

jsonPracownicy.pracownicy.forEach((element, index) => {
    console.log(`imię: ${element.firstName}, nazwisko:${element.lastName}, index: ${index}`);   
});