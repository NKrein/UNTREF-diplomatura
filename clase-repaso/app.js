
const interes3 = 1.2 // 20% de recargo
const interes6 = 1.4 // 40% de recargo
const interes9 = 1.6 // 60% de recargo

const nombre = prompt('Ingrese su nombre')
let totalConInteres = 0

function calcularInteres (coeficienteInteres) {
  let conInteres = total * coeficienteInteres
  totalConInteres = conInteres
  alert('El total a pagar con intereses es: ' + conInteres)
}

let total = parseFloat(prompt('Ingrese el total a financiar'))
let cuotas = parseInt(prompt('Ingrese cantidad de cuotas'))

// && (AND) || (OR)
while ((cuotas !== 3) && (cuotas !== 6) && (cuotas !== 9)) {
  cuotas = parseInt(prompt('Ingrese nuevamente las cuotas'))
}

if (cuotas === 3) {
  // Total con el 20% de interes
  calcularInteres(interes3)
} else if (cuotas === 6) {
  // Total con el 40% de interes
  calcularInteres(interes6)
} else {
  // Total con el 60% de interes
  calcularInteres(interes9)
}

alert('Muchas gracias, ' + nombre + '. Vuelva pronto!')

// Ejemplo con arrays

let valoresAnteriores = [1200, 1430, 5000, 6500, 9000]
console.log(valoresAnteriores)

// Iteramos el array
//  ( inicio ; hasta cuando ; actualizacion )
for (let conteo = 0 ; conteo < valoresAnteriores.length ; conteo++) {
  console.log('nro de vuelta: '+ valoresAnteriores[conteo])
}

// Definimos un objeto, y sus propiedades
let auto = {
  marca: 'ford',
  km: 250000,
  precio: 1000
}

// Accedemos a las propiedades del objeto
// dot notation (obtenemos valor mediante el punto)
console.log(auto.km)
// con corchetes
console.log(auto['marca'])

// Definimos un array de objetos, en este caso, nuestros productos son autos
let productos = [
  auto, 
  { marca: 'toyota', km: 0, precio: 4000},
  { marca: 'fiat', km: 30000, precio: 2500},
]

// Accedemos al elemento del indice 1, y mostramos la propiedad "marca" de ese objeto
console.log(productos[1].marca) // toyota
