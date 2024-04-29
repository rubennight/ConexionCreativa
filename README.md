# Conexión Creativa
## Descripción del proyecto:

El proyecto consiste en una aplicación web que actúa como una plataforma para usuarios y artistas, permitiéndoles registrarse, interactuar y compartir contenido relacionado con la música. El canister proporciona una serie de funciones para gestionar usuarios y artistas, como la creación, lectura, actualización y eliminación de registros de usuario y artista.

## Funciones del Canister:

Crear Usuario (createUser): Permite registrar un nuevo usuario en la plataforma proporcionando información como nombre, apellidos, correo electrónico, nombre de usuario y contraseña. El sistema asigna automáticamente un identificador único al usuario.

Leer Usuario por ID (readUserById): Permite buscar y recuperar la información de un usuario específico utilizando su identificador único.

Leer Usuarios (readUsers): Recupera una lista de todos los usuarios registrados en la plataforma.

Actualizar Usuario (updateUser): Permite modificar la información de un usuario existente en la plataforma, como su nombre, apellidos, correo electrónico, nombre de usuario o contraseña.

Crear Artista (createArtist): Permite registrar un nuevo artista en la plataforma proporcionando información como nombre, descripción, género musical, una breve descripción, calificación y URL de referencia.

Leer Artistas (readArtists): Recupera una lista de todos los artistas registrados en la plataforma.

Eliminar Artista (deleteArtist): Permite eliminar el registro de un artista de la plataforma utilizando su identificador único.

------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Welcome to your new usuarios project and to the Internet Computer development community. By default, creating a new project adds this README and some template files to your project directory. You can edit these template files to customize your project and to include your own code to speed up the development cycle.

To get started, you might want to explore the project directory structure and the default configuration file. Working with this project in your development environment will not affect any production deployment or identity tokens.

To learn more before you start working with usuarios, see the following documentation available online:

- [Quick Start](https://internetcomputer.org/docs/current/developer-docs/setup/deploy-locally)
- [SDK Developer Tools](https://internetcomputer.org/docs/current/developer-docs/setup/install)

If you want to start working on your project right away, you might want to try the following commands:

```bash
cd usuarios/
dfx help
dfx canister --help
```

## Running the project locally

If you want to test your project locally, you can use the following commands:

```bash
# Starts the replica, running in the background
dfx start --background

# Deploys your canisters to the replica and generates your candid interface
dfx deploy
```

Once the job completes, your application will be available at `http://localhost:4943?canisterId={asset_canister_id}`.

If you have made changes to your backend canister, you can generate a new candid interface with

```bash
npm run generate
```

at any time. This is recommended before starting the frontend development server, and will be run automatically any time you run `dfx deploy`.

If you are making frontend changes, you can start a development server with

```bash
npm start
```

Which will start a server at `http://localhost:8080`, proxying API requests to the replica at port 4943.

### Note on frontend environment variables

If you are hosting frontend code somewhere without using DFX, you may need to make one of the following adjustments to ensure your project does not fetch the root key in production:

- set`DFX_NETWORK` to `ic` if you are using Webpack
- use your own preferred method to replace `process.env.DFX_NETWORK` in the autogenerated declarations
  - Setting `canisters -> {asset_canister_id} -> declarations -> env_override to a string` in `dfx.json` will replace `process.env.DFX_NETWORK` with the string in the autogenerated declarations
- Write your own `createActor` constructor
