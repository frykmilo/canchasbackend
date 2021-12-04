import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('reservas')
export class ReservaEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;
    
    @Column()
    fechaReserva: string;

    @Column()
    email: string;

    @Column()
    celular: string;
    
    @Column()
    horaReserva: string;

}