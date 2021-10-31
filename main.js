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
  // var time = Number(prompt('Введите время в цифрах'));

  // if (time == 0) {
  //   console.log(`Полночь`);
  // } else if (time == 1) {
  //   console.log(`час ночи`);
  // } else if (time == 2 || time == 3) {
  //   console.log(`${time} часа ночи`);
  // } else if (time == 4){
  //   console.log(`4 часа утра`);
  // } else if (time >= 5 && time <= 11){
  //   console.log(`${time} часов утра`);
  // } else if ( time == 12){
  //   console.log(`Полдень`);
  // } else if (time == 13){
  //   console.log(`час дня`);
  // }else if (time == 14){
  //   console.log(`2 часа дня`);
  // }else if (time == 15){
  //   console.log(`3 часа дня`);
  // }else if (time == 16){
  //   console.log(`4 часа дня`);
  // }else if (time == 17){
  //   console.log(`5 часов дня`);
  // }else if (time >= 18 && time <= 23){
  //   console.log(`${time} часов вечера`);
  // }else if (time == 24){
  //   console.log('Полночь');
  // }else{
  //   console.log(`Что-то пошло не так`);
  // }

    // !Часы 2
  // var time = Number(prompt('Введите время в цифрах'));

  // if(time >= 5 && time <12){
  //   console.log(`доброе утро`);
  // }else if(time >= 12 && time < 18){
  //   console.log(`добрый день`);
  // }else if(time >= 18 && time < 22){
  //   console.log(`добрый вечер`);
  // }else if(time >= 22 && time <= 24){
  //   console.log(`доброй ночи`);
  // }else if(time >= 1 && time <= 4){
  //   console.log(`доброй ночи`);
  // }else if(time > 24){
  //   console.log(`не верное число`);
  // }else{
  //   console.log(`Что-то пошло не так`); 
  // }

    // !Мячи Это задание не получилось 
  
  var a = Number(prompt('Введите число мячей в зале'));

  if (a == '1'){
    console.log(`${a} мяч`);
  }else if(a >= '2' && a <= '4'){
    console.log(`${a} мяча`);
  }else if(a == '0' || a >= '5' && a <= '10'){
    console.log(`${a} мячей`);
  }else{
    console.log(`Что-то пошло не так`);
  }