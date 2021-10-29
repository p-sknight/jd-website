<template>
  <div id="events">
    <div style="text-align: left; font-size: 32px;
              line-height: 30px; padding: 35px 0;">
    活动日历
    </div>
    
    <el-card :body-style="{ padding: '0px' }">
      <div v-for="item in news" :key="item.id" class="notice_item">
        <div class="notice_time">
            <p class="p1">{{ $global.formatZero(new Date(item.time).getMonth()+1, 2) }}/{{ $global.formatZero(new Date(item.time).getDate(), 2) }}</p>
            <p class="p2">{{ new Date(item.time).getFullYear() }}</p>
          </div>
          <p class="notice_title">
            {{ item.title }}
          </p>
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
  name: 'events',
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
#events{
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
.notice_item{
    display: flex;
    flex-direction: row;
    margin:0px  20px; 
    cursor: pointer;
    border-bottom: 1px dashed #DCDCDC;
    padding: 20px 0px;
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
        font-size: 18px;
        line-height: 55px;
      }
    }
    .page_container{
      padding: 30px 0;
      text-align: right;
    }
  }
</style>
