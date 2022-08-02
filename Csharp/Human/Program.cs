using HUMAN;
Human Bob = new Human ("Bob");
Human Zak = new Human ("Zak");

Console.WriteLine(Bob.Name);
Console.WriteLine(Zak.Name);
Console.WriteLine(Zak.Health);

Console.WriteLine(Bob.Attack(Zak));