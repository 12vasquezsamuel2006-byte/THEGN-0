// Estado inicial: arreglo vacío
let contactos = [];

// 1. agregarContacto(nombre, tel, correo)
const agregarContacto = (nombre, tel, correo) => {
    const nuevo = {
        id: Date.now() + Math.floor(Math.random() * 100), // ID único más seguro
        nombre,
        tel,
        correo
    };
    contactos = [...contactos, nuevo];
    console.log(`👤 Contacto agregado: ${nombre}`);
    return nuevo;
};

// 2. eliminarContacto(id)
const EliminarContacto = (id) => {
    contactos = contactos.filter(c => c.id !== id);
    console.log(`🗑️ Contacto con ID ${id} eliminado.`);
};

// 3. buscarContacto(termino)
const buscarContacto = (termino) => {
    const resultado = contactos.filter(c => 
        c.nombre.toLowerCase().includes(termino.toLowerCase()) || 
        c.correo.toLowerCase().includes(termino.toLowerCase())
    );
    console.log(`🔍 Resultados de búsqueda ("${termino}"):`, resultado);
    return resultado;
};

// 4. actualizarContacto(id, nuevosDatos)
const actualizarContacto = (id, nuevosDatos) => {
    contactos = contactos.map(c => 
        c.id === id ? { ...c, ...nuevosDatos } : c
    );
    console.log(`🔄 Contacto #${id} actualizado.`);
};

// 5. exportarJSON()
const exportarJSON = () => {
    const json = JSON.stringify(contactos, null, 2);
    console.log("📄 Datos exportados a formato JSON:");
    console.log(json);
    return json;
};

// ===== PRUEBAS DEL SISTEMA =====
console.log("--- AGENDA ADSO EN MARCHA ---");

const c1 = agregarContacto("Samuel Vasquez", "300123", "samuel@correo.com");
const C2 = agregarContacto("Carolina Lopez", "311987", "caro@correo.com");

buscarContacto("Samuel"); // Buscar por nombre
actualizarContacto(c1.id, { tel: "322-555-0000" }); // Cambiar solo el teléfono

exportarJSON(); // Ver cómo queda la base de datos lista para enviar al servidor