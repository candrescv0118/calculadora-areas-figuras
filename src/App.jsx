import React, { useState } from 'react';
import {
    calcularAreaTriangulo,
    calcularAreaRectangulo,
    calcularAreaCuadrado,
    esValorValido,
    formatearResultado
} from './figuras';

function App() {
    // Estados para el Triángulo
    const [baseTriangulo, setBaseTriangulo] = useState('');
    const [alturaTriangulo, setAlturaTriangulo] = useState('');
    const [areaTriangulo, setAreaTriangulo] = useState(null);

    // Estados para el Rectángulo
    const [baseRectangulo, setBaseRectangulo] = useState('');
    const [alturaRectangulo, setAlturaRectangulo] = useState('');
    const [areaRectangulo, setAreaRectangulo] = useState(null);

    // Estados para el Cuadrado
    const [ladoCuadrado, setLadoCuadrado] = useState('');
    const [areaCuadrado, setAreaCuadrado] = useState(null);

    // Estados para mensajes de error
    const [errorTriangulo, setErrorTriangulo] = useState('');
    const [errorRectangulo, setErrorRectangulo] = useState('');
    const [errorCuadrado, setErrorCuadrado] = useState('');

    // Funciones para calcular el área del Triángulo
    const handleCalcularTriangulo = () => {
        setErrorTriangulo('');

        if (!esValorValido(baseTriangulo) || !esValorValido(alturaTriangulo)) {
            setErrorTriangulo('Por favor, ingresa valores válidos y positivos');
            setAreaTriangulo(null);
            return;
        }

        const area = calcularAreaTriangulo(parseFloat(baseTriangulo), parseFloat(alturaTriangulo));
        setAreaTriangulo(area);
    };

    // Funciones para calcular el área del Rectángulo
    const handleCalcularRectangulo = () => {
        setErrorRectangulo('');

        if (!esValorValido(baseRectangulo) || !esValorValido(alturaRectangulo)) {
            setErrorRectangulo('Por favor, ingresa valores válidos y positivos');
            setAreaRectangulo(null);
            return;
        }

        const area = calcularAreaRectangulo(parseFloat(baseRectangulo), parseFloat(alturaRectangulo));
        setAreaRectangulo(area);
    };

    // Funciones para calcular el área del Cuadrado
    const handleCalcularCuadrado = () => {
        setErrorCuadrado('');

        if (!esValorValido(ladoCuadrado)) {
            setErrorCuadrado('Por favor, ingresa un valor válido y positivo');
            setAreaCuadrado(null);
            return;
        }

        const area = calcularAreaCuadrado(parseFloat(ladoCuadrado));
        setAreaCuadrado(area);
    };

    // Función para limpiar todos los estados
    const handleLimpiar = () => {
        setBaseTriangulo('');
        setAlturaTriangulo('');
        setAreaTriangulo(null);
        setErrorTriangulo('');

        setBaseRectangulo('');
        setAlturaRectangulo('');
        setAreaRectangulo(null);
        setErrorRectangulo('');

        setLadoCuadrado('');
        setAreaCuadrado(null);
        setErrorCuadrado('');
    };

    return (
        <div className="container mt-5">
            {/* Header */}
            <div className="header mb-5">
                <h1>📐 Calculadora de Áreas</h1>
                <p>Calcula el área de diferentes figuras geométricas de forma rápida y sencilla</p>
            </div>

            {/* Grid de figuras */}
            <div className="figures-grid">
                {/* Tarjeta del Triángulo */}
                <div className="figure-card">
                    <h3>🔺 Triángulo</h3>
                    <p className="text-muted small mb-3">Fórmula: (base × altura) ÷ 2</p>

                    <div className="form-group">
                        <label htmlFor="baseTriangulo">Base:</label>
                        <input
                            id="baseTriangulo"
                            type="number"
                            className={`form-control ${errorTriangulo ? 'error' : ''}`}
                            placeholder="Ingresa la base"
                            value={baseTriangulo}
                            onChange={(e) => setBaseTriangulo(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="alturaTriangulo">Altura:</label>
                        <input
                            id="alturaTriangulo"
                            type="number"
                            className={`form-control ${errorTriangulo ? 'error' : ''}`}
                            placeholder="Ingresa la altura"
                            value={alturaTriangulo}
                            onChange={(e) => setAlturaTriangulo(e.target.value)}
                        />
                    </div>

                    {errorTriangulo && <div className="error-message">{errorTriangulo}</div>}

                    <button
                        className="btn-calculate"
                        onClick={handleCalcularTriangulo}
                    >
                        Calcular Área
                    </button>

                    {areaTriangulo !== null && (
                        <div className="result show">
                            <p>Área del Triángulo</p>
                            <div className="area-value">{formatearResultado(areaTriangulo)}</div>
                            <p className="text-muted small mt-2">unidades²</p>
                        </div>
                    )}
                </div>

                {/* Tarjeta del Rectángulo */}
                <div className="figure-card">
                    <h3>▭ Rectángulo</h3>
                    <p className="text-muted small mb-3">Fórmula: base × altura</p>

                    <div className="form-group">
                        <label htmlFor="baseRectangulo">Base:</label>
                        <input
                            id="baseRectangulo"
                            type="number"
                            className={`form-control ${errorRectangulo ? 'error' : ''}`}
                            placeholder="Ingresa la base"
                            value={baseRectangulo}
                            onChange={(e) => setBaseRectangulo(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="alturaRectangulo">Altura:</label>
                        <input
                            id="alturaRectangulo"
                            type="number"
                            className={`form-control ${errorRectangulo ? 'error' : ''}`}
                            placeholder="Ingresa la altura"
                            value={alturaRectangulo}
                            onChange={(e) => setAlturaRectangulo(e.target.value)}
                        />
                    </div>

                    {errorRectangulo && <div className="error-message">{errorRectangulo}</div>}

                    <button
                        className="btn-calculate"
                        onClick={handleCalcularRectangulo}
                    >
                        Calcular Área
                    </button>

                    {areaRectangulo !== null && (
                        <div className="result show">
                            <p>Área del Rectángulo</p>
                            <div className="area-value">{formatearResultado(areaRectangulo)}</div>
                            <p className="text-muted small mt-2">unidades²</p>
                        </div>
                    )}
                </div>

                {/* Tarjeta del Cuadrado */}
                <div className="figure-card">
                    <h3>◻ Cuadrado</h3>
                    <p className="text-muted small mb-3">Fórmula: lado × lado</p>

                    <div className="form-group">
                        <label htmlFor="ladoCuadrado">Lado:</label>
                        <input
                            id="ladoCuadrado"
                            type="number"
                            className={`form-control ${errorCuadrado ? 'error' : ''}`}
                            placeholder="Ingresa la medida del lado"
                            value={ladoCuadrado}
                            onChange={(e) => setLadoCuadrado(e.target.value)}
                        />
                    </div>

                    {errorCuadrado && <div className="error-message">{errorCuadrado}</div>}

                    <button
                        className="btn-calculate"
                        onClick={handleCalcularCuadrado}
                    >
                        Calcular Área
                    </button>

                    {areaCuadrado !== null && (
                        <div className="result show">
                            <p>Área del Cuadrado</p>
                            <div className="area-value">{formatearResultado(areaCuadrado)}</div>
                            <p className="text-muted small mt-2">unidades²</p>
                        </div>
                    )}
                </div>
            </div>

            {/* Información adicional */}
            <div className="info-box">
                <h4>💡 Instrucciones de Uso</h4>
                <ul>
                    <li><strong>Paso 1:</strong> Selecciona la figura geométrica que deseas calcular</li>
                    <li><strong>Paso 2:</strong> Ingresa los valores necesarios en los campos de entrada</li>
                    <li><strong>Paso 3:</strong> Haz clic en el botón "Calcular Área"</li>
                    <li><strong>Paso 4:</strong> El resultado se mostrará inmediatamente debajo del botón</li>
                    <li><strong>Nota:</strong> Ingresa solo valores numéricos positivos</li>
                </ul>
            </div>

            {/* Botón para limpiar */}
            <div className="text-center mt-4 mb-5">
                <button
                    className="btn btn-outline-light btn-lg"
                    onClick={handleLimpiar}
                    style={{ borderWidth: '2px' }}
                >
                    🔄 Limpiar Todo
                </button>
            </div>

            {/* Footer */}
            <div className="footer">
                <p>© 2024 Calculadora de Áreas - Desarrollado con React y Hooks</p>
                <p>Proyecto educativo para aprender React</p>
            </div>
        </div>
    );
}

export default App;