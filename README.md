<img width="990" height="153" alt="image" src="https://github.com/user-attachments/assets/2aefdfe0-086c-4c1d-88f7-e9b88c2ab341" /><img width="990" height="837" alt="image" src="https://github.com/user-attachments/assets/c8a6aa60-dce0-4fe2-a743-fcbb260b4604" /><img width="990" height="703" alt="image" src="https://github.com/user-attachments/assets/97c3f17f-7d56-4bac-9c00-8d05b1f35877" /># 🚀 Laboratorio 3: Introducción a JavaScript

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
<img width="777" height="586" alt="image" src="https://github.com/user-attachments/assets/7eb82a61-5284-499f-9a0f-23659b203e06" />
> <img width="414" height="408" alt="image" src="https://github.com/user-attachments/assets/ef5d5766-2432-4f07-a069-2c5aa4fb54d7" />
---

### 2. Funciones
Creación de funciones para calcular precios finales, lógica de descuentos y formateo de resultados en consola.

> **Captura de código / ejecución:**  
<img width="414" height="408" alt="image" src="https://github.com/user-attachments/assets/a69fe18b-c753-4d60-9ea4-ed2f3146e135" />
<img width="990" height="695" alt="image" src="https://github.com/user-attachments/assets/b982fbb7-f0ac-4ab1-bf9e-cb2ab3784d39" />
---

### 3. Objetos
Representación estructurada de un producto con sus atributos (nombre, precio, disponibilidad, métodos de pago).

> **Captura de código / ejecución:**  
<img width="990" height="624" alt="image" src="https://github.com/user-attachments/assets/65daf5e4-9b66-49a0-b478-e4badfe0f100" />
<img width="981" height="808" alt="image" src="https://github.com/user-attachments/assets/d692ed86-aae2-4e28-9b80-3fbbe90ff320" />
---

### 4. Arreglos
Almacenamiento de listas de productos/herramientas y recorrido eficiente mediante iteradores (`forEach`).

> **Captura de código / ejecución:**
> <img width="990" height="368" alt="image" src="https://github.com/user-attachments/assets/478cfaa7-5988-4236-9dc7-b1b0e0152808" />
> <img width="814" height="477" alt="image" src="https://github.com/user-attachments/assets/3f07f337-c4a1-4a7a-a72a-d8c66015c225" />

---

### 5. Manipulación del DOM
Creación dinámica de elementos en el HTML (tarjetas de productos, imágenes, precios y etiquetas de descuento) mediante JavaScript.

> **Interfaz Web:**  
<img width="814" height="477" alt="image" src="https://github.com/user-attachments/assets/8d75f753-c7f8-4da8-85a4-ca484fa00d7a" />
<img width="990" height="494" alt="image" src="https://github.com/user-attachments/assets/acde9f21-b69b-41e3-adc3-b456cd0b526e" />
---

### 6. Asincronismo y Consumo de APIs
Implementación de peticiones HTTP asíncronas mediante `async/await` y `fetch` para obtener productos desde una API en tiempo real.

> **Consola DevTools / Network:**  
<img width="990" height="506" alt="image" src="https://github.com/user-attachments/assets/a053dc09-0b22-44a7-ab7b-33ce2a5edc3c" />
<img width="990" height="473" alt="image" src="https://github.com/user-attachments/assets/7a1094dd-22be-4053-bac8-55115d7ac0ae" />
<img width="990" height="153" alt="image" src="https://github.com/user-attachments/assets/e4efcd08-1473-4058-b969-5aec52006a1f" />
<img width="990" height="488" alt="image" src="https://github.com/user-attachments/assets/09ad2693-ea35-4237-854e-66823335ce15" />
<img width="990" height="264" alt="image" src="https://github.com/user-attachments/assets/8b17b2a3-ec3d-4e58-8970-ad7da2eb4235" />

---

### 7. LocalStorage
Persistencia de la última búsqueda realizada y generación de un historial de búsquedas recientes del usuario.

> **DevTools Application Storage:**  
<img width="990" height="477" alt="image" src="https://github.com/user-attachments/assets/5326c472-c537-4254-9ed3-12994599be7f" />
<img width="990" height="527" alt="image" src="https://github.com/user-attachments/assets/c5097fba-bae0-4daf-b31f-8304500fc6b7" />
---

### 8. Módulos (ES6 Modules)
Organización del código mediante importación y exportación de módulos (`import` / `export`) divididos en `api.js`, `dom.js`, `storage.js` y `main.js`.
<img width="990" height="700" alt="image" src="https://github.com/user-attachments/assets/5b0de53e-645b-455a-ac64-f39d72f5fd41" />
<img width="675" height="683" alt="image" src="https://github.com/user-attachments/assets/30a26ee6-80b7-4f29-b9d5-287e1bf3fc6f" />

<img width="990" height="942" alt="image" src="https://github.com/user-attachments/assets/71cb4136-785d-4da6-88c7-c16c4ec6cb3c" />

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
