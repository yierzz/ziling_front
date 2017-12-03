<template>
  <div>
    <mu-row gutter>
      <mu-col width="300" tablet="50" desktop="25">
        <mu-paper :zDepth="2" class="left_paper">
          <avator :avator="avatorURL" style="margin-top: 50px;"/>
          <mu-badge content="LV1" style="margin-top: -20px;" color="#F6DB65"/>
          <mu-linear-progress mode="determinate" :value="80" style="margin-top: 20px;width: 240px" color="#4A5AF8"/>
          <div class="user_username" style="margin-top: 20px;">紫领简历完成度:82%</div>

          <mu-raised-button label="编辑简历" to="/personal/info-modify" style="margin-top: 20px;"/>
          <!--<div>欢迎您：{{username}}</div>-->
          <!--<div class="user_username">会员等级:-->
          <!--<mu-badge content=" 紫钻会员" primary/>-->
          <!--</div>-->

          <div class="grey_bkg" style="margin-top: 30px;">

            <div class="title">资质等级:{{capacity_rank}}</div>
            <mu-linear-progress mode="determinate" class="linear" :value="capacity_rank*10" color="#4A5AF8"/>

            <div class="title">信用等级:{{credit_rank}}</div>
            <mu-linear-progress mode="determinate" :value="credit_rank*10" class="linear" color="#5ECD87"/>


            <div class="title"> 评价星级:{{evaluate_rank}}</div>
            <star-rank v-bind:rank="evaluate_rank"></star-rank>


          </div>

          <div class="grey_bkg">
            <span style="margin-top: 12px; margin-bottom: 10px;">认证资质</span>
            <skill-list :skills="verifiedSkill"></skill-list>
            <mu-raised-button label="认证更多" style="margin: 20px 0;"/>
          </div>

          <div class="grey_bkg">
            <span style="margin-top: 12px; margin-bottom: 10px;">技能标签</span>
            <div style="display: flex; width: 100%; justify-content: space-between;margin-bottom: 15px;">
              <mu-chip class="demo-chip">
                标签1
              </mu-chip>
              <mu-chip class="demo-chip">
                标签2
              </mu-chip>
              <mu-chip class="demo-chip">
                标签3
              </mu-chip>
            </div>

          </div>

        </mu-paper>

        <!--<mu-paper :zDepth="1" class="left_paper">-->

        <!--<div>资质</div>-->
        <!--<a to="/more">更多认证</a>-->
        <!--</mu-paper>-->
        <!--<mu-paper class="left_paper">-->
        <!--<mu-badge v-for="(label,index) in resume" :key="index" :content="label"></mu-badge>-->
        <!--</mu-paper>-->
      </mu-col>
      <mu-col width="100" tablet="50" desktop="75">
        <mu-paper :zDepth="2" class="right_paper">
          <mu-tabs :value="activeTab" @change="handleTabChange" v-if="showTab">
            <mu-tab value="tab1" title="个人钱包" href="#/personal/purse"/>
            <mu-tab value="tab2" title="当前项目" href="#/personal/current_project"/>
            <mu-tab value="tab3" title="消息" href="#/personal/message"/>
            <mu-tab value="tab4" title="成长记录" href="#/personal/growth"/>

          </mu-tabs>
          <router-view></router-view>

        </mu-paper>

      </mu-col>
      <!--<mu-col width="100" tablet="50" desktop="75">-->
      <!--<mu-paper class="user_profile_show" :zDepth="2">-->
      <!--<h3 class="title">您的成果</h3>-->
      <!--<mu-flexbox justify="center" class="flex-box">-->
      <!--<mu-flexbox-item class="flex-item">-->
      <!--<span class="number">6</span><br>-->
      <!--<span class="desc">已承接的项目/个</span>-->
      <!--</mu-flexbox-item>-->
      <!--<mu-flexbox-item class="flex-item">-->
      <!--<span class="number">0.8</span><br>-->
      <!--<span class="desc">信用等级/等级</span>-->
      <!--</mu-flexbox-item>-->
      <!--<mu-flexbox-item class="flex-item">-->
      <!--<span class="number">0</span><br>-->
      <!--<span class="desc">总收入/元</span>-->
      <!--</mu-flexbox-item>-->

      <!--</mu-flexbox>-->
      <!--</mu-paper>-->

      <!--<router-view>-->
      <!--</router-view>-->
      <!--</mu-col>-->
    </mu-row>

  </div>
