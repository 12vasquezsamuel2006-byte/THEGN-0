// Estado inicial
let tareas = [
  { id: 1, texto: "Instalar React", completada: false },
  { id: 2, texto: "Aprender Hooks", completada: false },
  { id: 3, texto: "Crear Agenda ADSO", completada: false }
];

// Mostrar tareas
const mostrarTareas = () => {
  console.log("\n=== LISTA DE TAREAS ===");
  tareas.forEach((tarea, index) => {
    const estado = tarea.completada ? "✅" : "⏳";
    console.log(`${estado} ${index + 1}. ${tarea.texto}`);
  });
  console.log("======================\n");
};

// Agregar tarea
const agregarTarea = (texto) => {
  const nuevaTarea = {
    id: Date.now(),
    texto,
    completada: false
  };
  tareas = [...tareas, nuevaTarea];
  console.log(`➕ Tarea agregada: "${texto}"`);
  return nuevaTarea;
};

// Completar tarea
const completarTarea = (id) => {
  tareas = tareas.map(tarea =>
    tarea.id === id ? { ...tarea, completada: true } : tarea
  );
  console.log(`✅ Tarea #${id} marcada como completada`);
};

// Eliminar tarea
const eliminarTarea = (id) => {
  const tareaEliminada = tareas.find(t => t.id === id);

  if (!tareaEliminada) {
    console.log("⚠️ Tarea no encontrada");
    return;
  }

  tareas = tareas.filter(t => t.id !== id);
  console.log(`🗑️ Tarea eliminada: "${tareaEliminada.texto}"`);
};

// Pendientes
const ObtenerPendientes = () => {
  return tareas.filter(tarea => !tarea.completada);
};

// Estadísticas
const obtenerEstadisticas = () => {
  const total = tareas.length;
  const completadas = tareas.filter(t => t.completada).length;
  const pendientes = total - completadas;
  const porcentaje = total > 0
    ? ((completadas / total) * 100).toFixed(1)
    : 0;

  console.log(
    `📊 Total: ${total} | ✅ ${completadas} | ⏳ ${pendientes} | Progreso: ${porcentaje}%`
  );
};

// ===== DEMOSTRACIÓN =====
console.log("=== DEMOSTRACIÓN ===");

mostrarTareas();
const Nueva = agregarTarea("Aprender JavaScript moderno");
mostrarTareas();
completarTarea(2);
mostrarTareas();
eliminarTarea(1);
mostrarTareas();
obtenerEstadisticas();