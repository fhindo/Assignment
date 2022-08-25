using Microsoft.AspNetCore.Mvc;

namespace CheckersProject.Data;

public class CheckerClassController  : Controller
{
    public void testFunction()
    {
    int newItem = 88;
    ViewBag.item = newItem;
    }
}