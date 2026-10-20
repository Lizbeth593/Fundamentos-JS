# 🚀 Laboratorio 3: Introducción a JavaScript

Este repositorio contiene la resolución del **Laboratorio 3 - Introducción a JavaScript** para la asignatura de **Desarrollo de Aplicaciones Web** de la Escuela Politécnica Nacional (ESFOT).

El objetivo principal de esta práctica es aplicar los conceptos fundamentales y avanzados de JavaScript (ES6+) interactuando con el DOM y consumiendo APIs externas mediante peticiones asíncronas, tomando como caso práctico un clon/buscador de productos inspirado en **Mercado Libre**.

---

## 👥 Integrantes

* **Victor Calapaqui**
* **Lizbeth Sanchez**

**Profesor:** Ing. Byron Loarte  
**Institución:** Escuela Politécnica Nacional — ESFOT  
**Asignatura:** Desarrollo de Aplicaciones Web  

---

## 🛠️ Tecnologías Utilizadas

* **HTML5:** Estructura semántica de la aplicación web.
* **JavaScript (ES6+):** Lógica, manipulación del DOM, programación asíncrona y modularización.
* **DummyJSON / MercadoLibre API:** Consumo de servicios REST mediante `fetch`.
* **LocalStorage:** Persistencia del historial de búsquedas y última consulta.
* **Git & GitHub:** Control de versiones y publicación del repositorio.

---

## 📁 Estructura del Proyecto

```text
Fundamentos-JS/
├── index.html            # Archivo HTML principal de la interfaz
├── README.md             # Documentación del proyecto
├── fundamentos.js        # Variables, constantes y tipos de datos
├── funcioones.js         # Funciones básicas y cálculo de descuentos
├── objetos.js            # Modelado de productos mediante objetos
├── Arreglos.js           # Manejo de listas e iteración (forEach)
└── js/                   # Módulos ES6
    ├── api.js            # Consultas asíncronas a la API (fetch/Promises)
    ├── dom.js            # Renderizado dinámico y manejo del DOM
    ├── storage.js        # Gestión de datos en LocalStorage
    └── main.js           # Punto de entrada y orquestador del flujo
```

---

## 📋 Temas Desarrollados y Evidencias

### 1. Fundamentos (Variables, Constantes y Tipos de Datos)
Declaración de datos básicos del producto (`let`, `const`), tipos numéricos, booleanos y cadenas de texto.

> **Captura de código / ejecución:**  
> ![Fundamentos JS](https://via.placeholder.com/800x400?text=Captura+Fundamentos+JS)

---

### 2. Funciones
Creación de funciones para calcular precios finales, lógica de descuentos y formateo de resultados en consola.

> **Captura de código / ejecución:**  
> ![Funciones JS](https://via.placeholder.com/800x400?text=Captura+Funciones+JS)

---

### 3. Objetos
Representación estructurada de un producto con sus atributos (nombre, precio, disponibilidad, métodos de pago).

> **Captura de código / ejecución:**  
> ![Objetos JS](https://via.placeholder.com/800x400?text=Captura+Objetos+JS)

---

### 4. Arreglos
Almacenamiento de listas de productos/herramientas y recorrido eficiente mediante iteradores (`forEach`).

> **Captura de código / ejecución:**  
> ![Arreglos JS](https://via.placeholder.com/800x400?text=Captura+Arreglos+JS)

---

### 5. Manipulación del DOM
Creación dinámica de elementos en el HTML (tarjetas de productos, imágenes, precios y etiquetas de descuento) mediante JavaScript.

> **Interfaz Web:**  
> ![Manipulacion DOM](https://via.placeholder.com/800x400?text=Interfaz+Mercado+Libre+-+DOM)

---

### 6. Asincronismo y Consumo de APIs
Implementación de peticiones HTTP asíncronas mediante `async/await` y `fetch` para obtener productos desde una API en tiempo real.

> **Consola DevTools / Network:**  
> ![Peticiones API](https://via.placeholder.com/800x400?text=DevTools+Network+-+Fetch+API)

---

### 7. LocalStorage
Persistencia de la última búsqueda realizada y generación de un historial de búsquedas recientes del usuario.

> **DevTools Application Storage:**  
> ![LocalStorage DevTools](https://via.placeholder.com/800x400?text=DevTools+LocalStorage)

---

### 8. Módulos (ES6 Modules)
Organización del código mediante importación y exportación de módulos (`import` / `export`) divididos en `api.js`, `dom.js`, `storage.js` y `main.js`.

---

## ⚙️ Instrucciones de Ejecución

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/Lizbeth593/Fundamentos-JS.git
   ```
2. **Navegar al directorio:**
   ```bash
   cd Fundamentos-JS
   ```
3. **Ejecutar la aplicación:**
   * Abrir el archivo `index.html` en tu navegador web preferido, o utilizar la extensión **Live Server** de Visual Studio Code.
