import { IReserva } from "../interfaces/reserva.interface";

export class CreateReservaDTO implements IReserva {
    
    readonly id?: number;
    readonly nombre: string;
    readonly email: string;
    readonly celular: string;
    readonly fechaReserva: string;
    readonly horaReserva: string;

}
