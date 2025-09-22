class BuscadorRatios {
  constructor({
    id = 0,
    nombre_fondo = '',
    gestora = '',
    perfil = '',
    periodo = 0,
    volatilidad = 0.0,
    sharpe = 0.0,
    rr = 0.0,
    alpha = 0.0,
    beta = 0.0,
    info = 0.0,
    tracking_error = 0.0
  } = {}) {
    this.id = id;
    this.nombre_fondo = nombre_fondo;
    this.gestora = gestora;
    this.perfil = perfil;
    this.periodo = periodo;
    this.volatilidad = volatilidad;
    this.sharpe = sharpe;
    this.rr = rr;
    this.alpha = alpha;
    this.beta = beta;
    this.info = info;
    this.tracking_error = tracking_error;
  }
}

//module.exports = BuscadorRatios;