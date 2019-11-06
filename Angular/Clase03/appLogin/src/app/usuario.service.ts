import {LoggerService} from "./logger.service";
import {Injectable} from "@angular/core";
@Injectable()
export class UsuarioService {
  correo: string;
  password: string;

  constructor(private loggerService: LoggerService) {
  }
  login() {
    this.loggerService.mostrarMensaje('usuario logueado')
  }
}
