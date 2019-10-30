import { Component, EventEmitter, Input, Output } from "@angular/core";


@Component({
	selector: "login",
	templateUrl: "./login.component.html",
	styleUrls: ["./login.component.css"]
})
export class LoginComponent {

	@Input() headline
	@Output() onLogging = new EventEmitter()

	loguearse() {
		this.onLogging.emit()
	}

	valorIngresado(evt) {
		console.log(evt.target.value)
	}


}
