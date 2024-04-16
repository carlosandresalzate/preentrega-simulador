/**
 * @file script.js
 * @author Carlos Andres Alzate
 * @brief Codigo desarrollado para la preentrega Nº 1 del curso de JavaScript
 * Semana 4.
 * @version 1.0
 * @date
 * @license: GPL-3.0
 */

/* Variables y constantes Globales */
/**
 * @var {string} greeting - Mensaje de bienvenida
 */
// #region Variables y Funciones globales

const greeting = '¡Bienvenidos a GRAPHO!';

/**
 * @var {Array} startMenu - Opciones del Menu inicial.
 */
const startMenu = ['Sobre Nosotros', 'Catálogo', 'Otros Productos'];

/**
 * @var {string} aboutUs - Informacion sobre la empresa(proyecto).
 */
const aboutUs = `
GRAPHO es un ecommerce especializado en la venta de discos de vinilo, LP y tocadiscos. Nuestro concepto se basa en ofrecer una experiencia única para los amantes de la música vintage.
`;

/**
 * @var {Array} catalog - Opciones del Menu Catalogo
 */
const catalog = ['Artistas', 'Top 10'];

/**
 * @var {Array} artists - Lista de artistas
 */
let artists = [];

/**
 * @var {Array} genres - Lista de generos musicales
 */
let genres = [];

/**
 * @const {Array} rock - Genero musical Rock
 */
const rock = [
  'The Beatles',
  'Led Zeppelin',
  'Queen',
  'Pink Floyd',
  'AC/DC',
  'The Rolling Stones',
  "Guns N' Roses",
  'Nirvana',
  'Metallica',
  'U2',
];

/**
 * @const {Array} pop - Genero musical Pop
 */
const pop = [
  'Michael Jackson',
  'Madonna',
  'Beyoncé',
  'Ariana Grande',
  'Taylor Swift',
  'Justin Bieber',
  'Rihanna',
  'Lady Gaga',
  'Katy Perry',
  'Bruno Mars',
];

/**
 * @const {Array} indie - Genero musical Indie
 */
const indie = [
  'Arctic Monkeys',
  'The Strokes',
  'The National',
  'Arcade Fire',
  'Vampire Weekend',
  'Bon Iver',
  'Fleet Foxes',
  'The Shins',
  'Modest Mouse',
  'Spoon',
];

/**
 * @const {Array} artRock - Genero musical Art Rock
 */
const artRock = [
  'David Bowie',
  'Radiohead',
  'Pink Floyd',
  'The Flaming Lips',
  'King Crimson',
  'Yes',
  'Genesis',
  'Roxy Music',
  'Peter Gabriel',
  'Kate Bush',
];

/**
 * @const {Array} spaceRock - Genero musical Space Rock
 */
const spaceRock = [
  'Hawkwind',
  'Pink Floyd',
  'Gong',
  'Can',
  'Neu!',
  'Kraftwerk',
  'Tangerine Dream',
  'Air',
  'Stereolab',
  'Broadcast',
];

/**
 * @const {Array} hardRock - Genero musical Hard Rock
 */
const hardRock = [
  'AC/DC',
  "Guns N' Roses",
  'Metallica',
  'Black Sabbath',
  'Deep Purple',
  'Led Zeppelin',
  'Van Halen',
  'Aerosmith',
  'Motorhead',
  'Judas Priest',
];

/**
 * @const {Array} psychedelic - Genero musical Psychedelic Rock
 */
const psychedelic = [
  'Pink Floyd',
  'The Jimi Hendrix Experience',
  'The Doors',
  'Jefferson Airplane',
  'Cream',
  'Grateful Dead',
  'The Velvet Underground',
  'The Byrds',
  'The 13th Floor Elevators',
  'Love',
];

/**
 * @const {Array} opera - Genero musical Opera
 */
const opera = [
  'Maria Callas',
  'Luciano Pavarotti',
  'Plácido Domingo',
  'Giuseppe Verdi',
  'Giacomo Puccini',
  'Gioachino Rossini',
  'Wolfgang Amadeus Mozart',
  'Richard Wagner',
  'Georges Bizet',
  'Johann Sebastian Bach',
];

/**
 * @const {Array} symphonic - Genero musical Symphonic
 */
const symphonic = [
  'Ludwig van Beethoven',
  'Wolfgang Amadeus Mozart',
  'Johann Sebastian Bach',
  'Pyotr Ilyich Tchaikovsky',
  'Gustav Mahler',
  'Richard Wagner',
  'Giuseppe Verdi',
  'Franz Schubert',
  'Antonín Dvořák',
  'Johannes Brahms',
];

