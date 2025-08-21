# Dashboard Dataset - Módulo de Análisis Financiero

Este módulo proporciona un análisis financiero completo del dataset `dataset_valores_2024.csv` utilizando gráficos interactivos con DC.js y Crossfilter.

## Características Principales

### 📊 Visualizaciones Interactivas
- **Gráfico de Torta**: Distribución por categorías de instrumentos financieros
- **Gráfico de Barras**: Valores promedio por categoría
- **Gráfico de Línea**: Evolución temporal mensual
- **Gráfico de Barras Trimestral**: Análisis por trimestres

### 📈 Métricas de Análisis Financiero
- **Métricas Básicas**: Total de registros, valor total, promedio y volatilidad
- **Análisis de Riesgo**: 
  - Retorno promedio
  - Volatilidad de portafolio
  - Ratio Sharpe
  - Maximum Drawdown
  - Value at Risk (VaR) al 95% y 99%

### 📋 Análisis por Categorías
Los datos incluyen las siguientes categorías de instrumentos financieros:
- Deuda de corto plazo (≤ 90 días)
- Deuda de corto plazo (≤ 365 días)
- Deuda de mediano y largo plazo
- De libre inversión
- De capitalización
- Dirigido a inversionistas calificados
- Estructurado
- Mixto

## Estructura del Módulo

```
/app/modules/dashboard-dataset/
├── dashboardDatasetModule.js     # Definición del módulo
├── dashboardDatasetConfig.js     # Configuración de rutas
├── dashboardDatasetCtrl.js       # Controlador principal
├── dashboardDatasetService.js    # Servicios de datos
└── dashboard-dataset.html        # Plantilla HTML
```

## Dataset Analizado

**Archivo**: `dataset_valores_2024.csv`
- **Período**: Año 2024 completo
- **Registros**: 367 transacciones
- **Campos**: 
  - `valor`: Monto de la transacción
  - `fecha`: Timestamp ISO 8601
  - `categoria`: Tipo de instrumento financiero

**Rango de valores**: $100.30 - $996.70
**Valor total**: Aproximadamente $203,000

## Funcionalidades del Dashboard

### 1. Análisis Temporal
- **Vista Mensual**: Tendencias mes a mes
- **Vista Trimestral**: Consolidación por trimestres
- **Serie de Tiempo**: Evolución diaria de valores

### 2. Análisis de Categorías
- **Distribución**: Porcentaje de contribución por categoría
- **Comparación**: Valores promedio entre categorías
- **Volatilidad**: Medición de riesgo por categoría

### 3. Métricas de Riesgo Financiero
- **Retorno Promedio**: Rendimiento esperado
- **Volatilidad**: Medida de dispersión de los rendimientos
- **Ratio Sharpe**: Relación riesgo-rendimiento
- **Maximum Drawdown**: Mayor pérdida desde un máximo
- **VaR**: Pérdida potencial máxima con un nivel de confianza dado

### 4. Exportación de Datos
- **CSV**: Formato comma-separated values
- **JSON**: Formato JavaScript Object Notation

## Tecnologías Utilizadas

- **DC.js**: Gráficos multidimensionales reactivos
- **Crossfilter**: Filtrado rápido de datos multidimensionales
- **D3.js**: Visualizaciones de datos
- **AngularJS**: Framework de aplicación
- **Bootstrap**: Framework CSS responsivo

## Ejemplo de Uso

### Navegación
Para acceder al dashboard, visite: `/#/dashboard-dataset`

### Interactividad
- Los gráficos son **interactivos**: hacer clic en elementos para filtrar
- **Crossfilter**: Filtros aplicados a todos los gráficos simultáneamente
- **Responsive**: Adaptable a diferentes tamaños de pantalla

### Interpretación Financiera

#### Análisis de Diversificación
El dashboard permite evaluar la diversificación del portafolio a través de:
- Distribución por tipos de instrumentos
- Concentración de riesgo por categoría
- Análisis temporal de exposición

#### Gestión de Riesgo
Las métricas calculadas ayudan en:
- **VaR**: Estimación de pérdidas potenciales
- **Sharpe Ratio**: Evaluación de eficiencia de rendimientos
- **Drawdown**: Análisis de resistencia a pérdidas

#### Optimización de Portafolio
Los datos procesados permiten:
- Identificar categorías de mejor rendimiento
- Detectar períodos de mayor volatilidad
- Planificar rebalanceo de portafolio

## Configuración Técnica

### Dependencias
El módulo requiere que estén cargadas las siguientes librerías:
- D3.js v7+
- Crossfilter2
- DC.js v4+
- AngularJS 1.x

### Instalación
1. El módulo ya está registrado en `app/app.js`
2. Los scripts están incluidos en `index.html`
3. Los datos CSV se cargan automáticamente desde la raíz del proyecto

### Personalización
Para modificar los gráficos, edite las configuraciones en `dashboardDatasetCtrl.js`:
```javascript
vm.chartConfigs = {
    categoryPie: {
        data: vm.processedData.byCategory,
        dimensions: ['categoria'],
        groups: ['total'],
        width: 400,
        height: 300
    }
    // ... más configuraciones
};
```

## Caso de Uso Práctico

Este dashboard es ideal para:

### 📊 **Analistas Financieros**
- Monitoreo de exposición por tipo de instrumento
- Análisis de concentración de riesgo
- Evaluación de rendimientos históricos

### 🏦 **Gestores de Portafolio**
- Decisiones de rebalanceo
- Análisis de diversificación
- Gestión de límites de riesgo

### 👨‍💼 **Ejecutivos**
- Resúmenes ejecutivos visuales
- Indicadores clave de rendimiento
- Reportes de riesgo consolidados

---

**Nota**: Este es un ejemplo demostrativo utilizando datos sintéticos para propósitos educativos y de desarrollo.