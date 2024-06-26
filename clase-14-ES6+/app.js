// Array de objetos (productos)
const products = [
  {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: {
      rate: 3.9,
      count: 120
    }
  },
  {
    id: 2,
    title: "Mens Casual Premium Slim Fit T-Shirts ",
    price: 22.3,
    description: "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    rating: {
      rate: 4.1,
      count: 259
    }
  },
  {
    id: 3,
    title: "Mens Cotton Jacket",
    price: 55.99,
    description: "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    rating: {
      rate: 4.7,
      count: 500
    }
  },
  {
    id: 4,
    title: "Mens Casual Slim Fit",
    price: 15.99,
    description: "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    rating: {
      rate: 2.1,
      count: 430
    }
  },
  {
    id: 5,
    title: "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    price: 695,
    description: "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
    category: "jewelery",
    image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
    rating: {
      rate: 4.6,
      count: 400
    }
  },
  {
    id: 6,
    title: "Solid Gold Petite Micropave ",
    price: 168,
    description: "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
    category: "jewelery",
    image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
    rating: {
      rate: 3.9,
      count: 70
    }
  },
  {
    id: 7,
    title: "White Gold Plated Princess",
    price: 9.99,
    description: "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
    category: "jewelery",
    image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
    rating: {
      rate: 3,
      count: 400
    }
  },
  {
    id: 8,
    title: "Pierced Owl Rose Gold Plated Stainless Steel Double",
    price: 10.99,
    description: "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
    category: "jewelery",
    image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
    rating: {
      rate: 1.9,
      count: 100
    }
  },
  {
    id: 9,
    title: "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
    price: 64,
    description: "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
    category: "electronics",
    image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
    rating: {
      rate: 3.3,
      count: 203
    }
  },
  {
    id: 10,
    title: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
    price: 109,
    description: "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
    category: "electronics",
    image: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
    rating: {
      rate: 2.9,
      count: 470
    }
  },
  {
    id: 11,
    title: "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
    price: 109,
    description: "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
    category: "electronics",
    image: "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
    rating: {
      rate: 4.8,
      count: 319
    }
  },
  {
    id: 12,
    title: "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
    price: 114,
    description: "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
    category: "electronics",
    image: "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
    rating: {
      rate: 4.8,
      count: 400
    }
  },
  {
    id: 13,
    title: "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
    price: 599,
    description: "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz",
    category: "electronics",
    image: "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
    rating: {
      rate: 2.9,
      count: 250
    }
  },
  {
    id: 14,
    title: "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ",
    price: 999.99,
    description: "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag",
    category: "electronics",
    image: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
    rating: {
      rate: 2.2,
      count: 140
    }
  },
  {
    id: 15,
    title: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
    price: 56.99,
    description: "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
    rating: {
      rate: 2.6,
      count: 235
    }
  },
  {
    id: 16,
    title: "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
    price: 29.95,
    description: "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
    rating: {
      rate: 2.9,
      count: 340
    }
  },
  {
    id: 17,
    title: "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
    price: 39.99,
    description: "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
    rating: {
      rate: 3.8,
      count: 679
    }
  },
  {
    id: 18,
    title: "MBJ Women's Solid Short Sleeve Boat Neck V ",
    price: 9.85,
    description: "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
    rating: {
      rate: 4.7,
      count: 130
    }
  },
  {
    id: 19,
    title: "Opna Women's Short Sleeve Moisture",
    price: 7.95,
    description: "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
    rating: {
      rate: 4.5,
      count: 146
    }
  },
  {
    id: 20,
    title: "DANVOUY Womens T Shirt Casual Cotton Short",
    price: 12.99,
    description: "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
    rating: {
      rate: 3.6,
      count: 145
    }
  }
]

const cart = []

const productsContainer = document.getElementById('productsContainer')

for (const item of products) {
  productsContainer.innerHTML += `
  <div class='card'>
    <img src='${item.image}' alt='${item.title}'>
    <h2>${item.title}</h2>
    <button class='addButton' data-id='${item.id}'>Agregar al carrito</button>
  </div>`
}

const addButtons = document.getElementsByClassName('addButton')

for (const button of addButtons) {
  const productId = button.getAttribute('data-id')
  // Utilizando propiedad onclick ("on" + evento)
  // button.onclick = function () {
  //   addProduct(productId)
  // }

  // Utilizando metodo addEventListener (nombre del evento, sin el "on")
  button.addEventListener('click', function () {
    addProduct(productId)
  })
}

