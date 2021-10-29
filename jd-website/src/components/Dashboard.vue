<template>
  <div>
    <!--顶部LOGO-->
    <div style="display: flex; justify-content: center; border-top: 4px solid #1D4785;
    height: 150px; align-items: center;">
      <el-image
        style="height: 100px; margin: 0 auto;"
        :src="require('../assets/images/logo.png')"></el-image>
    </div>
    <!--菜单栏-->
    <el-menu background-color="#1D4783" unique-opened mode="horizontal" menu-trigger="hover"
             text-color="#fff" active-text-color="#FFE793" router style="display: flex; justify-content: center;"
             :collapse-transition="false" :default-active="$route.path">
      <template v-for="item in menuList">
        <template v-if="item.children">
          <!--一级菜单-->
          <el-submenu :index="item.id+''" :key="item.id" :show-timeout="200" :hide-timeout="200">
            <template slot="title">
              <!--              <i :class="item.icon"></i>-->
              <span slot="title" @click="$router.push(item.index)">{{ item.authName }}</span>
            </template>
            <!--二级菜单-->
            <el-menu-item v-for="i in item.children" :index="'/'+i.index" :key="i.id">
              <template slot="title">
                <span>{{ i.authName }}</span>
              </template>
            </el-menu-item>
          </el-submenu>
        </template>
        <template v-else>
          <el-menu-item :index="'/'+item.index" :key="item.id">
            <i :class="item.icon"></i>
            <span slot="title">{{ item.authName }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
    <router-view></router-view>
    <div style="height: 150px; background: #2B292A; color: white;" class="foot">
      <div class="f1">
        <p>
          <el-link :underline="false" type="info">机电工程学院（汽车工程学院）</el-link>
         
          <span>|</span> 
          <el-link :underline="false" type="info">联系我们</el-link>
          </p>
        <p> Copyright ©2020. 机电学院本科教学网</p>
         <p class="share">
            <span>分享至：</span>
            <a href="javascript:;"  target="_black"><i><img src="..\assets\images\wx1.png" alt="" ></i></a>
            <a href="javascript:;"  target="_black"><i><img src="..\assets\images\wb1.png" alt=""></i></a>
            <a href="javascript:;"  target="_black"><i><img src="..\assets\images\qq.png" alt=""></i></a>
          </p>
      </div>
      <div class="f2">
                <div class="ewm">
                    <img src="..\assets\images\ewm.png" alt="">
                </div>
                <div class="ads">
                    <p>Email: me_oue@sjtu.edu.cn</p>
                    <p>地址：江西省赣州市章贡区红旗大道86号</p>
                    <p>邮编：341000 </p>
                </div>
                <div class="clear"></div>
            </div>

      
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  data () {
    return {
      menuList: [
        { id: 1, authName: '网站首页', index: 'home' },
        {
          id: 2,
          authName: '新闻通告',
          index: 'news',
          children: [
            { id: 21, authName: '教学新闻', index: 'news' },
            { id: 22, authName: '通知公告', index: 'notice' },
            { id: 23, authName: '活动日历', index: 'events' }
          ]
        },
        {
          id: 3,
          authName: '教学概况',
          index:'project',
          children: [
            { id: 31, authName: '教学概况', index: '' },
            { id: 32, authName: '组织构架', index: '' },
            { id: 33, authName: '教学成果', index: '' }
          ]
        },
        {
          id: 4,
          authName: '培养方案',
          children: [
            { id: 41, authName: '培养目标', index: 'users' },
            { id: 42, authName: '培养方案', index: 'admins' },
            { id: 43, authName: '培养计划', index: 'admins' }
          ]
        },
        {
          id: 5,
          authName: '实践教学',
          children: [
            { id: 51, authName: '机电实验中心', index: 'users' },
            { id: 52, authName: '智能制造实验室', index: 'admins' },
            { id: 53, authName: '实习基地', index: 'admins' }
          ]
        },
        {
          id: 6,
          authName: '合作培养',
          children: [
            { id: 61, authName: '国内交换', index: 'users' },
            { id: 62, authName: '海外', index: 'admins' },
            { id: 63, authName: '管理办法', index: 'admins' }
          ]
        },
        { id: 7, authName: '联系我们', index: 'users' }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.foot{
      position: relative;
      padding: 0px 200px 50px 175px;
      .f1{
        float: left;
        padding-top: 30px;
        p{
          margin-top: 10px;
          .el-link{
            margin-right: 15px;
            font-size: 15px;
            color: white;
            font-weight: 400;
          }
          span{
           margin-right: 15px;
          }
        }
        .share{
          
         img{
           margin-right: 15px;
           vertical-align: top;
         }
        }
      }
      .f2{
        float: right;
        padding-top: 50px;
        .ewm{
              float: left;
              margin-right: 20px;
            img{
              width: 70px;
              height: 70px;
            }  
             

        }
        .ads{
              float: right;
               p{
                margin-top: 2px;
              }
        }
      }
}
</style>
