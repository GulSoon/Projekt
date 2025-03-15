// var

// Zasięg: Zmienna zadeklarowana za pomocą var ma zasięg funkcji (jeśli jest zadeklarowana wewnątrz funkcji)
// lub globalny (jeśli jest zadeklarowana poza funkcją).
//  Oznacza to, że zmienne zadeklarowane za pomocą var są dostępne przez cały zakres funkcji lub globalnie.
// Można wielokrotnie przypisywać nową wartość do zmiennej zadeklarowanej przez var.


var x = 10;
console.log(x); // 10
x = 20;
console.log(x); // 20

if (true) {
    var x = 30;  // Zmienna 'x' jest nadpisywana w całym zakresie funkcji/globalnym
}
console.log(x); // 30


// let
// Zasieg: Zmienna zadeklarowana za pomocą let ma zasięg blokowy, co oznacza, 
// że jest dostępna tylko w obrębie bloku kodu (np. w obrębie pętli, warunków, itp.).
// Ponowne przypisanie: Można zmieniać wartość zmiennej zadeklarowanej przez let.

let y = 10;
console.log(y); // 10
y = 20;
console.log(y); // 20

if (true) {
    let y = 30;  // Zmienna 'y' jest dostępna tylko wewnątrz tego bloku
    console.log(y); // 30
}
console.log(y); // 20 (zasięg 'y' jest ograniczony do bloku)


// const
// Zasięg: Zmienna zadeklarowana za pomocą const ma zasięg blokowy, podobnie jak let. 
// Jest dostępna tylko w obrębie bloku, w którym została zadeklarowana.
// Ponowne przypisanie: Zmienna zadeklarowana przez const nie może być ponownie przypisana po jej początkowym przypisaniu. 
// Jest stała.

const z = 10;
console.log(z); // 10
// z = 20; // Błąd! Nie można ponownie przypisać wartości do 'const'

if (true) {
    const z = 30;  // Zmienna 'z' jest dostępna tylko wewnątrz tego bloku
    console.log(z); // 30
}
console.log(z); // 10 (zasięg 'z' jest ograniczony do bloku)