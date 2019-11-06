import { Component, OnInit } from '@angular/core';
import {UsuarioService} from "../usuario.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  correo: string;
  password: string;
  visible = false;
  constructor(private servicio: UsuarioService) { }

  ngOnInit() {
  }
  mostrarData() {
    this.visible = true
  }
}
