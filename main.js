// ! Возраст
  // var age = Number(prompt('Введите ваш возраст'));
  // if(age >= 1 && age <= 18){
  //   console.log('Вы еще молоды. Вам нужно учится');
  // }else if(age > 18 && age <= 50){
  //   console.log('Вам нужно работать');
  // }else if(age > 50 && age <= 59){
  //   console.log('Вам скоро на пенсию');
  // }else if(age > 59 && age <= 150){
  //   console.log('Вы пенсионер');
  // }else{
  //   console.log('Что-то пошло не так');
  // }

    //! Часы 1
  var time = Number(prompt('Введите время в цифрах'));

  if (time == 0) {
    console.log(`Полночь`);
  } else if (time == 1) {
    console.log(`час ночи`);
  } else if (time == 2 || time == 3) {
    console.log(`${time} часа ночи`);
  } else if (time == 4){
    console.log(`4 часа утра`);
  } else if (time >= 5 && time <= 11){
    console.log(`${time} часов утра`);
  } else if ( time == 12){
    console.log(`Полдень`);
  } else if (time == 13){
    console.log(`час дня`);
  }else if (time == 14){
    console.log(`2 часа дня`);
  }else if (time == 15){
    console.log(`3 часа дня`);
  }else if (time == 16){
    console.log(`4 часа дня`);
  }else if (time == 17){
    console.log(`5 часов дня`);
  }else if (time >= 18 && time <= 23){
    console.log(`${time} часов вечера`);
  }else if (time == 24){
    console.log('Полночь');
  }else{
    console.log(`Что-то пошло не так`);
  }