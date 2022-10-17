//qn1 - Write a js method, when user click on button, display random integer below it.

const generateAnyNumber = () => {
  let value = Math.floor(Math.random() * 999)
  document.getElementById("Output").innerHTML = value
}

//qn2 -	Write js function to format number up to specified decimal places.

const decimalPlaces = () => {
  const inputNum = parseFloat(document.getElementById("number").value)
  const inputDec = parseInt(document.getElementById("decimal").value)
  const result = inputNum.toFixed(inputDec)
  document.getElementById("output2").innerHTML = result
}

//qn3 -Check particular sub-word exist in a string or not e.g. i am learning js: 'js' exists or not

const review = () => {

  const inputText = document.getElementById("initial").value
  const desiredWord = document.getElementById("final").value
  const String = inputText.split(' ').some(a => a === desiredWord)

  String ? document.getElementById("output3").innerHTML = "Exist"
    : document.getElementById("output3").innerHTML = "Non-existance"
}

//qn4 - Given year leap year or not (29 in feb)

const LeapYear = () => {
  const inputYear = parseInt(document.getElementById("leap").value)
  const leap = new Date(inputYear, 1, 29).getDate() === 29;
  leap ? document.getElementById("output4").innerHTML = `${inputYear} leap = true` :
    document.getElementById("output4").innerHTML = `${inputYear} leap = false`
}
//qn6 - Add only even numbers in an array (array elements to be input by user)

const arrayEven = [73, 50, 18, 120]

const addEven = (array) => {
  totalSum = array.reduce((a, b) => b % 2 === 0 && a % 2 === 0 ? a + b : b)
  return totalSum
}

var write
document.write('Output: ', addEven(arrayEven))

//Qn7 - Biggest of even number in an array ([10, 12, 90, 93, 707]): biggest even number is 90

const evenArray = [10, 12, 90, 93, 707]

const findLargestEven = (array) => {
  evenArr = array.map(e => e % 2 === 0 ? e : null)

  return Math.max(...evenArr)
}
var write
document.write(findLargestEven(evenArray))

//Qn9 - Add two array [10,20,30] + [1,2,3]: [11, 22, 33]

arrayA = [10, 20, 30]
arrayB = [1, 2, 3]

const addTwoArrays = (array1, array2) => {
  results = array1.map((e, i) => e + array2[i])
  return (results)
}

console.log(addTwoArrays(arrayA, arrayB))

//Qn10 - Reverse an array(with loops) [10, 78, 0]: [0, 78, 10]
function reverseArray(arr) {
  var numArr = arr.length;
  var newArr = [];
  for (i = 0; i < numArr; i++) {
    let inArr = arr;
    newArr[i] = inArr.pop(i);
  }
  return newArr;
}

//Qn 11 - Reverse a string using loops
console.log(reverseArray([10, 78, 0])

    function reverseString(str) {
      var newString = "";
      for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
      }
      return newString;
    }
    reverseString('Kuch Kuch Hota Hai');

    //Qn 12 - Remove duplicate items from an array [10, 50,20 67, 10, 20]: remove 10, 20

    let chars = [10, 50, 20, 67, 10, 20];

    let uniqueChars = chars.filter((c, index) => {
      return chars.indexOf(c) === index;
    });

    console.log(uniqueChars);

    //Qn 13 - Find duplicate values in an array.(display index of duplicate values e.g. 0,2,4,5)

    const array13 = [1, 5, 3, 7, 2, 5, 8, 2, 0, 6]

    const findDuplicate = (array) => {
      duplicates = array.map((e, i, a) => a.indexOf(e) !== i ? i : 'Not duplicate')
      return duplicates
    }

    console.log(findDuplicate(array13))

    //Qn 14 - Find difference/subtraction in 2 arrays [12, 56, 789] - [12, 56, 789]: [0, 0, 0]

    array14a = [112, 56, 789] array14b = [112, 56, 789]

    const subtractTwoArrays = (array1, array2) => {
      results = array1.map((e, i) => e - array2[i])
      console.log(array14a, "-", array14b, '=', results)
    }

    subtractTwoArrays(array14a, array14b)

    //13.	Get the largest odd and even number in an array [10, 12, 900, 93, 707].

    const arr = [10, 12, 900, 93, 70];

    const odds = arr.filter(number => {
      return number % 2 !== 0;
    });
    const even = arr.filter(number => {
      return number % 2 == 0;
    })

    console.log("Max odd number:", Math.max(...odds), "Max even number:", Math.max(...even))

    //15.	Create a class Car: city(),specialFeature() name, brand, color, manufacture
    class Car {
      constructor(name, brand, color, manufacture, city, specialFeature) {
        this.name = name
        this.brand = brand
        this.color = color
        this.manufacture = manufacture
        this.city = city
        this.specialFeature = specialFeature
      }
    }

    const carDescription = new Car("Forza", "Ferrari", "Red", "2016", "Italy", "veryFast")

    console.log(carDescription)

    //16.	Create a class Book: type_of_book( , no. of pages, type of pages, author
    class Book {
      constructor(type_of_book, number_of_pages, type_of_pages, author) {
        this.type_of_book = type_of_book
        this.number_of_pages = number_of_pages
        this.type_of_pages = type_of_pages
        this.author = author
      }
    }

    const newBook = new Book("Recipe", "200", "pink", "Gordon Ramsey")

    console.log(newBook)

    //17.	Create a class Animal: walk(), eat(), climb(), gender, name, disease

    class Animal {
      constructor(name, gender, disease) {
        this.name = name
        this.gender = gender
        this.disease = disease
      }

      eat() {
        if (this.name === 'cat') {
          console.log(this.name, "carnivore")
        } else {
          console.log(this.name, "sometimes eat my seaweed. so not meat")
        }
      }

      walk() {
        if (this.name === 'cat') {
          console.log(this.name, "walk")
        } else {
          console.log(this.name, "check if other animal have legs. If not,cannot walk")
        }
      }


      climb() {
        if (this.name === 'cat') {
          console.log(this.name, "can climb")
        } else {
          console.log(this.name, "other animals can climb unless its fish")
        }
      }
    }

    const cat = new Animal("cat", "female", "rabies")

    console.log(cat) cat.eat() cat.walk() cat.climb()

    //Qn 21 - Inheritance: parent electronics (methods: name, version, company name):
    //childclass(laptop, ipad, mobile, tablet):

    class Electronics {
  constructor(name, version, company) {
    this.name = name
    this.version = version
    this.company = company
  }
}