</template>
<script>
  import UserAvatorURL from '../../assets/defaultUserlogo.png'
  import Avator from '../../components/avator.vue'
  import StarRank from '../../components/star_rank.vue'
  import SkillList from '../../components/skill_list.vue'

  export default {
    data () {
      return {
        avatorURL: UserAvatorURL,
        username: 'zilingspace.com',
        activeTab: 'tab1',
        resume: ['java后端科学家', 'php魔法师', 'js前端切图仔'],
        verifiedSkill: ['android', 'ios', 'web', 'wechat'],
        credit_rank: 8.2,
        capacity_rank: 9.8,
        evaluate_rank: 4.2
      }
    },
    components: {
      Avator,
      'star-rank': StarRank,
      'skill-list': SkillList
    },
    methods: {
      handleTabChange (val) {
        this.activeTab = val
      }
    },
    mounted () {
      this.$store.dispatch('getPrivateUserInfo', {
        currentUser: this.$store.state.user.info.userId
      })
    },
    computed: {
      showTab () {
        let path = this.$route.path
        if (path === '/personal/info-modify') {
          return false
        } else {
          return true
        }
      }
    }
  }
</script>
<style scoped lang="scss" rel="stylesheet/scss">

  .flex-box {
    margin-top: 70px;
  }

  .left_paper {
    margin: 15px 0 20px 0;
    padding: 0 2rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    font-family: MicrosoftYaHei;
    font-size: 12px;
    color: #808080;
    letter-spacing: 0;
    .grey_bkg {

      .linear {
        width: 220px;
        margin-top: 8px;
        height: 10px;
        border-radius: 5px;
      }
      .title {
        margin-top: 15px;
        font-family: MicrosoftYaHei;
        font-size: 12px;
        color: #808080;
        letter-spacing: 0;
      }
      margin-bottom: 20px;
      padding: 0 20px;
      display: flex;
      flex-direction: column;
      align-items: center;

      background: rgba(211, 209, 209, 0.1);
      border-radius: 10px;
      width: 260px;

    }
  }

  .right_paper {
    margin: 15px 0 20px 0;

  }

  .user_profile_show {
    height: 290px;
    background: url('../../assets/person_achievement.png');
    background-size: cover;
    .title {
      line-height: 40px;
      margin: 0;
      color: #0d47a1;
      font-size: 28px
    }

    .flex-item {
      text-align: center;

      .number {
        font-size: 28px;
        color: #ffeb3b;
        font-weight: bold;
      }

      .desc {
        font-size: 16px;
        font-weight: bold;
        color: #9e9e9e
      }

    }

  }

  .sidebar {
    .user_avator_paper {
      height: 290px;

      .user_background {
        background: url("../../assets/defaultUserBg.png") center center no-repeat;
        width: 100%;
        height: 110px;
        position: relative;

        .user_avator_img {
          width: 122px;
          height: 122px;
          transform: translatex(-50%);
          position: absolute;
          top: 47px;
          left: 50%;
          border-radius: 50%;
        }
      }
      .user_username {
        font-size: 22px;
        line-height: 30px;
        color: rgb(102, 102, 102);
        margin-top: 80px;
        text-align: center;
      }
    }

    .side_menu {
      margin-top: 10px;
      overflow: hidden;
      .isActive {
        background-color: #9e9e9e;
      }
    }
  }

</style>
