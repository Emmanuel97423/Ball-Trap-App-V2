export class FormValidate {
    constructor(firstName, lastName, email, country, zone, adress, validate) {
        this._firstName = firstName
        this._lastName = lastName
        this._email = email
        this._country = country
        this._zone = zone
        this._adress = adress
        this._validate = validate
    }

    //get 
    get validateFirstName() {
        return this._firstName
    }

    //methods

    validateFirstName() {
        let re = /([a - zA - Z]) \w+/g
        const test = re.test(this._firstName)

        if (this._firstName.length < 2) {
            this._validate = false
            return "Veuillez entrer 2 caractères ou plus."
        } else if (!test) {
            this._validate = false
            return "Veuillez entrer un nom valide"
        } else {
            this._validate = true
        }
    }
}