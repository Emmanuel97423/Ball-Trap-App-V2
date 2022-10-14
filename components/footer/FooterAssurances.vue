<template>
    <div class="assurances">
        <div class="assurances_section">
            <!-- <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-shop"
                viewBox="0 0 16 16">
                <path
                    d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h1v-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5h6V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zM4 15h3v-5H4v5zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3zm3 0h-2v3h2v-3z" />
            </svg> -->
            <b-icon class="icon" icon="shop"></b-icon>

            <h4>RETRAIT</h4>
            <p>Retrait en magasin</p>
        </div>
        <div class="assurances_section">
            <b-icon class="icon" icon="credit-card2-back"></b-icon>
            <!-- <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-key"
                viewBox="0 0 16 16">
                <path
                    d="M0 8a4 4 0 0 1 7.465-2H14a.5.5 0 0 1 .354.146l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0L13 9.207l-.646.647a.5.5 0 0 1-.708 0L11 9.207l-.646.647a.5.5 0 0 1-.708 0L9 9.207l-.646.647A.5.5 0 0 1 8 10h-.535A4 4 0 0 1 0 8zm4-3a3 3 0 1 0 2.712 4.285A.5.5 0 0 1 7.163 9h.63l.853-.854a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.793-.793-1-1h-6.63a.5.5 0 0 1-.451-.285A3 3 0 0 0 4 5z" />
                <path d="M4 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
            </svg> -->
            <h4>PAIEMENT</h4>
            <p>100% Sécurisé</p>

        </div>
        <div class="assurances_section">
            <!-- <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag-heart"
                viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                    d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5Zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0ZM14 14V5H2v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1ZM8 7.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z" />
            </svg> -->
            <b-icon class="icon" icon="bookmark-heart
"></b-icon>

            <h4>SAV</h4>
            <p>Gestions des retours</p>

        </div>
    </div>
</template>
<script
export default {
name: "FooterAssurances",

}
></script>
<style >
/* Assurances */
.assurances {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 9px 140px;
    gap: 196px;
    max-width: 100%;
    height: 157px;
    background: #000000;
}

.assurances_section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 33%;
    height: 119px;
}

.assurances_section p {
    font-size: 16px;
    font-weight: semi-bold;
    text-align: center;
    color: #FFFFFF;
    text-transform: uppercase;
}

/* .assurances_section b-icon {
    width: 70px;
    height: 70px;
    color: #fff;
    margin: 10px 0;
} */
.icon {
    width: 50px;
    height: 50px;
    color: #fff;
    margin: 10px 0;
}

.assurances_section h4 {
    font-size: 20px;
    color: var(--main-theme-color)
}

@media only screen and (max-width: 768px) {
    .icon {
        width: 30px;
        height: 30px;
        color: #fff;
        margin: 10px 0;
    }

    .assurances {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 9px 40px;
        gap: 50px;

    }

    .assurances_section h4 {
        font-size: 12px;
        color: var(--main-theme-color)
    }

    .assurances_section p {
        font-size: 12px;

    }
}

@media only screen and (max-width: 425px) {
    .assurances {
        height: auto;
        flex-direction: column;
        gap: 50px;
    }

    .assurances_section svg {
        width: 200px;
    }
}



/* Auto layout */
</style>