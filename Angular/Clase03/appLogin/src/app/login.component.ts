import {Component, EventEmitter, Input, Output} from "@angular/core";
import {UsuarioService} from "./usuario.service";


@Component({
  selector: "login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent {

  @Input() headline
  @Output() onLogging = new EventEmitter()
  correo: string;
  password: string;

  constructor(private servicio: UsuarioService) {

  }

  loguearse() {
    this.servicio.correo = this.correo;
    this.servicio.password = this.password;
    this.servicio.login();
  }

  valorIngresado(evt) {
    this.correo = evt.target.value;
    console.log(evt.target.value)
  }

  passwordIngresado(evt) {
    this.password = evt.target.value;
  }


}
