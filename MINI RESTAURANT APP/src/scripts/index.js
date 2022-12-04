//https://fast-beyond-55684.herokuapp.com/posts
class user {
    #checkUsername(username){

    return username.includes('#')? false : true;
    }

    #checkPassword(password){
        return password.length > 8 ? true : false;
    }


async  signup(u, e, p,m){
console.log("gauri");
        let isValidated = this.#checkUsername(u) && this.#checkPassword(p);
        if(isValidated){
            this.username = u;
            this.email = e ;
            this.password = p ;
            this.mobile = m ;
            
            console.log(this);
            let actual_data = JSON.stringify(this);
            try{
           // let res = await fetch (`https://masai-api-mocker.herokuapp.com/auth/register`,{
            let res = await fetch (`https://mock-server-01of.onrender.com/register`,{
            method: 'POST',
            body: actual_data,
            headers : {
                'Content-Type':'application/json',
            },
            
        });

        let  data = await res.json();
            console.log('data',data);
            alert('Signup successssfully !!');
            window.location="home.html";
           

        }catch(err){
            console.log('err!',err);
        }
        }else{
            alert('password length should be more than 9!'); 
        };
 };

    async  Login(password,username){
        //console.log("i");
        console.log(username,password);
        this.username=username;
        this.password=password;
        let login_data = JSON.stringify(this);
        try{
            let res = await fetch(`https://mock-server-01of.onrender.com/login`,{
            method: 'POST',
            body:login_data,
            headers: {
                'content-Type':'application/json',
            },
            });
        
        let data = await res.json();
        console.log('data',data);
        username =document.getElementById("username").value;
          console.log('username',username);
          console.log(' token',data.token);
          alert('LogedIn successssfully !!');
          window.location="home.html";
        }catch(err){
            console.log("err");
            alert('something went wrong !' );
            
        };
    };

        
        

};


let u1 =new user();

let sign = document.getElementById("re_gister");
sign.onclick=()=>{
    register();
}

let lag = document.getElementById("log_in");
lag.onclick=()=>{
    login();
}

let register=()=>{
const username = document.getElementById('username').value;
const email = document.getElementById('email').value;
const password=document.getElementById('password').value;
const mobile=document.getElementById('mobile').value;

u1.signup(username,email,password,mobile);
}

let  login=()=>{
const username = document.getElementById('l_username').value;
const password =document.getElementById('l_password').value;
if(username==""||password==""){
    alert("check your data!");
}else{
    u1.Login(username,password);
}

}