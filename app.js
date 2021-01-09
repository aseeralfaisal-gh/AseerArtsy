const popup = document.querySelector('.popup');
const expandImg = document.querySelector('.expand-img');
const conImg = document.querySelectorAll('.container img');
//const closebtn = document.querySelector('.closebtn');

//for each image (looping through)
conImg.forEach(conImg =>{
    conImg.addEventListener('click', ()=> {
        popup.classList.add('open');
        expandImg.classList.add('open');
        //closebtn.classList.add('open');
        //changing the source image to data-original
        const openedImg = conImg.getAttribute('data-original');
        expandImg.src = `./views/main-view/${openedImg}`
    });
});
/*closebtn.addEventListener('click', () =>{  
    popup.classList.remove('open');
    expandImg.classList.remove('open');
    closebtn.classList.add('remove');
});*/
// adding an click eventlistener to popup
popup.addEventListener('click', (e) =>{
    if(e.target.classList.contains('popup')){
    popup.classList.remove('open');
    expandImg.classList.remove('open');
    //to understand what's going on
    //console.log(e);
    }
});
//searchInput
/*const searchBox = document.getElementById('filterInput');
searchBox.addEventListener('keyup', (e) =>{
    const filterValue = document.getElementById('filterInput').value.toLowerCase();
});

let ul = document.getElementById('names');
let li = ul.querySelectorAll('img.collection-item');

for(i=0; i<li.length; i++){
    let a = li[i].getElementsByTagName('h3')[0];
    //condition
    if(a.innerHTML.toLowerCase().indexOf(filterValue) > -1){
        li[i].style.opacity = 1;
    }else{
        li[i].style.opacity = 0;
    }
}*/
