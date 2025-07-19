
  document.addEventListener('DOMContentLoaded', () => {
    const botonMenu = document.querySelector('.abrirMenu');
    const menu = document.querySelector('.menu');

    botonMenu.addEventListener('click', () => {
     
      if (menu.style.display === 'flex') {
        menu.style.display = 'none';
      } else {
        menu.style.display = 'flex';
      }
    });
  });

  document.addEventListener('DOMContentLoaded', () => {
  const botonMenu = document.querySelector('.abrirMenu');
  const menu = document.querySelector('.menu');
  const botonCerrar = document.querySelector('.cerrarMenu');

  botonMenu.addEventListener('click', () => {
    menu.style.display = 'flex';
  });

  botonCerrar.addEventListener('click', () => {
    menu.style.display = 'none';
  });
});

  