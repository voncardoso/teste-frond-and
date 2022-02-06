export function initMenuMobile() {
  const endereco = document.querySelector('.Endereco')
  const User = document.querySelector('.User');
  endereco?.classList.toggle('active');
  User?.classList.toggle('active');
}