/**
 * @const {Array} blackMetal - Genero musical Black Metal
 */
const blackMetal = [
  'Mayhem',
  'Burzum',
  'Darkthrone',
  'Immortal',
  'Emperor',
  'Gorgoroth',
  'Satyricon',
  'Dimmu Borgir',
  'Cradle of Filth',
  'Behemoth',
];

/**
 * @const {Array} electronic - Genero musical Electronic
 */
const electronic = [
  'Kraftwerk',
  'Daft Punk',
  'Aphex Twin',
  'The Chemical Brothers',
  'Skrillex',
  'Deadmau5',
  'David Guetta',
  'Calvin Harris',
  'Avicii',
  'Martin Garrix',
];

/**
 * @const {Array} punk - Genero musical Punk
 */
const punk = [
  'Sex Pistols',
  'Ramones',
  'The Clash',
  'The Damned',
  'Buzzcocks',
  'The Black Flag',
  'The Dead Kennedys',
  'The Misfits',
  'The Adverts',
  'The Slits',
];

/**
 * @const {Array} classicalMusic - Genero musical Classical Music
 */
const classicalMusic = [
  'Ludwig van Beethoven',
  'Wolfgang Amadeus Mozart',
  'Johann Sebastian Bach',
  'Pyotr Ilyich Tchaikovsky',
  'Gustav Mahler',
  'Richard Wagner',
  'Giuseppe Verdi',
  'Franz Schubert',
  'Antonín Dvořák',
  'Johannes Brahms',
];

/**
 * @const {Array} otherProducts - Otros productos disponibles.
 */
const otherProducts = ['TocaDiscos', 'Elementos de limpieza', 'Soporte'];

/**
 * @const {Array} topTenArray - Los 10 mejores(Por ahora random)
 */
let topTenArray = [];

/**
 * @var {Array} cartShoppingArray - carrito de compra!
 */
const cartShoppingArray = [];

const menuOptions = [];

menuOptions.push(['principal', startMenu]);
menuOptions.push(['Sobre Nosotros', [aboutUs]]);
menuOptions.push(['Catalogo', catalog]);
menuOptions.push(['Otros Productos', otherProducts]);

console.log(menuOptions);
// const menuOptions = [
//   ['Principal', ['Sobre Nosotros', 'Catálogo', 'Otros Productos']],
//   ['Sobre Nosotros', [aboutUs]],
//   ['Catalogo', ['Artistas', 'Top 10', 'Atras']],
//   ['Otros Productos', ['TocaDiscos', 'Elementos de limpieza', 'Soporte']],
// ];

/**
 * @namespace LIB & Funciones
 * --------------------------------------------------------------------------
 */
// #region LIB & Funciones

/**
 * @brief Combina multiples arrays, elimina duplicados y ordena los elementos
 * alfabeticamente.
 * @function mergeAndSortArray
 * @param  {...Array} arrays - Arrays a combinar y procesar.
 * @returns {void}
 */
function mergeAndSortArray(...arrays) {
  /**
   * @brief Combina todos los arrays en uno solo.
   * @type {Array}
   */
  const concatArray = arrays.reduce(
    (acumulator, currentValue) => acumulator.concat(currentValue),
    []
  );

  /**
   * @brief Elimina duplicados utilizando un Set() y ordena alfabeticamente.
   * @type {Array}
   */
  const uniqueArray = [...new Set(concatArray)];

  /**
   * @brief Almacena el resultado final en la variable global artists.
   * @type {Array}
   */
  artists = uniqueArray.sort();
}

/**
 * Llamada a la funcion que combina y organiza los generos
 */
mergeAndSortArray(
  rock,
  pop,
  indie,
  artRock,
  spaceRock,
  hardRock,
  psychedelic,
  opera,
  symphonic,
  blackMetal,
  electronic,
  punk,
  classicalMusic
);

/**
 * @brief agrego dos elementos en el array cartShoppingArray
 * @var {Array} cartShoppingArray - Carrito de compras;
 */
cartShoppingArray.push('Pink Floyd');
cartShoppingArray.push('AC/DC');

/**
 * @brief Genera una lista aleatoria de artistas (Top 10)
 * @function random
 * @returns {Array} - La lista generada del Top 10 de artistas
 */
function random() {
  for (let i = 0; i < 10; i++) {
    let random = Math.floor(Math.random() * artists.length);
    topTenArray.push(artists[random]);
  }
  return topTenArray;
}

random();

/**
 * @brief Muestra una menu con opciones
 * @function showMenu
 * @param {string} title - Titulo del menu
 * @param {Array} array - Array con las optiones para el menu
 * @returns {string} - el menu retorna como un string.
 */
