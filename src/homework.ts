// 1 задание
let userName: string = "Андрей";
let userAge: number = 19;
let userAccess: boolean = true;

console.log(`Имя: ${userName}`);
console.log(`Возраст: ${userAge}`);
console.log(`Доступ разрешён: ${userAccess}`);

// 2 задание
type City = {
  name: string;
  population: number;
  isCapital: boolean;
};

const City1: City = {
  name: "Мурманск",
  population: 130000,
  isCapital: false
};

const City2: City = {
  name: "Торжок",
  population: 69000,
  isCapital: false
};

const City3: City = {
  name: "Москва",
  population: 4000000,
  isCapital: true
};

const cities: City[] = [City1, City2, City3];

console.log(cities);
console.log(cities[0].name);
console.log(cities[1].population);

// 3 задание
function calculateTotal(price: number, quantity: number): number {
  return price * quantity;
}

const total = calculateTotal(750, 4);
console.log(`Общая стоимость: ${total}`);