function addProduct(id) {
  const index = id - 1
  cart.push(products[index])
  showCart()
}

function removeProduct(prod) {
  const productIndex = cart.indexOf(prod)
  cart.splice(productIndex, 1)
  showCart()
}

function showCart() {
  // usamos querySelector para el caso que queramos un solo elemento
  // usamos querySelectorAll para obtener una lista de elementos
  // en ambos casos, podemos usar selectores CSS para referenciar los elementos
  const cartContainer = document.querySelector('#cartContainer')
  // obtenemos el elemento que queremos quitar
  const noCart = document.querySelector('.noCart')
  // eliminamos el elemento mediante el removeChild
  if (noCart) {
    cartContainer.removeChild(noCart)
  }

  // reiniciamos el contenido del contenedor, para vaciarlo
  cartContainer.innerHTML = ''

  for (const product of cart) {
    // creamos los nuevos elementos con el metodo createElement, y seteamos sus propiedades
    const newDiv = document.createElement('div')
    newDiv.classList.add('cartCard')

    const productTitle = document.createElement('h3')
    productTitle.innerText = product.title

    const productImage = document.createElement('img')
    productImage.src = product.image
    productImage.alt = product.title

    const deleteButton = document.createElement('button')
    deleteButton.innerText = 'Eliminar'
    deleteButton.classList.add('button')
    // asignamos la funcion al evento 'click' del boton nuevo
    deleteButton.onclick = function () {
      removeProduct(product)
    }

    // agregamos todos los nuevos elementos al contenedor div (la card)
    newDiv.append(productImage, productTitle, deleteButton)
    // agregamos el div con todo su contenido seteado, dentro del contenedor del carrito (podemos usar append tambien)
    cartContainer.appendChild(newDiv)
  }
}

///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////// Ejemplos de clase 12 ////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////

// function contador(fn) {
//   let numero = 0
//   return fn(numero)
// }

// function sumar(n) {
//   return n + 1
// }

// function restar(n) {
//   return n - 1
// }

// const sumarUno = contador(sumar)
// console.log(sumarUno)

// products.forEach((item, indice, arrayCompleto) => {
//   // console.log(item.title)
//   // console.log('precio ->', item.price)
//   // console.log('precio con iva ->', item.price * 1.21)
//   // console.log('fin de producto ' + indice)
//   // console.log('-------------------')
//   // console.log(arrayCompleto)
//   productsContainer.innerHTML += `
//   <div class='card'>
//     <img src='${item.image}' alt='${item.title}'>
//     <h2>${item.title}</h2>
//     <button class='addButton' data-id='${item.id}'>Agregar al carrito</button>
//   </div>`
// })

// const productosConStock = products.map((product) => {
//   const productUpdated = { ...product, stock: 10 }
//   productUpdated.price *= 1.2
//   return productUpdated
// })

// // console.log(products)
// // console.log(productosConStock)

// const product18 = products.find((item) => {
//   return item.id === 18
// })

// // console.log(product18)

// const lessThan15 = products.findLast((item) => {
//   return item.price < 15
// })

// // console.log(lessThan15)

// const electronicsProducts = products.filter((product) => {
//   return product.category === 'electronic'
// })

// // console.log(electronicsProducts)

// const jackets = products.filter((item) => item.title.includes('Jacket'))

// // console.log(jackets)
// console.log(products)

// const total = products.reduce((accum, element) => {
//   return accum + element.price
// }, 0)

// console.log(total)

///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////// Ejemplos de clase 13 ////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////

// // Utilizamos el localStorage para "setear" informacion bajo una clave, especificando su valor
// localStorage.setItem('name', 'Nico')
// localStorage.setItem('theme', 'light')

// // Obtenemos la informacion del Storage, utilizando la clave como referencia, y nos retorna el valor
// const userName = localStorage.getItem('name')
// const tituloPrincipal = document.querySelector('#tituloPrincipal')
// tituloPrincipal.innerText += `. Bienvenido ${userName}`

// // Podemos borrar un dato especifico utilizando la clave como referencia
// localStorage.removeItem('theme')

// // Con el metodo clear, estamos borrando toda la informacion del storage del usuario
// // localStorage.clear()

// // De la misma manera que trabajamos con el localStorage, podemos trabajar con el sessionStorage
// sessionStorage.setItem('time', '20:35')

