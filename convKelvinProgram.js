//A previsão hoje é 293 kelvin(var constante)
let kelvin = 293;
//Ao converter kelvin para Celsius temos que, C = k-273 
let celsius = kelvin-273;
//fahrenheit eh dado pela equação abaixo)
let fahrenheit = celsius*(9/5)+32;
//geralmente o resultado da equação gera um número decimal, então ao usar o metodo de math(floor), tornaremos esse número inteiro ao arrendodarmos
fahrenheit = Math.floor(fahrenheit);


console.log(`The temperature is ${fahrenheit} degrees Fahrenheit. `);