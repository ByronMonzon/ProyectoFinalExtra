var salir = "Salir"
var salirUsuario = ""
while (salirUsuario != salir)
{
//Variables
//Precio base de la cotización
var precio_base = 2000

//Valores de los recargos 
var edad_18 = 0.1 // 10%
var edad_25 = 0.2 // 20%
var edad_50 = 0.3 // 30%

var casado_18 = 0.1 // 10%
var casado_25 = 0.2 // 20%
var casado_50 = 0.3 // 30%

var hijos_recargo = 0.2 // 20%

var propiedades_recargo = 0.35 // 35%

var salario_recargo = 0.05 // 5%

//Recargo
var recargo = 0
var recargo_total = 0

//Precio final 
var precio_final = 0
//Mensajes de alerta para ingresar datos 
var nombre = prompt("Ingrese su nombre, por favor")
var edad = prompt("¿Cuantos años tiene? Ingrese solamente números ")

var casado = prompt("¿Está casado actualmente?", "si/no")
//Comprobamos la edad del cónyuge, solamente si se está casado/a
var edad_conyuge
if("SI" == casado.toUpperCase()){
  edad_conyuge = prompt("¿Que edad tiene su esposo/a? Ingrese solamente números ")
}
//convirtiendo las edades ingresadas a números 
var edad_numero = parseInt(edad)
var edad_conyuge_numero = 0
//convirtiendo la edad del cónyuge si se esta casado/a
if("SI" == casado.toUpperCase()){
  edad_conyuge_numero = parseInt(edad_conyuge)
}

var hijos = prompt("¿Tiene hijos o hijas?", "si/no")
//Comprobamos la cantidad de hijos solamente si los tienen
var cantidad_hijos
if("SI" == hijos.toUpperCase()){
  cantidad_hijos = prompt("¿Cuantos hijos tiene?")
}
/**
 * 1. convierta la cantidad de hijos a numero
 */
var cantidad_hijos_numero = 0
if("SI" == hijos.toUpperCase()){
  cantidad_hijos_numero = parseInt(cantidad_hijos)
}
/**
 * Propiedades
 */
var propiedades = prompt("¿Cuenta con propiedades?", "si/no")
//Comprobamos la cantidad de hijos solamente si los tienen
var cantidad_propiedades
if("SI" == propiedades.toUpperCase()){
  cantidad_propiedades = prompt("¿Cuantas propiedades tiene?")
}
/**
 * Propiedades a numero
 */
var cantidad_propiedades_numero = 0
if("SI" == propiedades.toUpperCase()){
  cantidad_propiedades_numero = parseInt(cantidad_propiedades)
}
/**
 * Salario
 */
var salario = prompt("Escriba su salario")

//Recargo por la edad del asegurado
if(edad_numero>=18 && edad_numero<25){
  recargo = precio_base * edad_18
  recargo_total = recargo_total + recargo
}else if(edad_numero>=25 && edad_numero<50){
  recargo = precio_base * edad_25
  recargo_total = recargo_total + recargo
}else if(edad_numero>=50){
  recargo = precio_base * edad_50
  recargo_total = recargo_total + recargo
}
/** 
 * 2. Recargo por la edad del conyuge
 */
if(edad_conyuge_numero>=18 && edad_numero<25){
  recargo = precio_base * casado_18
  recargo_total = recargo_total + recargo
}else if(edad_conyuge_numero>=25 && edad_numero<50){
  recargo = precio_base * casado_25
  recargo_total = recargo_total + recargo
}else if(edad_conyuge_numero>=50){
  recargo = precio_base * casado_50
  recargo_total = recargo_total + recargo
}
/**
 * 3. Recargo por la cantidad de hijos 
 */ 
if(cantidad_hijos_numero){
  recargo = (precio_base * hijos_recargo) * cantidad_hijos_numero
  recargo_total = recargo_total + recargo
}
/**
 * Recargo cantidad de propiedades
 */ 
if(cantidad_propiedades_numero){
  recargo = (precio_base * propiedades_recargo) * cantidad_propiedades_numero
  recargo_total = recargo_total + recargo
}
  /**
 * Recargo salario del asegurado
 */ 
if(salario){
  recargo = precio_base * salario_recargo
  recargo_total = recargo_total + recargo
}
precio_final = precio_base + recargo_total
//Resultado
alert ("Para el asegurado "+nombre)
alert ("El recargo total sera de: "+recargo_total)
alert ("El precio sera de: "+precio_final)
salirUsuario = prompt("Escribe 'Salir' para terminar, de lo contrario presione 'Enter' para una nueva cotización")
}