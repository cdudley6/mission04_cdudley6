using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace MyFirstASP.NETWebApp.models
{
    public class GradeCalculatorModel
    {
        // code to get and set all of the inputs from the form and also to display error messages if requirements are not met
        [Required(ErrorMessage = "Assignment score is required")]
        [Range(0, 100, ErrorMessage ="Must imput a number between 0 and 100")]
        public float Assignments { get; set; }

        [Required(ErrorMessage = "Project score is required")]
        [Range(0, 100, ErrorMessage = "Must imput a number between 0 and 100")]
        public float Project { get; set; }

        [Required(ErrorMessage = "Quizzes score is required")]
        [Range(0, 100, ErrorMessage = "Must imput a number between 0 and 100")]
        public float Quizzes { get; set; }

        [Required(ErrorMessage = "Midterm score is required")]
        [Range(0, 100, ErrorMessage = "Must imput a number between 0 and 100")]
        public float Midterm { get; set; }

        [Required(ErrorMessage = "Final score is required")]
        [Range(0, 100, ErrorMessage = "Must imput a number between 0 and 100")]
        public float Final { get; set; }

        [Required(ErrorMessage = "INTEX score is required")]
        [Range(0, 100, ErrorMessage = "Must imput a number between 0 and 100")]
        public float Intex { get; set; }

    }
}
