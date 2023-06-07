<script>
</script>

<template>
   <div class="pic-box">
      <div class="pic">

      </div>
   </div>
   <div class="userInfoBox">
      <div class="account">
         <label for="account">帳號</label>
         <input type="text" id="account">
         <button type="button">修改</button>
      </div>
      <div class="pwd">
         <label for="pwd">密碼</label>
         <input type="text" id="pwd">
         <button type="button">修改</button>

      </div>
      <div class="address">
         <label for="address">地址</label>
         <input type="text" id="address">
         <button type="button">修改</button>

      </div>
      <div class="phone">
         <label for="phone">電話</label>
         <input type="text" id="phone">
         <button type="button">修改</button>

      </div>

   </div>
</template>

<style lang="scss" scoped>
.pic-box {
   width: 100%;
   height: 30%;
   display: flex;
   justify-content: center;
   align-items: center;
   .pic {
      width: 150px;
      height: 150px;
      border-radius: 100px;
      background-color: rgb(255, 0, 0);
   }
}

.userInfoBox {
   width: 100%;
   height: 70%;
   display: flex;
   flex-direction: column;
   justify-content: start;
   align-items: center;
   font-size: 20px;
   label{
      font-weight: bold;
   }
   input{
      font-size: 20px;
      border-radius: 10px;
      border: none;
      background-color: #F7F3F5;
      margin: 10px 10px;
   }

   button{
      border: none;
      background-color: #F7F3F5;
      font-size: 18px;
      font-weight: bold;
      padding: 0 50px;
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
}
</style>