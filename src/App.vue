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
    <div class="showData">
        <RouterView />
    </div>
    <FooterView/>
</template>

<style >
body{
    margin: 0;
}
.showData{
    width: 100vw;
}
</style>
