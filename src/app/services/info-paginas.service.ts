import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginasService {

  info: any = {};
  cargada = false;

  constructor(private http: HttpClient) {
    console.log('Servicio infoPaginaService');

    this.http.get('assets/data/data-pagina.json')
      .subscribe(resp => {
        // console.log(resp['twitter']);
        this.cargada = true;
        this.info = resp;
// tslint:disable-next-line: no-string-literal
        console.log(this.info['nombre_corto'] );
      });
  }
}
