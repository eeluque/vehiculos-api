# vehiculos-api URL publica: https://vehiculos-api-production.up.railway.app/

API REST para gestión de vehículos y movimientos, desarrollada con Express, TypeScript y Supabase.

## Requisitos previos

- **Node.js** 18 o superior
- **npm** (incluido con Node.js)
- Cuenta en [Supabase](https://supabase.com) para la base de datos

## Instalación

1. Clona el repositorio:

```bash
git clone https://github.com/eeluque/vehiculos-api.git
cd vehiculos-api
```

2. Instala las dependencias:

```bash
npm install
```

## Configuración

1. Crea un archivo `.env` en la raíz del proyecto:

```bash
# .env
API_KEY=tu_clave_de_api_de_supabase
PORT=3001
```

2. Usar  `API_KEY` proporcionada

## Iniciar en desarrollo

Ejecuta el servidor con recarga automática (nodemon):

```bash
npm run dev
```

La API estará disponible en `http://localhost:3001` (o en el puerto definido en `PORT`).

## Endpoints

| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | `/vehiculos` | Listar todos los vehículos |
| POST | `/vehiculos` | Crear un vehículo |
| PATCH | `/vehiculos/:plate` | Actualizar un vehículo por placa |
| DELETE | `/vehiculos/:id` | Eliminar un vehículo |
| GET | `/movimientos` | Listar todos los movimientos |
| POST | `/movimientos` | Crear un movimiento |
| PATCH | `/movimientos/:id` | Actualizar un movimiento |
| DELETE | `/movimientos/:id` | Eliminar un movimiento |

## Estructura del proyecto

```
src/
├── app.ts              # Configuración de Express
├── server.ts           # Punto de entrada
├── config/
│   └── database.ts     # Cliente de Supabase
├── controllers/       # Lógica de negocio
├── middleware/        # Middlewares (validación, etc.)
├── models/            # Esquemas Zod para validación
└── routes/            # Definición de rutas
```
