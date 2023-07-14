<script>
import { defineComponent } from 'vue'
import { Carousel, Navigation, Slide } from 'vue3-carousel'
import { state } from '../../state'
import 'vue3-carousel/dist/carousel.css'

export default defineComponent({
    name: 'Autoplay',
    components: {
        Carousel,
        Slide,
        Navigation,
    },
    data() {
        return { state, };
    },
    mounted() {
        state.getDoctorsSponsored();
    }
})
</script>
<template>
    <h1 class="slider-title color-dark my-1">I NOSTRI SPECIALISTI</h1>
    <Carousel :items-to-show="3.1" :wrap-around="true" :autoplay="4000" :pauseAutoplayOnHover="true" class="py-5">
        <Slide v-for="(doctor, index) in state.doctorsSponsored" :key="index" class="card-item">
            <router-link :to="{ name: 'doctor', params: { slug: doctor.slug } }" class="text-decoration-none h-100">
                <div class="carousel_item h-100">
                    <div class="card bg-light flex-column align-items-center border-0 h-100">
                        <div class=" img-fluid profile_circle mt-3">
                            <img :src="state.getImagePath(doctor.photo)" alt="">
                        </div>
                        <div class="card-body d-flex flex-column">
                            <div class="text-center card-title">
                                <span><strong>{{ doctor.name }} {{ doctor.lastname }}</strong></span>
                            </div>
                            <div class=" card-text text-align-start">
                                <ul class="list-unstyled">
                                    <li>
                                        <small class="text-white fs-6">{{ doctor.phone }}</small>
                                    </li>
                                    <li>
                                        <small class=" fs-6">{{ doctor.email }}</small>
                                    </li>
                                </ul>
                                <p>
                                    {{ doctor.service }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </router-link>
        </Slide>

        <template #addons>
            <Navigation />
        </template>
    </Carousel>
</template>
  

<style scoped>
.slider-title {
    font-weight: 600;
    font-size: 2.5rem;
}

.card-item {
    height: 600px;
}

.carousel__slide {
    padding: 5px;
}

.carousel__viewport {
    perspective: 2000px;
}

.carousel__track {
    transform-style: preserve-3d;
}

.carousel__slide--sliding {
    transition: 0.5s;
}

.carousel__slide {
    opacity: 0.9;
    transform: rotateY(-20deg) scale(0.9);
}

.carousel__slide--active ~ .carousel__slide {
    transform: rotateY(20deg) scale(0.9);
}

.carousel__slide--prev {
    opacity: 1;
    transform: rotateY(-10deg) scale(0.95);
}

.carousel__slide--next {
    opacity: 1;
    transform: rotateY(10deg) scale(0.95);
}

.carousel__slide--active {
    opacity: 1;
    transform: rotateY(0) scale(1.1);
}

.profile_circle {
    width: 100px;
    border-radius: 50%;
    border: 1px solid white;
    aspect-ratio: 1;
    z-index: 2;
    box-shadow: 0px 0px 10px 0px #BBBBBB;
}

img {
    max-width: 100%;
    aspect-ratio: 1;
    position: relative;
    z-index: 0;
    border-radius: 50%;
    object-fit: cover;
}
</style>  
  