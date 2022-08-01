playerstyle=document.getElementById("player");
let box1=document.getElementById("box1")
let box2=document.getElementById("box2")
let box3=document.getElementById("box3")
let box4=document.getElementById("box4")
let box5=document.getElementById("box5")
let box6=document.getElementById("box6")
let box7=document.getElementById("box7")
let box8=document.getElementById("box8")
let box9=document.getElementById("box9")
let currentplayer="Player1";
let count=0;
let gameover=false;

function main(value){
    var audio=new Audio("buttonclick.mp3")
    var win=new Audio("playerwin.mp3")
    var draw=new Audio("draw.wav")
audio.play();
    if(currentplayer=="Player1"){       
                    if(value=='one'){
                        if(box1.innerText=='X' || box1.innerText=='0'){
                            currentplayer="Player1";
                            playerstyle.style.color="black"
                            playerstyle.textContent=currentplayer;
                            
                        }
                       else{
                        count=count+1
                        box1.innerText='0'
                        currentplayer="Player2"
                        playerstyle.style.color="white"
                        playerstyle.textContent=currentplayer;
                        box1.style.color="black";
                        box1.style.fontSize="42px"
                        
                       }
                    }else if(value=='two'){
                        if(box2.innerText=='X' || box2.innerText=='0'){
                            currentplayer="Player1";
                            playerstyle.style.color="black"
                            playerstyle.textContent=currentplayer;
                           
                        }
                       else{
                        count=count+1
                        box2.innerText='0'
                        currentplayer="player2"
                        playerstyle.style.color="white"
                        playerstyle.textContent=currentplayer;
                        box2.style.color="black";
                        box2.style.fontSize="42px"
                        
                       }
                    }
                    else if(value=='three'){
                        if(box3.innerText=='X' || box3.innerText=='0'){
                            currentplayer="Player1";
                            playerstyle.style.color="black"
                            playerstyle.textContent=currentplayer;
                        }
                       else{
                        count=count+1
                        box3.innerText='0'
                        currentplayer="Player2"
                        playerstyle.style.color="white"
                        playerstyle.textContent=currentplayer;
                        box3.style.color="black";
                        box3.style.fontSize="42px"
                       }
                    }
                    else if(value=='four'){
                        if(box4.innerText=='X' || box4.innerText=='0'){
                            currentplayer="Player1";
                            playerstyle.style.color="black"
                            playerstyle.textContent=currentplayer;
                        }
                       else{
                        count=count+1
                        box4.innerText='0'
                        currentplayer="Player2"
                        playerstyle.style.color="white"
                        playerstyle.textContent=currentplayer;
                        box4.style.color="black";
                        box4.style.fontSize="42px"
                       }
                    }
                    else if(value=='five'){
                        if(box5.innerText=='X' || box5.innerText=='0'){
                            currentplayer="Player1";
                            playerstyle.style.color="black"
                            playerstyle.textContent=currentplayer;
                        }
                       else{
                        count=count+1
                        box5.innerText='0'
                        currentplayer="Player2"
                        playerstyle.style.color="white"
                        playerstyle.textContent=currentplayer;
                        box5.style.color="black";
                        box5.style.fontSize="42px"
                       }
                    }
                    else if(value=='six'){
                        if(box6.innerText=='X' || box6.innerText=='0'){
                            currentplayer="Player1";
                            playerstyle.style.color="black"
                            playerstyle.textContent=currentplayer;
                        }
                       else{
                        count=count+1
                        box6.innerText='0'
                        currentplayer="Player2"
                        playerstyle.style.color="white"
                        playerstyle.textContent=currentplayer;
                        box6.style.color="black";
                        box6.style.fontSize="42px"
                       }
                    }
                    else if(value=='seven'){
                        if(box7.innerText=='X' || box7.innerText=='0'){
                            currentplayer="Player1";
                            playerstyle.style.color="black"
                            playerstyle.textContent=currentplayer;
                        }
                       else{
                        count=count+1
                        box7.innerText='0'
                        currentplayer="Player2"
                        playerstyle.style.color="white"
                        playerstyle.textContent=currentplayer;
                        box7.style.color="black";
                        box7.style.fontSize="42px"
                       }
                    }
                    else if(value=='eight'){
                        if(box8.innerText=='X' || box8.innerText=='0'){
                            currentplayer="Player1";
                            playerstyle.style.color="black"
                            playerstyle.textContent=currentplayer;
                        }
                       else{
                        count=count+1
                        box8.innerText='0'
                        currentplayer="Player2"
                        playerstyle.style.color="white"
                        playerstyle.textContent=currentplayer;
                        box8.style.color="black";
                        box8.style.fontSize="42px"
                       }
                    }
                    else if(value=='nine'){
                        if(box9.innerText=='X' || box9.innerText=='0'){
                            currentplayer="Player1";
                            playerstyle.style.color="black"
                            playerstyle.textContent=currentplayer;
                        }
                       else{
                        count=count+1
                        box9.innerText='0'
                        currentplayer="Player2"
                        playerstyle.style.color="white"
                        playerstyle.textContent=currentplayer;
                        box9.style.color="black";
                        box9.style.fontSize="42px"
                       } 
                    }
                   
            
                   
}
    else{ 
                    
                        if(value=='one'){
                            if(box1.innerText=='0' || box1.innerText=='X'){
                                currentplayer="Player2";
                                playerstyle.style.color="white"
                                playerstyle.textContent=currentplayer;
                               
                            }
                           else{
                              
                     
                            box1.style.fontSize="42px"
                            count=count+1
                            box1.innerText='X'
                            currentplayer="Player1"
                            playerstyle.style.color="black"
                            playerstyle.textContent=currentplayer;
                         
                           }
                        }
                        else if(value=='two'){
                            if(box2.innerText=='0' || box2.innerText=='X'){
                                currentplayer="Player2";
                                playerstyle.style.color="white"
                                playerstyle.textContent=currentplayer;
                              
                            }
                           else{
                            box2.style.fontSize="42px"
                            count=count+1
                            box2.innerText='X'
                            currentplayer="Player1"
                            playerstyle.style.color="black"
                            playerstyle.textContent=currentplayer;
                            
                           }
                        }
                        else if(value=='three'){
                            if(box3.innerText=='0' || box3.innerText=='X'){
                                currentplayer="Player2";
                                playerstyle.style.color="white"
                                playerstyle.textContent=currentplayer;
                            }
                           else{
                            box3.style.fontSize="42px"
                            count=count+1
                            box3.innerText='X'
                            currentplayer="Player1"
                            playerstyle.style.color="black"
                            playerstyle.textContent=currentplayer;
                           }
                        }
                        else if(value=='four'){
                            if(box4.innerText=='0' || box4.innerText=='X'){
                                currentplayer="Player2";
                                playerstyle.style.color="white"
                                playerstyle.textContent=currentplayer;
                            }
                           else{
                            box4.style.fontSize="42px"
                            count=count+1
                            box4.innerText='X'
                            currentplayer="Player1"
                            playerstyle.style.color="black"
                            playerstyle.textContent=currentplayer;
                           }
                        }
                        else if(value=='five'){
                            if(box5.innerText=='0' || box5.innerText=='X'){
                                currentplayer="Player2";
                                playerstyle.style.color="white"
                                playerstyle.textContent=currentplayer;
                            }
                           else{
                            box5.style.fontSize="42px"
                            count=count+1
                            box5.innerText='X'
                            currentplayer="Player1"
                            playerstyle.style.color="black"
                            playerstyle.textContent=currentplayer;
                           }
                        }
                        else if(value=='six'){
                            if(box6.innerText=='0' || box6.innerText=='X'){
                                currentplayer="Player2";
                                playerstyle.style.color="white"
                                playerstyle.textContent=currentplayer;
                            }
                           else{
                            box6.style.fontSize="42px"
                            count=count+1
                            box6.innerText='X'
                            currentplayer="Player1"
                            playerstyle.style.color="black"
                            playerstyle.textContent=currentplayer;
                           }
                        }
                        else if(value=='seven'){
                            if(box7.innerText=='0' || box7.innerText=='X'){
                                currentplayer="Player2";
                                playerstyle.style.color="white"
                                playerstyle.textContent=currentplayer;
                            }
                           else{
                            box7.style.fontSize="42px"
                            count=count+1
                            box7.innerText='X'
                            currentplayer="Player1"
                            playerstyle.style.color="black"
                            playerstyle.textContent=currentplayer;
                           }
                        }
                        else if(value=='eight'){
                            if(box8.innerText=='0' || box8.innerText=='X'){
                                currentplayer="Player2";
                                playerstyle.style.color="white"
                                playerstyle.textContent=currentplayer;
                            }
                           else{
                            box8.style.fontSize="42px"
                            count=count+1
                            box8.innerText='X'
                            currentplayer="Player1"
                            playerstyle.style.color="black"
                            playerstyle.textContent=currentplayer;
                           }
                        }
                        else if(value=='nine'){
                            if(box9.innerText=='0' || box9.innerText=='X'){
                                currentplayer="Player2";
                                playerstyle.style.color="white"
                                playerstyle.textContent=currentplayer;
                            }
                           else{
                            box9.style.fontSize="42px"
                            count=count+1
                            box9.innerText='X'
                            currentplayer="Player1"
                            playerstyle.style.color="black"
                            playerstyle.textContent=currentplayer;
                           }
                        }
               
                       
                    }
if(box1.innerText=='0' && box2.innerText=='0' && box3.innerText=='0'){
    gameover=true;
    gamefinish("player1",gameover)
}
else if(box4.innerText=='0' && box5.innerText=='0' && box6.innerText=='0'){
    gameover=true;
    gamefinish("player1",gameover)
}
else if(box7.innerText=='0' && box8.innerText=='0' && box9.innerText=='0'){
    gameover=true;
    gamefinish("player1",gameover)
}
else if(box2.innerText=='0' && box5.innerText=='0' && box8.innerText=='0'){
    gameover=true;
    gamefinish("player1",gameover)
}
else if(box3.innerText=='0' && box6.innerText=='0' && box9.innerText=='0'){
    gameover=true;
    gamefinish("player1",gameover)
}
else if(box1.innerText=='0' && box5.innerText=='0' && box9.innerText=='0'){
    gameover=true;
    gamefinish("player1",gameover)
}
else if(box3.innerText=='0' && box5.innerText=='0' && box7.innerText=='0'){
    gameover=true;
    gamefinish("player1",gameover)
}
else if(box1.innerText=='0' && box4.innerText=='0' && box7.innerText=='0'){
    gameover=true;
    gamefinish("player1",gameover)
}
if(box1.innerText=='X' && box2.innerText=='X' && box3.innerText=='X'){
    gameover=true;
    gamefinish("player2",gameover)
}
else if(box4.innerText=='X' && box5.innerText=='X' && box6.innerText=='X'){
    gameover=true;
    gamefinish("player2",gameover)
}
else if(box7.innerText=='X' && box8.innerText=='X' && box9.innerText=='X'){
    gameover=true;
    gamefinish("player2",gameover)
}
else if(box2.innerText=='X' && box5.innerText=='X' && box8.innerText=='X'){
    gameover=true;
    gamefinish("player2",gameover)
}
else if(box3.innerText=='X' && box6.innerText=='X' && box9.innerText=='X'){
    gameover=true;
    gamefinish("player2",gameover)
}
else if(box1.innerText=='X' && box5.innerText=='X' && box9.innerText=='X'){
    gameover=true;
    gamefinish("player2",gameover)
}
else if(box3.innerText=='X' && box5.innerText=='X' && box7.innerText=='X'){
    gameover=true;
    gamefinish("player2",gameover)
}
else if(box1.innerText=='X' && box4.innerText=='X' && box7.innerText=='X'){
    gameover=true;
    gamefinish("player2",gameover)
}

function gamefinish(text,val){
    if(text=="player1"){
        win.play();
    playerstyle.innerText="Player1 WIN"
    playerstyle.style.color="black"}
    else{
        win.play();
        playerstyle.innerText="Player2 WIN"
        playerstyle.style.color="white"
    }
}
if(gameover!=true && count==9){
    playerstyle.innerText="Draw"
    playerstyle.style.color="red"
    draw.play()
}
}