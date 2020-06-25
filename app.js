const users = [
  {
    name: 'Alok',
    age:24,
    gender:'Male',
    lookingFor:'Female',
    location:'Hyderabd',
    image:'https://randomuser.me/api/portraits/men/8.jpg'
  },
  {
    name: 'Mona',
    age:24,
    gender:'Female',
    lookingFor:'Male',
    location:'Banglore',
    image:'https://randomuser.me/api/portraits/women/8.jpg'
  },
  {
    name: 'Dinu',
    age:29,
    gender:'Male',
    lookingFor:'Female',
    location:'Pune',
    image:'https://randomuser.me/api/portraits/men/80.jpg'
  },
  {
    name: 'Vicky',
    age:29,
    gender:'Male',
    lookingFor:'Female',
    location:'Goa',
    image:'https://randomuser.me/api/portraits/men/90.jpg'
  },
  {
    name: 'Swamya',
    age:28,
    gender:'Male',
    lookingFor:'Female',
    location:'Kanpur',
    image:'https://randomuser.me/api/portraits/men/4.jpg'
  },
  {
    name: 'Maya',
    age:27,
    gender:'Female',
    lookingFor:'Male',
    location:'Mumbai',
    image:'https://randomuser.me/api/portraits/women/88.jpg'
  },
  {
    name: 'Ranee',
    age:25,
    gender:'Female',
    lookingFor:'Male',
    location:'Ranchi',
    image:'https://randomuser.me/api/portraits/women/85.jpg'
  },
  {
    name: 'Rahul',
    age:32,
    gender:'Male',
    lookingFor:'Female',
    location:'Jharkhand',
    image:'https://randomuser.me/api/portraits/men/22.jpg'
  }
]



function profileIterator(users){
   let startIndex = 0;

   return{
     next: function(){
       return startIndex < users.length ? 
       {value:users[startIndex++], done:false}:{done:true}
     }
   }
}

let user = profileIterator(users);

//Call first Profile
nextProfile();

//Call after each next click
document.getElementById('next').addEventListener('click', nextProfile);


function nextProfile(){
  const currentProfile = user.next().value;
  if(currentProfile !== undefined){
    document.getElementById('profileDisplay').innerHTML=`
    <ul class="list-group">
       <li class="list-group-item">Name: ${currentProfile.name}</li>
       <li class="list-group-item">Age: ${currentProfile.age}</li>
       <li class="list-group-item">City: ${currentProfile.location}</li>
       <li class="list-group-item">Gender: ${currentProfile.gender}</li>
       <li class="list-group-item">Looking For: ${currentProfile.lookingFor}</li>
    </ul>
    `
    document.getElementById('imageDisplay').innerHTML=`
     <img src="${currentProfile.image}" alt="${currentProfile.name}" height="100" width="100">
    `
  }else{
    window.location.reload()
  }

}
