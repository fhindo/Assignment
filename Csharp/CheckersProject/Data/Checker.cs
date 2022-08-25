#pragma warning disable CS8618 
namespace CheckersProject.Pages;
public class CheckerClass
{
    public int Row { get; set; }
    public int Column { get; set; }
    public string Color { get; set; }
    public CheckerDirection Direction { get; set; }

    public bool CheckPosition()
    {
        return true;
    }

    public void CheckPiece()
    {
        Console.WriteLine( Row + ", " + Column );
        if( Color == "black" )
        {
            Console.WriteLine( "black" );
        }
        if( Color == "white" )
        {
            Console.WriteLine( "white" );
        }
    }
    
    // public void EvaluateCheckerSpots()
    // {
    //     List<int> rowsPossible = new List<int>();
    //     List<int> columnsPossible = new List<int>();    

    //     rowsPossible.Clear();
    //     columnsPossible.Clear();
    //     if( this != null )
    //     {
    //         rowsPossible.Add( Row +
    //             ( 1 * ( Direction == CheckerDirection.Down ? 1 : -1 )));
    //         columnsPossible.Add( Column - 1 );
    //         columnsPossible.Add( Column + 1 );
    //     }
    // }

}
public enum CheckerDirection
{
    Down, Up, Both
}


    // CHECKERBOARD INDEX
    // [0,0] [0,1] [0,2] [0,3] [0,4] [0,5] [0,6] [0,7] [0,8]
    // [1,0] [1,1] [1,2] [1,3] [1,4] [1,5] [1,6] [1,7] [1,8]
    // [2,0] [2,1] [2,2] [2,3] [2,4] [2,5] [2,6] [2,7] [2,8]
    // [3,0] [3,1] [3,2] [3,3] [3,4] [3,5] [3,6] [3,7] [3,8]
    // [4,0] [4,1] [4,2] [4,3] [4,4] [4,5] [4,6] [4,7] [4,8]
    // [5,0] [5,1] [5,2] [5,3] [5,4] [5,5] [5,6] [5,7] [5,8]
    // [6,0] [6,1] [6,2] [6,3] [6,4] [6,5] [6,6] [6,7] [6,8]
    // [7,0] [7,1] [7,2] [7,3] [7,4] [7,5] [7,6] [7,7] [7,8]
    // [8,0] [8,1] [8,2] [8,3] [8,4] [8,5] [8,6] [8,7] [8,8]