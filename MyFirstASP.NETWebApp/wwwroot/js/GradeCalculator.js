// Carson Dudley section 3 
// connecting the input from the html with javascript using their id with jquery
$("#btnSend").click(function () {
    let assignments = parseFloat($("#txtAssignments").val());
    let groupProject = parseFloat($("#txtGrpProj").val());
    let quizzes = parseFloat($("#txtQuizzes").val());
    let midterm = parseFloat($("#txtMidterm").val());
    let finalExam = parseFloat($("#txtFinal").val());
    let intex = parseFloat($("#txtIntex").val());

    // making up the grade based off of the weight of the different types of things we have to turn in
    let grade = (assignments * 0.5) + (groupProject * 0.1) + (quizzes * 0.1) + (midterm * 0.1) + (finalExam * 0.1) + (intex * 0.1);
    let letterGrade = "";
    // if statement to account for the letter grade according to syllabus
    if (grade >= 94)
    {
        letterGrade = "A";
    }
    else if (grade >= 90)
    {
        letterGrade = "A-";
    }
    else if (grade >= 87)
    {
        letterGrade = "B+";
    }
    else if (grade >= 84)
    {
        letterGrade = "B";
    }
    else if (grade >= 80)
    {
        letterGrade = "B-";
    }
    else if (grade >= 77)
    {
        letterGrade = "C+";
    }
    else if (grade >= 74)
    {
        letterGrade = "C";
    }
    else if (grade >= 70)
    {
        letterGrade = "C-";
    }
    else if (grade >= 67)
    {
        letterGrade = "D+";
    }
    else if (grade >= 64)
    {
        letterGrade = "D";
    }
    else if (grade >= 60)
    {
        letterGrade = "D-";
    }
    else
    {
        letterGrade = "E";
    }
    //helping us print out the result on the html instead of using an alert.
    $("#result").html("<br> Final Percentage: " + grade + "%, Letter Grade: " + letterGrade); return false;
});
