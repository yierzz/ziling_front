<template>
  <div class="main">
    <mu-row gutter>
      <mu-col width="100" desktop="66">

        <mu-paper class="project_detail">
          <div class="header">
            <icon-title :icon="'assignment_turned_in'" :title="'这里的项目名称可以打很多字'"></icon-title>
          </div>
          <mu-divider/>
          <div class="body">
            <div class="detail_items">
              <div class="detail_block">
                <h3>
                  任务赏金
                </h3>
                <div>150000<label>元</label></div>
              </div>
              <div class="detail_block">
                <h3>
                  周期上限
                </h3>
                <div>32<label>天</label></div>
              </div>
              <div class="detail_block">
                <h3>
                  抢单人数
                </h3>
                <div>16<label>人</label></div>
              </div>
              <div class="detail_block">
                <h3>
                  截止日期
                </h3>
                <div>2017-10-18</div>
              </div>
              <div class="detail_block">
                <h3>
                  项目等级
                </h3>
                <project-rank proLevel="A">
                </project-rank>
              </div>
              <div class="detail_block">
                <h3>
                  项目类型
                </h3>
                <div style="font-size: 12px;color: #808080;line-height: 12px; font-weight: bold;">网站、后台</div>
              </div>
            </div>
          </div>
          <div class="header">
            <icon-title :icon="'people'" :title="'人员配置'"></icon-title>

          </div>
          <div class="members">
            <mu-divider/>
            <div class="member_item">
              <div class="title">
                Web前端
              </div>
              <div class="number">
                已报名 12人
              </div>
              <mu-raised-button backgroundColor="#9013FE" style="height: 40px; width: 120px;border-radius: 24px;" label="报名"
                                icon="person" primary/>
            </div>
            <mu-divider/>
            <div class="member_item">
              <div class="title">
                Java后端
              </div>
              <div class="number">
                已报名 12人
              </div>
              <mu-raised-button backgroundColor="#9013FE" style="height: 40px; width: 120px;border-radius: 24px;" label="报名" icon="person" primary/>

            </div>
            <mu-divider/>
            <div class="member_item">
              <div class="title">
                数据库
              </div>
              <div class="number">
                已报名 12人
              </div>
              <mu-raised-button backgroundColor="#9013FE" style="height: 40px; width: 120px;border-radius: 24px;" label="报名" icon="person" primary/>
            </div>
          </div>
          <div class="header" style="display: flex;align-items: center;justify-content: space-between">
            <icon-title :icon="'list'" :title="'需求分工'"></icon-title>
            <mu-flat-button label="下载需求文档" icon="file_download" style="width: 158px;border-radius: 20px;"/>
          </div>
          <mu-divider/>
          <div class="describe_block">
            <div class="title">
              标题标题标题标题标题
            </div>
            <div class="content">
              评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论
              评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论
            </div>
            <div class="title">
              标题标题标题标题标题
            </div>
            <div class="content">
              评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论
              评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论
            </div>
          </div>


          <!--<span class="second_title">交付时间: 已截止</span>-->
          <!--<span class="money_number">￥80000</span>-->
          <!--<p class="pragraph">-->
          <!--本项目是基于实名认证（包含职业、学历、房产、汽车认证）主打线上聊天，线下活动的相亲交友软件。功能需求适配iPhone4s及以上iPhon备，IOS7及以上版本。主要功能包含：启动引导页，手机号注册，会员展示与筛选，线下活动报名支付，聊天功能，个人资料，会员购买功能，消息通知与推送。APP构架App主要有“约见”“线下活动”“聊天”“我”4个主页面【约见】-包含-->
          <!--会员展示、搜索、筛选功能【线下活动】-包含“活动”“往期精彩”两个子页面，“活动”包含报名支付功能【聊天】包含文字、图片、语音、表情基本聊天功能【我】包含详细个人资料、设置、实名认证、社交记录、谁看过我等功能-->
          <!--</p>-->
          <!--<h2 class="question_title">问题集</h2>-->
          <!--<mu-list>-->
          <!--<mu-list-item class="question_list">-->
          <!--<div class="left_color_bar" slot="left">-->
          <!--</div>-->
          <!--<span slot="left">提问</span>-->
          <!--<span slot="title">这个项目怎么样啊</span>-->
          <!--</mu-list-item>-->
          <!--<mu-list-item class="question_list" style="padding-left: 36px;">-->
          <!--<div class="left_color_bar_a" slot="left">-->
          <!--</div>-->
          <!--<span slot="left">回复</span>-->
          <!--<span slot="title">很厉害的项目</span>-->
          <!--</mu-list-item>-->
          <!--</mu-list>-->
          <!--<mu-text-field hintText="对项目提问" multiLine :rows="3" :rowsMax="6" icon="question_answer"></mu-text-field>-->
        </mu-paper>
      </mu-col>
      <mu-col width="100" desktop="33">
        <mu-paper :zDepth="2" class="recommand">
          <div class="title">
            <div class="left" >            
              <icon-title :icon="'tag_faces'" title="项目推荐"></icon-title>
            </div>
            <div class="right">
              <router-link to="/projects">查看更多</router-link>
              <mu-icon value="keyboard_arrow_right" :size="20"/>
            </div>
          </div>
          <mu-divider/>
          <router-link to="/projects">
            <div class="list_item">
              <img  class="item_left" src="../../assets/WEB.png" alt="图片加载失败"/>
              <div class="item_middle">
                <div class="title">项目名称</div>
                <div class="pro_value">
                  <div class="price">15000<label>元</label></div>
                  <div class="period">32<label>天</label></div>
                </div>
              </div>
              <img  class="item_right" src="../../assets/S.png" alt="图片加载失败"/>
            </div>
          </router-link>
          <mu-divider/>
          <router-link to="/projects">
            <div class="list_item">
              <img  class="item_left" src="../../assets/WEB.png" alt="图片加载失败"/>
              <div class="item_middle">
                <div class="title">项目名称</div>
                <div class="pro_value">
                  <div class="price">15000<label>元</label></div>
                  <div class="period">32<label>天</label></div>
                </div>
              </div>
              <img  class="item_right" src="../../assets/S.png" alt="图片加载失败"/>
            </div>
          </router-link>
          <mu-divider/>
          <router-link to="/projects">
            <div class="list_item">
              <img  class="item_left" src="../../assets/WEB.png" alt="图片加载失败"/>
              <div class="item_middle">
                <div class="title">项目名称</div>
                <div class="pro_value">
                  <div class="price">15000<label>元</label></div>
                  <div class="period">32<label>天</label></div>
                </div>
              </div>
              <img  class="item_right" src="../../assets/S.png" alt="图片加载失败"/>
            </div>
          </router-link>
          <mu-divider/>
          <router-link to="/projects">
            <div class="list_item">
              <img  class="item_left" src="../../assets/WEB.png" alt="图片加载失败"/>
              <div class="item_middle">
                <div class="title">项目名称</div>
                <div class="pro_value">
                  <div class="price">15000<label>元</label></div>
                  <div class="period">32<label>天</label></div>
                </div>
              </div>
              <img  class="item_right" src="../../assets/S.png" alt="图片加载失败"/>
            </div>
          </router-link>
          <mu-divider/>
          <router-link to="/projects">
            <div class="list_item">
              <img  class="item_left" src="../../assets/WEB.png" alt="图片加载失败"/>
              <div class="item_middle">
                <div class="title">项目名称</div>
                <div class="pro_value">
                  <div class="price">15000<label>元</label></div>
                  <div class="period">32<label>天</label></div>
                </div>
              </div>
              <img  class="item_right" src="../../assets/S.png" alt="图片加载失败"/>
            </div>
          </router-link>
          <mu-divider/>
        </mu-paper>
      </mu-col>
    </mu-row>
  </div>
