int[] numArray = { 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 };

string[] nameArray = { "Tim", "Martin", "Nikki", "Sara" };

bool[] checkArray = new bool[10];
checkArray = new bool[] { true, false, true, false, true, false, true, false, true, false };

List<string> iceCream = new List<string>();
iceCream.Add("Chocolate");
iceCream.Add("Vanilla");
iceCream.Add("Mint Chocolate Chip");
iceCream.Add("Cookie Dough");
iceCream.Add("Buttered Pecan");

Console.WriteLine(iceCream.Count);
Console.WriteLine(iceCream[2]);
iceCream.RemoveAt(2);
Console.WriteLine(iceCream.Count);

Dictionary<string, string> favIceCream = new Dictionary<string, string>();

Random rand = new Random();
favIceCream.Add(nameArray[0], iceCream[rand.Next(iceCream.Count)]);
favIceCream.Add(nameArray[1], iceCream[rand.Next(iceCream.Count)]);
favIceCream.Add(nameArray[2], iceCream[rand.Next(iceCream.Count)]);
favIceCream.Add(nameArray[3], iceCream[rand.Next(iceCream.Count)]);


foreach (var item in favIceCream)
{
    Console.WriteLine($"{item.Key} - {item.Value}");
}
