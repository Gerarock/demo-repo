import { Component } from '@angular/core';
import { Empleado } from './models/empleado';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  empleadoArray: Empleado[] = [
    {id: 1, nombre: 'Gerardo Veliz', pais: 'Chile'},
    {id: 2, nombre: 'Sebastian Veliz', pais: 'Brasil'},
    {id: 3, nombre: 'Daniela Cayun', pais: 'China'},
  ];

  // Variable para usar en Two-Way Data Binding
  public seleccionaEmpleado: Empleado = new Empleado();

  agregarEditar() {
    if (this.seleccionaEmpleado.id === 0) {
      this.seleccionaEmpleado.id = this.empleadoArray.length + 1; // Aumenta el id
      this.empleadoArray.push(this.seleccionaEmpleado); // Agrega un nuevo dato al arreglo con la propiedad push
    } else {
      this.seleccionaEmpleado = new Empleado(); // limpia los datos del input al pasarle un objeto vacio
  }}

  editarLista(empleado: Empleado) {
    this.seleccionaEmpleado = empleado;
  }

  eliminarEmpleado() {
    if (confirm('¿Esta seguro de eliminar el registro?')) {
      // Usa funcion Filter para filtrar recorre cada uno de los empleados
      this.empleadoArray = this.empleadoArray.filter(x => x !== this.seleccionaEmpleado);
      this.seleccionaEmpleado = new Empleado();
    }
  }

}
