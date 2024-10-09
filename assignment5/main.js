window.onload = first;
let post = 1
function first() {
    var header = document.getElementById("top")
    header.innerHTML = "Welcome to the Forum";
    console.log("header");
}
function postFunction(){
    let word = document.getElementById("message").value
    console.log(word);

    if(post == 1){
    var topic = document.getElementById("topic").innerHTML=word
    console.log(topic);
    }else if(post == 2){
    var reply1 = document.getElementById("reply1").innerHTML=word
    console.log(reply1);
    }else{
    var reply2 = document.getElementById("reply2").innerHTML=word
    console.log(reply2);
    }
    post++
    document.getElementById("message").value = "";
    console.log(post);
}

function clearFunction(){
    document.getElementById("topic").innerHTML= "";
    document.getElementById("reply1").innerHTML= "";
    document.getElementById("reply2").innerHTML= "";
    post = 1;
}