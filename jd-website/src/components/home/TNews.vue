<template>
    <div id="tnews">
      <div style="display: flex; justify-content: space-between; margin-bottom: 30px;">
<!--        <img src="../assets/images/EB4442D1417D5E82937CFB95B93_ED53A1C8_10A1C.jpg" alt="">-->
        <div v-for="item in picNews" :key="item.id"
             style="position: relative; width: 300px; height: 205px;cursor: pointer;">
            <el-image
              :src="require('../../assets/images/EB4442D1417D5E82937CFB95B93_ED53A1C8_10A1C.jpg')"></el-image>
            <p class="pic_p">{{ item.title }}</p>
        </div>
      </div>
      <div v-for="item in news" :key="item.id" class="news_item">
        <p>{{ item.title }}</p>
        <div>{{ item.time }}</div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'TNews',
  props: ['picNews', 'news'],
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style lang="less">
  #tnews{
    .pic_p{
      box-sizing: border-box;
      width: 100%;
      height: 45px;
      padding: 10px;
      line-height: 22px;
      margin: 0;
      position: absolute;
      bottom: 0;
      font-size: 16px;
      color: #fff;
      background-color: rgba(29,71,131,0.7);
      overflow:hidden;
      text-overflow:ellipsis;
      white-space: nowrap;
    }
    .el-image img{
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: all 0.6s;
    }
    .el-image img:hover{
      transform: scale(1.2);
    }
    .news_item{
      display: flex;
      cursor: pointer;
      justify-content: space-between;
      line-height: 39px;
      background: url('../../assets/images/d.png') no-repeat left center;
      padding-left: 20px;
      p{
        width: 500px;
        height: 39px;
        margin: 0;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-size: 16px;
        transition: all 0.6s;
      }
      p:hover{
        color: #1a94e7;
      }
      div{
        height: 39px;
        color: #666;
        font-size: 15px;
      }
    }
  }
</style>
