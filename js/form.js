let persons = [];

function signup() {
    const pName = document.getElementById("name").value;
    const pemail = document.getElementById("email").value;
    const pPassword = document.getElementById("password").value;
    const pnumber = document.getElementById("number").value;

    persons = JSON.parse(localStorage.getItem("persons"));

    if(pName != '' && pPassword != '' && pemail != '' && pnumber != '') {

        if(persons == [] || persons == null) {

            persons = [];

            persons.push({name: pName, password: pPassword, email: pemail, number: pnumber});
            localStorage.setItem("persons", JSON.stringify(persons));
            location.replace('login.html');
        }

        else {
                persons.push({name: pName, password: pPassword, email: pemail, number: pnumber});
                localStorage.setItem("persons", JSON.stringify(persons));
                location.replace('login.html');
            }

    }
    else
    {
        showAlert("please fill out all informaition");
    }
}
function login() {

    const pemail = document.getElementById("email").value;
    const pPassword = document.getElementById("password").value;



    const persons = JSON.parse(localStorage.getItem("persons"));

    if( pemail == '' && pPassword == '' ){
        showAlert("please fill out all informaition");
    }
    else
    {
        if(persons == [] || persons == null) {

            alert("user doesn't exists");
    
        }
    
        else {
    
                for(var i=0; i<persons.length; i++) {
                        if(persons[i].email == pemail && persons[i].password == pPassword) {
            
                            localStorage.setItem("user", persons[i].name);
                            location.replace('index.html');
            
                        }
                    }
    
            }
    }
}

const showAlert = (msg) => {
    let alertBox = document.querySelector('.alert-box');
    let alertMsg = document.querySelector('.alert-msg');
    alertMsg.innerHTML = msg;
    alertBox.classList.add('show');
    setTimeout(() => {
        alertBox.classList.remove('show');
    }, 3000);
}