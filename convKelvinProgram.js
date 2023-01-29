//Este programa converte a temperatura em Kelvin para Fahrenheit e Celsius.
let kelvin = prompt("digite um valor para a temperatura em Kelvin");
//Ao converter kelvin para Celsius temos que, C = k-273 
let celsius = kelvin-273;
//fahrenheit eh dado pela equação abaixo)
let fahrenheit = celsius*(9/5)+32;
//geralmente o resultado da equação gera um número decimal, então ao usar o metodo de math(floor), tornaremos esse número inteiro ao arrendodarmos
fahrenheit = Math.floor(fahrenheit);


alert('The temperature is ' +fahrenheit+' degrees Fahrenheit, and '+celsius+ ' degrees Celsius');
