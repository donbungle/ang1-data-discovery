class BuscadorModalInfo {
  constructor({
    id = 0,
    nombre_fondo = '',
    gestora = '',
    perfil = '',
    isin = '',
    inv_min = 0.0,
    rent_5_anos = 0.0,
    v_liq = 0.0,
    rating_ms = 0.0,
    nivel_riesgo = 0.0,
    fecha_susc = '',
    fecha_reemb = '',
    valor_min = 0.0,
    valor_max = 0.0
  } = {}) {
    this.id = id;
    this.nombre_fondo = nombre_fondo;
    this.gestora = gestora;
    this.perfil = perfil;
    this.isin = isin;
    this.inv_min = inv_min;
    this.rent_5_anos = rent_5_anos;
    this.v_liq = v_liq;
    this.rating_ms = rating_ms;
    this.nivel_riesgo = nivel_riesgo;
    this.fecha_susc = fecha_susc;
    this.fecha_reemb = fecha_reemb;
    this.valor_min = valor_min;
    this.valor_max = valor_max;
  }
}

//module.exports = BuscadorModalInfo;