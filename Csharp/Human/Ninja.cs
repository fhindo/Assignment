namespace HUMAN;

public class Ninja : Human
{

    public Ninja(string name) : base(name)
    {
        Dexterity = 175;
    }

    public string ninjaInfo()
    {
        return $"Ninja name: {Name}, Health: {Health}, Dexterity: {Dexterity}";
    }

    public override int Attack(Human target)
    {
        Random rand = new Random();
        int randDamange = rand.Next(1, 5); //20%
        // int randDamange = 5;
        Console.WriteLine($"the random damage 1-5: {randDamange}");
        int damage = target.Dexterity * 5;
        if (randDamange == 5)
        {
            target.Dexterity -= damage + 10;
            Console.WriteLine("Random Damage is added");
        }
        else
        {
            target.Dexterity -= damage;
        }
        Health += damage;
        return target.Health;
    }

    public int Steal(Human target){
        target.Health -= 5;
        Health += 5;
        return target.Health;
    }
}