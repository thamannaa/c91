player1_name=localStorage.getItem("player1_name");
player2_name=localStorage.getItem("player2_name");
player1_score=0;
player2_score=0;
document.getElementById("player1_name").innerHTML=player1_name+":";
document.getElementById("player2_name").innerHTML=player2_name+":";
document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;
document.getElementById("player_question").innerHTML=player1_name;
document.getElementById("player_answer").innerHTML=player2_name;

function send(){
    get_word= document.getElementById("word").value;
    word=get_word.toLowerCase();
    charAt1=word.charAt(1);
    mid=Math.floor(word.length/2);
    charAt2=word.charAt(mid);
    last=word.length-1;
    charAt3=word.charAt(last);
    remove_charAt1=word.replace(charAt1,"_");
    remove_charAt2=remove_charAt1.replace(charAt2,"_");
    remove_charAt3=remove_charAt2.replace(charAt3,"_");
    question_word="<h4 id='word_display'>Q."+remove_charAt3+"</h4>";
    input_box="<br>answer:<input type='text' id='input_check_box'>";
check_button="<br><br><button class='btn btn-info' onclick='check()'>check</button>";
row=question_word+input_box+check_button;
document.getElementById("output").innerHTML=row;
document.getElementById("word").value="";
}