// See https://aka.ms/new-console-template for more information

// for (int i = 1; i <= 255; i++)
// {
//     Console.WriteLine(i);
// }

// for (int i = 1; i <= 100; i++)
// {
//     if (i % 3 == 0 || i % 5 == 0)
//     {
//         Console.WriteLine(i);
//     }
// }

for (int i = 1; i <= 100; i++)
{
    if (i % 3 == 0 && i % 5 == 0)
    {
        Console.WriteLine($"FizzBuzz {i}");
    }
    else if (i % 3 == 0)
    {
        Console.WriteLine($"Fizz {i}");
    }
    else if (i % 5 == 0)
    {
        Console.WriteLine($"Buzz {i}");
    }
    else
    {
        Console.WriteLine(i);
    }
}

// int i = 1;
// while (i <= 255)
// {
//     Console.WriteLine(i);
//     i++;
// }

// int i = 1;
// while (i < 100)
// {
//     if (i % 3 == 0 || i % 5 == 0)
//     {
//         Console.WriteLine(i);
//     }
//     i++;
// }