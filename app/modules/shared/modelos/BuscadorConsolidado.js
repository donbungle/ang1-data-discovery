class BuscadorConsolidado {
  constructor({
    id,
    nombre_fondo,
    gestora,
    perfil,
    v_liq,
    divisa,
    activo,
    fecha_susc,
    fecha_reemb,
    comision_gestion,
    comision_ter_ogc,
    comision_susc,
    comision_reemb,
    inv_min_inicial,
    rating_ms,
    rent_anual,
    rent_1_mes,
    rent_3_meses,
    rent_6_meses,
    rent_1_ano,
    rent_3_anos,
    rent_5_anos,
    periodo,
    volatilidad,
    sharpe,
    rr,
    alpha,
    beta,
    info,
    tracking_error,
    rank_ms_ano_actual,
    rank_ms_1_mes,
    rank_ms_3_meses,
    rank_ms_6_meses,
    rank_ms_1_ano,
    rank_ms_3_anos,
    rank_ms_5_anos,
    rank_ms_10_anos,
    isin,
    sector,
    categoria,
    area_geo,
    nivel_riesgo,
    valor_min,
    valor_max
  } = {}) {
    this.id = id;
    this.nombre_fondo = nombre_fondo;
    this.gestora = gestora;
    this.perfil = perfil;
    this.v_liq = v_liq;
    this.divisa = divisa;
    this.activo = activo;
    this.fecha_susc = fecha_susc;
    this.fecha_reemb = fecha_reemb;
    this.comision_gestion = comision_gestion;
    this.comision_ter_ogc = comision_ter_ogc;
    this.comision_susc = comision_susc;
    this.comision_reemb = comision_reemb;
    this.inv_min_inicial = inv_min_inicial;
    this.rating_ms = rating_ms;
    this.rent_anual = rent_anual;
    this.rent_1_mes = rent_1_mes;
    this.rent_3_meses = rent_3_meses;
    this.rent_6_meses = rent_6_meses;
    this.rent_1_ano = rent_1_ano;
    this.rent_3_anos = rent_3_anos;
    this.rent_5_anos = rent_5_anos;
    this.periodo = periodo;
    this.volatilidad = volatilidad;
    this.sharpe = sharpe;
    this.rr = rr;
    this.alpha = alpha;
    this.beta = beta;
    this.info = info;
    this.tracking_error = tracking_error;
    this.rank_ms_ano_actual = rank_ms_ano_actual;
    this.rank_ms_1_mes = rank_ms_1_mes;
    this.rank_ms_3_meses = rank_ms_3_meses;
    this.rank_ms_6_meses = rank_ms_6_meses;
    this.rank_ms_1_ano = rank_ms_1_ano;
    this.rank_ms_3_anos = rank_ms_3_anos;
    this.rank_ms_5_anos = rank_ms_5_anos;
    this.rank_ms_10_anos = rank_ms_10_anos;
    this.isin = isin;
    this.sector = sector;
    this.categoria = categoria;
    this.area_geo = area_geo;
    this.nivel_riesgo = nivel_riesgo;
    this.valor_min = valor_min;
    this.valor_max = valor_max;
  }
}

//module.exports = BuscadorConsolidado;