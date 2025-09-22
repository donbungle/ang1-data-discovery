class BuscadorGeneral {
  constructor({
    id = 0,
    nombre_fondo = '',
    gestora = '',
    perfil = '',
    isin = '',
    activo = '',
    sector = '',
    categoria = '',
    area_geo = ''
  } = {}) {
    this.id = id;
    this.nombre_fondo = nombre_fondo;
    this.gestora = gestora;
    this.perfil = perfil;
    this.isin = isin;
    this.activo = activo;
    this.sector = sector;
    this.categoria = categoria;
    this.area_geo = area_geo;
  }
}

//module.exports = BuscadorGeneral;