class laptop extends Electronics {
  constructor(name, version, company) {
    super(name, version, company)
  }
  configuration(battery) {
    this.configuration = battery
  }

  price(price) {
    this.price = price
  }
}

//tablet and ipad is the same
class tablet extends Electronics {
  constructor(name, version, company) {
    super(name, version, company)
  }
  configuration(battery) {
    this.configuration = battery
  }

  price(price) {
    this.price = price
  }
}

class mobile extends Electronics {
  constructor(name, version, company) {
    super(name, version, company)
  }
  configuration(ram) {
    this.configuration = ram
  }

  price(price) {
    this.price = price
  }
}

const specLaptop1 = new laptop("Macbook", "air", "Apple")
console.log(specLaptop1)
specLaptop1.configuration("24 hours shell life")
specLaptop1.price("SGD1800")

function getaction() {
  //Intialise Pin value with varible P
  const p = document.getElementById('number').value;
  const a = 0000;
  //To check Pin entered is correct or not
  if (p == a) {
    document.getElementById("demo").innerHTML = "Please Choose transcation";
    document.getElementById('options12').style.display = 'block'; //if pin number is correct options will Display.
  }
  else {
    document.getElementById("demo").innerHTML = "Invalid pin";
  }
}
function myfunction(val) {
  //function to display balance amount
  m = 10000;

  if (val == 1)//Option 1 is select to shows balance amount
  {
    document.getElementById('demo1').innerHTML = "Your amount is: " + m;
    document.getElementById('display').style.display = 'none';
    document.getElementById('display1').style.display = 'none';
  }

  if (val == 2)//Option 2 select to display text field to enter withdraw amount
  {
    document.getElementById('display').style.display = 'block';
    document.getElementById('display1').style.display = 'none';
  }

}
function getamount() {

  //function To Withdraw Amount
  m = 10000;

  //Intialise the textbox value in a varible
  var a = document.getElementById('amount1').value;

  //Check if entered amount is greater than the original amount or not and it also should be mulitple of 100
  if (a <= m && a || 100 == 0)

    //alert("" +a);
    document.getElementById('display').innerHTML = "Your balance : " + (m - a);
  else

    //alert("invalid cash");
    document.getElementById('display').innerHTML = "Invalid cash";
}
function getamount1() {

  //Intialise the Dropdown value in a varible
  var x = document.getElementById("myselect1").value
  m = 10000;

  //check if selected amount is greater than the original amount or not and it should be mulitple of 100
  if (x <= m && x % 100 == 0)

    //alert("take your amount" +x);
    document.getElementById('display1').innerHTML = "Please take your amount : " + x;
  else
    document.getElementById('display1').innerHTML = "Invalid cash";
}

//Qn 15 - Ask user, remove a specific element from an array [12, 56, 89]: remove 1 element
const array = [12, 56, 89]

const remove89 = (array, input) => {
  return array.filter(e => e !== input)
}

console.log("Take out 89", remove89(array, 89))

class Football {
  constructor(name, position, age){
    this.name = name
    this.position = position
    this.age = age
  }
}

const midfielder = new Football("Zidane", "CAM", "50")

console.log(midfielder)