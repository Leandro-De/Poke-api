## PokeApi App

Reto usando la Api de PokeApi, se desarrollo de una interfaz web (SPA) en la cual pueda buscar, filtrar y ampliar información sobre diferentes Pokemon.

![App Screenshot](https://i.imgur.com/7cBURcj.png)

## Despliegue de la aplicación en linea

[Ver app desplegada](https://pokeapi-frontend.netlify.app/)

## Retos a cumplir

- Mostrar los primeros 20 pokemones.
- Buscar pokemones.
- Filtrar por tipo, color y genero de pokemones.
- Paginación.

## Especificaciones

#### Tecnologia usada

- Css
- ReactJs
- Hooks de React

#### Especificaciones App

- Responsive.
- Solución del problema al 70%.

## Refenrencia de API

#### Url principal API

```http
  "https://pokeapi.co/api/v2/pokemon/"
```

#### Get all pokemon

```http
  "https://pokeapi.co/api/v2/pokemon?offset=#&limit=#"
```

| Parameter | Type     | Description                 |
| :-------- | :------- | :-------------------------- |
| `offset`  | `string` | Cantidad deseada a mostrar  |
| `limit`   | `string` | Limite de deseado a obtener |

#### Get pokemon nane

```http
  https://pokeapi.co/api/v2/pokemon/${name}
```

| Parameter | Type     | Description        |
| :-------- | :------- | :----------------- |
| `name`    | `string` | Nombre del pokemon |

## Despliegue

Para instalar las dependencias del proyecto ejecutar el comando:

```bash
  npm install
```

## Autor

- [@Leandro-De](https://github.com/Leandro-De)