function showMenu(title, array) {
  console.log('Funcion showMenu()');
  let menu = `
  ${greeting}\n
  Menu ${title}🎶             🛒(${
    cartShoppingArray.length > 0
      ? cartShoppingArray.length
      : cartShoppingArray.length
  })\n`;
  menu += '--------------------------\n';
  array.forEach((array, i) => {
    menu += `${i + 1}. ${array}\n`;
  });
  menu += `
    ${
      cartShoppingArray.length <= 0 || title === 'Carrito de Compra'
        ? ''
        : 'Para ver el carrito ingrese: 0'
    }\n  
    Ingrese el numero de la opcion que desea ver. ↴
    `;

  return menu;
}

/**
 * @brief muestra la seccion "Sobre Nosotros"
 * @function setAboutUs
 * @param {string} title - Titulo para la seccion "Sobre Nosotros"
 */
function setAboutUs(title) {
  console.log('SetAboutUs');
  const aboutUsData = menuOptions.find((opt) => opt[0] === 'Sobre Nosotros')[1];
  const confirmMessage = aboutUsData.join('\n');
  const showAboutUs = `${title} 📝 \n
  ${confirmMessage}\n
  `;
  const confirmed = confirm(showAboutUs);

  if (confirmed) {
    console.log(' Usuario confirmo');
    main();
  } else {
    console.log('usuario cancelo');
    alert('La Aplicacion ha sido cancelada');
  }
}

/**
 * @brief Muestra el menu del catalogo y maneja la interaccion del usuario
 * @function setCatalog
 * @returns {void}
 */
function setCatalog() {
  console.log('Funcion SetCatalog()');
  let getUserOption;

  do {
    getUserOption = prompt(showMenu(menuOptions[2][0], menuOptions[2][1]));
    // console.log(getUserOption);
    if (getUserOption === null) {
      // console.log('Usuario cancelo la Aplicacion en el menú de Catálogo');
      alert('La Aplicacion ha sido cancelada en el menú de Catálogo');
      return;
    }
  } while (getUserOption.trim() === '');

  let selectedOption = parseInt(getUserOption);

  if (
    !isNaN(selectedOption) &&
    selectedOption >= 1 &&
    selectedOption <= menuOptions[2][1].length
  ) {
    let submenuTitle = menuOptions[2][1][selectedOption - 1];
    // console.log('submenuTitle ',submenuTitle)
    if (submenuTitle === 'Artistas') {
      setArtist();
    } else if (submenuTitle === 'Top 10') {
      setTopTen();
    } else if (submenuTitle === 'Atras') {
      main();
    }
  } else if (selectedOption === 0) {
    showCart();
  } else {
    alert('Opción inválida. Por favor, ingrese un número válido.');
    setCatalog();
  }
}

/**
 * @brief Muestra el menu de artistas y maneja la interaccion del usuario.
 * @function setArtist
 * @returns {void}
 */
function setArtist() {
  console.log('Funcion setArtists()');

  let getUserOption;
  do {
    getUserOption = prompt(showMenu(menuOptions[2][1][0], artists));
    if (getUserOption === null) {
      console.log('El usuario cancela la seleccion de artistas');
      let goToCatalog = confirm(
        'Seleccion de artista cancelada, se regresa a Catalogo'
      );
      if (goToCatalog) {
        setCatalog();
      }

      return;
    }
  } while (getUserOption.trim() === '');

  let selectedOption = parseInt(getUserOption);

  if (
    !isNaN(selectedOption) &&
    selectedOption >= 1 &&
    selectedOption <= artists.length
  ) {
    let selectedArtist = artists[selectedOption - 1];
    if (
      cartShoppingArray.length > 0 &&
      cartShoppingArray.includes(selectedArtist)
    ) {
      alert(
        `¡${selectedArtist} ya está en el carrito! Por favor, seleccione otro artista.`
      );
      setArtist();
    } else {
      cartShoppingArray.push(selectedArtist);
      alert(`¡${selectedArtist} agregado al carrito!`);

      let goToCart = confirm(
        'Desea ir al Carrito? Si no, se le redirigira al menu de Catalogo'
      );
      if (goToCart) {
        showCart();
      } else {
        setCatalog();
        return;
      }
    }
  } else if (selectedOption === 0) {
    console.log('Regresando al menú Catalogo');
    showCart();
  } else {
    alert('Opción inválida. Por favor, ingrese un número válido.');
    setArtist();
  }
}

/**
 * @brief Muestra el menu Top 10 y maneja la interaccion del usuario
 * @function setTopTen
 * @returns {void}
 */
