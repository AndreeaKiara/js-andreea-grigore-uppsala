const calculateRectangleArea = (width, length) => {
  const area = width * length;

  return area;
};

console.warn(`
Calculeaza suprafata de tapet necesara pentru o
camera de 6 pe 4 m cu tavan inalt de 2.5m, stiind
ca exista o usa de 2.2 pe 1.5 si o suprafata de ferestre de
2 pe 1.5. “Suprafata de tapet necesara este: xxx metri patrati.”
`);
const longWall1Surface = calculateRectangleArea(6, 2.5);
const shortWall1Surface = calculateRectangleArea(4, 2.5);
const door1Surface = calculateRectangleArea(2.2, 1.5);
const window1Surface = calculateRectangleArea(2, 1.5);
const requiredWallpaperSurface =
  longWall1Surface * 2 + shortWall1Surface * 2 - door1Surface - window1Surface;
console.log(
  'Suprafata de tapet este: ' + requiredWallpaperSurface + ' metri patrati.',
);

console.warn(`
Creeaza o functie wrapper numita calculateSquareArea()
pentru calculateRectangleArea(), care sa primeasca ca
parametru latura unui patrat si sa calculeze suprafata acestuia.
O functie wrapper este o functie care "imbraca" o functie
existenta pentru a-i aduce imbunatatiri, extra cod sau pentru a-i
limita in mod intentionat capacitatile.
`);
const calculateSquareArea = (width) => {
  width = 5;
  const area = calculateRectangleArea(width, width);

  return area;
};

console.log(calculateSquareArea(5));

console.warn(`
Calculeaza suprafata de tapet necesara pentru o camera de 12 pe 9 m cu tavan inalt de 2.5m, stiind ca exista o usa de 3 pe 2 si o suprafata de ferestre de 3 pe 2. “Suprafata de tapet necesara este xxx metri patrati.”
`);
const longWall2Surface = calculateRectangleArea(12, 2.5);
const shortWall2Surface = calculateRectangleArea(9, 2.5);
const door2Surface = calculateRectangleArea(3, 2);
const window2Surface = calculateRectangleArea(3, 2);

const anotherRequiredWallpaperSurface =
  longWall2Surface * 2 + shortWall2Surface * 2 - door2Surface - window2Surface;
console.log(
  `Suprafata de tapet necesara este: ${anotherRequiredWallpaperSurface} metri patrati.`,
);

console.warn(`
Creeaza o functie wrapper pentru calculateRectangleArea() care sa primeasca 4 parametri: latimea si lungimea unui dreptunghi initial, apoi latimea si lungimea altui dreptunghi. Functia se va numi aggregateSurfaceArea().
Folosind aceasta noua functie calculeaza suprafata totala a doua dreptunghiuri de 48 pe 92 si 51 pe 102.
`);
const aggregateSurfaceArea = (width1, length1, width2, length2) => {
  width1 = 48;
  length1 = 92;
  width2 = 51;
  length2 = 102;

  const totalArea =
    calculateRectangleArea(width1, length1) +
    calculateRectangleArea(width2, length2);

  return totalArea;
};

console.log(aggregateSurfaceArea(48, 92, 51, 102));
