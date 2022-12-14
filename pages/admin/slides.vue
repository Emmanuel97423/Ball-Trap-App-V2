<template>
    <div class="ptb-100">
        <div>
            <img :src="slides.imageUrl"> <br>
            Titre: <h3>{{ slides.title }}</h3>
            description: <h4>{{ slides.description }}</h4>
            <!-- {{ slides }} -->
        </div>
        <!-- <h3>Slide1</h3> -->
        <b-form @submit="onSubmit" @reset="onReset" enctype="multipart/form-data">
            <b-form-group id="fieldset-1" description="Entrez un titre comprenant plus de 4 caractères." label="Titre"
                label-for="input-1" valid-feedback="Valide" :invalid-feedback="invalidFeedback" :state="titleState">
                <b-form-input id="input-1" v-model="form.title" :state="titleState" trim required></b-form-input>
            </b-form-group>
            <b-form-group id="fieldset-2" description="Entrez une description comprenant plus de 4 caractères."
                label="Description" label-for="input-2" valid-feedback="Valide" :invalid-feedback="invalidDescription"
                :state="descriptionState">
                <b-form-input id="input-2" v-model="form.description" :state="descriptionState" trim
                    required></b-form-input>
            </b-form-group>
            <b-form-group description="Entrez une image de taille  1920px * 550px" label-for="input-3" label="Image"
                :state="imageState" valid-feedback="Valide" :invalid-feedback="invalidDescription">
                <b-form-file id="input-3" ref="slide01" type="file" name="slide01" v-model="form.image"
                    browse-text="Choisir" accept="image/jpeg, image/png, image/gif" :state="imageState"
                    placeholder="Choisissez une image ou glissez-déposez ici..."
                    drop-placeholder="Glissez-déposez ici.." required></b-form-file>
                <div class="mt-3">Image selectionnée: {{ form.image ? form.image.name : "pas d'image" }}</div>

                <!-- Plain mode -->
                <!-- <b-form-file v-model="file2" class="mt-3" plain></b-form-file> -->
            </b-form-group>
            <b-button type="submit" class="">Ajouter le slide</b-button>
        </b-form>
    </div>
</template>

<script>
export default {
    layout: 'admin',
    computed: {

        titleState() {
            return this.form.title.length >= 4
        },
        descriptionState() {
            return this.form.description.length >= 4
        },
        imageState() {
            console.log(this.form.image)

        },
        invalidFeedback() {
            if (this.form.title.length > 0) {
                return 'Entrez un titre comprenant plus de 4 caractères.'
            }
            return 'Entrez un titre.'

        },
        invalidDescription() {
            if (this.form.description.length > 0) {
                return 'Entrez une description comprenant plus de 4 caractères.'

            }
            return 'Entrez une description.'


        }
    },
    data() {
        return {
            form: {
                title: '',
                description: '',
                image: null,
            },
            slides: ""
        }
    },
    // watch: {
    //     slides() {
    //         console.log('this.slides:', this.slides)
    //         if (this.slides.length > 0) {
    //             this.fetchSlide()

    //         }
    //     }
    // },
    methods: {
        async onSubmit(e) {
            e.preventDefault()
            // alert(JSON.stringify(this.form))
            const formData = new FormData();
            formData.append('slide01', this.form.image);
            formData.append('title', this.form.title);
            formData.append('description', this.form.description);

            try {
                const slidesData = await this.$axios.post("/slides/", formData);
                this.onReset();
                this.$nuxt.refresh()
                // if (slidesData) {
                //     this.fetchSlide()
                // }
            } catch (error) {
                console.log('error:', error)

            }
        },
        onReset() {
            this.form.title = '',
                this.form.description = '',
                this.form.image = null,
                console.log('reset')
        },
        async fetchSlide() {
            try {
                const data = await this.$axios.get("/slides")
                this.slides = data.data.slide[0]
            } catch (error) {
                console.log('error:', error)

            }
        }
    },
    async fetch() {
        this.fetchSlide()
    }
}
</script>
<style>

</style>