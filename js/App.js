// class 

class user {
    constructor(name, email){
        this.name = name;
        this.email = email;

    }
    details() {
        return `name: ${this.name}, email: ${this.email}`
    }
}
let quule = new user("daadaa", "quule@email.com");

console.log(quule.details());

class Admin extends user {
    constructor (name, email, role){
       super(name, email);
        this.role = role;
    }
    admindetails(){
        return `name: ${this.name}, email: ${this.email}, role: ${this.role}`
    }
    
}
 let faadumo = new Admin("faadumo", "fadumo@yaahoo.com", "adminf ");

console.log(faadumo.admindetails());







// Function to create

let create = (num, nums) => {
    return num = num + nums
}

console.log(create(2, 13));

//dom 

let dom = document.querySelector(".fff")
 
dom.addEventListener("mouseover", myfunction);
dom.addEventListener("mouseout",kkk);

function myfunction ()  {

  //dom.style.color = "black";
  dom.style.textSize = "12px";
   // dom.style.display = "none"
}
function kkk () {
   dom.style.color = "red";
    //dom.style.display = "none";

}


//btn


const button = {
    city: "xamar",
     ddd: "admin",
    'name': "daadaa",
    'phone': "09876",
    'email': "wlaal@gmail.com",
    'password': "admin"
}
console.log(button.city + ' magaalada: ' + ' ' + button.ddd + ' ' + button.name)