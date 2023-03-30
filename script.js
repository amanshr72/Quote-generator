const time = document.getElementById('time');
const greeting = document.getElementById('greet');
const nam = document.getElementById('name');
const Focus = document.getElementById('Focus');
const quo = document.getElementById('quote'); 

function showTime()
{
    let today = new Date();
    let hour = addZero(today.getHours());
    let min = addZero(today.getMinutes());
    let sec = addZero(today.getSeconds());

    const a = hour>=12?'PM':'AM';
    hour = hour%12 || 12;
    time.innerHTML = `${hour}<span>:</span>${min}<span>:</span>${sec}<span> </span>${a}`;
    setTimeout(showTime,1000);


}

function addZero(n)
{
    return(parseInt(n,10)<10?'0':'')+n;
}

function set(){
    let today = new Date();
    let hour = today.getHours();
    if(hour<12)
    {
        document.body.style.backgroundImage = "url( 'https://images.unsplash.com/photo-1477332552946-cfb384aeaf1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit')";
        greeting.innerText = 'Good Morning,';
        document.body.style.color = "white";
    }
    else if(hour<18)
    {
        document.body.style.backgroundImage = "url( 'https://images.unsplash.com/photo-1584887546771-fe346e85c192?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYyOTQ4NTY5Ng&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080')";
        greeting.innerText = 'Good Afternoon,';
       document.body.style.color = "white";
    }
    else{
        document.body.style.backgroundImage = "url( 'https://images.unsplash.com/photo-1531604174015-922f09a0e8c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYyOTQ4NTQ0Ng&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080')";
        document.body.style.color = "white";
        greeting.innerText = 'Good Evening,';
    }
}

function getname()
{
    if(localStorage.getItem('name')==null)
    {
        nam.textContent = '<Enter your Name>';
        nam.style.opacity = "0.6";
    }
    else{
        nam.textContent = localStorage.getItem('name');
    }
}

function setName(e)
{
       if(e.type === 'keypress')
       {
             if(e.which == 13 || e.keyCode == 13)
             {
                localStorage.setItem('name',e.target.innerText);
                nam.blur();
             }

       }
       else{
           localStorage.setItem('name',e.target.innerText);
       }
}
function getfocus()
{
    if(localStorage.getItem('focus')==null)
    {
        Focus.textContent = '<Enter your focus>';
        Focus.style.opacity = "0.6";
    }
    else{
        Focus.textContent = localStorage.getItem('focus');
    }
}
function setFocus(e)
{
       if(e.type === 'keypress')
       {
             if(e.which == 13 || e.keyCode == 13)
             {
                localStorage.setItem('focus',e.target.innerText);
                nam.blur();
             }

       }
       else{
           localStorage.setItem('focus',e.target.innerText);
       }
}
nam.addEventListener('keypress',setName);
nam.addEventListener('blur',setName);
Focus.addEventListener('keypress',setFocus);
Focus.addEventListener('blur',setFocus);

fetch("https://type.fit/api/quotes")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {

    let r  = Math.floor((Math.random() * 100) + 1);
    quo.innerText = `"${data[r].text}" - ${data[r].author}`;
    
  });

getname();
getfocus();
set();
showTime();