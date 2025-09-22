class BuscadorRentabilidadSparkline {
  constructor({
    id = 0,
    fecha = new Date(),
    valor = 0.0
  } = {}) {
    this.id = id;
    this.fecha = fecha;
    this.valor = valor;
  }
}

//module.exports = BuscadorRentabilidadSparkline;