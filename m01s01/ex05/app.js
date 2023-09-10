var inputRadius = document.getElementById('radius');
var elementResult = document.getElementById('result');
var form = document.querySelector('form');

form.addEventListener(
  'submit',
  function (event) {
    event.preventDefault();

    var radius = new Decimal(inputRadius.value || 0);
    Decimal.set({ precision: 13 });

    var result = radius.pow(3).times(4).times(Math.PI).dividedBy(3);

    elementResult.innerText = result.toFixed(13);
  },
  false,
);
