function saveData(){
    let name, email, password;
    name=document.getElementById("name").value;
    email =document.getElementById("email").value;
    password=document.getElementById("password").value;
    console.log(name+email+password);

    let user_records = new Array();
    user_records= JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]
    if(user_records.some((v)=>{
        return v.email==email

    })){
        alert("Duplicate data");
    }else{
        user_records.push({
            "name": name,
            "email": email,
            "password": password
        })
        localStorage.setItem("users",JSON.stringify(user_records));
    }
}
