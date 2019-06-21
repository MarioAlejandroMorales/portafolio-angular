import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interface/producto.interface';
import { ProductoDescripcion } from '../interface/producto-descripcion.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  cargando = true;
  productos: Producto[] = [];
  productosFiltrados: Producto[] = [];
  constructor(private http: HttpClient) {
    this.cargarProductos();
  }

  private cargarProductos() {

    return new Promise((resolve, reject) => {
      this.http.get('https://angular-html-b3716.firebaseio.com/productos_idx.json')
      .subscribe((resp: Producto[]) => {
        // console.log(resp);
        this.productos = resp;
        this.cargando = false;
        resolve();
      });
    });

  }

  getProducto(id: string) {
    return this.http.get(`https://angular-html-b3716.firebaseio.com/productos/${id}.json`);
  }

  buscarProducto(termino: string) {
    if (this.productos.length === 0) {
      this.cargarProductos().then( () => {
        this.filtrarProductos(termino);
      });
    } else {
      this.filtrarProductos(termino);
    }
  }

  filtrarProductos(termino: string) {
    /* this.productosFiltrados = this.productos.filter( producto =>{
      return true;
    });*/
    // console.log(this.productosFiltrados);

    this.productosFiltrados = [];
    termino = termino.toLowerCase();

    this.productos.forEach( prod => {
      const titulo = prod.titulo.toLowerCase();
      if (prod.categoria.indexOf(termino) >= 0 || titulo.indexOf(termino) >= 0) {
        this.productosFiltrados.push(prod);
      }
    });

  }
}
