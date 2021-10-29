<template>
  <div id="jxxw">
    <div style="text-align: left; font-size: 32px;
              line-height: 30px; padding: 35px 0;">
      教学新闻
    </div>
    <div style="display: flex; justify-content: space-between; margin-bottom: 30px;">
      <div v-for="item in picNews" :key="item.id"
           style="position: relative; width: 570px; cursor: pointer;">
        <el-card :body-style="{ padding: '0px' }">
          <img src="../../assets/images/EB4442D1417D5E82937CFB95B93_ED53A1C8_10A1C.jpg"
               class="image big_image">
          <p class="pic_p">{{ item.title }}</p>
        </el-card>
      </div>
    </div>
    <el-card :body-style="{ padding: '0px' }">
      <div v-for="item in news" :key="item.id" class="news_item">
        <p>{{ item.title }}</p>
        <div>{{ item.time }}</div>
      </div>
    </el-card>
    <div class="page_container">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="1000">
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: 'JXNews',
  data () {
    return {
      picNews: [
        { id: 1, title: '校党委常委、副校长龚姚腾向机电学院、龚姚腾向机电学龚姚腾向机电学龚姚腾向机电学龚姚腾向机电学龚姚腾向机电学龚姚腾向机电学龚姚腾向机电学龚姚腾向机电学', src: '../assets/images/EB4442D1417D5E82937CFB95B93_ED53A1C8_10A1C.jpg' },
        { id: 2, title: '副校长龚姚腾为机电学院和电气学院师生龚姚腾向机电学龚姚腾向机电学龚姚腾向机电学龚姚腾向机电学龚姚腾向机电学龚姚腾向机电学龚姚腾向机电学', src: '../assets/images/2418C4CF141CD355275B819A423_08ABA126_32708.jpg' }
      ],
      news: [
        { id: 1, title: '校党委常委、副校长龚姚腾向机电学院、电气学院师生宣讲习近平总书记“七一”重要讲话精神', time: '2021-10-11' },
        { id: 2, title: '校党委常委、副校长龚姚腾向机电学院、电气学院师生宣讲习近平总书记“七一”重要讲话精神', time: '2021-10-11' },
        { id: 3, title: '校党委常委、副校长龚姚腾向机电学院、电气学院师生宣讲习近平总书记“七一”重要讲话精神', time: '2021-10-11' },
        { id: 4, title: '校党委常委、副校长龚姚腾向机电学院、电气学院师生宣讲习近平总书记“七一”重要讲话精神', time: '2021-10-11' },
        { id: 5, title: '校党委常委、副校长龚姚腾向机电学院、电气学院师生宣讲习近平总书记“七一”重要讲话精神', time: '2021-10-11' },
        { id: 6, title: '校党委常委、副校长龚姚腾向机电学院、电气学院师生宣讲习近平总书记“七一”重要讲话精神', time: '2021-10-11' }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
  #jxxw{
    .image {
      width: 100%;
      height: 427px;
      display: block;
      overflow: hidden;
    }
    .pic_p{
      background-color: #fff;
      padding: 20px 33px;
      font-size: 18px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      transition: all 0.6s;
    }
    .pic_p:hover{
      color: #1d5da1;
    }
    .news_item:hover{
      div, p{
        color: #fff;
      }
      background: #1D4785;
    }
    .news_item{
      border-bottom: 1px solid #e6e6e6;
      display: flex;
      cursor: pointer;
      justify-content: space-between;
      line-height: 20px;
      background: url('../../assets/images/d.png') no-repeat 30px center;
      padding: 17px 50px;
      p{
        max-width: 70%;
        height: 20px;
        margin: 0;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-size: 16px;
        transition: all 0.6s;
      }
      div{
        height: 20px;
        color: #666;
        font-size: 15px;
      }
    }
    .page_container{
      padding: 30px 0;
      text-align: right;
    }
  }
</style>
