const calculateRectangleArea = function (width, length) {
  const area = width * length;

  return area;
};

console.warn(`
Stiind ca un camp dreptunghiular de hamei produce 25kg/m2 ,
ce diferenta de productie este intre un teren de
100m pe 250m si unul de 350m pe 200m?
`);
let field1Length = 100;
let field1Width = 250;
let field2Length = 350;
let field2Width = 200;
let barleyYield = 25; // kg/m2
let beerYield = 2.5 / 10; // l

const field1Yield =
  calculateRectangleArea(field1Width, field1Length) * barleyYield;
const field2Yield =
  calculateRectangleArea(field2Width, field2Length) * barleyYield;
console.log(field2Yield - field1Yield);

// m2 * kg/m2

console.warn(`
Stiind ca din 10kg de hamei produc 2.5l de bere,
cati litri de bere va produce un teren de 400m pe 370m?
`);
const field3Yield = calculateRectangleArea(400, 370) * barleyYield;
const field3BeerYield = field3Yield * beerYield;
console.log(field3BeerYield);

console.warn(`
Stiind ca un camp dreptunghiular de grau produce 32kg/m2  de faina, afla si afiseaza cate kilograme de paine produce un camp de 300 pe 200 metri, stiind ca dintr-un kilogram de faina ies 2.5 kg de paine.
`);
let wheatYield = 32; //kg/m2
let breadYield = 2.5 / 1; // 1
field1Length = 300;
field1Width = 200;

const field1WheatYield =
  calculateRectangleArea(field1Width, field1Length) * wheatYield;
const field1BreadYield = field1WheatYield * breadYield;
console.log(field1BreadYield);

console.warn(`
Dar doua campuri de 150 pe 200 si 500 pe 300 in total?
`);
const field2WheatYield = calculateRectangleArea(150, 200) * wheatYield;
const field3WheatYield = calculateRectangleArea(500, 300) * wheatYield;
const field2BreadYield = field2WheatYield * breadYield;
const field3BreadYield = field3WheatYield * breadYield;

console.log(field2BreadYield + field3BreadYield);
