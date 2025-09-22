class BuscadorRanking {
  constructor({
    id = 0,
    nombre_fondo = '',
    gestora = '',
    perfil = '',
    rank_ms_ano_actual = 0.0,
    rank_ms_1_mes = 0.0,
    rank_ms_3_meses = 0.0,
    rank_ms_6_meses = 0.0,
    rank_ms_1_ano = 0.0,
    rank_ms_3_anos = 0.0,
    rank_ms_5_anos = 0.0,
    rank_ms_10_anos = 0.0
  } = {}) {
    this.id = id;
    this.nombre_fondo = nombre_fondo;
    this.gestora = gestora;
    this.perfil = perfil;
    this.rank_ms_ano_actual = rank_ms_ano_actual;
    this.rank_ms_1_mes = rank_ms_1_mes;
    this.rank_ms_3_meses = rank_ms_3_meses;
    this.rank_ms_6_meses = rank_ms_6_meses;
    this.rank_ms_1_ano = rank_ms_1_ano;
    this.rank_ms_3_anos = rank_ms_3_anos;
    this.rank_ms_5_anos = rank_ms_5_anos;
    this.rank_ms_10_anos = rank_ms_10_anos;
  }
}

//module.exports = BuscadorRanking;