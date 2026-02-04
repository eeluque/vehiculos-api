# vehiculos-api

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

2. Obtén tu `API_KEY` desde el panel de Supabase:
   - Entra a tu proyecto en [Supabase](https://app.supabase.com)
   - Ve a **Settings** → **API**
   - Copia la clave **anon** o **service_role** según los permisos que necesites

> **Nota:** El archivo `.env` no se sube al repositorio por seguridad. No compartas tu clave de API.

## Iniciar en desarrollo

Ejecuta el servidor con recarga automática (nodemon):

```bash
npm start
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
