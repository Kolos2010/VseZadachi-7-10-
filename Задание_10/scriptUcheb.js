//This в методе объекта
// const item = {
//   title: "Phone",
//   fullPrice: 100,
//   calculatePrice(discountPercent = 0) {
//     console.log(this.fullPrice - (discountPercent / 100) * this.fullPrice);
//   },
// };
// item.calculatePrice(20);

// Вызов функции с привязкой контекста
// function myFunction() {
//   console.log(this);
// }
// const item = { title: "phone" };
// myFunction.call(item);
// myFunction.apply(item);

// function calcDiscount(age) {
//   if (age > 65) {
//     console.log(this.price / 2);
//   } else {
//     console.log(this.price);
//   }
// }
// const item = { title: "phone", price: 1000 };
// calcDiscount.call(item, 70);
// calcDiscount.apply(item, [70]);
// const calcDiscountForElderly = calcDiscount.bind(item, 20);
// calcDiscountForElderly();

// function CreateItem(title, price) {
//   this.title = title;
//   this.price = price;
//   return this;
// }
// const item1 = new CreateItem("phone", 100);
// const item2 = new CreateItem("phone", 1000);
// const item3 = new CreateItem("phone", 200);
// console.log(item1, item2, item3);

// const obj = {
//   lastName: "Ivanov",
//   firstNames: ["Petr", "Ivan"],
//   logFullNames1: function () {
//     this.firstNames.forEach(function (name) {
//       console.log(`${this.lastName} ${name}`);
//     }, this);
//   },
//   logFullNames2: function () {
//     this.firstNames.forEach((name) => {
//       console.log(`${this.lastName} ${name}`);
//     });
//   },
// };

// obj.logFullNames1();
// obj.logFullNames2();

const item = {
  title: "Phone",
  logTitle: function () {
    setTimeout(
      function () {
        console.log(`Product: ${this.title}`);
      }.bind(this)
    );
  },
  logTitle2: function () {
    setTimeout(() => {
      console.log(`Product: ${this.title}`);
    });
  },
};

item.logTitle();
item.logTitle2();
