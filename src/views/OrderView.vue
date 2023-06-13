<script>
import {RouterLink, RouterView} from "vue-router";
import TableView from "../components/Table.vue"
export default {
    components:{
        TableView
    },

    data() {
        return {
            orderInfos: [],
            orderId:null,
            buy : "buy"
        
        }
    },
    mounted() {
        fetch("http://localhost:8080/search_order_by_account_buy", {
            credentials: 'include',
            method: "POST",
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                this.orderInfos = data.orderInfos;
            })
        

    },
    methods: {
        detail(test) {
            this.$router.push(`/my-market/orderDetail?${test}`)
            
    },
        
               
        
        }
}
</script>

<template>
    <div>
        <TableView :buy="buy" />
    </div>
</template>

<style lang="scss" scoped>

.list {
    margin: 80px;
    border-radius: 10px;
    border: 1px solid black;
}

table {
    border-collapse: collapse;
    width: 100%;
}

th, td {
    text-align: center;
    padding: 8px;
}

button{
      border: none;
      background-color: #403234;
      color: white;
      font-size: 16px;
      font-weight: bold;
      padding: 0 15px;
      border-radius: 10px;
      transition: 0.7s;
      cursor: pointer;
      margin: 0 20px;
      &:hover{
         background-color:#d0cfd0 ;
      }
      &:active{
            scale: 1.05;
         }
   }

</style>