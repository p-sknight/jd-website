<template>
  <iframe ref="..\assets\textFile\test.docx" style="width: 100%; height:800px; border: 5px solid #80808021;" src="..\assets\textFile\test.docx" id="look">
        </iframe>
</template>

<script>
var d=new Date()
export default {
    name:'',
    data(){
        return {
            id:1,
            title:"机电学院",
            date:   d.getFullYear()+"年"+d.getMonth()+"月"+d.getDate()+"日",
            info:1013,//阅读量
            content:"机电实验中心是在机械工程、智能制造工程、车辆工程、测控技术与仪器、工业工程等专业实验室的基础上组建而成，2007年获批为江西省实验教学示范中心，为国家特色专业、国家及省级卓越工程师培养计划专业、国家工程教育认证专业、国家及省级一流本科专业建设点、江西省重点“十二五”学科、江西省“十三五”一流学科群建设学科的实验、实训、科学研究提供重要的支撑。"
        }
    }
}
</script>

<style lang="less" scoped>
    #docTest{
        padding-top: 53px;
        padding-bottom: 50px;
        background-color: #fafafa;
    #look{
        width: 800px;
        background: red;
    }
    .image {
      width: 100%;
      height: 427px;
      display: block;
      overflow: hidden;
        
    }
    .main{
    border: 1px solid #e6e6e6;
    padding-top: 50px;
    padding: 50px 41px 20px 41px;
    text-align: center;
    background-color: #fff;
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
    .page_title{
        border-bottom: 1px solid #d9d9d9;
        h2{
            font-size: 24px;
            font-weight: normal;
        }
    }
    .page_info{
    font-size: 16px;
    color: #929090;
    margin: 20px 0px 45px 0;
        span{
            margin-left: 15px;
        }
    }
    .page_con{
    text-align: left;
    margin-top: 34px;
    font-size: 18px;
      .page_foot{
        position: relative;
        border-top: 1px solid #d9d9d9;
        margin: 25px 0;
        margin-top: 43px;
        width: 100%;
        position: relative;
        padding: 20px 0px 0px 0px;
        .el-link{
            font-size: 18px;    
            margin-top: 20px;    
        }
        .share{
        position: absolute;
        right: 0;
        bottom: 30px;
        text-align: bottom;
            img{
                         margin-left: 5px;   
                        }
        
           

        
        }
     }
    }    
    }
  
    
  
</style>