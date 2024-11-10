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

export const usersList = [
  {
    id: 1000,
    dni: "111",
    password: "123456",
    nombre: "Jorgito test",
    apellido: "Ruanova",
    email: "jorge.ruanova@gmail.com",
    esMedico: false,
  },
  {
    id: 2000,
    dni: "222",
    password: "123456",
    nombre: "Pepe",
    apellido: "Gonzalez",
    email: "pepe.gonzalez@gmail.com",
    esMedico: false,
  },
  {
    id: 3000,
    dni: "333",
    password: "123456",
    nombre: "Pedro",
    apellido: "Perez",
    email: "pedro.perez@gmail.com",
    esMedico: true,
    especialidad: "Cardiologo",
  },
  {
    id: 4000,
    dni: "444",
    password: "123456",
    nombre: "Luis",
    apellido: "Pepito",
    email: "luis.pepito@gmail.com",
    esMedico: true,
    especialidad: "Traumatologia",
  },
];

export const spacesList = [
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
