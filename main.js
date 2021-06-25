var Stu_array=[];
function submit(){
    var name1=document.getElementById("student_1").value;
    var name2=document.getElementById("student_2").value;
    var name3=document.getElementById("student_3").value;
    var name4=document.getElementById("student_4").value;

    Stu_array.push(name1)
    Stu_array.push(name2)
    Stu_array.push(name3)
    Stu_array.push(name4)
    console.log(Stu_array)
    document.getElementById("display_name").innerHTML=Stu_array;
    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";
}
function sort(){
    Stu_array.sort()
    console.log(Stu_array)
    document.getElementById("display_name").innerHTML=Stu_array;
}