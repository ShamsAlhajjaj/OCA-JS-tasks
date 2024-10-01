Window.onload = getRecords();

function addRecord(){
    let newRecord;
    if(document.getElementById('name').value
    && document.getElementById('age').value
    && document.getElementById('address').value
    && document.getElementById('email').value){
        newRecord = {
            name: document.getElementById('name').value,
            age: document.getElementById('age').value,
            address: document.getElementById('address').value,
            email: document.getElementById('email').value
    
        }
        alert("added");
    }else{
        alert("please fill all the felids");
    }
    
    console.log(newRecord);
    localStorage.setItem(newRecord.name, JSON.stringify(newRecord));
    location.reload();

}

function getRecords(){
    for (let i = 0; i < localStorage.length; i++){
        let y = JSON.parse(localStorage.getItem(localStorage.key(i)))
        document.querySelector("tbody").innerHTML += `
        <tr id = "${y.name}">
            <th>${y.name}</th>
            <th>${y.age}</th>
            <th>${y.address}</th>
            <th>${y.email}</th>
            <th><button onclick="deleteRecord('${y.name}')">delete</button><button>Edit</button></th>
        </tr>`;

    }
}
function deleteRecord(id){
    let x = String(id);
    console.log("hi from delete record");
    document.getElementById(id).remove();
    localStorage.removeItem(id);
}