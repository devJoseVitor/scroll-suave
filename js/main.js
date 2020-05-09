/**
 * Referência do body e container do app em geral
 */
const body = document.querySelector('body');
const app = document.querySelector('.app');

/**
 * Altura do elemento que vai ser suavizado e velocidade
 * de transição entre a última posição do scroll e a atual
 */
const height = app.getBoundingClientRect().height;
const velocidade = .1;

/**
 * Posição atual do scroll suavizado
 */
let posicaoSuave = 0;

body.style.height = `${height}px`;

const suavizarScroll = () => {
  posicaoSuave += (window.pageYOffset - posicaoSuave) * velocidade;
  app.style.transform = `translateY(-${posicaoSuave}px) `;
  requestAnimationFrame(suavizarScroll);
}

suavizarScroll();