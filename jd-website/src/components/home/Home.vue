<template>
  <div>
    <!--走马灯-->
    <el-carousel trigger="hover" height="450px;">
      <el-carousel-item v-for="url in loopImages" :key="url">
        <el-image
          fit="cover"
          style="width: 100%; height: 100%;"
          :src="require('../../assets/images/' + url)"></el-image>
      </el-carousel-item>
    </el-carousel>
    <!--主要内容-->
    <div class="main">
      <div class="cl">
        <div class="title">教学新闻</div>
        <div class="line"></div>
        <TNews :pic-news="newsImg" :news="news"/>
      </div>
      <div class="cr">
        <div class="title">通知公告</div>
        <div class="line"></div>
        <div v-for="item in notice" :key="item.id" class="notice_item">
          <div class="notice_time">
            <p class="p1">{{ $global.formatZero(new Date(item.time).getMonth()+1, 2) }}/{{ $global.formatZero(new Date(item.time).getDate(), 2) }}</p>
            <p class="p2">{{ new Date(item.time).getFullYear() }}</p>
          </div>
          <p class="notice_title">
            {{ item.title }}
          </p>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import TNews from './TNews'
export default {
  name: 'Home',
  components: {
    TNews
  },
  data () {
    return {
      bodyWidth: document.body.clientWidth,
      loopImages: ['xiaoyuan.jpg', 'keji.jpg', 'shideshifengnian.jpg'],
      newsImg: [
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
      ],
      notice: [
        { id: 1, title: '机电工程学院选拔2022届优秀迎接本科生022届优秀迎接022届优秀迎接022届优秀迎接022届优秀迎接022届优秀迎接022届优秀迎接022届优秀迎接022届优秀迎接022届优秀迎接022届优秀迎接', time: '2021/9/15' },
        { id: 2, title: '机电工程学院选拔2022届优秀迎接本科生', time: '2021/9/15' },
        { id: 3, title: '机电工程学院选拔2022届优秀迎接本科生', time: '2021/9/15' },
        { id: 4, title: '机电工程学院选拔2022届优秀迎接本科生', time: '2021/9/15' },
        { id: 5, title: '机电工程学院选拔2022届优秀迎接本科生', time: '2021/9/15' },
        { id: 6, title: '机电工程学院选拔2022届优秀迎接本科生', time: '2021/9/15' },
        { id: 7, title: '机电工程学院选拔2022届优秀迎接本科生院选拔2022届优秀迎接院选拔2022届优秀迎接院选拔2022届优秀迎接院选拔2022届优秀迎接院选拔2022届优秀迎接院选拔2022届优秀迎接院选拔2022届优秀迎接', time: '2021/9/15' }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
  .title{
    font-size: 24px;
    line-height: 24px;
    border-left: 7px solid #1D4785;
    padding-left: 20px;
  }
  .main{
    margin-top: 30px;
    display: flex;
    justify-content: space-evenly;
    width: 100%;
  }
  .cl{
    width: 644px;
  }
  .cr{
    width: 500px;
    .notice_item{
      display: flex;
      flex-direction: row;
      margin-bottom: 20px;
      cursor: pointer;
      border-bottom: 1px dashed #DCDCDC;
      .notice_title:hover{
        color: #9c4470;
      }
      .notice_time{
        width: 60px;
        text-align: center;
        border-top: 2px solid #1D4785;
        margin-right: 30px;
        .p1{
          font-size: 19px;
          line-height: 27px;
          color: #1D4785;
          margin: 0;
        }
        .p2{
          font-size: 14px;
          background-color: #9c4470;
          color: #fff;
          margin: 0;
        }
      }
      .notice_title{
        transition: all 0.6s;
        flex: 1;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        color: #063651;
        font-size: 16px;
        line-height: 26px;
      }
    }
  }
</style>
