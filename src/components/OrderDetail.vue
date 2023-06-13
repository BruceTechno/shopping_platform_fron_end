<script>
export default {
    data() {
        return {
            orderNumber : null
        }
    },
   methods:{
    getOrderNumber(){
        let url = window.location.search;
        let str = url.substring(url.indexOf("?")+1);
        this.orderNumber = str ;
    }
   }
   ,
   mounted(){
        this.getOrderNumber();
   }
}
</script>

<template>
    <div>
        <h2>測試</h2>
    </div>
</template>

<style></style>