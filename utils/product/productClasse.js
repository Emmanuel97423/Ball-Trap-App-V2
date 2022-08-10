import axios from "axios";

export class ProductFactory {
    constructor(gammes, gammeValue) {
        this._gammes = gammes;
        this._gammeValue = gammeValue;
        this._gammeObjectResult = {};
    }

    get getGammeObjectResult() {
        return this._gammeObjectResult;
    }
    set SetGammeObjectResult(gammeObjectResult) {
        this._gammeObjectResult = gammeObjectResult;
    }

    get getCheckGammes() {
        return this.checkGammes();
    }

    async checkGammes() {

        try {
            let gammeObject = ""
            return this._gammeValue.split('¤').filter((gammeValue, indexGammeValue) => {
                // console.log("🚀 ~ file: productClasse.js ~ line 24 ~ ProductFactory ~ this._gammeValue.split ~ gammeValue", gammeValue)

                return this._gammes.split('¤').filter(async (gamme, indexGamme) => {
                    const fetchGamme = await axios.get("https://trap-one-api.herokuapp.com/api/gammes/gamme/" + gamme)
                    // console.log("🚀 ~ file: productClasse.js ~ line 19 ~ ProductFactory ~ this._gammes.split ~ fetchGamme", fetchGamme.data);
                    return fetchGamme.data.filter(async itemGamme => {
                        // console.log("🚀 ~ file: productClasse.js ~ line 25 ~ ProductFactory ~ this._gammes.split ~ itemGamme", itemGamme)
                        if (gammeValue === itemGamme.elementsGammeLibelle) {
                            // console.log(itemGamme.libelle, itemGamme.gammeValue)
                            const libelleGamme = itemGamme.libelle;
                            const gammeValue = itemGamme.gammeValue
                            const obj = {
                                libelleGamme: libelleGamme,
                                gammeValue: gammeValue
                            }
                            // console.log("🚀 ~ file: productClasse.js ~ line 38 ~ ProductFactory ~ this._gammes.split ~ obj", obj)

                            gammeObject = obj
                            this._gammeObjectResult = obj;
                            // console.log("🚀 ~ file: productClasse.js ~ line 54 ~ ProductFactory ~ checkGammes ~ this._gammeObjectResult", this._gammeObjectResult)
                            return gammeObject
                        }

                    })
                })
            })
            // console.log("🚀 ~ file: productClasse.js ~ line 19 ~ ProductFactory ~ checkGammes ~  this.gammeValue.split('¤')", this._gammeValue.split('¤'))
            // console.log("🚀 ~ file: productClasse.js ~ line 18 ~ ProductFactory ~ checkGammes ~ this._gammes.split('¤')", this._gammes.split('¤'))



        } catch (error) {
            console.log("🚀 ~ file: productClasse.js ~ line 18 ~ ProductFactory ~ checkGammes ~ error", error)

        }



    }
}