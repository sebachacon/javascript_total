
const estudiante = "Sebastián Chacón Vargas";
const notas = [9, 8, 10, 7, 9];

const listaNotasEl = document.getElementById('lista-notas');
const resultadoPromedioEl = document.getElementById('resultado-promedio');
const resultadoMasAltaEl = document.getElementById('resultado-mas-alta');
const resultadoAplazadosEl = document.getElementById('resultado-aplazados');

const btnPromedio = document.getElementById('btn-promedio');
const btnMasAlta = document.getElementById('btn-mas-alta');
const btnAplazados = document.getElementById('btn-aplazados');

const fechaEl = document.getElementById('fecha');
fechaEl.textContent = new Date().toLocaleDateString();

function listarNotas() {
  listaNotasEl.innerHTML = '';
  notas.forEach((n, i) => {
    const li = document.createElement('li');
    li.textContent = n;
    li.setAttribute('title', 'Nota ${i + 1}');
    listaNotasEl.appendChild(li);
  });
}

function calcularPromedio() {
  const suma = notas.reduce((acc, n) => acc + n, 0);
  return Math.round((suma / notas.length) * 10) / 10;
}

function notaMasAlta() {
  return Math.max(...notas);
}

function hayAplazados() {
  return notas.some(n => n < 4);
}

btnPromedio.addEventListener('click', () => {
  resultadoPromedioEl.textContent = calcularPromedio();
});

btnMasAlta.addEventListener('click', () => {
  resultadoMasAltaEl.textContent = notaMasAlta();
});

btnAplazados.addEventListener('click', () => {
  resultadoAplazadosEl.textContent = hayAplazados() ? 'Sí' : 'No';
});

window.addEventListener('DOMContentLoaded', listarNotas);