function setTopTen() {
  console.log('Funcion setTopTen()');

  let getUserOption;
  do {
    getUserOption = prompt(showMenu(menuOptions[2][1][1], topTenArray));
    if (getUserOption === null) {
      console.log('Usuario Cancelo la seleccion de Top 10');
      let goToCatalog = confirm(
        'Seleccion de Top 10 cancelada, se regresa a Catalogo'
      );
      if (goToCatalog) {
        setCatalog();
      }
      return;
    }
  } while (getUserOption.trim() === '');

  let selectedOption = parseInt(getUserOption);
  if (
    !isNaN(selectedOption) &&
    selectedOption >= 1 &&
    selectedOption <= topTenArray.length
  ) {
    let selectedItem = topTenArray[selectedOption - 1];
    console.log(selectedItem);
    if (
      cartShoppingArray.length > 0 &&
      !cartShoppingArray.includes(selectedItem)
    ) {
      cartShoppingArray.push(selectedItem);
      alert(`!${selectedItem} agregado al carrito`);
      let goToCart = confirm(
        '¿Desea ir al Carrito? Si no, se le redirigira al menu de Catalogo'
      );
      if (goToCart) {
        showCart();
      } else {
        setCatalog();
      }
    } else {
      alert(
        `!${selectedItem} ya esta en el carrito! por favor, seleccione otro elemento.`
      );
      setTopTen();
    }
  } else if (selectedOption === 0) {
    console.log('Regresando al menu principal');
    main();
  } else {
    alert('Opcion invalida. Por Favor, ingrese un numero valido');
    setTopTen();
  }
}

/**
 * @brief Muestra el menu Otros Productos y maneja la interaccion con el usuario
 * @function setOtherProducts
 * @returns {void}
 */
function setOtherProducts() {
  console.log('Funcion setOtherProducts()');
  let getUserOption;
  do {
    getUserOption = prompt(showMenu(menuOptions[3][0], menuOptions[3][1]));
  } while (getUserOption === '');
}

/**
 * @brief Muestra el carrito de Compra y maneja la interaccion del usuario.
 * @function showCart
 * @returns {void}
 */
function showCart() {
  console.log('Funcion showCart()');
  let getUserOption;
  do {
    getUserOption = prompt(showMenu('Carrito de Compra', cartShoppingArray));
    if (getUserOption === null) {
      console.log('El Usuario cancela el carrito');
      alert('Regresa al menu principal');
      main();
      return;
    }
  } while (getUserOption.trim === '');

  let selectedOption = parseInt(getUserOption);

  if (
    !isNaN(selectedOption) &&
    selectedOption >= 1 &&
    selectedOption <= cartShoppingArray.length
  ) {
    let selectedArtist = cartShoppingArray[selectedOption - 1];
    if (cartShoppingArray.includes(selectedArtist)) {
      let removeItem = cartShoppingArray.indexOf(selectedArtist);
      if (removeItem !== -1) {
        cartShoppingArray.splice(removeItem, 1);
        let goToCart = confirm(
          'Elimino el producto del carrito, desea ir al carrito? Si no, se le dirigira a Catalogo'
        );
        if (goToCart) {
          showCart();
        } else {
          setCatalog();
        }
      }
    }
  } else if (selectedOption === 0) {
    console.log('Regresando al menu principal');
    main();
    return;
  } else {
    alert('Opcion invalida. Por Favor, ingrese un numero valido');
    showCart();
  }
  main();
}

// #region Funcion Main
/**
 * @brief Punto de entrada principal de la aplicacion
 * @function main
 * @returns {void}
 */
function main() {
  console.log('Funcion Main()');

  let getUserOption;

  do {
    getUserOption = prompt(showMenu(menuOptions[0][0], menuOptions[0][1]));
    if (getUserOption === null) {
      console.log('Usuario cancelo la Aplicacion');
      alert('La Aplicacion ha sido cancelada en: Main()');
      return;
    }
  } while (getUserOption.trim() === '');
  
  let selectedOption = parseInt(getUserOption);
  
  if (
    !isNaN(selectedOption) &&
    selectedOption >= 1 &&
    selectedOption <= menuOptions[0][1].length
  ) {
    let submenuTitle = menuOptions[selectedOption][0];
    if (submenuTitle === 'Sobre Nosotros') {
      setAboutUs(submenuTitle);
    } else if (submenuTitle === 'Catalogo') {
      setCatalog();
    } else if (submenuTitle === 'Otros Productos') {
      setOtherProducts();
    } else {
      alert(`Mostrar información para ${submenuTitle}`);
    }
  } else if (selectedOption === 0) {
    showCart();
  } else {
    alert('Opción inválida. Por favor, ingrese un número válido.');
    main();
  }
}
main();