// // Utilizamos el metodo JSON para trabajar con la informacion y poder guardarla en el storage
// // Usamos el metodo "stringify" para transformar de Objeto JS a JSON
// const productsJSON = JSON.stringify(products)
// console.log(productsJSON)

// localStorage.setItem('products', productsJSON)

// //De la misma manera, trabajamos con el "parse", pero para pasar de JSON a Objeto JS
// const productsObject = JSON.parse(productsJSON)
// console.log(productsObject)

///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////// Ejemplos de clase 14 ////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////

const numero = 4
// let esPar = ''

// if(numero%2 === 0) {
//   esPar = 'El numero ' + numero + ' es PAR.'
// } else {
//   esPar = 'El numero ' + numero + ' NO es PAR.'
// }

// console.log(esPar)

const esPar = (numero % 2 === 0) ? 'El numero ' + numero + ' es PAR.' : 'El numero ' + numero + ' NO es PAR.'
// console.log(esPar)

// function dividir(divisor, dividendo) {
//   // if (dividendo <=0 ) {
//   //   return 'No se puede dividir por cero.'
//   // } else {
//   //   return divisor/dividendo
//   // }
//   return dividendo <= 0 ? 'No se puede dividir por cero.' : divisor / dividendo
// }

// Forma de funcion flecha, con "return" implicito
// const dividir = (divisor, dividendo) => dividendo <= 0 ? 'No se puede dividir por cero.' : divisor / dividendo

// Forma de funcion flecha, con llaves y en bloque (con return)
const dividir = (divisor, dividendo) => {
  return dividendo <= 0 ? 'No se puede dividir por cero.' : divisor / dividendo
}

const resultado = dividir(8, 4)
// console.log(resultado)

// OPERADOR AND (&&)
const edad = 22
const tieneRegistro = true

// if (edad >= 18 && tieneRegistro) {
//   console.log('Tiene permitido circular.')
// } else {
//   console.log('Se labrara una multa, no puede circular.')
// }

const evaluacion = edad >= 18 && tieneRegistro ? 'Tiene permitido circular.' : 'Se labrara una multa, no puede circular.'
// console.log(evaluacion)

// OPERADOR OR (||)
const codigoDescuento = true
const primeraCompra = false
const estaLogeado = false

// if ((codigoDescuento || primeraCompra) && estaLogeado) {
//   console.log('Descuento del 20% en toda la tienda.')
// } else {
//   console.log('Precios de lista.')
// }


//SPREAD OPERATOR ...
const producto = {
  id: 1,
  title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  price: 109.95,
  description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  category: "men's clothing",
  image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  rating: {
    rate: 3.9,
    count: 120
  }
}

const productoConStock = {
  ...producto,
  stock: 10
}

// console.log(productoConStock)
// console.log(producto)

// SPREAD con funciones
const numeros = [1, 4, 3]

function sumarTresNumeros(n1, n2, n3) {
  return n1 + n2 + n3
}

// const sumaDeNumeros = sumarTresNumeros(numeros[0], numeros[1], numeros[2])
const sumaDeNumeros = sumarTresNumeros(...numeros)
// console.log(sumaDeNumeros)

// Uso del operador REST (...)
function sumarNumeros(string, ...numeros) {
  const sumaTotal = numeros.reduce((acumulador, numero) => acumulador + numero, 0)
  const mensaje = string + sumaTotal
  return mensaje
}

// console.log(sumarNumeros('La suma da este resultado: ', 2, 4, 6))


// Uso del operador Nullish ??
// const user = prompt('Ingrese su nombre')

// const userName = user ?? 'Usuario anonimo'

// console.log(userName)


// Uso del operador Optional Chaning (Encadenamiento opcional) ?.
// const userData = {
//   name: 'Juan',
// }

// console.log(userData.shipping?.address)


// Uso de Destructuring (Desestructuracion)
// Con objetos
const userData = {
  name: 'Juan',
  shipping: {
    PC: 5000,
    address: 'Calle 1002'
  }
}

// const name = userData.name
// const shipping = userData.shipping

//Uso de alias en la propiedad 'name'. Se usa con los dos puntos :
const { name: userName, shipping, value } = userData

// console.log(name)
// console.log(shipping)

// Con arrays

const nombres = ['Raul', 'Eduardo', 'Valeria']

// const nombre1 = nombres[0]
// const nombre2 = nombres[1]
// const nombre3 = nombres[2]

const [ nombre1, ...otrosNombres ] = nombres

console.log(nombre1)
console.log(otrosNombres)
