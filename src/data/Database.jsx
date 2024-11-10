import space_1 from "../assets/espacios/space_1.jpg";
import space_2 from "../assets/espacios/space_2.jpg";
import space_3 from "../assets/espacios/space_3.jpg";
import space_4 from "../assets/espacios/space_4.jpg";
import space_5 from "../assets/espacios/space_5.jpg";
import space_6 from "../assets/espacios/space_6.jpg";
import space_7 from "../assets/espacios/space_7.jpg";
import space_8 from "../assets/espacios/space_8.jpg";
import space_9 from "../assets/espacios/space_9.jpg";
import space_10 from "../assets/espacios/space_10.jpg";

export const listadoUsuarios = [
  {
    id: 1000,
    dni: "111",
    password: "123456",
    nombre: "Jorgito test",
    apellido: "Ruanova",
    email: "jorge.ruanova@gmail.com",
    isAdmin: true,
  },
  {
    id: 2000,
    dni: "222",
    password: "123456",
    nombre: "Pepe",
    apellido: "Gonzalez",
    email: "pepe.gonzalez@gmail.com",
    isAdmin: false,
  },
  {
    id: 3000,
    dni: "333",
    password: "123456",
    nombre: "Pedro",
    apellido: "Perez",
    email: "pedro.perez@gmail.com",
    isAdmin: false,
    especialidad: "Cardiologo",
  },
  {
    id: 4000,
    dni: "444",
    password: "123456",
    nombre: "Luis",
    apellido: "Pepito",
    email: "luis.pepito@gmail.com",
    isAdmin: false,
    especialidad: "Traumatologia",
  },
];

export const listadoSalas = [
  {
    id: 10001,
    name: "Sala reuniones chica",
    capacidad: 6,
    apta_proyector: false,
    imagen_space: space_1,
    destacado: true,
  },
  {
    id: 10002,
    name: "Sala reuniones mediana",
    capacidad: 12,
    apta_proyector: true,
    imagen_space: space_2,
    destacado: false,
  },
  {
    id: 10003,
    name: "Sala reuniones grande",
    capacidad: 18,
    apta_proyector: true,
    imagen_space: space_3,
    destacado: true,
  },
  {
    id: 10004,
    name: "Sala Conferencias ",
    capacidad: 40,
    apta_proyector: true,
    imagen_space: space_4,
    destacado: true,
  },
  {
    id: 10005,
    name: "Box de reuniones chica 1",
    capacidad: 4,
    apta_proyector: false,
    imagen_space: space_5,
    destacado: false,
  },
  {
    id: 10006,
    name: "Box de reuniones chica 2",
    capacidad: 4,
    apta_proyector: false,
    imagen_space: space_6,
    destacado: true,
  },
  {
    id: 10007,
    name: "Box de reuniones chica 3",
    capacidad: 4,
    apta_proyector: false,
    imagen_space: space_7,
    destacado: true,
  },
  {
    id: 10008,
    name: "Box de reuniones chica 4",
    capacidad: 4,
    apta_proyector: false,
    imagen_space: space_8,
    destacado: false,
  },
  {
    id: 10009,
    name: "Box de reuniones chica 5",
    capacidad: 4,
    apta_proyector: false,
    imagen_space: space_9,
    destacado: false,
  },
  {
    id: 10010,
    name: "Sala de reuniones Premium",
    capacidad: 70,
    apta_proyector: false,
    imagen_space: space_10,
    destacado: true,
  },
];

export const rangosHorarios = [
  "08:00",
  "08:30",
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "12:00",
  "12:30",
  "13:00",
  "13:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
  "17:30",
  "18:00",
  "18:30",
];

export const listadoReservas = [
  {
    reserva_id: 124242,
    sala_id: 10001,
    sala_fecha: "2024-12-12",
    sala_hora: "08:30",
    usaurio_id: 2000,
    sala_estado: true,
  },
  {
    reserva_id: 5465465,
    sala_id: 10003,
    sala_fecha: "2024-12-22",
    sala_hora: "08:30",
    usaurio_id: 2000,
    sala_estado: false,
  },
  {
    reserva_id: 5465424265,
    sala_id: 10005,
    sala_fecha: "2025-6-22",
    sala_hora: "08:30",
    usaurio_id: 2000,
    sala_estado: true,
  },
];
