<script >
import { RouterLink, RouterView } from 'vue-router';
import HeaderView from "./components/Header.vue";
import FooterView from "./components/Footer.vue";
export default {
    components: {
        HeaderView,
        FooterView
    }

}
</script>

<template>
    <HeaderView />

    <div>
        <RouterView />
    </div>
    
</template>

<style scoped></style>
