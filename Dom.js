const inp1 = document.querySelector(".input1")
const inp2 = document.querySelector(".input2")
const ul = document.querySelector("ul");
const h1 = document.querySelector("h1");
const p = document.querySelector(".trans");
const para1=document.querySelector("#error1");
const para2=document.querySelector("#error2");

setTimeout(() => {
    para1.remove();
    para2.remove();
    
    },2500)
const form = document.querySelector("form")
form.addEventListener("submit",(event)=>{
    event.preventDefault();
    if(inp1.value == ""){
      para1.innerHTML="!Plaese enter your product...";
      para1.style.color="red";
       return;
    }
    else if(inp2.value == ""){
        para2.innerHTML="!invalid number....";
        para2.style.color="red";
        return;
    }


    const div = document.createElement("div")
    div.className = "items"
    console.log(div)
    const span = document.createElement("span")
    const li = document.createElement("li")
    span.innerText = inp1.value;
    li.innerText = inp2.value
    ul.append(div);
    div.append(span);
    div.append(li);
    let total_div=document.createElement("div");
    let hesd2=document.createElement("h2");
    
    form.reset();
    





   const del = document.createElement("span")
    del.className = "del"
    del.innerHTML ='<i class="fa fa-trash" aria-hidden="true"></i>'
    div.append(del)
    del.addEventListener("click",(e)=>{
        e.target.parentElement.parentElement.remove();
       
  
    })


 
})




