function greetUser(name?: string) {
  if (name) {
    console.log("Olá, " + name.toUpperCase());
  } else {
    console.log("Olá, visitante!");
  }
}




function calculateYearsUntilRetirement(age: number): number {
  return 65 - age;
}


function getRandomMessage(): string {
  return "Seu número aleatório é: " + (Math.random() * 100).toFixed(2);
}
