var text = 0;
function postFunction(){
    if(text == 0){
        var textforpost = document.getElementById("text1").value;
        document.getElementById("topic1").innerText = textforpost;
        text++;
    }
    else if(text == 1){
        var textforpost = document.getElementById("text1").value;
        document.getElementById("comment1").innerText = textforpost;
        text++;
    }
    else if(text == 2){
        var textforpost = document.getElementById("text1").value;
        document.getElementById("comment2").innerText = textforpost;
        text++;
    }
  }

function clearFunction(){
    document.getElementById("text1").innerText = (" ");
    document.getElementById("topic1").innerText = (" ");
    document.getElementById("comment1").innerText = (" ");
    document.getElementById("comment2").innerText = (" ");
    clearbox();
}
function clearbox(){
    //เคลียร์ในtextarea
    const textarea = document.getElementById('text1');
    textarea.value = '';

    //เมื่อกดเคลีนร์แล้วสามารถพิมพ์ต่อได้
    text = 0;
}
  
