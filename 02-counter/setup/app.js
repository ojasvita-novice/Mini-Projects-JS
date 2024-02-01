const increase=document.querySelector(".increase");
const reset = document.querySelector(".reset");
const decrease = document.querySelector(".decrease");
const btns=document.querySelectorAll(".btn");
const value=document.querySelector("#value");

let count=0;

btns.forEach(function(btn)
{
  btn.addEventListener('click',function(e)
  {
    const styles=e.currentTarget.classList;
    if(styles.contains('decrease'))
    {
       count--; }
    else if(styles.contains('reset'))
    {
        count=0;
    }
    else
    {
        count++;
    } 
    if(count>0)
    {
       value.style.color="green"; 
    }
    else if(count<0)
    {
        value.style.color="red";
    }
    else{
        value.style.color="pink";
    }
    value.textContent=count;   

  })
})





