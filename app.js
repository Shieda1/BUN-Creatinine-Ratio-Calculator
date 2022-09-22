// https://www.omnicalculator.com/health/bun-creatinine-ratio

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const BUNcreatinineratioRadio = document.getElementById('BUNcreatinineratioRadio');
const BUNbloodureanitrogenRadio = document.getElementById('BUNbloodureanitrogenRadio');
const serumcreatinineRadio = document.getElementById('serumcreatinineRadio');

let BUNcreatinineratio;
let BUNbloodureanitrogen = v1;
let serumcreatinine = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

BUNcreatinineratioRadio.addEventListener('click', function() {
  variable1.textContent = 'Depreciation Rate';
  variable2.textContent = 'Book Value of Asset';
  BUNbloodureanitrogen = v1;
  serumcreatinine = v2;
  result.textContent = '';
});

BUNbloodureanitrogenRadio.addEventListener('click', function() {
  variable1.textContent = 'Declining Balance Depreciation';
  variable2.textContent = 'Book Value of Asset';
  BUNcreatinineratio = v1;
  serumcreatinine = v2;
  result.textContent = '';
});

serumcreatinineRadio.addEventListener('click', function() {
  variable1.textContent = 'Declining Balance Depreciation';
  variable2.textContent = 'Depreciation Rate';
  BUNcreatinineratio = v1;
  BUNbloodureanitrogen = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(BUNcreatinineratioRadio.checked)
    result.textContent = `Declining Balance Depreciation = ${computeBUNcreatinineratio().toFixed(2)}`;

  else if(BUNbloodureanitrogenRadio.checked)
    result.textContent = `Depreciation Rate = ${computeBUNbloodureanitrogen().toFixed(2)}`;

  else if(serumcreatinineRadio.checked)
    result.textContent = `Book Value of Asset = ${computeserumcreatinine().toFixed(2)}`;
})

// calculation

function computeBUNcreatinineratio() {
  return Number(BUNbloodureanitrogen.value) / Number(serumcreatinine.value);
}

function computeBUNbloodureanitrogen() {
  return Number(BUNcreatinineratio.value) * Number(serumcreatinine.value);
}

function computeserumcreatinine() {
  return Number(BUNbloodureanitrogen.value) / Number(BUNcreatinineratio.value);
}