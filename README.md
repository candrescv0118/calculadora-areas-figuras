# Calculadora de Áreas de Figuras Geométricas

## 📋 Descripción del Proyecto

Esta es una aplicación web interactiva desarrollada con **React** que permite calcular el área de tres figuras geométricas:
- **Triángulo**
- **Rectángulo**
- **Cuadrado**

La aplicación utiliza **React Hooks** para gestionar el estado y proporciona una interfaz amigable con **Bootstrap** para una mejor experiencia visual.

## 🎯 Funcionalidades

- Calcular área del triángulo (base × altura ÷ 2)
- Calcular área del rectángulo (base × altura)
- Calcular área del cuadrado (lado × lado)
- Interfaz responsiva y moderna
- Validación de datos ingresados
- Resultado instantáneo al hacer clic en los botones

## 🛠️ Tecnologías Utilizadas

- **React** - Librería para construir interfaces
- **React Hooks** - useState para manejo de estado
- **Bootstrap 5** - Framework CSS para estilos
- **CSS3** - Estilos adicionales personalizados
- **Node.js & npm** - Gestión de dependencias

## 📂 Estructura del Proyecto

```
calculadora-areas-figuras/
├── src/
│   ├── index.jsx          # Componente principal
│   ├── figuras.jsx        # Lógica de cálculo de áreas
│   ├── App.jsx            # Componente App
│   └── App.css            # Estilos del App
├── public/
│   ├── index.html         # HTML principal con Bootstrap
│   └── styles.css         # Estilos CSS personalizados
├── package.json           # Dependencias del proyecto
└── README.md             # Este archivo
```

## 🚀 Instalación y Uso

### Prerrequisitos
- Node.js instalado
- npm o yarn

### Pasos de instalación

1. Clonar el repositorio:
```bash
git clone https://github.com/candrescv0118/calculadora-areas-figuras.git
cd calculadora-areas-figuras
```

2. Instalar dependencias:
```bash
npm install
```

3. Ejecutar el servidor de desarrollo:
```bash
npm start
```

4. Abrir en el navegador:
```
http://localhost:3000
```

## 💡 Cómo Usar

1. Selecciona la figura geométrica que deseas calcular
2. Ingresa los valores necesarios en los campos de entrada
3. Haz clic en el botón "Calcular"
4. El resultado del área se mostrará inmediatamente

## 📝 Ejemplo de Uso

**Triángulo:**
- Base: 10
- Altura: 5
- Resultado: 25 unidades²

**Rectángulo:**
- Base: 8
- Altura: 6
- Resultado: 48 unidades²

**Cuadrado:**
- Lado: 5
- Resultado: 25 unidades²

## 👨‍💻 Autor

Desarrollado por: **candrescv0118**

## 📄 Licencia

Este proyecto está disponible bajo licencia MIT.

---

**Nota:** Este proyecto fue desarrollado como parte de un ejercicio educativo para aprender React y hooks.