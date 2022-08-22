namespace HUMAN;

public class Samurai : Human {

    public Samurai (string name) : base (name){
        Health = 200;
    }

    public string SamuraiInfo(){
        return $"Samuria Name: {Name}, Health: {Health}, Dest: {Dexterity}";
    }

    public override int Attack(Human target)
    {
        base.Attack(target);
        target.Health = 0;
        Health += 50;
        return target.Health;
    }

    public int Meditate(){
        Health = 200;
        return Health;
    }
}