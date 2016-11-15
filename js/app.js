'use strict';

console.log("OUTSIDE: main");
var app = angular.module('main', ['ngLodash']);
console.log("INSIDE: main");

$(function() {

  $(document).keypress("I", function(e) {
    if (e.ctrlKey && e.keyCode == 48) {
      $('.del').removeClass('hide');
    }
  });

  $(document).keypress("I", function(e) {
    if (e.ctrlKey && e.keyCode == 49) {
      $.get("http://ipinfo.io", function(response) {
        alert(response.ip);
      }, "jsonp");
    }
  });

  $('.ghost-botton').click(function() {
    window.alert("WHOA");
    $('.ghost-botton').addClass('animated bounceOutLeft');
  });
  // --
  // --
  // --

  // $(document).keypress("Y", function(e) {
  //   if (e.ctrlKey && e.keyCode == 57) {
  //     $('.del').removeClass('hide');
  //   }
  // });

  $('a[href*="#"]:not([href="#"])').click(function() {

    if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
      var target = $(this.hash);
      target = target.length
        ? target
        : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }

  });
});

$(function() {

  function converttext() {
    inputtext = document.getElementById('codeconverter').inputtext.value;
    out = inputtext.replace(/\&/g, '&amp;')
    out = out.replace(/\</g, '&lt;')
    out = out.replace(/\>/g, '&gt;')
    out = out.replace(/\"/g, '&quot;')
    out = out.replace(/\'/g, '&#39;')
    out = out.replace(/\|/g, '&#124;')
    out = '<div style="BORDER: #cccccc 1px dashed; PADDING: 5px; WIDTH: 95%; BACKGROUND: #f0f0f0; COLOR: #000000; FONT-SIZE: 12px; OVERFLOW: auto; height:auto"><pre>' + out + '</pre></div>'
    document.getElementById('codeconverter').outputtext.value = out;
  }

  var json = (x) => {
    return JSON.stringify(x, null, 2)
  }

  $scope.getDataTxt = function(twitterTagSearch) {
    fpService.getData(function(response) {
      // console.log("__ txtData response.DATA: __");
      // console.log(json(response.data));
      $scope.txtData = response.data;
    });
  };

  fpService.getDataOther(function(response) {
    var ratchhhh = Math.floor(Math.random() * 100)
    // log(ratchhhh)
    var tweets = response;
    var ranDomIdTotal = 0;
    tweets = response.data.filter((line) => {
      // log(Object.keys(line).length)
      return line.text.length > ratchhhh
    // line.text.length > 0
    }).map((line) => {
      ranDomIdTotal += line.id
      return line
    })
    //  log(ranDomIdTotal)
    var ranDomSetOfObjects = [
      {
        num: Math.floor(Math.random() * 100)
      }, {
        num: Math.floor(Math.random() * 100)
      }, {
        num: Math.floor(Math.random() * 100)
      }
    ]
    //console.log(tweets);
    // console.log(ranDomSetOfObjects);
    // TWITTER DATA USED TO PAINT THE CANVAS
    $scope.twitterData = tweets;

  });

  $scope.getDataTxt()

  // NOTES TAKEN FROM AN ES6 CHEATSHEET VIDEO
  // destructiring

  var foo = {

    bar: 1,
    baz: 2,
    rar: 3,
    raz: 4
  }

  // bar is a key inside of the foo object
  // that we assign to the scope variable
  // the value of the key is mapped to the
  // scope variable

  var bar = foo.bar
  var baz = foo.baz

  console.log(bar)
  console.log(baz)

  // we could also, with es6 syntax, extract the value
  // mapped to a key, by copyying the key letter for letter
  // using brackets

  var {rar, raz} = foo;

  console.log(rar)
  console.log(raz)

  var tenses = ['me', 'you', 'she'];

  console.log('THE FIRST SET ' + tenses);

  // because it's an array, it'll copy values in order
  var [firstPerson, secondPerson, item3] = tenses;
  console.log("THE SECOND SET " + firstPerson + ", " + secondPerson + ", " + item3);

  //
  var cause = "Cause"

  var oldMovieV1 = {

    just: "Just",
    cause: "Cause"
  }
  //  console.log(oldMovieV1);

  var oldMovieV2 = {

    //  just:  ()=> {"Just"},
    just: "Just",
    cause
  }

  console.log(json(oldMovieV2));

  // I'm going to have to revisit this.

  var printObject = ({fParam, sParam}) => {
    //  console.log(fParam + " " + sParam);
  }

  var {just, cause} = oldMovieV2

  console.log(just + " " + cause);
  console.log(typeof just + " " + typeof cause);

  printObject({
    just,
    cause
  })

  var name = "Will"
  var age = 99

  printObject({
    name,
    age
  })

  // moving on

  var calcBMI = (weight, height, max, callBack) => {

    var bmi = weight / Math.pow(height, 2)

    if (bmi > max) {
      console.log("you're overweight")
    }

    if (callBack) {
      callBack(bmi);
    }

  }

  // calcBMI(160, 72, 200);

  // HIGHER ORDER FUNCTIONS

  // functions are values - and can be passed into other funtions

  var log = (x) => {
    // document.write(x)
    // document.write("\n")
    console.log(x)
  }

  var triple = (x) => x * 3
  var waffle = triple;
  log(waffle == triple)
  log(waffle(182))

  var animals = [

    {
      name: "Geoff",
      species: 'Giraffe'
    }, {
      name: "Harold",
      species: 'Dog',
      age: (Math.floor(Math.random() * 15))
    }, {
      name: "Kumar",
      species: 'Dog',
      age: (Math.floor(Math.random() * 15))
    }, {
      name: "Bill",
      species: 'Dog',
      age: (Math.floor(Math.random() * 15))
    }, {
      name: "Ted",
      species: 'Dog',
      age: (Math.floor(Math.random() * 15))
    }, {
      name: "SpongBob",
      species: 'Sponge Fish'
    }, {
      name: "Lina",
      species: 'Lion'
    }

  ]

  var dogs = []

  animals.filter((animal) => {
    if (animal.species == "Dog")
      //dogs.push(json(json(json(animal))))
      dogs.push(json(animal))
  })

  //  log(dogs)

  var dogs = animals.find((animal) => {
    return animal.species === "Dog"
  })

  console.log("FROM FIND: " + dogs)
  var node = {}
  var dogs = animals.filter((animal) => animal.species === "Dog")
  log("FRON FILTER: " + json(dogs))
  var dogs = animals.filter((animal) => animal.species === "Dog").map((animal) => animal.name + " is " + animal.age + " years old" + "secret code: " + animal.age * animal.age)
  log("FRON FILTER WITH MAP: ")
  log(dogs)
  log(dogs.join(' - - - - - - - - - '))
  // var dogs = animals.filter((animal) => animal.species)

  log("---")
  log(JSON.stringify(dogs, null, 2))
  log("---")

  var isDog = (animal) => {
    return animal.species === "Dog"
  }

  var dogs = animals.filter((animal) => isDog(animal))

  // var isNotDog = (x) => {
  //   return x.species === "Dog"
  // }
  // var notDogs = animals.reject((animal) => isDog(animal))
  // log(notDogs)

  var names = animals.map((animal) => {

    return animal.name + " is a " + animal.species

  })

  log(names)

  var orders = [
    {
      amount: 250
    }, {
      amount: 1350
    }, {
      amount: 400
    }, {
      amount: 7000
    }
  ]

  var totalAmount = orders.reduce((sum, order) => {
    console.log("AMOUNTS: $" + sum, order)
    return sum + order.amount

  }, 0)

  log(totalAmount)

  // setTimeout(()=>{
  //
  // var txtData =  $scope.txtData
  //   .trim()
  //   .split("\n")
  //   .map((line) =>line.split("\t"))
  //   .reduce((customers, line) => {
  //     console.log("HEY", line[0])
  //     customers[line[0]] = customers[line[0]] || []
  //     customers[line[0]].push({
  //        name: line[1],
  //        price: line[2],
  //        quantity: line[3],
  //
  //     })
  //     return customers
  //   }, {})
  //
  //   console.log("txtData", json(txtData))
  //
  // }, 1000)

  var him = "Bruce Wayne"

  var greatMe = () => {
    console.log("Hello " + him)
  }

  him = "Peter Parker"
  greatMe();

  function makeSizer(size) {
    return function() {
      document.body.style.fontSize = size + 'px';

    };
  }

  // console.log(size)

  var size12 = makeSizer(30);
  size12()

  var dragon = name => size => element => {
    return name + ' is a ' + size + ' dragon that breathes ' + element + '!'
  }

  console.log(dragon("Orf", 'puny', "smoke and fire"))
  console.log(dragon("Orf")('puny')("smoke and fire"))

  var Gogarmorf = dragon('Gogarmorf')
  var HorshK = Gogarmorf("Insanley Yuge")
  var lastlyNow = HorshK("Pebbles")
  console.log(lastlyNow)

  // currying a function returninga funtion
  let dragons = [
    {
      name: "Drake",
      element: "lightning"
    }, {
      name: "Oscar",
      element: "lightning"
    }, {
      name: "Frank",
      element: "ice"
    }, {
      name: "Mac",
      element: "cheese"
    }
  ]

  // var hasElement = _.curry((element, obj) => {return obj.element === element})
  var hasElement = (element, obj) => {
    return obj.element === element
  }

  var lightningDragons = dragons.filter((x) => hasElement('lightning', x))
  console.log(json(lightningDragons))

  // recurrsion =  when a funtion calls itself until it doesn't

  var countDown = (num) => {
    if (num === 0)
      return
    console.log(num)
    countDown(num - 1)
  }

  //  console.log(countDown(10))

  var categories = [
    {
      id: 'animals',
      parent: null
    }, {
      id: 'mammals',
      parent: 'animals'
    }, {
      id: 'reptiles',
      parent: 'animals'
    }, {
      id: 'frog',
      parent: 'reptiles'
    }, {
      id: 'snake',
      parent: 'reptiles'
    }, {
      id: 'cats',
      parent: 'mammals'
    }, {
      id: 'dog',
      parent: 'mammals'
    }, {
      id: 'cobra',
      parent: 'snake'
    }, {
      id: 'python',
      parent: 'snake'
    }, {
      id: 'Boxer',
      parent: 'dog'
    }, {
      id: 'Pitt Bull',
      parent: 'dog'
    }, {
      id: 'German Shepherd',
      parent: 'dog'
    }, {
      id: 'Chihuahua',
      parent: 'dog'
    }, {
      id: 'Labrador',
      parent: 'dog'
    }, {
      id: 'persian',
      parent: 'cats'
    }, {
      id: 'siamese',
      parent: 'cats'
    }
  ]

  var figTree = categories.filter(line => line.parent === "dogs")
    //returns the whole object not just line by line
    .map(line => line.id + " is a type of " + line.parent)
  console.log(json(figTree))

  var makeTree = (categories, parent) => {
    var node = {}
    categories.filter(c => c.parent === parent)
      //.forEach(c => {node[c.id] = "x"})
      //.forEach(c => {node["test"] = makeTree(categories, c.id)})
      //.forEach(c => c)
      //.forEach(c => {
      //   console.log(c)
      //   return c
      // })
      //.forEach(c => node[c.id] === "TEST")
      .forEach(c => {
        node[c.id] = makeTree(categories, c.id)
      })
    return node
  }

  console.log(json(makeTree(categories, null)))

  // Promises

  //////////////////////////////////////////////
  //////////////////////////////////////////////
  //////////////////////////////////////////////

  // Numbers
  var integeR = 1;
  var floartingPointLiteral = Math.PI

  console.log(Math.pow(2, 25)) // 2 to the power 25
  console.log(Math.round(.7)) // 1.0 round to the nearest integer
  console.log(Math.ceil(.5)) // round up to nearest 10
  console.log(Math.floor(.9)) // round down to the nearest 10
  console.log(Math.abs(-5)) // to find the absolute value
  console.log("absolute value: " + Math.abs(2 + 7)) // to find absolute value
  console.log(Math.max(2, 25, 23, 45, 12)) // find max out of the numbers
  console.log(Math.min(2, 25, 23, 45, 12)) // find min of the numbers
  console.log(Math.random() * 100) // random number between 0 and 1 * 100
  console.log(Math.PI) // returns pi
  console.log(Math.E) // returns natural log
  console.log(Math.sqrt(5)) // retuns the square root of a given number
  console.log("cube root of three: " + Math.pow(3, 1 / 3))
  console.log('sin: ' + Math.sin(50))
  console.log(Math.log(10))
  console.log(Math.log(10) / Math.LN10) // base 2 logarithm of 512
  console.log(Math.log(512) / Math.LN2) // base 2 logarithm of 512
  console.log(Math.exp(3)) // math e cubed

  // Dates and Times
  var thenTime = new Date(2000, 0, 1);
  var nowTime = new Date();
  var laterTime = new Date(2020, 0, 15, 17, 10, 30);
  log(thenTime)
  log(laterTime)
  log(nowTime.getFullYear()) // returns 2016
  log(nowTime.getMonth()) // returns zero based months
  log(nowTime.getDate()) // returns 1 based day
  log(nowTime.getDay()) // 5 day of week. 0 is Sunday 5 is Friday
  log(nowTime.getHours()) // 17 5 pm local time
  log(nowTime.getUTCHours()) // hours in UTC time

  // text
  // escape sequences in string literals
  var thisStringHasBackSlash = 'You\'re right, it can\'t be a quote'
  log(thisStringHasBackSlash)
  var againWithTheSlash = "you\"re right, that\"s wrong"
  log(againWithTheSlash)

  let anotherStringBeThis = "\b ok \v so\n this\' should work\b \b \b \0"
  log(anotherStringBeThis)
  let nullISOn = "\0"
  log(nullISOn)

  // STRING MANIPULATION
  let THISOTHERTEST = 'TEST'
  var TEST = "0123456789-7391038461_9012836817",
    s = "Hello World"

  log(TEST.length)
  log(s.length)
  log(s.charAt(s.length - 1))
  log(s.charAt(Math.random() * s.length))
  log(s.substring(0, 3))
  log(TEST.substring(0, TEST.length - 1))
  log(TEST.charAt(TEST.length - 1))
  log(TEST.substring(1, 5))
  // first grabs the char at give index
  // stops and doens't return a char at
  // given second index

  let baconDrifter = "0 is the First index";
  log(baconDrifter.substring(2, 10))
  log("THIS DOES THE SAME THING: " + baconDrifter.slice(2, 10))
  log(TEST.slice(-1))
  log(baconDrifter.slice(-1))
  log(baconDrifter.slice(-5))
  log(baconDrifter.slice(-13))
  log(s.indexOf('h'))
  log("This returns false: " + s.indexOf('z'))
  log(s.indexOf('H'))
  log(TEST.lastIndexOf("7"))
  log(TEST.indexOf('3', 7))
  log(TEST.indexOf('3', 5))
  log(TEST.indexOf('3', 3))
  log(TEST.indexOf('1', 2)) // returns last index of substring in string
  log(TEST.indexOf('-', 2)) // returns last index of substring in string
  log(TEST.length - 1)
  log(TEST)
  log(TEST.split('-'))
  log(TEST.split('-').join())
  log(TEST.split('-').join(""))
  log(TEST.split('-').join(' *** '))
  log(TEST.split(' *** ').join())
  log(TEST.split('-').map(line => line[0]))
  log(TEST.split('-').map(line => line[1]))
  log(TEST.split('-').map(line => line[2]))
  log('---------')
  log(TEST.split('-').join("").split('_').join(""))
  log(TEST.split('-').join("").split('_').join(""))
  log("I AM THE " + THISOTHERTEST.replace('T', "B") + " EVER")
  log("I AM THE " + THISOTHERTEST.replace('T', "B") + " EVER".toLowerCase())
  log("I AM THE " + THISOTHERTEST.replace('T', "B") + " EVER".toUpperCase())
  // all of these strings a immutable - these methods return new strings

  // REGEX
  var vocalCheck = "testing: 1, 2, 3, 123123 423 243 345 84567 734 47624 182"
  var thePattern = /\d+/g // matces a instances of one or more digits
  log(thePattern.test(vocalCheck)) // true a match exists

  log(vocalCheck.search(thePattern)) // posistion of first match = 9
  log(vocalCheck.match(thePattern)) // array of all matches
  log(vocalCheck.replace(thePattern, "_"))
  log(vocalCheck.split(thePattern)) // split on non digits

  // booleans

  var falsey = undefined
  var falsey = null
  var falsey = 0
  var falsey = -0
  var falsey = NaN
  var falsey = ""
  if (!falsey)
    log(false)

  let okCyah = {}
  if (okCyah)
    log(true)

  // null
    // come back to this

  // The Global Object
  // global props - undefined, Infinity, NaN
  // global function like parseInt(), eval(),
  // constructor function = Date(), RegExp(), String(), Object(), Array()
  var oxen = "hellow oxen"
  var theOtherOxen = oxen.slice(oxen.indexOf(" ") + 1, oxen.length)
  console.log(theOtherOxen)

  // closures!!
  // closures!!
  // closures!!
  function greeter(salutation) {
    var counter = 0;
    var prefix = ". " + salutation + '';
    return (name) => {
      counter++;
      return counter + prefix + name + '!';
    }
  }

  var greet = greeter("Hello")
  console.log(greet("World"))
  console.log(greet("World"))
  console.log(greet("World"))
  // closures!!
  // closures!!
  // closures!!

  //VIDEO
  //VIDEO

  // Numbers Strings Booleans NULL and undefined
  log(.1 + .1)
  log(Number("007"))
  log(parseInt("08"), 10)
  // log("CONSTRUCTORS BEGIN WITH CAPITAL LETTER")
  // && The guard operator -
  // || The default operator -

  // var a = {}
  //
  // if (a) {
  //   return a.member
  // } else {
  //   return a
  // }

  //    var last = input || nr_items;

  //VIDEO
  //VIDEO

  // Immutable Primative Values and Mutable Object Refernce

  var wackyJackie = "Wen\'t to water!"
  // scope
  // blocks don't have scope - fucntions have scope

  var myCar = "BMW"
  log(myCar);
  (() => {
    hoistedFunction();

    // function expression generates an error
    // nonHoistedFunction()

    log(myCar)
    var myCar = "CTS"

    function hoistedFunction() {
      log('hoistedFunction - HOISTED')
    }

    var nonHoistedFunction = function() {
      log('nonHoistedFunction - NON HOISTED')
    }

    var obj = {
      num: 2
    }
    var objV2 = {
      num: 7
    }
    var add2This = function(a, b, c) {
      return this.num + a + b + c
    }

    console.log(add2This.call(obj, 1, 2, 3))
    console.log(add2This.apply(obj, [123, 234, 345]))
    var theARRS = [10, 20, 30]
    console.log(add2This.apply(objV2, theARRS))
    var totalOfTheArrs = '';
    log(theARRS.map((line) => {
      totalOfTheArrs += line
    }))

    // bind returns a funtion
    var bound = add2This.bind(obj)
    log(bound(456, 567, 678))
    log(typeof NaN)
    log(NaN === NaN)

    var xbjV1 = {
        car: "BMW"
      },
      xbjV2 = {
        car: "BMW"
      };

    if (xbjV1 !== xbjV2)
      log("THEY ARE NOT EQUAL")

    var arrV1 = [
        1, 2, 3
      ],
      arrV2 = [1, 2, 3];

    if (arrV1 !== arrV2)
      log("THEY ARE NOT EQUAL")

    if (xbjV1.car === xbjV2.car)
      log("THEY ARE EQUAL")

    if (arrV1[0] === arrV2[0])
      log("THEY ARE EQUAL")

  })();

  (() => {

    // objects are reference types
    // creates a = referemces to b
    // modified b - checked a
    // if they were copies, you
    // could modify them seperately

    var a = []
    var b = a
    b[0] = 1
    log(a[0]);

    var kick = ['high', 'mid', 'low']
    var punch = []

    for (var i = 0; i < kick.length; i++) {
      punch[i] = kick[i]
      log(kick[i])
      log(punch[i])
    }

    (kick, punch) => {
      if (kick.length !== punch.length)
        log('Not Equal')
      for (var i = 0; i < kick.length; i++) {
        if (kick[i] !== punch[i])
          log('Array Not Equal')
      }
    }
  })();

  var theARRS = [10, 20, 30]
  var totalOfTheArrs = 0;
  log(theARRS.map((line) => {
    totalOfTheArrs += line
  }))
  log(totalOfTheArrs)

  // type conversion

  if (null == undefined || "0" == 0 || 0 == false || "0" == false)
    log("This is true")

  log(Number(true))
  log(Number(false))
  log(Number('182'))
  log(String(false))
  log(String('false'))
  log(Boolean([]))
  log(Boolean({}))
  log(Boolean(182))
  log(Object(182))
  log(Object(['182', '7', '004']))

  let fisker = 123456.789
  log(fisker.toFixed(0))
  log(fisker.toFixed(2))
  log(fisker.toFixed(5))
  log(fisker.toExponential(1))
  log(fisker.toExponential(3))

  var brackets = {
    set: "set",
    get: 'get',
    deleteSoon: 'delete'
  }
  log(brackets.deleteSoon)
  delete brackets.deleteSoon
  log(brackets.deleteSoon);

  var OII = false;
  var OII = '2';
  var OII = 3;

  // cannot delete local variable in strict mode
  // delete (OII);
  log(OII);

  // differential inheritance
  (() => {
    var ryu = 'hadoken';

    (() => {
      var ryu = 'frontKick';
      log(ryu);
      log('ryu TEST 1: ');
    })();

    (() => {
      log(ryu);
      var ryu = 'hadoken';
      log('ryu TEST 2: ');

      log(ken)
      var ken = "shoryuken"
    })();

  })();
  for (var i = 0, x = 10; i <= 10; i++, x--) {
    log(i * x)
  }

  log(NaN === NaN)
  log(NaN !== NaN)
  log(Math.E)

  log(0.1 + 0.2)

  var testString = "this,is,a,test,String"
  log(typeof testString)
  log(typeof testString.split(','))
  log(typeof testString.split(',').join(' - '));
  log(testString.split(','))
  log(testString.split(',').filter((line) => {
    return line
  }))

  console.log(Math.min < Math.max)
  log([1, 2, 3].map((n) => {
    return n * n;
  }))

  var superHeroes = [
    1,
    2,
    3,
    4,
    5,
    6,
    7
  ]
  log(superHeroes)
  log(superHeroes.length)
  superHeroes.length = 3
  log(superHeroes.length)
  // superHeroes[69] = 69
  // superHeroes[-7] = -7
  // superHeroes[2.5] = 2.5
  // superHeroes['clxxxii'] = 'clxxxii'
  log(superHeroes)
  superHeroes.push(4, 5, 6, 7, 8, 9, (+'10'))
  superHeroes.unshift('-3', -2, (+'-1'), 0)
  log(superHeroes)
  log(superHeroes.indexOf(0))
  // type sensitive
  log(superHeroes.indexOf('0'))
  var obbbj1 = {
    a: 1
  }
  var obbbj2 = {
    b: 2
  }
  var obbbj2 = {
    b: 2
  }
  log([
    {
      a: 1
    }, {
      b: 1
    }
  ].indexOf({
    b: 2
  }))

  log([obbbj1, obbbj2].indexOf(obbbj1))
  log([obbbj1, obbbj2].indexOf(obbbj2))
  log([
    1,
    2,
    3,
    4,
    5,
    4,
    7,
    8,
    9
  ].indexOf(3))
  // 4 is which index to search from
  log([
    1,
    2,
    3,
    4,
    5,
    4,
    7,
    8,
    9,
    3
  ].indexOf(3, 4))
  var someMonths = [
    'jan',
    'feb',
    'mar',
    'apr',
    'may',
    'jun'
  ]
  log(someMonths)
  someMonths.splice(2)
  log(someMonths)
  var someMonths = [
    'jan',
    'feb',
    'mar',
    'apr',
    'may',
    'jun'
  ]
  log(someMonths.splice(2, 4, 'jul', 'aug', 'sep'))
  log(someMonths)

  var sumMoreNums = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7
  ]
  log(sumMoreNums.slice(2, 5))
  log(Array.isArray(sumMoreNums))
  var str = "Use this string to locate the index of a substring";
  var pos = str.indexOf("locate");
  log(pos)
  pos = str.lastIndexOf("locate");
  log(pos)
  pos = str.search("locate");
  log(pos)
  pos = str.slice(3);
  log(pos)
  pos = str.slice(3).trim();
  log(pos)
  log(str.charAt(str.length - 1))
  log(str.charCodeAt(str.length - 1))
  log(String.fromCharCode(97, 98, 99, 120, 121, 122))
  var n = 'Brendan'.replace("Brendan", "Ben");
  log(n)

  var sentence = "Hi, my name is Sam!"
  if (sentence.indexOf("Sam") != -1) {
    log("Sam is in there!")
  }

  var howToGetWebDesignClients = ["You have to be worth the money you are asking", 'Find out who makes the decisions', 'you have to grab attention', 'repetitive appearance matters', 'Directly approach the people you want to work with']
  // var answer = prompt('Hello')
  log("/////////////////////////")
  log("/////////////////////////")
  log("/////////////////////////")
  log("/////////////////////////")
  log("/////////////////////////")
  var exStrinG = "0Nine5678Nine"
  // finding the last index of a char in a string
  log(exStrinG.lastIndexOf("Nine"))
  // search finds the first index a queried char
  log(exStrinG.search("Nine"))

  var clientMapping = howToGetWebDesignClients.filter((x) => {
    return x.length >= howToGetWebDesignClients[0].length

  })
  log(howToGetWebDesignClients[0].length)
  log(clientMapping)
  for (var iiiiii = 0; iiiiii < howToGetWebDesignClients.length; iiiiii++) {
    log(howToGetWebDesignClients[iiiiii].length)
  }
  log(howToGetWebDesignClients)
  log(howToGetWebDesignClients.reverse())

});

'use strict';

console.log("OUTSIDE: alloy Controller");
app.controller('alloyController', function($scope, $http, alloyService) {
  console.log("INSIDE: alloy Controller");

  $scope.borderPatrol = function() {
    alloyService.handShake(function(response) {
      if (response.data.ip !== undefined) {
        $scope.userIP = response.data.ip;
        $scope.authenticated = true;
        console.log("User Authenticated");
        console.log("____________________");
      } else {
        console.log("Auhentication Error");
        console.log("____________________");
      }
    });

  };

  $scope.borderPatrol();
  $scope.totalNO = 0;
  $scope.totalYES = 0;

  $scope.collectionPlate = function() {
    alloyService.getVoteCount(function(response) {
      // console.log("getHomebrew response.DATA: ");
      // console.info(response);
      $scope.totalAmountOfItemsInThisColletection = (response.data + 1);

    });
    $scope.getVoteSplit();
  }

  $scope.getVoteSplit = function() {
    alloyService.getVoteSplitCount(function(response) {
      $scope.totalYES = response.data.length;
      $scope.totalNO = $scope.totalAmountOfItemsInThisColletection - response.data.length;
    });
    $scope.refresh();
  }
  $scope.refresh = function() {

    $scope.ballotBox = [];

    alloyService.getVotes(function(response) {
      //  console.log(response);
      console.log("____________________");
      $scope.votes = response;

      // for (var x = 0; x <= $scope.statesArr.length; x++) {
      //
      //   if (x) {
      //   }
      //   console.log(x);
      // }

      var totral = 0;
      var totalYES = 0;
      $scope.voterMap = [];
      var arrayCounter = 0;

      Object.keys(response.data).forEach(function(index, key, error) {

        // console.log(key, response.data[key]);
        // console.log("INDEX: " + index);

        var tempLocation = response.data[key].location;

        // {
        //   state: tempLocation
        // };

        $scope.ballotBox.push({
          state: tempLocation
        });
        if ($scope.ballotBox[arrayCounter].state === tempLocation) {
          //  return error
        } else {
          arrayCounter++;
          $scope.ballotBox[arrayCounter].state = tempLocation;

        }

        // .totalVotes++;

        if (response.data[key].location === "California") {

          totral++;
          if (response.data[key].answer === "yes") {
            //    $scope.ballotBox.data['totalYesVotes'].totalYesVotes++;

            $scope.voterMap.push({
              index: index,
              location: tempLocation,
              answer: 'yes'
            });
            totalYES++;
            // console.log("TOTAL YES: " + totalYES);
            // console.log("TOTAL NO: " + (totral - totalYES));
            // console.log("TOTAL: " + (totral));

          } else {
            //  $scope.ballotBox.tempLocation.totalNoVotes++;

            $scope.voterMap.push({
              index: index,
              location: tempLocation,
              answer: 'no'
            });
          }
        }

      });

      var dd = $scope.ballotBox.map(function(line) {
        // var rTrn = {}
        console.log(line)
      })

      console.log($scope.ballotBox);
      console.log($scope.ballotBox.length);

    // console.log($scope.voterMap);
    // console.log($scope.voterMap.length);
    });

  }

  $scope.collectionPlate();

  $scope.deleteAll = function() {

    alloyService.delAllVotes(function(response) {

      console.log("_________________________________");
      console.log("getHomebrew response.DATA: ");
      console.info(response);
      console.log("_________________________________");
      $scope.calexit = response;

    });
    $scope.totalNO = 0;
    $scope.totalYES = 0;
    $scope.refresh();
  }

  // 000000000
  // 000000000
  // 000000000
  // 000000000
  // 000000000

  $scope.getVoteWithQuery = (xQuery) => {

    if (xQuery.length >= 1) {
      alloyService.getVoteQuery({

        q: xQuery
      }, function(response) {

        // SPOTIFYDATA IS USED IN THE VIEW TO PRESENT DATA
        $scope.movieData = response;

        console.log("_________________________________");
        console.log("VVVVVVVVVVVVVVVVVVVVVVVVVVV");
        console.log("VVVVVVVVVVVVVVVVVVVVVVVVVVV");
        console.log("VVVVVVVVVVVVVVVVVVVVVVVVVVV");
        console.log(xQuery);
        console.info(response);
        console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^");
        console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^");
        console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^");
        console.log("_________________________________");

      });
    }

  }

  // 000000000
  // 000000000
  // 000000000
  // 000000000
  // 000000000

  /*

  THIS IS WHERE I START TO MAKE THE MAGIC HAPPEN!

  */

  $scope.statesArr_proxy = [
    {
      "name": "Alabama",
      "abbreviation": "AL"
    }, {
      "name": "Alaska",
      "abbreviation": "AK"
    }, {
      "name": "Arizona",
      "abbreviation": "AZ"
    }, {
      "name": "Arkansas",
      "abbreviation": "AR"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "Colorado",
      "abbreviation": "CO"
    }, {
      "name": "Connecticut",
      "abbreviation": "CT"
    }, {
      "name": "Delaware",
      "abbreviation": "DE"
    }, {
      "name": "Florida",
      "abbreviation": "FL"
    }, {
      "name": "Georgia",
      "abbreviation": "GA"
    }, {
      "name": "Hawaii",
      "abbreviation": "HI"
    }, {
      "name": "Idaho",
      "abbreviation": "ID"
    }, {
      "name": "Illinois",
      "abbreviation": "IL"
    }, {
      "name": "Indiana",
      "abbreviation": "IN"
    }, {
      "name": "Iowa",
      "abbreviation": "IA"
    }, {
      "name": "Kansas",
      "abbreviation": "KS"
    }, {
      "name": "Kentucky",
      "abbreviation": "KY"
    }, {
      "name": "Louisiana",
      "abbreviation": "LA"
    }, {
      "name": "Maine",
      "abbreviation": "ME"
    }, {
      "name": "Maryland",
      "abbreviation": "MD"
    }, {
      "name": "Massachusetts",
      "abbreviation": "MA"
    }, {
      "name": "Michigan",
      "abbreviation": "MI"
    }, {
      "name": "Minnesota",
      "abbreviation": "MN"
    }, {
      "name": "Mississippi",
      "abbreviation": "MS"
    }, {
      "name": "Missouri",
      "abbreviation": "MO"
    }, {
      "name": "Montana",
      "abbreviation": "MT"
    }, {
      "name": "Nebraska",
      "abbreviation": "NE"
    }, {
      "name": "Nevada",
      "abbreviation": "NV"
    }, {
      "name": "New Hampshire",
      "abbreviation": "NH"
    }, {
      "name": "New Jersey",
      "abbreviation": "NJ"
    }, {
      "name": "New Mexico",
      "abbreviation": "NM"
    }, {
      "name": "New York",
      "abbreviation": "NY"
    }, {
      "name": "North Carolina",
      "abbreviation": "NC"
    }, {
      "name": "North Dakota",
      "abbreviation": "ND"
    }, {
      "name": "Ohio",
      "abbreviation": "OH"
    }, {
      "name": "Oklahoma",
      "abbreviation": "OK"
    }, {
      "name": "Oregon",
      "abbreviation": "OR"
    }, {
      "name": "Pennsylvania",
      "abbreviation": "PA"
    }, {
      "name": "Rhode Island",
      "abbreviation": "RI"
    }, {
      "name": "South Carolina",
      "abbreviation": "SC"
    }, {
      "name": "South Dakota",
      "abbreviation": "SD"
    }, {
      "name": "Tennessee",
      "abbreviation": "TN"
    }, {
      "name": "Texas",
      "abbreviation": "TX"
    }, {
      "name": "Utah",
      "abbreviation": "UT"
    }, {
      "name": "Vermont",
      "abbreviation": "VT"
    }, {
      "name": "Virginia",
      "abbreviation": "VA"
    }, {
      "name": "Washington",
      "abbreviation": "WA"
    }, {
      "name": "West Virginia",
      "abbreviation": "WV"
    }, {
      "name": "Wisconsin",
      "abbreviation": "WI"
    }, {
      "name": "Wyoming",
      "abbreviation": "WY"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }
  ];
  $scope.statesArr = [
    {
      "name": "Alabama",
      "abbreviation": "AL"
    }, {
      "name": "Alaska",
      "abbreviation": "AK"
    }, {
      "name": "Arizona",
      "abbreviation": "AZ"
    }, {
      "name": "Arkansas",
      "abbreviation": "AR"
    }, {
      "name": "California",
      "abbreviation": "CA"
    }, {
      "name": "Colorado",
      "abbreviation": "CO"
    }, {
      "name": "Connecticut",
      "abbreviation": "CT"
    }, {
      "name": "Delaware",
      "abbreviation": "DE"
    }, {
      "name": "Florida",
      "abbreviation": "FL"
    }, {
      "name": "Georgia",
      "abbreviation": "GA"
    }, {
      "name": "Hawaii",
      "abbreviation": "HI"
    }, {
      "name": "Idaho",
      "abbreviation": "ID"
    }, {
      "name": "Illinois",
      "abbreviation": "IL"
    }, {
      "name": "Indiana",
      "abbreviation": "IN"
    }, {
      "name": "Iowa",
      "abbreviation": "IA"
    }, {
      "name": "Kansas",
      "abbreviation": "KS"
    }, {
      "name": "Kentucky",
      "abbreviation": "KY"
    }, {
      "name": "Louisiana",
      "abbreviation": "LA"
    }, {
      "name": "Maine",
      "abbreviation": "ME"
    }, {
      "name": "Maryland",
      "abbreviation": "MD"
    }, {
      "name": "Massachusetts",
      "abbreviation": "MA"
    }, {
      "name": "Michigan",
      "abbreviation": "MI"
    }, {
      "name": "Minnesota",
      "abbreviation": "MN"
    }, {
      "name": "Mississippi",
      "abbreviation": "MS"
    }, {
      "name": "Missouri",
      "abbreviation": "MO"
    }, {
      "name": "Montana",
      "abbreviation": "MT"
    }, {
      "name": "Nebraska",
      "abbreviation": "NE"
    }, {
      "name": "Nevada",
      "abbreviation": "NV"
    }, {
      "name": "New Hampshire",
      "abbreviation": "NH"
    }, {
      "name": "New Jersey",
      "abbreviation": "NJ"
    }, {
      "name": "New Mexico",
      "abbreviation": "NM"
    }, {
      "name": "New York",
      "abbreviation": "NY"
    }, {
      "name": "North Carolina",
      "abbreviation": "NC"
    }, {
      "name": "North Dakota",
      "abbreviation": "ND"
    }, {
      "name": "Ohio",
      "abbreviation": "OH"
    }, {
      "name": "Oklahoma",
      "abbreviation": "OK"
    }, {
      "name": "Oregon",
      "abbreviation": "OR"
    }, {
      "name": "Pennsylvania",
      "abbreviation": "PA"
    }, {
      "name": "Rhode Island",
      "abbreviation": "RI"
    }, {
      "name": "South Carolina",
      "abbreviation": "SC"
    }, {
      "name": "South Dakota",
      "abbreviation": "SD"
    }, {
      "name": "Tennessee",
      "abbreviation": "TN"
    }, {
      "name": "Texas",
      "abbreviation": "TX"
    }, {
      "name": "Utah",
      "abbreviation": "UT"
    }, {
      "name": "Vermont",
      "abbreviation": "VT"
    }, {
      "name": "Virginia",
      "abbreviation": "VA"
    }, {
      "name": "Washington",
      "abbreviation": "WA"
    }, {
      "name": "West Virginia",
      "abbreviation": "WV"
    }, {
      "name": "Wisconsin",
      "abbreviation": "WI"
    }, {
      "name": "Wyoming",
      "abbreviation": "WY"
    }
  ];

  setTimeout(function() {

    setInterval(function() {

      $scope.high = 13;
      $scope.lo = 0;
      $scope.randomNum = Math.floor((Math.random() * $scope.high) + $scope.lo);
      $scope.stateListHi = $scope.statesArr_proxy.length - 1;

      $scope.stateListAns = Math.floor((Math.random() * $scope.stateListHi) + $scope.lo);;

      $scope.userVOTE = {
        ip: $scope.userIP,
        answer: $scope.randomNum > 2
          ? "yes"
          : "no",
        location: $scope.statesArr_proxy[$scope.stateListAns].name
      }

      // if ($scope.totalAmountOfItemsInThisColletection <= 999999999) {
      //   $scope.customAdd($scope.userVOTE);
      // } else {
      //   $scope.deleteAll();
      //   $scope.customAdd($scope.userVOTE);
      // }

      // JACKPOT
      $scope.collectionPlate();
      // JACKPOT

    }, 5000);

  }, 100);

  $scope.customAdd = function(userVote) {

    alloyService.postVotes($scope.userVOTE, function(response) {
      $scope.collectionPlate();
    })

  }

  $scope.addVote = function(x) {

    $scope.userVOTE = {
      ip: $scope.userIP,
      answer: x,
      location: $scope.statesArr_proxy[75].name
    }

    if ($scope.authenticated) {

      alloyService.postVotes($scope.userVOTE, function(response) {
        $scope.collectionPlate();
      })

      // angular.element(document.querySelector('.ghost-botton'), function() {
      //   this.addClass('animated bounce');
      // })

    } else {
      alert("You cannot vote twice.")
    }
  }

  $scope.openNav = function() {
    document.getElementById("myNav").style.width = "100%";
  }

  $scope.closeNav = function() {
    document.getElementById("myNav").style.width = "0%";
  }
  $scope.fixedPosition = function() {
    alert("HELLLLO")
    document.getElementById("this").addClass('fixedPosition');
  }

});

'use strict';

console.log("OUTSIDE: alloy Directive");

angular.module("main").directive('inject', function() {

    console.log("INSIDE: alloy Directive");

    return {templateUrl: '../templates/inject.html', controller: 'alloyController', replace: false}

});

'use strict';

console.log("OUTSIDE: alloy Service");

//angular.module("main")
app.service('alloyService', function($http) {

    console.log("INSIDE: alloy Service");

    this.getVotes = function(callback) {
        $http({url: '/calexit', method: "GET"}).then(callback);
        // }).then(callback);
        // }).then(callback);
        // }).then(callback);

    };

    this.postVotes = function(params, callback) {
        $http({url: '/calexit', method: "POST", data: params}).then(callback);

    };

    this.delAllVotes = function(id, callback) {
        console.log("success from delHomeBrew");

        $http({url: '/del-all/', method: "GET"}).then(callback);

    };

    this.getHomeBrew = function(callback) {
        console.log("success from getHomeBrew");

        $http({url: '/homebrew', method: "GET"}).then(callback);

    };

    this.delHomeBrew = function(id, callback) {
        console.log("success from delHomeBrew");

        $http({
            url: '/homebrew/' + id,
            method: "DELETE"
        }).then(callback);

    };
    this.getSpecificHomeBrew = function(id, callback) {
        console.log("success from getSpecificHomeBrew");

        $http({
            url: '/homebrew/' + id,
            method: "GET"
        }).then(callback);

    };

    this.updateHomeBrew = function(id, callback) {
        console.log("success from getSpecificHomeBrew");
        $http({
            url: '/homebrew/' + id,
            method: "GET"
        }).then(callback);

    };

    this.putHomeBrew = function(id, contact, callback) {
        console.log("success from getSpecificHomeBrew");

        $http({
            url: '/homebrew/' + id,
            method: "PUT",
            data: contact
        }).then(callback);

    };

    this.getVoteCount = function(callback) {
        $http({url: '/get-count', method: "GET"}).then(callback);

    };

    this.getVoteSplitCount = function(callback) {
        $http({url: '/split-query', method: "POST"}).then(callback);

    };

    this.getVoteQuery = function(query, callback) {
        console.log("success from getHomeBrew");

        $http({url: '/omni-query', method: "POST", data: query}).then(callback);

    };

    this.handShake = function(callback) {
        $http({url: 'http://ipinfo.io', method: "get"}).then(callback);

    };

});

/* Modernizr 2.8.3 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-backgroundsize-borderradius-flexbox-multiplebgs-opacity-textshadow-cssanimations-csscolumns-cssgradients-csstransforms-csstransforms3d-csstransitions-hashchange-history-audio-video-input-inputtypes-geolocation-inlinesvg-svg-svgclippaths-shiv-mq-cssclasses-addtest-prefixed-teststyles-testprop-testallprops-hasevent-prefixes-domprefixes-css_calc-css_filters-css_vhunit-css_vmaxunit-css_vminunit-css_vwunit-cssclassprefix:ueno!
 */
;window.Modernizr=function(a,b,c){function D(a){j.cssText=a}function E(a,b){return D(n.join(a+";")+(b||""))}function F(a,b){return typeof a===b}function G(a,b){return!!~(""+a).indexOf(b)}function H(a,b){for(var d in a){var e=a[d];if(!G(e,"-")&&j[e]!==c)return b=="pfx"?e:!0}return!1}function I(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:F(f,"function")?f.bind(d||b):f}return!1}function J(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+p.join(d+" ")+d).split(" ");return F(b,"string")||F(b,"undefined")?H(e,b):(e=(a+" "+q.join(d+" ")+d).split(" "),I(e,b,c))}function K(){e.input=function(c){for(var d=0,e=c.length;d<e;d++)u[c[d]]=c[d]in k;return u.list&&(u.list=!!b.createElement("datalist")&&!!a.HTMLDataListElement),u}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),e.inputtypes=function(a){for(var d=0,e,f,h,i=a.length;d<i;d++)k.setAttribute("type",f=a[d]),e=k.type!=="text",e&&(k.value=l,k.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(f)&&k.style.WebkitAppearance!==c?(g.appendChild(k),h=b.defaultView,e=h.getComputedStyle&&h.getComputedStyle(k,null).WebkitAppearance!=="textfield"&&k.offsetHeight!==0,g.removeChild(k)):/^(search|tel)$/.test(f)||(/^(url|email)$/.test(f)?e=k.checkValidity&&k.checkValidity()===!1:e=k.value!=l)),t[a[d]]=!!e;return t}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var d="2.8.3",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k=b.createElement("input"),l=":)",m={}.toString,n=" -webkit- -moz- -o- -ms- ".split(" "),o="Webkit Moz O ms",p=o.split(" "),q=o.toLowerCase().split(" "),r={svg:"http://www.w3.org/2000/svg"},s={},t={},u={},v=[],w=v.slice,x,y=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},z=function(b){var c=a.matchMedia||a.msMatchMedia;if(c)return c(b)&&c(b).matches||!1;var d;return y("@media "+b+" { #"+h+" { position: absolute; } }",function(b){d=(a.getComputedStyle?getComputedStyle(b,null):b.currentStyle)["position"]=="absolute"}),d},A=function(){function d(d,e){e=e||b.createElement(a[d]||"div"),d="on"+d;var f=d in e;return f||(e.setAttribute||(e=b.createElement("div")),e.setAttribute&&e.removeAttribute&&(e.setAttribute(d,""),f=F(e[d],"function"),F(e[d],"undefined")||(e[d]=c),e.removeAttribute(d))),e=null,f}var a={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return d}(),B={}.hasOwnProperty,C;!F(B,"undefined")&&!F(B.call,"undefined")?C=function(a,b){return B.call(a,b)}:C=function(a,b){return b in a&&F(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=w.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(w.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(w.call(arguments)))};return e}),s.flexbox=function(){return J("flexWrap")},s.geolocation=function(){return"geolocation"in navigator},s.hashchange=function(){return A("hashchange",a)&&(b.documentMode===c||b.documentMode>7)},s.history=function(){return!!a.history&&!!history.pushState},s.multiplebgs=function(){return D("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(j.background)},s.backgroundsize=function(){return J("backgroundSize")},s.borderradius=function(){return J("borderRadius")},s.textshadow=function(){return b.createElement("div").style.textShadow===""},s.opacity=function(){return E("opacity:.55"),/^0.55$/.test(j.opacity)},s.cssanimations=function(){return J("animationName")},s.csscolumns=function(){return J("columnCount")},s.cssgradients=function(){var a="background-image:",b="gradient(linear,left top,right bottom,from(#9f9),to(white));",c="linear-gradient(left top,#9f9, white);";return D((a+"-webkit- ".split(" ").join(b+a)+n.join(c+a)).slice(0,-a.length)),G(j.backgroundImage,"gradient")},s.csstransforms=function(){return!!J("transform")},s.csstransforms3d=function(){var a=!!J("perspective");return a&&"webkitPerspective"in g.style&&y("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(b,c){a=b.offsetLeft===9&&b.offsetHeight===3}),a},s.csstransitions=function(){return J("transition")},s.video=function(){var a=b.createElement("video"),c=!1;try{if(c=!!a.canPlayType)c=new Boolean(c),c.ogg=a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),c.h264=a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),c.webm=a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,"")}catch(d){}return c},s.audio=function(){var a=b.createElement("audio"),c=!1;try{if(c=!!a.canPlayType)c=new Boolean(c),c.ogg=a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),c.mp3=a.canPlayType("audio/mpeg;").replace(/^no$/,""),c.wav=a.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),c.m4a=(a.canPlayType("audio/x-m4a;")||a.canPlayType("audio/aac;")).replace(/^no$/,"")}catch(d){}return c},s.svg=function(){return!!b.createElementNS&&!!b.createElementNS(r.svg,"svg").createSVGRect},s.inlinesvg=function(){var a=b.createElement("div");return a.innerHTML="<svg/>",(a.firstChild&&a.firstChild.namespaceURI)==r.svg},s.svgclippaths=function(){return!!b.createElementNS&&/SVGClipPath/.test(m.call(b.createElementNS(r.svg,"clipPath")))};for(var L in s)C(s,L)&&(x=L.toLowerCase(),e[x]=s[L](),v.push((e[x]?"":"no-")+x));return e.input||K(),e.addTest=function(a,b){if(typeof a=="object")for(var d in a)C(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" ueno-"+(b?"":"no-")+a),e[a]=b}return e},D(""),i=k=null,function(a,b){function l(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function m(){var a=s.elements;return typeof a=="string"?a.split(" "):a}function n(a){var b=j[a[h]];return b||(b={},i++,a[h]=i,j[i]=b),b}function o(a,c,d){c||(c=b);if(k)return c.createElement(a);d||(d=n(c));var g;return d.cache[a]?g=d.cache[a].cloneNode():f.test(a)?g=(d.cache[a]=d.createElem(a)).cloneNode():g=d.createElem(a),g.canHaveChildren&&!e.test(a)&&!g.tagUrn?d.frag.appendChild(g):g}function p(a,c){a||(a=b);if(k)return a.createDocumentFragment();c=c||n(a);var d=c.frag.cloneNode(),e=0,f=m(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function q(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return s.shivMethods?o(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+m().join().replace(/[\w\-]+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(s,b.frag)}function r(a){a||(a=b);var c=n(a);return s.shivCSS&&!g&&!c.hasCSS&&(c.hasCSS=!!l(a,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),k||q(a,c),a}var c="3.7.0",d=a.html5||{},e=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,f=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,g,h="_html5shiv",i=0,j={},k;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",g="hidden"in a,k=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){g=!0,k=!0}})();var s={elements:d.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:c,shivCSS:d.shivCSS!==!1,supportsUnknownElements:k,shivMethods:d.shivMethods!==!1,type:"default",shivDocument:r,createElement:o,createDocumentFragment:p};a.html5=s,r(b)}(this,b),e._version=d,e._prefixes=n,e._domPrefixes=q,e._cssomPrefixes=p,e.mq=z,e.hasEvent=A,e.testProp=function(a){return H([a])},e.testAllProps=J,e.testStyles=y,e.prefixed=function(a,b,c){return b?J(a,b,c):J(a,"pfx")},g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" ueno-js ueno-"+v.join(" ueno-"):""),e}(this,this.document),Modernizr.addTest("csscalc",function(){var a="width:",b="calc(10px);",c=document.createElement("div");return c.style.cssText=a+Modernizr._prefixes.join(b+a),!!c.style.length}),Modernizr.addTest("cssvmaxunit",function(){var a;return Modernizr.testStyles("#modernizr { width: 50vmax; }",function(b,c){var d=window.innerWidth/100,e=window.innerHeight/100,f=parseInt((window.getComputedStyle?getComputedStyle(b,null):b.currentStyle).width,10);a=parseInt(Math.max(d,e)*50,10)==f}),a}),Modernizr.addTest("cssvwunit",function(){var a;return Modernizr.testStyles("#modernizr { width: 50vw; }",function(b,c){var d=parseInt(window.innerWidth/2,10),e=parseInt((window.getComputedStyle?getComputedStyle(b,null):b.currentStyle).width,10);a=e==d}),a}),Modernizr.addTest("cssvhunit",function(){var a;return Modernizr.testStyles("#modernizr { height: 50vh; }",function(b,c){var d=parseInt(window.innerHeight/2,10),e=parseInt((window.getComputedStyle?getComputedStyle(b,null):b.currentStyle).height,10);a=e==d}),a}),Modernizr.addTest("cssvminunit",function(){var a;return Modernizr.testStyles("#modernizr { width: 50vmin; }",function(b,c){var d=window.innerWidth/100,e=window.innerHeight/100,f=parseInt((window.getComputedStyle?getComputedStyle(b,null):b.currentStyle).width,10);a=parseInt(Math.min(d,e)*50,10)==f}),a}),Modernizr.addTest("cssfilters",function(){var a=document.createElement("div");return a.style.cssText=Modernizr._prefixes.join("filter:blur(2px); "),!!a.style.length&&(document.documentMode===undefined||document.documentMode>9)});
/*!
 * parallax.js v1.3.1 (http://pixelcog.github.io/parallax.js/)
 * @copyright 2015 PixelCog, Inc.
 * @license MIT (https://github.com/pixelcog/parallax.js/blob/master/LICENSE)
 */

;
(function ($, window, document, undefined) {

    // Polyfill for requestAnimationFrame
    // via: https://gist.github.com/paulirish/1579671

    (function () {
        var lastTime = 0;
        var vendors = ['ms', 'moz', 'webkit', 'o'];
        for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
            window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
            window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
        }

        if (!window.requestAnimationFrame)
            window.requestAnimationFrame = function (callback) {
                var currTime = new Date().getTime();
                var timeToCall = Math.max(0, 16 - (currTime - lastTime));
                var id = window.setTimeout(function () {
                        callback(currTime + timeToCall);
                    },
                    timeToCall);
                lastTime = currTime + timeToCall;
                return id;
            };

        if (!window.cancelAnimationFrame)
            window.cancelAnimationFrame = function (id) {
                clearTimeout(id);
            };
    }());


    // Parallax Constructor

    function Parallax(element, options) {
        var self = this;

        if (typeof options == 'object') {
            delete options.refresh;
            delete options.render;
            $.extend(this, options);
        }

        this.$element = $(element);

        if (!this.imageSrc && this.$element.is('img')) {
            this.imageSrc = this.$element.attr('src');
        }

        var positions = (this.position + '').toLowerCase().match(/\S+/g) || [];

        if (positions.length < 1) {
            positions.push('center');
        }
        if (positions.length == 1) {
            positions.push(positions[0]);
        }

        if (positions[0] == 'top' || positions[0] == 'bottom' || positions[1] == 'left' || positions[1] == 'right') {
            positions = [positions[1], positions[0]];
        }

        if (this.positionX != undefined) positions[0] = this.positionX.toLowerCase();
        if (this.positionY != undefined) positions[1] = this.positionY.toLowerCase();

        self.positionX = positions[0];
        self.positionY = positions[1];

        if (this.positionX != 'left' && this.positionX != 'right') {
            if (isNaN(parseInt(this.positionX))) {
                this.positionX = 'center';
            } else {
                this.positionX = parseInt(this.positionX);
            }
        }

        if (this.positionY != 'top' && this.positionY != 'bottom') {
            if (isNaN(parseInt(this.positionY))) {
                this.positionY = 'center';
            } else {
                this.positionY = parseInt(this.positionY);
            }
        }

        this.position =
            this.positionX + (isNaN(this.positionX) ? '' : 'px') + ' ' +
            this.positionY + (isNaN(this.positionY) ? '' : 'px');

        if (navigator.userAgent.match(/(iPod|iPhone|iPad)/)) {
            if (this.iosFix && !this.$element.is('img')) {
                this.$element.css({
                    backgroundImage: 'url(' + this.imageSrc + ')',
                    backgroundSize: 'cover',
                    backgroundPosition: this.position
                });
            }
            return this;
        }

        if (navigator.userAgent.match(/(Android)/)) {
            if (this.androidFix && !this.$element.is('img')) {
                this.$element.css({
                    backgroundImage: 'url(' + this.imageSrc + ')',
                    backgroundSize: 'cover',
                    backgroundPosition: this.position
                });
            }
            return this;
        }

        this.$mirror = $('<div />').prependTo('body');
        this.$slider = $('<img />').prependTo(this.$mirror);

        this.$mirror.addClass('parallax-mirror').css({
            visibility: 'hidden',
            zIndex: this.zIndex,
            position: 'fixed',
            top: 0,
            left: 0,
            overflow: 'hidden'
        });

        this.$slider.addClass('parallax-slider').one('load', function () {
            if (!self.naturalHeight || !self.naturalWidth) {
                self.naturalHeight = this.naturalHeight || this.height || 1;
                self.naturalWidth = this.naturalWidth || this.width || 1;
            }
            self.aspectRatio = self.naturalWidth / self.naturalHeight;

            Parallax.isSetup || Parallax.setup();
            Parallax.sliders.push(self);
            Parallax.isFresh = false;
            Parallax.requestRender();
        });

        this.$slider[0].src = this.imageSrc;

        if (this.naturalHeight && this.naturalWidth || this.$slider[0].complete) {
            this.$slider.trigger('load');
        }

    };


    // Parallax Instance Methods

    $.extend(Parallax.prototype, {
        speed: 0.2,
        bleed: 0,
        zIndex: -100,
        iosFix: true,
        androidFix: true,
        position: 'center',
        overScrollFix: false,

        refresh: function () {
            this.boxWidth = this.$element.outerWidth();
            this.boxHeight = this.$element.outerHeight() + this.bleed * 2;
            this.boxOffsetTop = this.$element.offset().top - this.bleed;
            this.boxOffsetLeft = this.$element.offset().left;
            this.boxOffsetBottom = this.boxOffsetTop + this.boxHeight;

            var winHeight = Parallax.winHeight;
            var docHeight = Parallax.docHeight;
            var maxOffset = Math.min(this.boxOffsetTop, docHeight - winHeight);
            var minOffset = Math.max(this.boxOffsetTop + this.boxHeight - winHeight, 0);
            var imageHeightMin = this.boxHeight + (maxOffset - minOffset) * (1 - this.speed) | 0;
            var imageOffsetMin = (this.boxOffsetTop - maxOffset) * (1 - this.speed) | 0;

            if (imageHeightMin * this.aspectRatio >= this.boxWidth) {
                this.imageWidth = imageHeightMin * this.aspectRatio | 0;
                this.imageHeight = imageHeightMin;
                this.offsetBaseTop = imageOffsetMin;

                var margin = this.imageWidth - this.boxWidth;

                if (this.positionX == 'left') {
                    this.offsetLeft = 0;
                } else if (this.positionX == 'right') {
                    this.offsetLeft = -margin;
                } else if (!isNaN(this.positionX)) {
                    this.offsetLeft = Math.max(this.positionX, -margin);
                } else {
                    this.offsetLeft = -margin / 2 | 0;
                }
            } else {
                this.imageWidth = this.boxWidth;
                this.imageHeight = this.boxWidth / this.aspectRatio | 0;
                this.offsetLeft = 0;

                var margin = this.imageHeight - imageHeightMin;

                if (this.positionY == 'top') {
                    this.offsetBaseTop = imageOffsetMin;
                } else if (this.positionY == 'bottom') {
                    this.offsetBaseTop = imageOffsetMin - margin;
                } else if (!isNaN(this.positionY)) {
                    this.offsetBaseTop = imageOffsetMin + Math.max(this.positionY, -margin);
                } else {
                    this.offsetBaseTop = imageOffsetMin - margin / 2 | 0;
                }
            }
        },

        render: function () {
            var scrollTop = Parallax.scrollTop;
            var scrollLeft = Parallax.scrollLeft;
            var overScroll = this.overScrollFix ? Parallax.overScroll : 0;
            var scrollBottom = scrollTop + Parallax.winHeight;

            if (this.boxOffsetBottom > scrollTop && this.boxOffsetTop < scrollBottom) {
                this.visibility = 'visible';
            } else {
                this.visibility = 'hidden';
            }
            this.mirrorTop = this.boxOffsetTop - scrollTop;
            this.mirrorLeft = this.boxOffsetLeft - scrollLeft;
            this.offsetTop = this.offsetBaseTop - this.mirrorTop * (1 - this.speed);

            this.$mirror.css({
                transform: 'translate3d(0px, 0px, 0px)',
                visibility: this.visibility,
                top: this.mirrorTop - overScroll,
                left: this.mirrorLeft,
                height: this.boxHeight,
                width: this.boxWidth
            });

            this.$slider.css({
                transform: 'translate3d(0px, 0px, 0px)',
                position: 'absolute',
                top: this.offsetTop,
                left: this.offsetLeft,
                height: this.imageHeight,
                width: this.imageWidth,
                maxWidth: 'none'
            });
        }
    });


    // Parallax Static Methods

    $.extend(Parallax, {
        scrollTop: 0,
        scrollLeft: 0,
        winHeight: 0,
        winWidth: 0,
        docHeight: 1 << 30,
        docWidth: 1 << 30,
        sliders: [],
        isReady: false,
        isFresh: false,
        isBusy: false,

        setup: function () {
            if (this.isReady) return;

            var $doc = $(document),
                $win = $(window);

            $win.on('scroll.px.parallax load.px.parallax', function () {
                    var scrollTopMax = Parallax.docHeight - Parallax.winHeight;
                    var scrollLeftMax = Parallax.docWidth - Parallax.winWidth;
                    Parallax.scrollTop = Math.max(0, Math.min(scrollTopMax, $win.scrollTop()));
                    Parallax.scrollLeft = Math.max(0, Math.min(scrollLeftMax, $win.scrollLeft()));
                    Parallax.overScroll = Math.max($win.scrollTop() - scrollTopMax, Math.min($win.scrollTop(), 0));
                    Parallax.requestRender();
                })
                .on('resize.px.parallax load.px.parallax', function () {
                    Parallax.winHeight = $win.height();
                    Parallax.winWidth = $win.width();
                    Parallax.docHeight = $doc.height();
                    Parallax.docWidth = $doc.width();
                    Parallax.isFresh = false;
                    Parallax.requestRender();
                });

            this.isReady = true;
        },

        configure: function (options) {
            if (typeof options == 'object') {
                delete options.refresh;
                delete options.render;
                $.extend(this.prototype, options);
            }
        },

        refresh: function () {
            $.each(this.sliders, function () {
                this.refresh()
            });
            this.isFresh = true;
        },

        render: function () {
            this.isFresh || this.refresh();
            $.each(this.sliders, function () {
                this.render()
            });
        },

        requestRender: function () {
            var self = this;

            if (!this.isBusy) {
                this.isBusy = true;
                window.requestAnimationFrame(function () {
                    self.render();
                    self.isBusy = false;
                });
            }
        }
    });


    // Parallax Plugin Definition

    function Plugin(option) {
        return this.each(function () {
            var $this = $(this);
            var options = typeof option == 'object' && option;

            if (this == window || this == document || $this.is('body')) {
                Parallax.configure(options);
            } else if (!$this.data('px.parallax')) {
                options = $.extend({}, $this.data(), options);
                $this.data('px.parallax', new Parallax(this, options));
            }
            if (typeof option == 'string') {
                Parallax[option]();
            }
        })
    };

    var old = $.fn.parallax;

    $.fn.parallax = Plugin;
    $.fn.parallax.Constructor = Parallax;


    // Parallax No Conflict

    $.fn.parallax.noConflict = function () {
        $.fn.parallax = old;
        return this;
    };


    // Parallax Data-API

    $(document).on('ready.px.parallax.data-api', function () {
        $('[data-parallax="scroll"]').parallax();
    });

}(jQuery, window, document));
/*!
 * parallax.js v1.3.1 (http://pixelcog.github.io/parallax.js/)
 * @copyright 2015 PixelCog, Inc.
 * @license MIT (https://github.com/pixelcog/parallax.js/blob/master/LICENSE)
 */
!function(t,i,e,s){function o(i,e){var h=this;"object"==typeof e&&(delete e.refresh,delete e.render,t.extend(this,e)),this.$element=t(i),!this.imageSrc&&this.$element.is("img")&&(this.imageSrc=this.$element.attr("src"));var r=(this.position+"").toLowerCase().match(/\S+/g)||[];return r.length<1&&r.push("center"),1==r.length&&r.push(r[0]),("top"==r[0]||"bottom"==r[0]||"left"==r[1]||"right"==r[1])&&(r=[r[1],r[0]]),this.positionX!=s&&(r[0]=this.positionX.toLowerCase()),this.positionY!=s&&(r[1]=this.positionY.toLowerCase()),h.positionX=r[0],h.positionY=r[1],"left"!=this.positionX&&"right"!=this.positionX&&(this.positionX=isNaN(parseInt(this.positionX))?"center":parseInt(this.positionX)),"top"!=this.positionY&&"bottom"!=this.positionY&&(this.positionY=isNaN(parseInt(this.positionY))?"center":parseInt(this.positionY)),this.position=this.positionX+(isNaN(this.positionX)?"":"px")+" "+this.positionY+(isNaN(this.positionY)?"":"px"),navigator.userAgent.match(/(iPod|iPhone|iPad)/)?(this.iosFix&&!this.$element.is("img")&&this.$element.css({backgroundImage:"url("+this.imageSrc+")",backgroundSize:"cover",backgroundPosition:this.position}),this):navigator.userAgent.match(/(Android)/)?(this.androidFix&&!this.$element.is("img")&&this.$element.css({backgroundImage:"url("+this.imageSrc+")",backgroundSize:"cover",backgroundPosition:this.position}),this):(this.$mirror=t("<div />").prependTo("body"),this.$slider=t("<img />").prependTo(this.$mirror),this.$mirror.addClass("parallax-mirror").css({visibility:"hidden",zIndex:this.zIndex,position:"fixed",top:0,left:0,overflow:"hidden"}),this.$slider.addClass("parallax-slider").one("load",function(){h.naturalHeight&&h.naturalWidth||(h.naturalHeight=this.naturalHeight||this.height||1,h.naturalWidth=this.naturalWidth||this.width||1),h.aspectRatio=h.naturalWidth/h.naturalHeight,o.isSetup||o.setup(),o.sliders.push(h),o.isFresh=!1,o.requestRender()}),this.$slider[0].src=this.imageSrc,void((this.naturalHeight&&this.naturalWidth||this.$slider[0].complete)&&this.$slider.trigger("load")))}function h(s){return this.each(function(){var h=t(this),r="object"==typeof s&&s;this==i||this==e||h.is("body")?o.configure(r):h.data("px.parallax")||(r=t.extend({},h.data(),r),h.data("px.parallax",new o(this,r))),"string"==typeof s&&o[s]()})}!function(){for(var t=0,e=["ms","moz","webkit","o"],s=0;s<e.length&&!i.requestAnimationFrame;++s)i.requestAnimationFrame=i[e[s]+"RequestAnimationFrame"],i.cancelAnimationFrame=i[e[s]+"CancelAnimationFrame"]||i[e[s]+"CancelRequestAnimationFrame"];i.requestAnimationFrame||(i.requestAnimationFrame=function(e){var s=(new Date).getTime(),o=Math.max(0,16-(s-t)),h=i.setTimeout(function(){e(s+o)},o);return t=s+o,h}),i.cancelAnimationFrame||(i.cancelAnimationFrame=function(t){clearTimeout(t)})}(),t.extend(o.prototype,{speed:.2,bleed:0,zIndex:-100,iosFix:!0,androidFix:!0,position:"center",overScrollFix:!1,refresh:function(){this.boxWidth=this.$element.outerWidth(),this.boxHeight=this.$element.outerHeight()+2*this.bleed,this.boxOffsetTop=this.$element.offset().top-this.bleed,this.boxOffsetLeft=this.$element.offset().left,this.boxOffsetBottom=this.boxOffsetTop+this.boxHeight;var t=o.winHeight,i=o.docHeight,e=Math.min(this.boxOffsetTop,i-t),s=Math.max(this.boxOffsetTop+this.boxHeight-t,0),h=this.boxHeight+(e-s)*(1-this.speed)|0,r=(this.boxOffsetTop-e)*(1-this.speed)|0;if(h*this.aspectRatio>=this.boxWidth){this.imageWidth=h*this.aspectRatio|0,this.imageHeight=h,this.offsetBaseTop=r;var n=this.imageWidth-this.boxWidth;this.offsetLeft="left"==this.positionX?0:"right"==this.positionX?-n:isNaN(this.positionX)?-n/2|0:Math.max(this.positionX,-n)}else{this.imageWidth=this.boxWidth,this.imageHeight=this.boxWidth/this.aspectRatio|0,this.offsetLeft=0;var n=this.imageHeight-h;this.offsetBaseTop="top"==this.positionY?r:"bottom"==this.positionY?r-n:isNaN(this.positionY)?r-n/2|0:r+Math.max(this.positionY,-n)}},render:function(){var t=o.scrollTop,i=o.scrollLeft,e=this.overScrollFix?o.overScroll:0,s=t+o.winHeight;this.visibility=this.boxOffsetBottom>t&&this.boxOffsetTop<s?"visible":"hidden",this.mirrorTop=this.boxOffsetTop-t,this.mirrorLeft=this.boxOffsetLeft-i,this.offsetTop=this.offsetBaseTop-this.mirrorTop*(1-this.speed),this.$mirror.css({transform:"translate3d(0px, 0px, 0px)",visibility:this.visibility,top:this.mirrorTop-e,left:this.mirrorLeft,height:this.boxHeight,width:this.boxWidth}),this.$slider.css({transform:"translate3d(0px, 0px, 0px)",position:"absolute",top:this.offsetTop,left:this.offsetLeft,height:this.imageHeight,width:this.imageWidth,maxWidth:"none"})}}),t.extend(o,{scrollTop:0,scrollLeft:0,winHeight:0,winWidth:0,docHeight:1<<30,docWidth:1<<30,sliders:[],isReady:!1,isFresh:!1,isBusy:!1,setup:function(){if(!this.isReady){var s=t(e),h=t(i);h.on("scroll.px.parallax load.px.parallax",function(){var t=o.docHeight-o.winHeight,i=o.docWidth-o.winWidth;o.scrollTop=Math.max(0,Math.min(t,h.scrollTop())),o.scrollLeft=Math.max(0,Math.min(i,h.scrollLeft())),o.overScroll=Math.max(h.scrollTop()-t,Math.min(h.scrollTop(),0)),o.requestRender()}).on("resize.px.parallax load.px.parallax",function(){o.winHeight=h.height(),o.winWidth=h.width(),o.docHeight=s.height(),o.docWidth=s.width(),o.isFresh=!1,o.requestRender()}),this.isReady=!0}},configure:function(i){"object"==typeof i&&(delete i.refresh,delete i.render,t.extend(this.prototype,i))},refresh:function(){t.each(this.sliders,function(){this.refresh()}),this.isFresh=!0},render:function(){this.isFresh||this.refresh(),t.each(this.sliders,function(){this.render()})},requestRender:function(){var t=this;this.isBusy||(this.isBusy=!0,i.requestAnimationFrame(function(){t.render(),t.isBusy=!1}))}});var r=t.fn.parallax;t.fn.parallax=h,t.fn.parallax.Constructor=o,t.fn.parallax.noConflict=function(){return t.fn.parallax=r,this},t(e).on("ready.px.parallax.data-api",function(){t('[data-parallax="scroll"]').parallax()})}(jQuery,window,document);
{
    "created_at": "Sun May 01 02:18:09 +0000 2016",
    "id": 726596541620838400,
    "id_str": "726596541620838400",
    "text": "RT @SoyVnezolano: ¡ATENCIÓN! Maria Gabriela Chávez y el hijo de Maduro implicados en red de lavado de dinero del Kirchnerismo https://t.co/…",
    "entities": {
        "hashtags": [],
        "symbols": [],
        "user_mentions": [{
            "screen_name": "SoyVnezolano",
            "name": "☆☆☆Sσy☆Vηєzσℓαησ☆☆☆",
            "id": 108772769,
            "id_str": "108772769",
            "indices": [3, 16]
        }],
        "urls": [],
        "media": [{
            "id": 725845829454536700,
            "id_str": "725845829454536705",
            "indices": [126, 140],
            "media_url": "http://pbs.twimg.com/ext_tw_video_thumb/725845829454536705/pu/img/B2NI-EN3UTG0Vyll.jpg",
            "media_url_https": "https://pbs.twimg.com/ext_tw_video_thumb/725845829454536705/pu/img/B2NI-EN3UTG0Vyll.jpg",
            "url": "https://t.co/zsTL2f22hI",
            "display_url": "pic.twitter.com/zsTL2f22hI",
            "expanded_url": "http://twitter.com/VVperiodistas/status/725846172234076160/video/1",
            "type": "photo",
            "sizes": {
                "small": {
                    "w": 340,
                    "h": 191,
                    "resize": "fit"
                },
                "large": {
                    "w": 640,
                    "h": 360,
                    "resize": "fit"
                },
                "thumb": {
                    "w": 150,
                    "h": 150,
                    "resize": "crop"
                },
                "medium": {
                    "w": 600,
                    "h": 338,
                    "resize": "fit"
                }
            },
            "source_status_id": 725846172234076200,
            "source_status_id_str": "725846172234076160",
            "source_user_id": 59669463,
            "source_user_id_str": "59669463"
        }]
    },
    "truncated": false,
    "metadata": {
        "iso_language_code": "es",
        "result_type": "recent"
    },
    "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
    "in_reply_to_status_id": null,
    "in_reply_to_status_id_str": null,
    "in_reply_to_user_id": null,
    "in_reply_to_user_id_str": null,
    "in_reply_to_screen_name": null,
    "user": {
        "id": 91152151,
        "id_str": "91152151",
        "name": "Rocío Navas",
        "screen_name": "rocionavas",
        "location": "",
        "description": "Venezolana de 7 estrellas a mucha honra. EL QUE SE CANSA PIERDE",
        "url": null,
        "entities": {
            "description": {
                "urls": []
            }
        },
        "protected": false,
        "followers_count": 641,
        "friends_count": 1381,
        "listed_count": 1,
        "created_at": "Thu Nov 19 17:45:02 +0000 2009",
        "favourites_count": 3257,
        "utc_offset": -36000,
        "time_zone": "Hawaii",
        "geo_enabled": true,
        "verified": false,
        "statuses_count": 23201,
        "lang": "es",
        "contributors_enabled": false,
        "is_translator": false,
        "is_translation_enabled": false,
        "profile_background_color": "0099B9",
        "profile_background_image_url": "http://abs.twimg.com/images/themes/theme4/bg.gif",
        "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme4/bg.gif",
        "profile_background_tile": false,
        "profile_image_url": "http://pbs.twimg.com/profile_images/658637736103014400/G8C7MSXk_normal.jpg",
        "profile_image_url_https": "https://pbs.twimg.com/profile_images/658637736103014400/G8C7MSXk_normal.jpg",
        "profile_banner_url": "https://pbs.twimg.com/profile_banners/91152151/1385209671",
        "profile_link_color": "0099B9",
        "profile_sidebar_border_color": "5ED4DC",
        "profile_sidebar_fill_color": "95E8EC",
        "profile_text_color": "3C3940",
        "profile_use_background_image": true,
        "has_extended_profile": false,
        "default_profile": false,
        "default_profile_image": false,
        "following": false,
        "follow_request_sent": false,
        "notifications": false
    },
    "geo": null,
    "coordinates": null,
    "place": null,
    "contributors": null,
    "retweeted_status": {
        "created_at": "Sun May 01 01:06:35 +0000 2016",
        "id": 726578531090731000,
        "id_str": "726578531090731009",
        "text": "¡ATENCIÓN! Maria Gabriela Chávez y el hijo de Maduro implicados en red de lavado de dinero del Kirchnerismo https://t.co/zsTL2f22hI",
        "entities": {
            "hashtags": [],
            "symbols": [],
            "user_mentions": [],
            "urls": [],
            "media": [{
                "id": 725845829454536700,
                "id_str": "725845829454536705",
                "indices": [108, 131],
                "media_url": "http://pbs.twimg.com/ext_tw_video_thumb/725845829454536705/pu/img/B2NI-EN3UTG0Vyll.jpg",
                "media_url_https": "https://pbs.twimg.com/ext_tw_video_thumb/725845829454536705/pu/img/B2NI-EN3UTG0Vyll.jpg",
                "url": "https://t.co/zsTL2f22hI",
                "display_url": "pic.twitter.com/zsTL2f22hI",
                "expanded_url": "http://twitter.com/VVperiodistas/status/725846172234076160/video/1",
                "type": "photo",
                "sizes": {
                    "small": {
                        "w": 340,
                        "h": 191,
                        "resize": "fit"
                    },
                    "large": {
                        "w": 640,
                        "h": 360,
                        "resize": "fit"
                    },
                    "thumb": {
                        "w": 150,
                        "h": 150,
                        "resize": "crop"
                    },
                    "medium": {
                        "w": 600,
                        "h": 338,
                        "resize": "fit"
                    }
                },
                "source_status_id": 725846172234076200,
                "source_status_id_str": "725846172234076160",
                "source_user_id": 59669463,
                "source_user_id_str": "59669463"
            }]
        },
        "truncated": false,
        "metadata": {
            "iso_language_code": "es",
            "result_type": "recent"
        },
        "source": "<a href=\"https://about.twitter.com/products/tweetdeck\" rel=\"nofollow\">TweetDeck</a>",
        "in_reply_to_status_id": null,
        "in_reply_to_status_id_str": null,
        "in_reply_to_user_id": null,
        "in_reply_to_user_id_str": null,
        "in_reply_to_screen_name": null,
        "user": {
            "id": 108772769,
            "id_str": "108772769",
            "name": "☆☆☆Sσy☆Vηєzσℓαησ☆☆☆",
            "screen_name": "SoyVnezolano",
            "location": "Venezuela",
            "description": "SOYVNEZOLANO es un joven cómo cualquier otro, con sueños y metas, y con la esperanza de tener un mejor país y un mejor futuro. ¡Venezuela quiere cambio!",
            "url": "https://t.co/MscLilboWh",
            "entities": {
                "url": {
                    "urls": [{
                        "url": "https://t.co/MscLilboWh",
                        "expanded_url": "http://goo.gl/guaXIn",
                        "display_url": "goo.gl/guaXIn",
                        "indices": [0, 23]
                    }]
                },
                "description": {
                    "urls": []
                }
            },
            "protected": false,
            "followers_count": 87183,
            "friends_count": 51491,
            "listed_count": 166,
            "created_at": "Wed Jan 27 00:28:11 +0000 2010",
            "favourites_count": 2568,
            "utc_offset": -16200,
            "time_zone": "Caracas",
            "geo_enabled": false,
            "verified": false,
            "statuses_count": 89793,
            "lang": "es",
            "contributors_enabled": false,
            "is_translator": true,
            "is_translation_enabled": false,
            "profile_background_color": "131516",
            "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/455859646993924097/ULJ_5B_W.jpeg",
            "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/455859646993924097/ULJ_5B_W.jpeg",
            "profile_background_tile": true,
            "profile_image_url": "http://pbs.twimg.com/profile_images/716319060305293312/CQasDKTo_normal.jpg",
            "profile_image_url_https": "https://pbs.twimg.com/profile_images/716319060305293312/CQasDKTo_normal.jpg",
            "profile_banner_url": "https://pbs.twimg.com/profile_banners/108772769/1459744058",
            "profile_link_color": "1F39A3",
            "profile_sidebar_border_color": "000000",
            "profile_sidebar_fill_color": "EFEFEF",
            "profile_text_color": "333333",
            "profile_use_background_image": true,
            "has_extended_profile": false,
            "default_profile": false,
            "default_profile_image": false,
            "following": false,
            "follow_request_sent": false,
            "notifications": false
        },
        "geo": null,
        "coordinates": null,
        "place": null,
        "contributors": null,
        "is_quote_status": false,
        "retweet_count": 149,
        "favorite_count": 25,
        "favorited": false,
        "retweeted": false,
        "possibly_sensitive": false,
        "lang": "es"
    },
    "is_quote_status": false,
    "retweet_count": 149,
    "favorite_count": 0,
    "favorited": false,
    "retweeted": false,
    "possibly_sensitive": false,
    "lang": "es"
}
$(function() {

    $("body").fadeOut(0).fadeIn(2000, function() {
        // Animation complete
    });

    $(".ghostButton").fadeOut(0).fadeIn(1000, function() {
        // Animation complete
    });

});
