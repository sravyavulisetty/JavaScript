let t_body = document.getElementById("data");
const clear=()=>
{
    let formRes= document.getElementById('formSubmission');
    formRes.reset();
}
const emptyrows=()=>{
    const new_tbody = document.createElement('tbody');
    t_body.parentNode.replaceChild(new_tbody, t_body);
}
let row=0; 
const submit=()=>{
    
    let name = document.getElementById("name").value;
    console.log("name : " +name);
    console.log("name element : " +document.getElementById("name"));

    let dob= new Date(document.getElementById("dob").value);
    console.log("dob : " +dob);
    console.log("dob element : " +new Date(document.getElementById("dob")));

    let diff= Date.now()-dob.getTime();
    let newDate= new Date(diff);
    let year= newDate.getUTCFullYear();
    const age= Math.abs(year-1970);
    

    let number = document.getElementById("empId").value;
                    
    let selectElement = document.querySelector('#types').value;
            
    let radioButtons = document.getElementsByName('pay');
    let newarr=[];
    for (let radio of radioButtons) {
        if(radio.checked) {
            newarr.push(radio.value);
        }
    }
            
    let checkboxes = document.querySelectorAll('input[name="interest"]:checked');
    let values = [];
    checkboxes.forEach((checkbox) => {
        values.push(checkbox.value);
    });

    if(name==" "|| age==" "|| isNaN(age)|| number==" "|| selectElement=="-1"|| newarr==" " ||values==" ")
    {
        alert("please provide the required fields");
    }
    else {
    let t_row= t_body.insertRow(row);
    let cell1=t_row.insertCell();
    let cell2=t_row.insertCell();
    let cell3=t_row.insertCell();
    let cell4=t_row.insertCell();
    let cell5=t_row.insertCell();
    let cell6=t_row.insertCell();
    let cell7= t_row.insertCell();
        
cell1.innerHTML= name;
cell2.innerHTML= age;
cell3.innerHTML= number;
cell4.innerHTML= selectElement;
cell5.innerHTML= newarr;
cell6.innerHTML= values;
cell7.innerHTML= `<button onclick="deleteRow(this)" type="button" class="del_btn">Delete</button>
                 <button onclick="editRow(this)" type="button" class="del_btn">Edit</button>`; 


row++;
    }
}

function deleteRow(evt) {
    if(!confirm("Are you sure you want to delete?")) return;
    const deleteIndex = evt.parentElement.parentElement.rowIndex;
    t_body.deleteRow(deleteIndex-1);
      
}
function editRow(td){
        
    let name = document.getElementById("name").value;

    let dob= new Date(document.getElementById("dob").value);
    let diff= Date.now()-dob.getTime();
    let newDate= new Date(diff);
    let year= newDate.getUTCFullYear();
    let age= Math.abs(year-1970);
    

    let number = document.getElementById("empId").value;
                    
    let selectElement = document.querySelector('#types').value;
            
    let radioButtons = document.getElementsByName('pay');
    let newarr=[];
    for (let radio of radioButtons) {
        if(radio.checked) {
            newarr.push(radio.value);
        }
    }
            
    let checkboxes = document.querySelectorAll('input[name="interest"]:checked');
    let values = [];
    checkboxes.forEach((checkbox) => {
    values.push(checkbox.value);
    });

    let selectedRow = td.parentElement.parentElement;
    let n_name= selectedRow.cells[0].innerHTML;
   // let n_age= selectedRow.cells[1].innerHTML;

    let n_number= selectedRow.cells[2].innerHTML;
    let n_selectElement= selectedRow.cells[3].innerHTML;
    let n_newarr= selectedRow.cells[4].innerHTML;
    let n_values= selectedRow.cells[5].innerHTML;

    document.getElementById("name").value= n_name;

    var ageInput = selectedRow.cells[1].innerHTML;
    var dobInput = document.getElementById("dob");

   ageInput.addEventListener("change", function() {
 
  var age = ageInput.value;
  console.log(age);

  var today = new Date();
  var year = today.getFullYear() - age;
  var month = today.getMonth();
  var day = today.getDate();
  var dob = new Date(year, month, day);
  dobInput.valueAsDate = dob;
});

    document.getElementById("empId").value= n_number;
    document.querySelector("#types").value= n_selectElement;

    let rad1= document.getElementById("r1");
    let rad2= document.getElementById("r2");

    if(n_newarr==='Hrs'){
        rad1.checked= true;
    }
    if(n_newarr==='Days'){
        rad2.checked= true;
    }
    
    
    let int1= document.getElementById("ch1");
    let int2= document.getElementById("ch2");
    let int3= document.getElementById("ch3");

    for (var i = 0; i < n_values.elements.length; i++) {
        var element = n_values.elements[i];
        if (element.type === "checkbox" && element.name === "interest") {
          element.checked = true;
        }
        else{
            element.checked= false;
        }
      }
}
                    
  
