document.querySelector('.body1').onload = function(){
 
// элементы в DOM можно получить при помощи функции querySelector
const fruitsList = document.querySelector('.fruits__list'); // список карточек
const shuffleButton = document.querySelector('.shuffle__btn'); // кнопка перемешивания
const filterButton = document.querySelector('.filter__btn'); // кнопка фильтрации
const sortKindLabel = document.querySelector('.sort__kind'); // поле с названием сортировки
const sortTimeLabel = document.querySelector('.sort__time'); // поле с временем сортировки
const sortChangeButton = document.querySelector('.sort__change__btn'); // кнопка смены сортировки
const sortActionButton = document.querySelector('.sort__action__btn'); // кнопка сортировки
const kindInput = document.querySelector('.kind__input'); // поле с названием вида
const colorInput = document.querySelector('.color__input'); // поле с названием цвета
const weightInput = document.querySelector('.weight__input'); // поле с весом
const addActionButton = document.querySelector('.add__action__btn'); // кнопка добавления

// список фруктов в JSON формате
let fruitsJSON = `[
  {"kind": "Мангустин", "color": "фиолетовый", "weight": 13},
  {"kind": "Дуриан", "color": "зеленый", "weight": 35},
  {"kind": "Личи", "color": "розово-красный", "weight": 17},
  {"kind": "Карамбола", "color": "желтый", "weight": 28},
  {"kind": "Тамаринд", "color": "светло-коричневый", "weight": 22}
]`;

// преобразование JSON в объект JavaScript
var fruits = JSON.parse(fruitsJSON); 
    /*** ОТОБРАЖЕНИЕ ***/

// отрисовка карточек
const display = () => {
    fruitsList.innerHTML = "";
      

    
    for(let n = 0; n <= fruits.length-1; n++) {
    
      let color = fruits[n].color;
      

      switch(color){
        case("фиолетовый"):
          color = "violet";break;

        case("зеленый"):
          color = "green";break;

        case("розово-красный"):
          color = "carmazin";break;

        case("желтый"):
          color = "yellow";break;

        case("фиолетовый"):
          color = "violet";break;

        case("светло-коричневый"):
          color = "lightbrown";break;
      }

   
      let list = document.createElement("li");
      list.className = "fruit_item fruit_"+color;
      list.innerHTML = '<div class="fruit__info"><div>index: 1</div><div>kind: '+ fruits[n].kind +'</div><div>color: '+ fruits[n].color +'</div><div>weight (кг): '+ fruits[n].weight +'</div></div>';
      fruitsList.appendChild(list);
      
    }

};

// первая отрисовка карточек
display();

/*** ПЕРЕМЕШИВАНИЕ ***/

// генерация случайного числа в заданном диапазоне
const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// перемешивание массива
const shuffleFruits = () => {
  let n = 1;
  let rand;
  
  

  let preResult = fruits.sort(function(){
    return Math.random() - 0.5;
  });
  fruits = preResult;
    
  
};


shuffleButton.addEventListener('click', () => {
  shuffleFruits();
  display();
});

sortActionButton.addEventListener('click', () => {
  fruits.filter((item) => {
    sortAPI.bubbleSort(fruits,comparationWeight);
    });
  display();
});

/*** ФИЛЬТРАЦИЯ ***/

// фильтрация массива
const filterFruits = () => {
  fruits.filter((item) => {
    sortAPI.bubbleSort(fruits,comparationWeight);
    //аспмриотлдьжаспмриотлдьжаспмриотлдьжаспмриотлдьжаспмриотлдьжаспмриотлдьжаспмриотлдьжаспмриотлдьжаспмриотлдьжаспмриотлдьжаспмриотлдьжаспмриотлдьжаспмриотлдьжас
  });
};

filterButton.addEventListener('click', () => {
  fruits.filter((item) => {
    sortAPI.bubbleSort(fruits,comparationColor);
    });
  display();
});

/*** СОРТИРОВКА ***/

let sortKind = 'bubbleSort'; // инициализация состояния вида сортировки
let sortTime = '-'; // инициализация состояния времени сортировки

const comparationWeight = (clother1, clother2) => {
  return clother1.weight > clother2.weight ? true : false;
};

const comparationSex = (clother1, clother2) => {
  return clother1.sex === 'male' ? true : false;
};

const comparationColor = (clother1, clother2) => {
  return clother1.color.length > clother2.color.length ? true : false;
};

const sortAPI = {
  bubbleSort(arr, comparation) {
    
    const n = arr.length;

    for (let i = 0; i < n-1; i++) { 
      // внутренняя итерация для перестановки элемента в конец массива
      for (let j = 0; j < n-1-i; j++) { 
          // сравниваем элементы
          if (comparation(arr[j], arr[j+1])) { 
              // делаем обмен элементов
              let temp = arr[j+1]; 
              arr[j+1] = arr[j]; 
              arr[j] = temp; 
          }
      }

    }

  },
  // функция обмена элементов
  swap(items, firstIndex, secondIndex){
      const temp = items[firstIndex];
      items[firstIndex] = items[secondIndex];
      items[secondIndex] = temp;
  },




  // выполняет сортировку и производит замер времени
  startSort(sort, arr, comparation) {
    const start = new Date().getTime();
    
    (arr, comparation);
    const end = new Date().getTime();
    sortTime = `${end - start} ms`;
    sortTimeLabel.innerHTML=sortTime;
  },
};

// инициализация полей
sortKindLabel.textContent = sortKind;
sortTimeLabel.textContent = sortTime;

sortChangeButton.addEventListener('click', () => {
  // TODO: переключать значение sortKind между 'bubbleSort' / 'quickSort'
});

sortActionButton.addEventListener('click', () => {
  // TODO: вывести в sortTimeLabel значение 'sorting...'
  const sort = sortAPI[sortKind];
  sortAPI.startSort(sort, fruits, comparationColor);
  display();
  // TODO: вывести в sortTimeLabel значение sortTime
});

/*** ДОБАВИТЬ ФРУКТ ***/

addActionButton.addEventListener('click', () => {
  // TODO: создание и добавление нового фрукта в массив fruits
  // необходимые значения берем из kindInput, colorInput, weightInput
  display();
});}