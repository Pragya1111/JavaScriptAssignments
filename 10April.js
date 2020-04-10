
//1. Prime Number
function check_prime(n)
{

  if (n===1)
  {
    return false;
  }
  else if(n === 2)
  {
    return true;
  }else
  {
    for(var x = 2; x <= n/2; x++)
    {
      if(n % x === 0)
      {
        return false;
      }
    }
    return true;  
  }
}

//console.log(check_prime(30));
var flag = check_prime(37);
if (flag){
    console.log("Number is Prime");
}else
    console.log("Number is not a Prime number");     


//2.	Exercise on Object
// Define an object 
project = { 
    id: 1, 
    name: 'Project1' ,
    description: 'UI App',
    status: 'Completed'
}

function hasKey(inputObj, keyValue){
    var flag = false;
        
     for(k in inputObj){
	 	if(keyValue == k && inputObj.status== "Completed"){
            flag = true;	 		
         }
	 }
       
   return flag;
}
console.log(hasKey(project, "status"));  


//3.	Exercise on Array
var projectArr = [];//{"id":1, "name":"Project-1", "description":"UI Based"},{id":2, "name":"Project-2", "description":"SAP App}];

function addProject(pId, pName, pDesc){
    
    var newProject = {}; // new object of project
    newProject.id = pId;
    newProject.name = pName;
    newProject.description = pDesc; 
    projectArr.push(newProject);
    GetProject();
}


function GetProject(){
    for(var i = 0; i < projectArr.length;i++){
        console.log(projectArr[i].name);
    }
}


function getProjectDetails(projectId){          
        for(p in projectArr)
            {
                if(projectId == projectArr[p].id){
                console.log(projectArr[p].name);
                console.log(projectArr[p].description);
                }
            }
    }
addProject(1, 'Project-1', 'UI App');
addProject(2, 'Project-2', 'SAP App');
getProjectDetails(2);

//4.	Exercise on Functions
var projectArr = [];

//Adding new object in a list
function addProject(pId, pName, pStatus){
    
    var newProject = {}; // new object of project
    newProject.id = pId;
    newProject.name = pName;
    newProject.status = pStatus; 
    projectArr.push(newProject);
    GetProject();
}

//Deleting the Object based on id
function deleteProject(pId){
    for(p in projectArr)
            {
                if(pId == projectArr[p].id){

                    projectArr.splice(p, 1);
                }

            }        
    console.log("After deleteing object--");
    GetProject();       
}


function GetProject(){
    for(var i = 0; i < projectArr.length;i++){
        console.log(projectArr[i].name);
        console.log(projectArr[i].status);
    }
}


function updateProjectStatus(projectId){          
        for(p in projectArr)
            {
                if(projectId == projectArr[p].id && projectArr[p].status =='Inprogress' ){
                    projectArr[p].status ='Completed';
                    console.log(projectArr[p].status);
                }
            }
        console.log("After updating object status------");
        GetProject();     
    }
addProject(1, 'Project-1', 'Inprogress');
addProject(2, 'Project-2', 'Completed');
updateProjectStatus(1);
deleteProject(2);

