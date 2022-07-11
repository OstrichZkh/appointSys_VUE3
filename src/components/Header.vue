<template>
  <div class="header" >
    <div class="collapse-btn" @click="collapseChage" style="font-size:20px">
        <el-icon><Operation /></el-icon>
    </div>
    <div class="logo">后台管理系统</div>
  </div>
</template>

<script>
import { defineComponent} from 'vue'
// import store from '@/store/index.js'
export default defineComponent ({
  name:'',
  components:{},
  props:{},
  setup(props, ctx){

    const collapseChage = function(){
      // console.log(this.$store)
      this.$store.commit('changeCollapse')
    }




    return {
      collapseChage
    }
  },
})
</script>

<style scoped>
*{
  color:white;
}

.header {
  background-color: #242f42;

    position: relative;
    box-sizing: border-box;
    width: 100%;
    height: 70px;
    font-size: 22px;
    color: #fff;
}
.header .logo {
    text-align: left;
    float: left;
    width: 250px;
    line-height: 70px;
}
.collapse-btn {
    float: left;
    padding: 0 21px;
    cursor: pointer;
    line-height: 70px;
}
</style>