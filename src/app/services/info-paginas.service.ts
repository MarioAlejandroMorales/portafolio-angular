import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginasService {

  info: any = {};
  cargada = false;
  equipo: any[] = [];
  constructor(private http: HttpClient) {
    this.cargarInfo();
    this.cargarEquipo();
  }

  private cargarInfo() {
    console.log('Servicio infoPaginaService');

    this.http.get('assets/data/data-pagina.json')
      .subscribe(resp => {
        // console.log(resp['twitter']);
        this.cargada = true;
        this.info = resp;
        // console.log(this.info['nombre_corto'] );
      });
  }

  private cargarEquipo() {
    this.http.get('https://angular-html-b3716.firebaseio.com/equipo.json')
      .subscribe((resp: any[]) => {
        this.equipo = resp;
        console.log(this.equipo);
      });
  }

}
