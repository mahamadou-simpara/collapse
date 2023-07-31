const xmarks = document.querySelectorAll('.fa-xmark');
const chevrons = document.querySelectorAll('.fa-circle-chevron-down');

for (const chevron of chevrons){
    chevron.addEventListener('click', () =>{
    chevron.parentElement.parentElement.classList.add('active');
    });
};

for (const xmark of xmarks){
xmark.addEventListener('click', () =>{
    xmark.parentElement.parentElement.classList.remove('active');

   })
};
