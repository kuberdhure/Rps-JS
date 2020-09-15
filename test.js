var rock = document.getElementById('rock');
var paper = document.getElementById('ppr');
var sciss = document.getElementById('scr');
var user_score = document.getElementById('usr');
var comp_score = document.getElementById('cmp-scr');
var cmp_img = document.getElementById('op');
var rand_num;
var c = 0;
var result = document.getElementById('result');
var player = 0;
var cpu = 0;

rock.addEventListener("click",function(){
         rand_num = Math.floor(Math.random()*3);
         switch(rand_num){
             case 0:
                 op.src = "rock.jpg";
                 op.style.display = "block";
                 break;
             case 1:
                 op.src = "paper.jpg"
                 op.style.display = "block";
                 break;
             case 2:
                 op.src = "scissor.jpg";
                 op.style.display = "block";
                 break;
         }
         if(rand_num == c){
            result.innerHTML = "It's a tie";
        }
        else if(rand_num == 1 && c == 0 ){
            result.innerHTML = "Comp Wins";
            cpu++;
            comp_score.innerText = cpu;
        }
        else{
            result.innerHTML = "User Wins";
            player++;
            user_score.innerText = player;
        }
        
        
}
);

paper.addEventListener("click",function(){
    rand_num = Math.floor(Math.random()*3);
    switch(rand_num){
        case 0:
            op.src = "rock.jpg";
            op.style.display = "block";
            break;
        case 1:
            op.src = "paper.jpg"
            op.style.display = "block";
            break;
        case 2:
            op.src = "scissor.jpg";
            op.style.display = "block";
            break;
    }
    if(rand_num == c){
       result.innerHTML = "User Wins";
       player++;
       user_score.innerText = player;
   }
   else if(rand_num == 1 && c == 0 ){
       result.innerHTML = "It's a tie";
   }
   else{
       result.innerHTML = "Comp Wins";
       cpu++;
       comp_score.innerText = cpu;
   }
   
   
}
);

sciss.addEventListener("click",function(){
    rand_num = Math.floor(Math.random()*3);
    switch(rand_num){
        case 0:
            op.src = "rock.jpg";
            op.style.display = "block";
            break;
        case 1:
            op.src = "paper.jpg"
            op.style.display = "block";
            break;
        case 2:
            op.src = "scissor.jpg";
            op.style.display = "block";
            break;
    }
    if(rand_num == c){
       result.innerHTML =  "Comp Wins";
       cpu++;
       comp_score.innerText = cpu;
   }
   else if(rand_num == 1 && c == 0 ){
       result.innerHTML = "User Wins";
       player++;
       user_score.innerText = player;
   }
   else{
       result.innerHTML ="It's a tie";
   }
   
   
}
);
