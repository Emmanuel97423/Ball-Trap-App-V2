<template>
    <div class="variable-single-item">
        <div>
            <span>Inscription</span>
            <!-- <span class="error-required-message"> (Champ requis)</span> -->
        </div>

        <div class="product-image-variants">
            <Spinner v-if="loading == true"></Spinner>
            <div v-else v-for="(libelle, index) in inscriptionArray" :key="index" class="image-variants">
                <label :for="`${libelle.gammeValue.replace(' ', '-').toLowerCase()}`"
                    :class="{ 'select-color-active': activeOptions.indexOf(index) > -1 }" class="box-genre">{{
                    libelle.gammeValue.toLowerCase().charAt(0).toUpperCase() +
                    libelle.gammeValue.toLowerCase().slice(1)
                    }}
                    <input type="radio" :id="`${libelle.gammeValue.replace(' ', '-').toLowerCase()}`" name="color"
                        :value="`${libelle.gammeValue.replace(' ', '-').toLowerCase()}`"
                        @click="handleCLick(index, libelle.gammeCode)" />
                </label>

                <!-- <img :src="product" @click="selectColor(index)" /> -->
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "SelectInscription",
    props: {
        inscription: Array,
    },
    data() {
        return {
            loading: true,
            activeOptions: [],
        };
    },

    methods: {
        handleCLick(index, value) {
            let pos = this.activeOptions.indexOf(index);

            this.$emit("inscription-click-event", { type: value, isFocused: true });
            if (pos === -1) {
                this.activeOptions.splice(pos, 1);
                this.activeOptions.push(index);
                // this.activeOptions.splice(pos, -1);
            } else {
                this.activeOptions.splice(pos, 1);
                // this.activeOptions.pop();
            }
        },
    },
    computed: {
        typeArray() {
            let array = [];
            this.inscription.filter((inscriptionObject) => {
                let i = array.findIndex(
                    (inscription) => inscriptionObject.gammeCode == inscription.gammeCode
                );
                if (i <= -1) {
                    array.push(inscriptionObject);
                } else {
                    return null;
                }
            });
            return array;
        },
    },

    mounted() {
        setTimeout(() => {
            this.loading = false;
        }, 2500);
    },
};
</script>

<!-- <style>
.product-image-variants {
    width: 100%;
    display: flex;
    flex-wrap: wrap;

    /* flex-direction: row; */
}

.product-image-variants img {
    width: 100%;
    cursor: pointer;
    border: 1px solid black;
}

.product-image-variants label {
    font-size: 12px;
}

.select-color-active {
    background-color: black;
    color: #fff;
}

.image-variants {
    margin: 5px 5px 0 0;
}

input[type="radio"] {
    vertical-align: middle;
}
</style> -->