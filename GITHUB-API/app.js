const userName=document.getElementById('userName')
const submitBtn=document.getElementById('submitBtn')
const _name=document.getElementById("_name")
const city=document.getElementById("city")
const bio=document.getElementById("bio")
const follower = document.getElementById('follower')


const getUsername= async(userName,callBack)=> {
    const url = 'https://api.github.com/users/'+ userName
    const {data} = await axios.get(url)
   callBack(data)
}

const result = (data) =>{
    console.log(data);
    _name.innerText=data.name
    city.innerText=data.location
    bio.innerText = data.bio
    // follower.innerText=data.following
}

submitBtn.onclick= ()=> {
    const value = userName.value
    getUsername(value,result)
}