/**
 * Módulo de Figuras Geométricas
 * Contiene las funciones para calcular el área de diferentes figuras
 */

/**
 * Calcula el área de un triángulo
 * Fórmula: (base × altura) / 2
 * @param {number} base - La base del triángulo
 * @param {number} altura - La altura del triángulo
 * @returns {number} El área del triángulo
 */
export const calcularAreaTriangulo = (base, altura) => {
    if (base <= 0 || altura <= 0) {
        return null;
    }
    return (base * altura) / 2;
};

/**
 * Calcula el área de un rectángulo
 * Fórmula: base × altura
 * @param {number} base - La base del rectángulo
 * @param {number} altura - La altura del rectángulo
 * @returns {number} El área del rectángulo
 */
export const calcularAreaRectangulo = (base, altura) => {
    if (base <= 0 || altura <= 0) {
        return null;
    }
    return base * altura;
};

/**
 * Calcula el área de un cuadrado
 * Fórmula: lado × lado (lado²)
 * @param {number} lado - La medida del lado del cuadrado
 * @returns {number} El área del cuadrado
 */
export const calcularAreaCuadrado = (lado) => {
    if (lado <= 0) {
        return null;
    }
    return lado * lado;
};

/**
 * Valida que un valor sea un número válido y positivo
 * @param {string} valor - El valor a validar
 * @returns {boolean} True si es válido, False en caso contrario
 */
export const esValorValido = (valor) => {
    const numero = parseFloat(valor);
    return !isNaN(numero) && numero > 0;
};

/**
 * Formatea el resultado con dos decimales
 * @param {number} valor - El valor a formatear
 * @returns {string} El valor formateado
 */
export const formatearResultado = (valor) => {
    if (valor === null) {
        return '0';
    }
    return valor.toFixed(2);
};