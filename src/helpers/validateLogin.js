import Schema from 'validate';

export const user = new Schema({
    email: {
        type: String,
        required: true,
        message: 'Email es obligatorio',
    },
    password: {
        type: String,
        required: true,
        message: 'La contraseña es obligatorio',
    }
});
