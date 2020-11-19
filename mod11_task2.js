function simplNum(numm){
  let flag = true;
  switch (numm) {
    case 0:
      return ('Введенное число равно 0');
      break;
    case 1:
      return ('Введенное число равное 1 - простое число');
      break;
    default:
      if (numm > 1000) {
        return ('Введено неверное число более 1000')
        break
      } else {
      for (let i = 2; i < numm; i++) {
       if (numm % i == 0) {
		flag = false
		break
       }}}
  }
    if ((flag == true) && (numm != 0) && (numm != 1)) {
            return ('Введенное число является простым')
    } else if (flag == false) {return ('Введенное число не является простым')}
  }
let numm = prompt('Введите число');
console.log(simplNum(numm))
