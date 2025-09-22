class BuscadorRentabilidad {
  constructor({
    id = 0,
    nombre_fondo = '',
    gestora = '',
    perfil = '',
    rent_anual = 0.0,
    rent_1_mes = 0.0,
    rent_3_meses = 0.0,
    rent_6_meses = 0.0,
    rent_1_ano = 0.0,
    rent_3_anos = 0.0,
    rent_5_anos = 0.0
  } = {}) {
    this.id = id;
    this.nombre_fondo = nombre_fondo;
    this.gestora = gestora;
    this.perfil = perfil;
    this.rent_anual = rent_anual;
    this.rent_1_mes = rent_1_mes;
    this.rent_3_meses = rent_3_meses;
    this.rent_6_meses = rent_6_meses;
    this.rent_1_ano = rent_1_ano;
    this.rent_3_anos = rent_3_anos;
    this.rent_5_anos = rent_5_anos;
  }
}

//module.exports = BuscadorRentabilidad;