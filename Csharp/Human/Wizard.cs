namespace HUMAN;

public class Wizard : Human
{

    public Wizard(string name) : base(name)
    {
        Health = 50;
        Intelligence = 25;
    }

    public string WizardInfo()
    {
        return ($"Wixard name: {Name}, Health: {Health}, Intelligenc: {Intelligence}");
    }

    public override int Attack(Human target)
    {
        int damage = Intelligence * 5;
        target.Intelligence -= damage;
        Health += damage;
        return target.Health;
    }

    public int Heal(Human target)
    {
        target.Health += 10 * Intelligence;
        return target.Health;
    }

}

