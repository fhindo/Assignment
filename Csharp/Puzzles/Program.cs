// static int[] RandomArray()
// {
//     int[] arr1 = new int[10];

//     Random rand = new Random();

//     for (int i = 0; i < arr1.Length; i++)
//     {
//         arr1[i] = rand.Next(5, 25);
//     }
//     return arr1;
// }

// int max = RandomArray()[0];
// int min = RandomArray()[0];
// int sum = 0;

// foreach (var item in RandomArray())
// {
//     Console.WriteLine(item);
//     if (item > max){
//         max = item;
//     }
//     if (item < min){
//         min = item;
//     }
//     sum = sum + item;
// };

// Console.WriteLine($"the max is: {max}");
// Console.WriteLine($"the min is: {min}");
// Console.WriteLine($"the sum is: {sum}");

static string TossCoin()
{
    Random rand = new Random();
    int coin = rand.Next(2);

    if (coin == 1)
    {
        return "Heads";
    }
    else
    {
        return "Tails";
    }
}

Console.WriteLine(TossCoin());