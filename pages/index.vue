<template>
    <div class="landingpage_container">
        <div class="landingpage_calltoaction-01" :style="slide.image">
            <div>
                <h1>Le Black Friday arrive</h1>
                <h2>Et il est plus intense que jamais!</h2>
                <Button class="landingpage_calltoaction-01-btn" text="En savoir plus" />
            </div>
            <!-- <img :src="require('@/assets/img/slide/call-to-action-01.jpg')" /> -->

        </div>
        <section class="landingpage_category">
            <div class="landingpage_category-line1">
                <div class="landingpage_category-item landingpage_category-01" :style="category.munitions">

                    <button class="landingpage_btn">
                        <nuxt-link :to="{
                            path: '/shop/category/munitions',
                            query: {
                                codefamille: `FAR00005`,
                                libelleFamille: `MUNITIONS`,
                            },
                        }">
                            <h2>Munitions</h2>
                        </nuxt-link>
                    </button>
                    <!-- <div class="landingpage_btn">
                        <nuxt-link to="/">
                            <h2>Munitions</h2>
                        </nuxt-link>
                    </div> -->

                </div>
                <div class="landingpage_category-item landingpage_category-02" :style="category.textiles">

                    <button class="landingpage_btn">
                        <nuxt-link :to="{
                            path: '/shop/category/vêtements-ball-trap',
                            query: {
                                codefamille: `FAR00001`,
                                libelleFamille: `VÊTEMENTS BALL TRAP`,
                            },
                        }">
                            <h2>Textiles</h2>
                        </nuxt-link>
                    </button>


                </div>
            </div>
            <div class="landingpage_category-line2">
                <div class="landingpage_category-item landingpage_category-03" :style="category.accessoires">


                    <button class="landingpage_btn">
                        <nuxt-link :to="{
                            path: '/shop/category/accessoires-ball-trap',
                            query: {
                                codefamille: `FAR00002`,
                                libelleFamille: `ACCESSOIRES BALL TRAP`,
                            },
                        }">
                            <h2>Accessoires</h2>
                        </nuxt-link>
                    </button>


                </div>

            </div>
            <div class="landingpage_category-line3">
                <div class="landingpage_category-item landingpage_category-04" :style="category.armesD">
                    <button class="landingpage_btn">
                        <nuxt-link :to="{
                            path: '/shop/category/armes-cat-c',
                            query: {
                                codefamille: `FAR00003`,
                                libelleFamille: `ARMES CAT C`,
                            },
                        }">
                            <h2>Armes de catégorie C</h2>
                        </nuxt-link>
                    </button>


                </div>
                <div class="landingpage_category-item landingpage_category-05" :style="category.armesC">


                    <button class="landingpage_btn">
                        <nuxt-link :to="{
                            path: '/shop/category/armes-cat-d',
                            query: {
                                codefamille: `FAR00004`,
                                libelleFamille: `ARMES CAT D`,
                            },
                        }">
                            <h2>Armes de catégorie D</h2>
                        </nuxt-link>
                    </button>

                </div>
            </div>
        </section>
    </div>
</template>
<script>
import Button from "@/components/Button/Button"
export default {
    layout: "default",
    middleware: "auth",
    components: {
        Button,
    },
    data() {
        return {
            slide: {
                image: { backgroundImage: `url(${require('@/assets/img/slide/call-to-action-01.jpg')})` }
            },
            category: {
                "munitions": { backgroundImage: `url(${require('@/assets/img/banner/accessoires.jpg')})` },
                "textiles": { backgroundImage: `url(${require('@/assets/img/banner/textiles.jpg')})` },
                "accessoires": { backgroundImage: `url(${require('@/assets/img/banner/accessoires.jpg')})` },
                "armesC": { backgroundImage: `url(${require('@/assets/img/banner/armesC.jpg')})` },
                "armesD": { backgroundImage: `url(${require('@/assets/img/banner/armesD.jpg')})` },
            }
        }
    }
}
</script>
<style >
.landingpage_container {
    background-color: black;
}

/* Start call-to-action-01 */
.landingpage_calltoaction-01 {
    position: relative;
    width: 100%;
    height: 550px;
    max-height: 600px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 0 35%;
    padding: 150px 100px;
}

.landingpage_calltoaction-01::before {
    content: "";
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    background-color: rgba(0, 0, 0, 0.6);
}

.landingpage_calltoaction-01 h1,
.landingpage_calltoaction-01 h2 {

    padding: 0 0 20px 0;
    position: relative;
    color: #ffffff;
    line-height: 0.9;
}

