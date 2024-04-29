import {
    AzleOpt,
    AzleText,
    Canister,
    Err,
    int,
    Ok,
    Opt,
    Principal,
    query,
    Record,
    Result,
    StableBTreeMap,
    text,
    update,
    Variant,
    Vec
} from 'azle';

const Usuario = Record({
    id: Principal,
    nombre: text,
    apellidos: text,
    email: text,
    usuario: text,
    password: text
})

type Usuario = typeof Usuario.tsType;

const Artista = Record({
    id: Principal,
    nombre: text,
    descripcion: text,
    genero: text,
    resBreve: text,
    calificacion: int,
    url: text
})

type Artista = typeof Artista.tsType;

const AplicationError = Variant({
    UserDoesNotExist: text
});

type AplicationError = typeof AplicationError.tsType;

let usuarios = StableBTreeMap<Principal, Usuario>(0);
let artistas = StableBTreeMap<Principal, Artista>(0);

export default Canister({
    createUser: update([text, text, text, text, text], Usuario, (nombre, apellidos, email, usuario, password) => {
        const id = generateId();

        const nuevoUsuario: Usuario = {
            id: id,
            nombre: nombre,
            apellidos: apellidos,
            email: email,
            usuario: usuario,
            password: password
        }

        usuarios.insert(nuevoUsuario.id, nuevoUsuario);

        return nuevoUsuario;
    }),
    readUserById: query([text], Opt(Usuario), (id) => {
        return usuarios.get(Principal.fromText(id))
    }),
    readUsers: query([], Vec(Usuario), () => {
        return usuarios.values();
    }),
    updateUser: update(
        [text, text, text, text, text, text], 
        Result(Usuario, AplicationError), 
        (id, nombre, apellidos, email, usuario, password) => {
        const userOpt = usuarios.get(Principal.fromText(id))

        if('None' in userOpt){
            return Err({
                UserDoesNotExist: id
            });
        }

        const nuevoUsuario: Usuario = {
            id: Principal.fromText(id),
            nombre: nombre,
            apellidos: apellidos,
            email: email,
            usuario: usuario,
            password: password
        }

        usuarios.remove(Principal.fromText(id))
        usuarios.insert(Principal.fromText(id), nuevoUsuario)

        return Ok(nuevoUsuario)
    }),
    createArtist: update([text, text, text, text, int, text], Artista, (nombre, descripcion, genero, resBreve, calificacion, url) => {
        const id = generateId();

        const nuevoArtista: Artista = {
            id: id,
            nombre: nombre,
            descripcion: descripcion,
            genero: genero,
            resBreve: resBreve,
            calificacion: calificacion,
            url: url
        }

        artistas.insert(nuevoArtista.id, nuevoArtista);
        return nuevoArtista;
    }),
    readArtists: query([], Vec(Artista), () => {
        return artistas.values();
    }),
    deleteArtist: update([text], Result(Artista, AplicationError), (id) =>{
        const artistOpt = artistas.get(Principal.fromText(id));

        if('None' in artistOpt){
            return Err({
                UserDoesNotExist: id
            });
        }

        const artista = artistOpt.Some;
        artistas.remove(artista.id);
        return Ok(artista); 
    })
})

function generateId(): Principal {
    const randomBytes = new Array(29)
        .fill(0)
        .map((_) => Math.floor(Math.random() * 256));

    return Principal.fromUint8Array(Uint8Array.from(randomBytes));
}