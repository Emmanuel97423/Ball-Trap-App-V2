import { extend } from "vee-validate";
import { required, alpha, email, ext } from "vee-validate/dist/rules";

extend("required", {
    ...required,
    message: "* Ce champs est requis"
});

extend("alpha", {
    ...alpha,
    message: "* Ce champ ne doit contenir que des caractères alphabétiques"
});

extend("email", email, {

    message: "* Veuillez entrer une adrsse mail valide"
});
extend("ext", ext);

extend('password', {
    params: ['target'],
    validate(value, { target }) {
        return value === target;
    },
    message: '* Les mots de passe fournis sont différents'
});