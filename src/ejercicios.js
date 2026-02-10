// Agrupamos la información en un objeto para mayor orden
const aprendiz = {
    nombre: "Carolina",
    ficha: 3223874,
    notas: [4.0, 4.5, 3.8] // Esto es un arreglo
};

// Usamos el método .reduce() para sumar las notas de forma profesional
const sumaNotas = aprendiz.notas.reduce((acumulado, notaActual) => acumulado + notaActual, 0);
const promedio = sumaNotas / aprendiz.notas.length;

console.log(`=== REPORTE DE NOTAS ===`);
console.log(`Aprendiz: ${aprendiz.nombre}`);
console.log(`Ficha:    ${aprendiz.ficha}`);
console.log(`Promedio: ${promedio.toFixed(2)}`);

// Lógica de aprobación
const aprobado = promedio >= 3.0;
console.log(`Estado:   ${aprobado ? '✅ APROBADO' : '❌ NO APROBADO'}`);