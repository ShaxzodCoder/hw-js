// ! Возраст
  var age = Number(prompt('Введите ваш возраст'));
  if(age >= 1 && age <= 18){
    console.log('Вы еще молоды. Вам нужно учится');
  }else if(age > 18 && age <= 50){
    console.log('Вам нужно работать');
  }else if(age > 50 && age <= 59){
    console.log('Вам скоро на пенсию');
  }else if(age > 59 && age <= 150){
    console.log('Вы пенсионер');
  }else{
    console.log('Что-то пошло не так');
  }