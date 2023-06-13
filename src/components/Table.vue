<script>
export default {
    data() {
        return {
            orderInfos: [],
            orderId:null
        
        }
    },
    methods: {
        detail(test) {
            this.$router.push(`/my-market/orderDetail?${test}`)
            
    },
    getAccountBuy(){
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

        
               
        
        },
    mounted() {
        this.getAccountBuy();
    },
    props : ["buy"]
}
</script>

<template>
<div class="list">
            <table>
            <tr>
                <th >訂單編號</th>
                <th>訂單狀態</th>
                <th>配送方式</th>
                <th v-if="buy=='buy'">付款方式</th>
                <th v-else>買家編號</th>
            </tr>
            <tr v-for="orderInfo in orderInfos" :key="orderInfo.orderNumber">
                <td>{{ orderInfo.orderNumber }}</td>
                <td>{{ orderInfo.status }}</td>
                <td>{{ orderInfo.deliveryWay }}</td>
                <td v-if="buy=='buy'">{{ orderInfo.payWay }}</td>
                <td v-else>{{ orderInfo.accountBuy }}</td>
                <td>
                    <button type="button" @click="detail(orderInfo.orderNumber)">訂單詳情</button>
                </td>
               
            </tr>
        </table>
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