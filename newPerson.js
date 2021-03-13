// This class represents all that is common between Student and Mentor
class Person {
  // moved here b/c it was identical
  constructor(name, quirkyFact) {
    this.name = name;
    this.quirkyFact = quirkyFact;
  }

  // moved here b/c it was identical
  bio() {
    return `My name is ${this.name} and here's my quirky fact: ${this.quirkyFact}`;
  }
}

class Student extends Person {
  // stays in Student class since it's specific to students only
  enroll(cohort) {
    this.cohort = cohort;
  }
}

class Mentor extends Person {
  // specific to mentors
  goOnShift() {
    this.onShift = true;
  }

  // specific to mentors
  goOffShift() {
    this.onShift = false;
  }
}

// Student and Mentor are subclasses of the Person class, since they are extensions of that class. Person is the superclass in this relationship.

const student1 = new Student("Mathieu", "I loves history podcasts");
console.log(student1);
student1.enroll("March Cohort");
console.log(student1);
console.log(student1.bio());

const mentor1 = new Mentor("Gaston", "I am a fan of Robin Williams");
console.log(mentor1);
mentor1.goOnShift;
console.log(mentor1);