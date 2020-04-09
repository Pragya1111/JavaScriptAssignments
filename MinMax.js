
//Assignment-1
var arr = [90, 30, 40, 50, 60];

function arrayMaxMin(array){
     var max = array[0]; 
     var min = array[0]; 
     var newArr = []; 
        for ( let i=0; i<array.length; i++){
            if(array[i]>=max){
                max=array[i];
            }
            else if (array[i] < min) {
                min = array[i];
            }
        }
    newArr.push(max);
    newArr.push(min);
    console.log(newArr);
}  
console.log(arrayMaxMin(arr));  

//Assignment-2
var mixArray = [12, 21, 'Pragya', 'Arpan', 30];

function filterArray(arrayM){
    var intArray = arrayM.filter(item => !isNaN(item));
    console.log(intArray);
    return intArray;
}

console.log(filterArray(mixArray));  

//Assignment-3
var students = [{ name: "Steve" }, { name: "Mike" }, { name: "John" }];

function getStudentNames(studentList){
    var tempArr = [];
        for(var i = 0; i < studentList.length; i++){
            tempArr.push(studentList[i].name);
        }
    console.log(tempArr);
    return tempArr;
}
console.log(getStudentNames(students));   

//Assignment-4
// Define an object 
exampleObj = { 
    id: 1, 
    remarks: 'Good' 
}

function hasKey(inputObj, keyValue){
    var flag = false;
        
    for(k in inputObj){
		if(keyValue == k){
			flag = true;
			break;
		}
	}
       
    console.log(flag);
    return flag;
}
console.log(hasKey(exampleObj, "id"));  