function convertToRoman(num) {
  if (num < 1 || num > 3999) {
    return "Непідтримуване число";
  }

  let result = "";

  const m = parseInt(num / 1000);
  for (let i = 1; i <= m; i += 1) {
    result += "M";
    num -= 1000;
  }

  if (parseInt(num / 900)) {
    result += "CM";
    num -= 900;
  }

  if (parseInt(num / 500)) {
    result += "D";
    num -= 500;
  }

  if (parseInt(num / 400)) {
    result += "CD";
    num -= 400;
  }

  const c = parseInt(num / 100);
  for (let i = 1; i <= c; i += 1) {
    result += "C";
    num -= 100;
  }

  if (parseInt(num / 90)) {
    result += "XC";
    num -= 90;
  }

  if (parseInt(num / 50)) {
    result += "L";
    num -= 50;
  }

  if (parseInt(num / 40)) {
    result += "XL";
    num -= 40;
  }
  const x = parseInt(num / 10);
  for (let i = 1; i <= x; i += 1) {
    result += "X";
    num -= 10;
  }

  if (parseInt(num / 9)) {
    result += "IX";
    num -= 9;
  }

  if (parseInt(num / 5)) {
    result += "V";
    num -= 5;
  }

  if (parseInt(num / 4)) {
    result += "IV";
    num -= 4;
  }
  const j = parseInt(num / 1);
  for (let i = 1; i <= j; i += 1) {
    result += "I";
    num -= 1;
  }

  return result;
}

console.log(convertToRoman(20));
