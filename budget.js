function register() {
    user = {
        uname: uname.value,
        password: pass.value,
        phoneno: phone.value
    }
    if (user.phoneno in localStorage) {
        alert('already registered')
    }
    else {
        localStorage.setItem(user.phoneno, JSON.stringify(user))
        console.log(user);
        alert('succesfully')
        window.location = './login.html'


    }

        // Clear the input boxes
        document.getElementById('uname').value = '';
        document.getElementById('pass').value = '';
        document.getElementById('phone').value = '';
}




function login() {
        lphone=number.value
        lpswd=pswd.value
        
        userdata = JSON.parse(localStorage.getItem(lphone))
        console.log(userdata);
        if(lphone in localStorage){
           if(lpswd == userdata.password){
            window.location='./home.html'
            alert('login successfully')
           }
           else{
            alert('invalid password')
           }
        }
        else{
            alert('you have not registred')
        }



        // Clear the input boxes
    document.getElementById('number').value = '';
    document.getElementById('pswd').value = '';
}


let income =0;
let balance=0;
let expence=0;
let totalbalance=0;
let intotal=0;
let extotal=0;
 
function incomeAdd() {
    type = descrip.value
    income = inamount.value


    if (type === '' || income === '') {
        alert('Please fill in all fields.');
        return; // Exit the function if fields are empty
    }


    income = Math.floor(income)
    intotal += income;

     balance += income;

 

    incomeResult.innerHTML=`<h1 class="text-5 text-center">${intotal}</h1>`
    balanceResult.innerHTML=`<h1 class="text-5 text-center">${balance}</h1>`
    intable.innerHTML +=`<tr>
    <td>${type}</td>
    <td>${income}</td>
    <td>${intotal}</td>
    </tr>`

    // Clear the input boxes
    document.getElementById('descrip').value = '';
    document.getElementById('inamount').value = '';

    return balance
}


function expencesAdd() {
    extype = exderip.value
    expence = examount.value

    // Check if input fields are empty
    if (extype === '' || expence === '') {
        alert('Please fill in all fields.');
        return; // Exit the function if fields are empty
    }

    expence = Math.floor(expence)
    extotal += expence
    balance -= expence;
    Expenceresult.innerHTML=`<h1 class="text-5 text-center">${extotal}</h1>`
    balanceResult.innerHTML=`<h1 class="text-5 text-center">${balance}</h1>`
    extable.innerHTML +=` <td>${extype}</td>
    <td>${expence}</td>
    <td>${extotal}</td>`



    // Clear the input boxes
    document.getElementById('exderip').value = '';
    document.getElementById('examount').value = '';
}


function logout() {
    window.location='./login.html'
}

