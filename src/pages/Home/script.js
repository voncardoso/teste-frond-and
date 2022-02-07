export function initMenuMobile() {
  const SearchSeta = document.querySelector('.Search-Seta');
  const container = document.querySelector('.cookiesContainer');
  const save = document.querySelector('.cookies-save');
 
 

  SearchSeta.addEventListener('click', ()=>{
    SearchSeta.classList.toggle('active');
  });

  save.addEventListener('click', ()=>{
    container.style.display = 'none';
  });
}