.landingpage_calltoaction-01 h1 {
    font-size: 80px;
}

.landingpage_calltoaction-01 h2 {
    font-size: 26px;
}

.landingpage_calltoaction-01-btn {
    width: 40%;
    position: relative;
    color: #ffff;
}

/* End call-to-action-01 */

/* Start category section */
.landingpage_category-item {
    background-repeat: no-repeat;
    background-size: cover;
    padding: 8%;

    height: 600px;
}

.landingpage_category-line1 {
    width: 100%;
    display: flex;
}


.landingpage_category-01 {
    flex: 40%;
    position: relative;
}

.landingpage_category-01::before {
    content: "";
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    background-color: rgba(0, 0, 0, 0.5);
}

.landingpage_category-02 {
    position: relative;
    flex: 60%;
    background-position: 0 65%;
}

.landingpage_category-02::before {
    content: "";
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    background-color: rgba(0, 0, 0, 0.7);
}

.landingpage_category-03 {
    position: relative;
    /* flex: 60%; */
    background-position: 0 65%;
}

.landingpage_category-03::before {
    content: "";
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    background-color: rgba(0, 0, 0, 0.5);
}

.landingpage_category-04 {
    position: relative;
    flex: 60%;
    background-position: 0 65%;
}

.landingpage_category-04::before {
    content: "";
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    background-color: rgba(0, 0, 0, 0.5);
}

.landingpage_category-05 {
    position: relative;
    flex: 40%;
    background-position: 0 65%;
}

.landingpage_category-05::before {
    content: "";
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    background-color: rgba(0, 0, 0, 0.5);
}

.landingpage_category-line3 {
    width: 100%;
    display: flex;
}

/* End category section */

.landingpage_category h2 {
    font-size: 24px;
    font-weight: bold;
    letter-spacing: 2px;
    color: #fff;
    position: relative;
    transition: color 0.4s linear;
    text-transform: uppercase;

}

.landingpage_btn {
    min-width: 200px;
    position: relative;
    text-align: center;
    border: 2px solid #fff;
    padding: 0.2em 2em;
    background: none;
    transition: color 0.4s linear;
}

.landingpage_category h2:hover {
    color: #000;

}



.landingpage_btn::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: #fff;
    transition: transform 0.5s;
    transform-origin: 0 0;
    transition-timing-function: cubic-bezier(0.5, 1.6, 0.4, 0.7);
}

.landingpage_btn::before {
    transform: scaleX(0);

}

.landingpage_btn:hover::before {
    transform: scaleX(1);
    color: #000;
}

/* Start Responsive */
@media only screen and (max-width: 768px) {
    .landingpage_calltoaction-01 {

        max-height: 400px;
        padding: 50px 100px;
    }

    .landingpage_category h2 {
        font-size: 16px;


    }

    .landingpage_category-line1 {
        max-height: 400px;
        /* flex-direction: column; */
    }

    .landingpage_category-line2 {
        max-height: 200px;
        /* flex-direction: column; */
    }

    .landingpage_category-line3 div {
        max-height: 400px;
    }

    .landingpage_category-01 {
        background-position: 0 200%;
    }

    .landingpage_category-02 {
        background-position: 0 200%;
    }

    .landingpage_category-03 {
        background-position: 0 -175px;
    }

    .landingpage_category-04 {
        flex: 50%;
        background-position: -80px 100%;
    }

    .landingpage_category-05 {
        flex: 50%
    }
}

@media only screen and (max-width: 425px) {
    .landingpage_calltoaction-01 {

        max-height: 280px;
        padding: 30px;
    }

    .landingpage_calltoaction-01 h1 {
        font-size: 36px;
    }

    .landingpage_calltoaction-01 h2 {
        font-size: 24px;
    }

    .landingpage_category h2 {
        font-size: 16px;


    }

    .landingpage_category-line1 {
        /* max-height: 400px; */
        flex-direction: column;
    }

    .landingpage_category-line2 {
        /* max-height: 200px; */
        flex-direction: column;
    }

    .landingpage_category-line3 {
        /* max-height: 200px; */
        flex-direction: column;
    }



    .landingpage_category-01 {
        background-position: 0 65%;
    }

    .landingpage_category-02 {
        background-position: 0 65%;
    }

    .landingpage_category-03 {
        max-height: 115px;
        background-position: 0 65%;
    }

    .landingpage_category-04 {
        background-position: 0 55%;
    }


}
</style>