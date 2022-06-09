// 1. API url
const url = 'https://jsonplaceholder.typicode.com/users'

// 2. function fectching the user data
function getData(){
fetch(url)
.then((response) => response.json())
.then((data) => renderUser(data))
}

// 3. Function rendering the users to the DOM
function renderUser(users){
    const ul = document.querySelector('.user-list-container');

    //3.1 Looping through the user data and creating the user's list
    users.forEach((user, index)=>{
    const li = document.createElement('li');
    li.className = 'user-list'
    li.innerHTML = `<span>${index + 1}.</span>
                    <span>${user.name}</span>
                    <span>-</span>
                    <span class="username">${user.username}</span>
                    <div class='user-info'>
                    <p><b>Company:</b> ${user.company.name}</p>
                    <p><b>Email:</b> ${user.email}</p>
                    </div>
    `
    // Appending the li to the ul
    ul.appendChild(li);
})
} 

//4. Function searching through the user List
function searchUsers(){
    const input = document.getElementById('search-input');
    const inputValue = input.value.toLowerCase();
    const ul = document.querySelector('.user-list-container');
    const userList = ul.querySelectorAll('li');

    //4.1 Looping through the userList
    for(let index = 0; index < userList.length; index++) {
     const userNameSpanTag = userList[index].querySelector('.username')
     const usernameValue = userNameSpanTag.innerText.toLowerCase();
    const isMatch = usernameValue.indexOf(inputValue) > -1
    
     //4.2 Checking if the input value matches with the userList 
     if(isMatch){
        userList[index].style.display = 'block'
     }else{
         userList[index].style.display = 'none'
     }
    
    }
    
}
getData();