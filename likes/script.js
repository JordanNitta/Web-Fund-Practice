var count = 9;
function love1(){
    count++;
    document.querySelector("#likes1").innerText = count + 'like(s)';
}

var increase = 14;
    function dislikes1(){
        increase++;
        document.querySelector("#dislikes-1").innerText = increase + 'dislike(s)';
}

var add = 12;
function love2(){
    add ++;
    document.querySelector("#likes2").innerText = add + 'like(s)';
}

var increase1= 4;
    function dislikes2(){
    increase1++;
    document.querySelector("#dislikes-2").innerText = increase1+ 'dislike(s)';
}

var plus=21;
function love3(){
    plus++;
    document.querySelector("#likes3").innerText = plus + 'like(s)';
}

var up = 20;
function dislikes3(){
    up++;
    document.querySelector("#dislikes-3").innerText = up + 'dislike(s)';
}

function changePhoto(){
    document.getElementById("dog-pic").src ="img/dog.jpeg";
}

function setOldImage(){
    document.getElementById("dog-pic").src ="img/australianshepherd6.jpg";
}