
let taskInput = document.querySelectorAll('#taskInput');
let addTaskBtn = document.getElementById('addTaskBtn');
let allTasks = document.getElementById('allTasks');
let noTask = document.getElementById('noTask');
let validationMsg = document.getElementById('validationMsg');
let cloesValidationMsgBtn = document.getElementById('cloesValidationMsgBtn');
let card=document.getElementsByClassName('card');
/*dark mode*/

let button = document.querySelector('i');
let div = document.querySelector('div');
let body=document.querySelector('body');
let darklink=document.getElementById('darklink');
let lightlink=document.getElementById('lightlink');
let link = document.querySelectorAll('link');

button.onclick = function(){
    if(body.classList.contains('dark')){
      button.classList = 'lightIcon fa-regular fa-lightbulb';
      body.classList.remove('dark');
       link[2].href="./css/light.css"; 
    }else{
  
      button.classList='darkIcon fa-regular fa-lightbulb';
      body.classList.add('dark');
        link[2].href="./css/dark.css";
      
    }
}






let noTasksShow = ()=>{
if(allTasks.childElementCount == 0){
   noTask.classList.remove('none');
}
}

// function to add task 
let addTask = (name ,image,date) => {
 //  noTask.remove();
   // let TaskValue = taskInput.value;
   // let TaskLength = taskInput.value.length;
   if (name.trim() == "" || image.trim() == "" || date.trim() == "") {
      // alert("You Must Enter Data");
      validationMsg.classList.remove('none');
      if( name.trim() == ""){
         validationMsg.innerHTML= "You must enter name"
      }else if( image.trim() == ""){
      validationMsg.innerHTML ="You must enter image "
      }else if( date.trim() == ""){
         validationMsg.innerHTML ="You must enter date"
         }
   } else {
    noTask.classList.add('none');
    validationMsg.classList.add('none');
    allTasks.innerHTML +=`<div class='col-lg-3 col-5 task-bg  text-center'>
    <i class='delete text-danger float-right fa-solid fa-rectangle-xmark'></i>
    <img width="60" src='${image}'><br>
    ${name}<br><br>
    <p class=' '>${date}</p>
    <div>
    
    `

    
   //   // noTask.remove();
   //    noTask.classList.add('none');
   //    validationMsg.classList.add('none');
   //    // allTasks.innerHTML=`<div class="alert alert-info" ${TaskValue}<i class="text-denger float-right fa-solid fa-rectangle-xmark "></i?</div> `;
   //    let divNewTask = document.createElement('div');//create
   //    divNewTask.classList = "alert alert-info"//add class
   //    divNewTask.append(TaskValue);//add value
   //    let i = document.createElement('i');//create
   //    i.classList = "delete text-danger float-right fa-solid fa-rectangle-xmark"
   //    let iValue = taskInput.value;
   //    divNewTask.append(i);
   //    allTasks.append(divNewTask);
   
   }
taskInput.value="";

}
let renderTask = ()=>{
   let allTasks ={
      taskName:taskInput[0].value,
      image:taskInput[1].value,
      date:taskInput[2].value,
   }
   addTask(allTasks.taskName,allTasks.image,allTasks.date)
}
addTaskBtn.addEventListener('click', renderTask);
cloesValidationMsgBtn.addEventListener('click',function(){
   validationMsg.classList.add('none');
})
document.addEventListener('click',function(t){
  if(t.target.classList.contains('delete')){
   t.target.parentElement.remove();
   noTasksShow();
  }
})
