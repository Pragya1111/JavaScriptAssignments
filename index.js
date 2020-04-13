var base = {
    objectArray: [
        { idp: 1, name: "project1", status: "Completed", description: "testDescription1" },
        { idp: 2, name: "project2", status: "In-prograss", description: "testDescription2" },
        { idp: 3, name: "project3", status: "In-prograss", description: "testDescription13" },
    ],
    addProject: function addProject(form) {
        var nextIndex = this.objectArray[this.objectArray.length-1].idp + 1;
        var obj = {
            idp: this.objectArray[this.objectArray.length-1].idp + 1,
            name: form.pName.value,
            description : form.description.value,
            status: form.status.value
        }

        this.objectArray.push(obj);
        this.addRow(obj);
    },
    addRow: function addRow(obj) {

        var table = document.getElementById("projectList");

        var rowCount = table.rows.length;
        var row = table.insertRow(rowCount);

        var cell2 = row.insertCell(0);
        cell2.innerHTML = obj.idp;

        var cell3 = row.insertCell(1);
        cell3.innerHTML = obj.name;

        var cell4 = row.insertCell(2);
        cell4.innerHTML = obj.status;
    },
    initializeProjectList : function initializeProjectList(){
        var table = document.getElementById("projectList");
        table.innerHTML = "";

        var rowCount = table.rows.length;
        var row = table.insertRow(rowCount);

        var cell1 = row.insertCell(0);
        cell1.innerHTML = "ID"
        
        var cell2 = row.insertCell(1);
        cell2.innerHTML = "Name";

        var cell3 = row.insertCell(2);
        cell3.innerHTML = "Status";

        for (index = 0; index < this.objectArray.length; index++) {
            this.addRow(this.objectArray[index]);
        }
    },
    checkProjectListSize : function checkProjectListSize(){
        var table = document.getElementById("projectList");
        var rowCount = table.rows.length;
        if(rowCount-1 === base.objectArray.length){
            document.getElementById("message").innerHTML = "Equal";
        } else {
            document.getElementById("message").innerHTML = "Not Equal";
        }
    }
}