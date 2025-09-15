
function greetUser(name?: string) {
  if (name) {
    console.log("Olá, " + name.toUpperCase());
  } else {
    console.log("Olá, visitante!");
  }
}


function calculateYearsUntilRetirement(age: string): number {
  return 65 - Number(age);
}


function getRandomMessage(): string {
  return "Seu número aleatório é: " + (Math.random() * 100).toFixed(2);
}


greetUser(); 
console.log(calculateYearsUntilRetirement("30"));
console.log(getRandomMessage()); 
