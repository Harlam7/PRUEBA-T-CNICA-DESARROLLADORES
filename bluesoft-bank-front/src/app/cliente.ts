export class Cliente {
  id: number;
  nombre: string;
  ciudad_origen: string;
  ciudad_actual: string;

  constructor(id: number, nombre: string, ciudad_origen: string, ciudad_actual: string) {
    this.id = id;
    this.nombre = nombre;
    this.ciudad_origen = ciudad_origen;
    this.ciudad_actual = ciudad_actual;
  }
}
