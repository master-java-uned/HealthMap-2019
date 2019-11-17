export class JwtModel {
    token: string;
    type: string;
    idUsuario:bigint;
    nombreUsuario: string;
    authorities: string[];
}