</template>
<script>
  // import {getProjInfo} from '../../api/project'
  import API from 'api'
  import IconTitle from '../../components/icon_title'
  import ProjectRank from '../../components/project_rank'

  export default {
    data () {
      return {
      }
    },
    components: {IconTitle, ProjectRank},
    methods: {},
    computed: {},
    mounted () {
      API('getProjectInfo', {
        pid: this.$route.params.pid
      }).then(data => console.log(data))
//      getProjInfo(this.$route.params.pid).then(res => console.log(res))
//      this.$store.dispatch('getProjInfo', this.$route.params.pid)
//        .then(res => {
//        console.log(res)
//          if (res.errorCode === 1) {
//            console.log('login success')
//            this.$store.commit('SET', {
//              type: 'loginTag',
//              data: true
//            })
//            this.$router.push('/index')
//          } else if (res.errorCode === 0) {
//            alert('密码不符合规则')
//          }
//      }, error => {
//        console.log(error)
//      })
    }
  }
</script>
<style scoped lang="scss" rel="stylesheet/scss">
  .main {
    padding-top: 20px;
    font-family: MicrosoftYaHei;
    font-family: Roboto-Bold;

  .project_detail {
      width: 840px;
      .header {
        padding: 12px 22px;
        margin-left:0px;
      }
      .body {
        padding: 20px;
        margin-left:-20px;
        .detail_items {
          display: flex;
          padding:20px 20px;

          .detail_block {
            height: 80px;
            padding: 20px 20px;
            background-color: #fafafa;
            border-radius: 10px;
            margin-right: 10px;

            h3 {
              margin: 0;
              font-size: 12px;
              color: #808080;
              letter-spacing: 0;
              line-height: 12px;
            }

            div {
              margin-top: 8px;
              font-size: 20px;
              color: #FF5B00;
              letter-spacing: 0;
              line-height: 20px;
              font-family: Roboto-Bold;
              label {
                font-size: 13px;
                margin-top: 4px;
              }
            }
          }
        }
      }
      .members {
        padding: 0 20px;
        .member_item {
          height: 88px;
          display: flex;
          align-items: center;
          padding: 36px;
          justify-content: space-between;
          .title {
            font-size: 16px;
            color: #808080;
            letter-spacing: 0;
            line-height: 16px;
            font-weight: bold;
            width: 100px;
          }
          .number {
            font-size: 14px;
            color: #808080;
            letter-spacing: 0;
            line-height: 14px;
          }
        }
      }
      .describe_block {
        padding: 20px;
        .title {
          font-size: 16px;
          color: #808080;
          font-weight: bold;
        }
      }
    }

  .recommand {
    margin-left: 48px;
    margin-top:-15px;
    padding:0px 10px;
    .list_item {
      display: flex;
      align-items:center;
      justify-content: space-between;
      height: 80px;
      margin-top:0px;
      .item_left {
        width: 60px;
        height: 60px;
        display:flex;
        align-items:center;
      }
      .item_middle {
        .title {
          font-family: MicrosoftYaHei-Bold;
          font-size: 14px;
          color: #808080;
          letter-spacing: 0;
          line-height: 14px;
          width: 168px;
          height: 14px;
          margin-top: -10px;
        }
        .pro_value {
          font-family: Roboto-Bold;
          font-size: 20px;
          color: #FF5B00;
          letter-spacing: 0;
          line-height: 20px;
          width: 75px;
          display: flex;
          .price {
            margin-top:-10px;
          }
          .period {
            margin-left: 25px;
            margin-top:-10px;
          }
          label {
            font-size: 12px;
            margin-left: 4px;
          }
        }
      }
      .item_right{
        display:flex;
        align-items:center;
        width:26px;
        height: 26px;
        margin-top: -30px;
      }
    }
    
    .title {
      display: flex;
      align-items: center;
      height: 30px;
      justify-content: space-between; 
      margin-top: 15px;
      padding:22px 0;
      color: #808080;
      .left {
        display: flex;
        align-items: center;
        margin-top: 10px;
        margin-left: 15px;
      }
      .right {
        display: flex;
        align-items: center;
        margin-top: 10px;
        a {
          color: #808080;
          font-family: MicrosoftYaHei;
          font-size: 12px;
          letter-spacing: 0;
          line-height: 12px;
        }
      }
    }
  }
}
</style>
