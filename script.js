//Task 1
let userlist = [{
    user: 'a', email: 'a@email.com', pw: '123', type: 'admin'
},{
    user: 'b', email: 'b@email.com', pw: '123', type: 'member'
},{
    user: 'c', email: 'c@email.com', pw: '123', type: 'member'
}]
localStorage.localuserlist = JSON.stringify(userlist);

//Task 2
let Container = document.querySelector('.container')
let List = JSON.parse(localStorage.localuserlist)

//Task 3
//Task 4 & 5 & 6
function checkLocalStorage(){
    let correct = false
    let inputEmail = document.getElementById('exampleInputEmail1').value
    let inputPassword = document.getElementById('exampleInputPassword1').value
    for (i=0; i< List.length; i++){
        if (List[i].email == inputEmail && List[i].pw == inputPassword){
            correct = true
            Container.innerText = 'Welcome!'
            alert(`Welcome Back, ${List[i].user}`)
            localStorage.setItem('username', List[i].user)
            localStorage.setItem('usertype', List[i].type)
            if (List[i].type == 'admin'){
                Container.innerText = 'Welcome back, admin ' + List[i].user
                let Button = document.createElement('button')
                Button.innerText = 'Adminpanel'
                document.body.appendChild(Button)
                Button.onclick = function linkAdminPage(){
                    window.location.href = "./adminpanel.html"
                }
            }
        }
        
    }
    if (!correct){
            alert('Invalid email/password')
    }
}

let adminpage = document.getElementById("adminpage");
adminpage.innerHTML =
  `<h1 id="userinfo">Hello, ` +
  localStorage.getItem("username") +
  ` (` +
  localStorage.getItem("usertype") +
  `)</h1>`;