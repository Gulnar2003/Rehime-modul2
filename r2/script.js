const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');
const image1 = document.querySelector('.image1');
let filter = true;
let hover = true;
image1.addEventListener('mouseover',function(e){
    if(filter){
        image1.src = "r2/Images/Group 73.png"
    }
    else{
        image1.src = "r2/Images/Group 91.png";
    }
});
image1.addEventListener('mouseout',function(e){
    if(filter){
        image1.src = "r2/Images/Group 74.png"
    }
    else{
        image1.src = "r2/Images/Group 90.png";
    }
});
image1.addEventListener('click',function(e){
    if(hover){
        if(!filter){
            image1.src = "r2/Images/Group 73.png"
            
        }
        else{
            image1.src = "r2/Images/Group 91.png";
    
        }
    }
    else{
        if(filter){
            image1.src = "r2/Images/Group 74.png"
            
        }
        else{
            image1.src = "r2/Images/Group 90.png";
    
        }
    }
    filter=!filter;
    const li = document.querySelectorAll('li');
    const ul= document.createElement('ul');
    const arr = [...li];
    arr.sort((a,b)=>{
        if(a.innerText.toUpperCase > b.innerText.toUpperCase){
            return 1;
        }
        else{
            return -1;
        }
    });
    arr.forEach(item =>{
        ul.append(item);
    });
    listContainer.innerHTML= ul.innerHTML;
});
function addTask() {
    if (((inputBox.value).replace(/[' ']/ig,'')).length ==0 ){
     alert('You must write something!');
    }
    else {
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}
listContainer.addEventListener('click', function (e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
        saveData();
    }
    else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        saveData();
    }
}, false);
function saveData() {
    localStorage.setItem('data', listContainer.innerHTML);
    
}
saveData();
function showTask() {
    listContainer.innerHTML = localStorage.getItem('data');
}
showTask();
