<template>
    <div class="container account_unvalided">
        <h2>Votre compte n'est pas validé</h2>
        <div>
            <b-list-group>
                <b-list-group-item v-for="(item, index) in accountVérification" :key="index">
                    <i v-if="item.statusCode" class="fas fa-check item_valided-icon"></i>
                    <i v-else class="fas fa-ban item_unvalided-icon"></i>
                    {{ item.title }}
                </b-list-group-item>
            </b-list-group>
        </div>
        <div class="send-email_section">
            <button class="theme-btn-one btn-black-overlay btn_sm">
                <a href="mailto:pull@exotrap.re">Envoyer les justifictatifs manquants</a>
            </button>
            <nuxt-link to="/" class="back-to-shop">Retour au magasin</nuxt-link>

        </div>
    </div>
</template>
<script>
export default {
    layout: "headless-layout",
    data() {
        return {
            accountVérification: [
                {
                    title: "Pièce d'identité recto (CNI ou passeport)",
                    status: "unValided",
                    statusCode: false
                },
                {
                    title: "Pièce d'identité Verso (CNI)",
                    status: "unValided",
                    statusCode: false
                },
                {
                    title: "Justificatif de domicile (- de 3 mois)",
                    status: "unValided",
                    statusCode: false
                },
                {
                    title: "Permis de chasser",
                    status: "unValided",
                    statusCode: false
                },
                {
                    title: "Licence de Tir en cours de validité",
                    status: "unValided",
                    statusCode: false
                },
                {
                    title: "Licence de Tir FFT Verso",
                    status: "unValided",
                    statusCode: false
                },
                {
                    title: "Validation du permis de chasser de l'année en cours ou licence de Tir FFBT ou FFTir en cours de validité signée et tamponnée par le médecin.",
                    status: "unValided",
                    statusCode: false
                }


            ]
        }
    }
}
</script>
<style >
.account_unvalided h2 {
    text-align: center;
    margin: 0 0 20px 0;
}

.item_unvalided-icon {
    color: rgb(177, 12, 12);
}

.send-email_section {
    text-align: center;
    padding: 20px 0 20px 0;
    display: flex;
    flex-direction: column;
    align-items: center;

}

.send-email_section button {
    width: 40%;
    min-width: 250px;
}

.back-to-shop {
    text-decoration: underline;
    padding: 10px 0
}
</style>