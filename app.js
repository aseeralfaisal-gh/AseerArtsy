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

// const welcomePage = document.getElementById('wel-page');
// welcomePage.addEventListener('click', ()=>{
//     window.scrollTo({top: 755, behavior: 'smooth'});
// });
const welDiv = document.getElementById('wel-page');
const welcomePage = document.getElementById('arrow');
welcomePage.addEventListener('click', ()=>{
    window.scrollTo({top: 755, behavior: 'smooth'});
});
welcomePage.addEventListener('wheel', ()=>{
    window.scrollTo({top: 755, behavior: 'smooth'});
});
welcomePage.addEventListener('scroll', ()=>{
    window.scrollTo({top: 755, behavior: 'smooth'});
});
const arrow = document.getElementById('arrow');
arrow.addEventListener('mouseover', () =>{
    window.scrollTo({top: 755, behavior: 'smooth'});
})

// const ul = document.getElementById('navList');
// const li = ul.querySelectorAll('li');
// const h4 = document.querySelectorAll('h4.td');
// h4.addEventListener('click', (e) =>{
//     console.log(e);
// }
// )

const fb = document.getElementById('fb');
fb.addEventListener('click', () =>{
    window.open('https://www.facebook.com/aseeralfaisalsaad');
});
const img = document.querySelectorAll('img');
const btnOpenImg = document.getElementById('btnOpenImg');
btnOpenImg.addEventListener('click', () =>{
    window.open(expandImg.src);
});
const btnSave = document.querySelector('.btnSave');
btnSave.addEventListener('click', () => {
    saveAs(expandImg.src);
});
const home = document.querySelector('.home');
home.addEventListener('click', () =>{
    welcomePage.scrollIntoView();
});
const aboutSegment = document.querySelector('.aboutSegment');
aboutSegment.addEventListener('click', () =>{
    aboutSegment.style.display = 'none';
});
const about = document.querySelector('.about');
aboutSegment.style.display = 'none';
about.addEventListener('click', () =>{
    aboutSegment.style.display = '';
});