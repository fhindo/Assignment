List<object> BoxingUnBoxing = new List<object>(){
    7, 28, -1, true, "chair"
};

int sum = 0;
foreach (object item in BoxingUnBoxing)
{
    // Console.WriteLine(item);
    if (item is int)
    {
        Console.WriteLine($"only the int obj: {item}");
        // Console.WriteLine(item.GetType());
        int num = (int)item;
        sum = sum + num;
        // List<int> numList = new List<int>();
        // numList.Add(num);
    }
}
Console.WriteLine($"the total of all int in the list is: {sum}");