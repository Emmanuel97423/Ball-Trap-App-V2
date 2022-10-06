import { extend, localize } from "vee-validate";
import { required, alpha, email, ext } from "vee-validate/dist/rules";
import fr from 'vee-validate/dist/locale/fr.json';

localize('fr', fr);


extend("required", {
    ...required,
    message: "* Ce champs est requis"
});

extend("alpha", {
    ...alpha,
    message: "* Ce champ ne doit contenir que des caractères alphabétiques"
});

extend("email", email, {

    message: "* Veuillez entrer une adresse e-mail valide"
});
extend("ext", ext);

extend('password', {
    params: ['target'],
    validate(value, { target }) {
        return value === target;
    },
    message: '* Les mots de passe fournis sont différents'
});
