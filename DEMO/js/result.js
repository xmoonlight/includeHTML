var outPlace=includeHTML('places')['result'];

  for (var key in includeHTML('places')) {
     outPlace.innerHTML+=key+': '+includeHTML('places')[key].tagName+'<br>';
  }

console.log('Я result.js! Я собрал и вывел весь список загрузок.');


includeHTML('places')['js/1.js'].innerHTML+=' добавим сюда, что мы грузили файл "js/1.js" в самом начале (добавлено из файла "js/result.js").';
