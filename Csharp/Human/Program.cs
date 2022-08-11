using HUMAN;
Human Bob = new Human ("Bob");
Human Zak = new Human ("Zak");
Wizard Seth = new Wizard ("Seth");
Ninja Sam = new Ninja ("Sam");
Samurai Jessy = new Samurai("Jessy");
Samurai Mok = new Samurai("Mok");

// Console.WriteLine(Bob.HumanInfo());

// Console.WriteLine(Zak.Name);
// Console.WriteLine(Zak.Health);


// Console.WriteLine(Bob.Attack(Zak));

// Console.WriteLine(Seth.WizardInfo());
// Console.WriteLine(Bob.Intelligence);

// Seth.Attack(Bob);

// Console.WriteLine(Seth.WizardInfo());
// Console.WriteLine(Bob.Intelligence);


// Seth.Heal(Bob);

// Console.WriteLine(Bob.Intelligence);

// Console.WriteLine(Bob.Health);
// Console.WriteLine(Sam.ninjaInfo());

// Sam.Steal(Bob);
// Console.WriteLine(Sam.ninjaInfo());
Console.WriteLine(Bob.Health);

Console.WriteLine(Jessy.SamuraiInfo());
Console.WriteLine(Mok.SamuraiInfo());

Jessy.Attack(Mok);

Console.WriteLine(Jessy.SamuraiInfo());
Console.WriteLine(Mok.SamuraiInfo());

Mok.Meditate();
Console.WriteLine(Mok.SamuraiInfo());
