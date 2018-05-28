function showTasks(){
    ///tasks.forEach(function(element){
        for(let task of tasks){
         console.log(tasks);
            addTask(task);
        }

   

    
};


function addTask(task){

let liTask= document.createElement( "li");

     liTask.classList.add("new-class");

     liTask.innerHTML= prepareHtml(task);


  containerTask.appendChild(liTask);

 
 


}

function prepareHtml(task){

    return  '<div class="input-group">' +

                                 
         '<button class="btn btn-default" "toggle-complete"><i class="fa fa-check"></i></button>' +


 '<input type="text" class="form-control" placeholder="Tytuł zadania" value="' + task + '">'+

'<span class="input-group-btn">' +
'<button class=" btn btn-danger" "delete-btn"><i class= "fa fa-close"></i></button>'+
'</span>' +
'</div>' ;

};


// function sendTask(){
 
//     newTask.addEventListener("submit", function(e){
//        e.preventDefault;
      

//        let title =this.querySelector("input").value;

//       
//     })

    
// }

function bindTaskEvents(){

   newTask.addEventListener("submit", function(e){
        e.preventDefault;

        let taskValue= this.querySelector("input").value

        addTask(taskValue);

    }, false)


}