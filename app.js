const openBtn = document.getElementById('open-btn');
const modalCntner = document.getElementById('modal-container');
const closeBtn = document.getElementById('close-btn');


openBtn.addEventListener('click',function(){
    modalCntner.style.display = 'block';
})

closeBtn.addEventListener('click',function(){
    modalCntner.style.display ='none';
})

window.addEventListener('click',function(e){
    if(e.target === modalCntner){
        modalCntner.style.display = 'none';
    }
})