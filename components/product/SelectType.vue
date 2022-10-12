<template>
    <div class="variable-single-item">
        <div>
            <span>Type</span>
            <!-- <span class="error-required-message"> (Champ requis)</span> -->
        </div>

        <Comp class="product-image-variants">
            <template v-if="loading == true">
                <Spinner></Spinner>

            </template>
            <template v-else>
                <div v-for="(libelle, index) in typeArray" :key="index" class="image-variants">
                    <label :for="`${libelle.gammeValue.replace(' ', '-').toLowerCase()}`"
                        :class="{ 'select-color-active': activeOptions.indexOf(index) > -1 }" class="box-genre">{{
                        libelle.gammeValue.toLowerCase().charAt(0).toUpperCase() +
                        libelle.gammeValue.toLowerCase().slice(1)
                        }}
                        <input type="radio" :id="`${libelle.gammeValue.replace(' ', '-').toLowerCase()}`" name="color"
                            :value="`${libelle.gammeValue.replace(' ', '-').toLowerCase()}`"
                            @click="handleCLick(index, libelle.gammeCode)" />
                    </label>

                </div>
            </template>
        </Comp>



        <!-- <div class="product-image-variants">
            <Spinner v-if="loading == true"></Spinner>
            <div v-else v-for="(libelle, index) in typeArray" :key="index" class="image-variants">
                <label :for="`${libelle.gammeValue.replace(' ', '-').toLowerCase()}`"
                    :class="{ 'select-color-active': activeOptions.indexOf(index) > -1 }" class="box-genre">{{
                    libelle.gammeValue.toLowerCase().charAt(0).toUpperCase() +
                    libelle.gammeValue.toLowerCase().slice(1)
                    }}
                    <input type="radio" :id="`${libelle.gammeValue.replace(' ', '-').toLowerCase()}`" name="color"
                        :value="`${libelle.gammeValue.replace(' ', '-').toLowerCase()}`"
                        @click="handleCLick(index, libelle.gammeCode)" />
                </label>

            </div>
        </div> -->

        <!-- <div class="product-variable-color">
                    <label for="modal-product-color-red1">
                      <input
                        name="modal-product-color"
                        id="modal-product-color-red1"
                        class="color-select"
                        type="radio"
                        checked=""
                      />
                      <span class="product-color-red"></span>
                    </label>
                    <label for="modal-product-color-tomato2">
                      <input
                        name="modal-product-color"
                        id="modal-product-color-tomato2"
                        class="color-select"
                        type="radio"
                      />
                      <span class="product-color-tomato"></span>
                    </label>
                    <label for="modal-product-color-green3">
                      <input
                        name="modal-product-color"
                        id="modal-product-color-green3"
                        class="color-select"
                        type="radio"
                      />
                      <span class="product-color-green"></span>
                    </label>
                    <label for="modal-product-color-light-green4">
                      <input
                        name="modal-product-color"
                        id="modal-product-color-light-green4"
                        class="color-select"
                        type="radio"
                      />
                      <span class="product-color-light-green"></span>
                    </label>
                    <label for="modal-product-color-blue5">
                      <input
                        name="modal-product-color"
                        id="modal-product-color-blue5"
                        class="color-select"
                        type="radio"
                      />
                      <span class="product-color-blue"></span>
                    </label>
                    <label for="modal-product-color-light-blue6">
                      <input
                        name="modal-product-color"
                        id="modal-product-color-light-blue6"
                        class="color-select"
                        type="radio"
                      />
                      <span class="product-color-light-blue"></span>
                    </label>
                  </div> -->
    </div>
</template>

<script>
export default {
    name: "SelectType",
    props: {
        type: Array,
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

            this.$emit("type-click-event", { type: value, isFocused: true });
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
            this.type.filter((typeObject) => {
                let i = array.findIndex(
                    (type) => typeObject.gammeCode == type.gammeCode
                );
                if (i <= -1) {
                    array.push(typeObject);
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

<style>
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
</style>