export function initMenuMobile() {
  const endereco = document.querySelector('.Endereco')
  const User = document.querySelector('.User');
  endereco?.classList.toggle('active');
  User?.classList.toggle('active');
}

export function maskCPF(){
  let CPFteste = document.querySelector('.CEP');
  CPFteste?.addEventListener('keypress', ()=>{
    let inputlength = CPFteste?.value.length;
    if(inputlength === 3 || inputlength === 7){
      CPFteste.value += '.'
    }else if(inputlength === 11){
      CPFteste.value += '-'
    }
});
}


export function maskCEP(){
  let CPFteste = document.querySelector('.CPF');
  CPFteste?.addEventListener('keypress', ()=>{
    let inputlength = CPFteste?.value.length;
    if(inputlength === 3 || inputlength === 7){
      CPFteste.value += '.'
    }else if(inputlength === 11){
      CPFteste.value += '-'
    }
});
}