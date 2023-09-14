///  1exercise

//  function User(name, age) {
//         let userName = name;
//         let userAge = age;
//     this.say = function() {
//         console.log(`Имя: ${userName}, Возраст: ${userAge}`);
//         };
//     }

//     const misha = new User('Ignat', 17);
//     console.log(misha.userName);
//     console.log(misha.userAge);

//     misha.userName = 'Misha'; 
//     misha.userAge = 27; 

// misha.say();

//// 2 exercise

// class User {
//     constructor(name, surname) {
//       this.name = name;
//       this.surname = surname;
//     }
  
//     getFullName() {
//       return `${this.name} ${this.surname}`;
//     }
//   }
  
//   class Student extends User {
//     constructor(name, surname, yearOfAdmission) {
//       super(name, surname);
//       this.yearOfAdmission = yearOfAdmission;
//     }
  
//     getSchool() {
//       const currentYear = new Date().getFullYear();
//       const school = currentYear - this.yearOfAdmission + 1;
  
//       if (school < 1) {
//         return 1;
//       } else if (school > 11) {
//         return 11;
//       } else {
//         return school;
//       }
//     }
//   }
  
//   const student = new Student("Болотов", "Владислав", 2014);
//   console.log(student.getFullName()); 
//   console.log(student.getSchool()); 

///// 3 exercise

// const Ford = function (make, speed) {
//     this.make = make;
//     this.speed = speed;
// };

// Ford.prototype.output = function () {
//     console.log(`Name:${this.make} | speed:${this.speed}`);
// };

// Ford.prototype.accelerate = function () {
//     this.speed += 20;
//     console.log(`Name:${this.make} | speed:${this.speed}`);
// };

// Ford.prototype.decelerate = function () {
//     this.speed -= 7;
//     console.log(`Name:${this.make} | speed:${this.speed}`);
// };

// const focus = new Ford('Ford Focus', 40);

// focus.output(); 
// focus.accelerate(); 
// focus.decelerate();
// focus.decelerate();
// focus.decelerate();









///// доп

class Cleaning {
    do() {
        console.log('Мама сказала убраться дома');
    }
}

class FirstSon extends Cleaning {
    do() {
        console.log('Вытирать пыль');
    }
}

class SecondSon extends Cleaning {
    do() {
        console.log('Пылесосить');
    }
}
