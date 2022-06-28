function insertRecord(){
    var dept = {

        "id" : "7777",
        "deptname": "Software Engineering",
        "location": "KR"
    }

    fetch("http://localhost:3000/dept", {
        method:"POST",
        headers:{
            "Content-Type": "application/json",
        },
        body : JSON.stringify(dept)
    })
    .then((data)=>{
        console.log(data)
    })

}
function editRecord(){

    var dept = {

        "id" : "7777",
        "deptname": "Tourism",
        "location": "KS"
    }
    fetch("http://localhost:3000/dept/7777", {
        method:"PUT",
        headers:{
            "Content-Type": "application/json",
        },
        body:JSON.stringify(dept)
    })
    .then((data)=>{
        console.log(data)
    })
}
function deleteRecord(){

    fetch("http://localhost:3000/dept/7777", {
        method:"DELETE",
        headers:{
            "Content-Type": "application/json",
        },
    })
    .then((data)=>{
        console.log(data)
    })

}
function findAllRecords(){
    fetch("http://localhost:3000/dept").then((data)=>{
        data.json().then((jsonData)=>{
            console.log(jsonData);
        })
    })
}