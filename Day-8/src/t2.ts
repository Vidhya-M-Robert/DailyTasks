function greet(name: string, defaultgreet: string="Hello"): void{
    console.log(`${defaultgreet}, ${name}`);
}
greet("Alice");
greet("Bob","Hi");