function getmarks(){
    var Math = Number(document.getElementById('Math').value);
    var Physics = Number(document.getElementById('Physics').value);
    var Chemistry = Number(document.getElementById('Chemistry').value);
    var English = Number(document.getElementById('English').value);  
    var marksObtained = Math + Physics + Chemistry + English;
    var totalMarks = 400;
    var percentage = (marksObtained / totalMarks)*100 ;
    var grade = "";
    document.getElementById('percentage').innerHTML = Number(percentage) + "%";
    if(percentage > 90){
        grade = "A+";
    }
    else if(percentage < 90 && percentage > 80){
        grade = "A";
    }
    else if(percentage < 80 && percentage > 60){
        grade = "B";
    }
    else if(percentage < 60){
        grade = "F";
    }

    document.getElementById('grade').innerHTML = grade;

    if(percentage < 60){
        document.getElementById('pass').innerHTML = "Sorry! you are failed try again";
    }
    else{
        document.getElementById('pass').innerHTML = "Congratulation! You have been passed!!";
    }


}