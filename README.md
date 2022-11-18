# Pulpe Admin

## TypeScript Project

> Una pulpería era un establecimiento comercial de venta al menudeo de artículos de todo tipo (entre ellos, comestibles, bebidas, herramientas y ropa), ubicado en el campo o en la ciudad y en general montado con un capital modesto. Además de un puesto de venta, constituía un lugar de consumo y recreación donde se podía comer, beber, cantar o practicar distintos juegos. Al comerciante que la poseía o administraba se lo denominaba pulpero.

## Folder Structure

```
.
├── build/
│ └── ...
├── coverage/
│ └── ...
├── node_modules/
│ └── ...
├── source/
│ ├── db/
│ ├── handlers/
│ ├── middlewares/
│ ├── public/
│ ├── repository/
│ ├── routes/
│ ├── schemas/
│ ├── services/
│ ├── types/
│ ├── utils/
│ ├── views/
│ ├── app.ts
│ └── index.ts
├── .env.example
├── jest.config.ts
├── package-lock.json
├── package.json
├── README.md
└── tsconfig.json
```

## How to install dependencies:

```sh
npm install
```

## Show migrations list

```sh
npm run typeorm migration:show -- -d ./source/db/connection.ts
```

## How to run migrations (+ up):

```sh
npm run typeorm migration:run -- -d ./source/db/connection.ts
```

## How to revert migrations (- down):

```sh
npm run typeorm migration:revert -- -d ./source/db/connection.ts
```

## How to create a migration:

```sh
npm run typeorm migration:create -- ./source/db/migrations/
```
