
var randomNum = Math.ceil(Math.random()*6 );
if (randomNum>=4)
{
    if(randomNum>=5)
    {
    document.querySelectorAll("img")[0].setAttribute("src", "./images/paper.png");
    document.querySelectorAll('img')[1].setAttribute("src", "./images/rock.png");
    }
    
    else{
        document.querySelectorAll("img")[0].setAttribute("src", "./images/scissors.png");
        document.querySelectorAll('img')[1].setAttribute("src", "./images/paper.png");
    }
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
else if(randomNum<=2)
{
    if(randomNum<=1)
        {
        document.querySelectorAll("img")[0].setAttribute("src", "./images/scissors.png");
        document.querySelectorAll('img')[1].setAttribute("src", "./images/rock.png");
        }
        
        else{
            document.querySelectorAll("img")[0].setAttribute("src", "./images/rock.png");
            document.querySelectorAll('img')[1].setAttribute("src", "./images/paper.png");
        }
    document.querySelector("h1").innerHTML = "Player 2 wins";
}
else{
    if(randomNum>=2 && randomNum<3)
    {
    document.querySelectorAll("img")[0].setAttribute("src", "./images/paper.png");
    document.querySelectorAll('img')[1].setAttribute("src", "./images/paper.png");
    }
    else
    {
        document.querySelectorAll("img")[0].setAttribute("src", "./images/scissors.png");
        document.querySelectorAll('img')[1].setAttribute("src", "./images/scissors.png");
    }
    document.querySelector("h1").innerHTML = "It's a tie";
}
