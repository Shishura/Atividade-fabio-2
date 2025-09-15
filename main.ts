
function greetUser(name?: string) {
  console.log("Olá, " + name.toUpperCase());
}


function calculateYearsUntilRetirement(age: number): number {
  return 65 - age;
}


function getRandomMessage(): string {
  return Math.random() * 100;
}


greetUser(); 
console.log(calculateYearsUntilRetirement("30"));
console.log(getRandomMessage()); 
