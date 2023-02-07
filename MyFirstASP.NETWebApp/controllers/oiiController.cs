using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyFirstASP.NETWebApp.controllers
{
    public class oiiController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
        public IActionResult GradeCalculator()
        {
            return View();
        }
    }
}
