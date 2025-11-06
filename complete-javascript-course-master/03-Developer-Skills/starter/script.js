// Remember, we're gonna use strict mode in all scripts now!
'use strict';
/*
//==========================================================
const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

const calcTempAltitudNew = function (t1, t2) {
  const temps = t1.concat(t2);
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    if (typeof temps[i] !== 'number') continue;
    if (temps[i] > max) max = temps[i];
    if (temps[i] < min) min = temps[i];
  }
  console.log(`${max} , ${min}`);
  return max - min;
};

const amplitudeNew = calcTempAltitudNew([3, 5, 1], [9, 0, 5]);
console.log(amplitudeNew);

//==========================================================
*/

/*
//==========================================================
const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    value: Number(prompt('Degrees celsius: ')),
  };
  console.table(measurement);
  //   console.warn(measurement); //Creates a warning in form
  //   console.error(measurement); //Creates an error message
  const kelvin = measurement.value + 273;
  return kelvin;
};

// IDENTIFY
console.log(measureKelvin());

debugger; //this line also is going to create a breakpoint on browser
//==========================================================
*/

//==========================================================
