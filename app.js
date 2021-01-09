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
    //console.log(e);
    }
});
//searchInput
const filterInput = document.getElementById('filterInput');
filterInput.addEventListener('keyup', () =>{ 
const filterinputValue = filterInput.value.toLowerCase();
const gallery = document.getElementById('gallery');
const container = gallery.getElementsByClassName('container');
for (let i=0; i<container.length; i++){
    const title = container[i].querySelector('h3');
    if(title.innerHTML.toLowerCase().indexOf(filterinputValue) != -1){
        container[i].style.display="";
    }else{
        container[i].style.display = "none";
    }
}
});