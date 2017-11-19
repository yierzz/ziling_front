<template>
  <div class="card_container">
      <div class="icon">
         <avator  gender="男"></avator>
      </div>
      <div class="baseInfo">
          <div class="divide"></div>
          <div class="currentState">
            <img :src="RESTSTATE">
            <p class="status">{{userProfile.status || '接单中'}}</p>
          </div>
          <div class="username">
            <b>{{userProfile.nickname}}</b>
          </div>
          <div class="skills">
            <span v-for="skill in userProfile.verifiedSkills">{{skill}}</span>
          </div>
          <div class="ranks">
              <div class="capacityRank">
                <p>能力等级:{{userProfile.capacityRank}}</p>
                <div class="capacityBar">
                  <div class="CapacityProgress">
                  </div>
                </div>
              </div>
              <div class="creditRank">
                <p>信用等级:{{userProfile.creditRank}}</p>
                <div class="creditBar">
                   <div class="CreditProgress">
                    
                  </div>
                </div>
              </div>
              <div class="evaluateRank">
                <p>评价星级:{{userProfile.evaluateRank}}</p>
                 <div class="evaluateBar">
                    <ul>
                      <li>
                        <img :src="STAR1">
                      </li>
                      <li>
                        <img :src="STAR1">
                      </li>
                       <li>
                        <img :src="STAR1">
                      </li>
                       <li>
                        <img :src="STAR1">
                      </li>
                      <li>
                        <img :src="STAR06">
                      </li>
                    </ul>
                 </div>
                </div>
          </div>
          <div class="verifiedSkills">
            <p>认证资质</p>
            <div class="qualify">
              <ul>
                <li>
                     <li>
                        <img :src="IOSQUA">
                      </li>
                       <li>
                        <img :src="WEBQUA">
                      </li>
                       <li>
                        <img :src="SMALLPROQUA">
                      </li>
                      <li>
                        <img :src="ANDRIODQUA">
                      </li>
                </li>
              </ul>
            </div>
          </div>
      </div>
      <!-- <div>当前状态：{{userProfile.status || '接单中'}}</div> -->
      <!-- <div class="base_info" style="cursor: pointer" @click="toUserProfile" >
        <avator  gender="男"></avator>
        <div>
          <div>昵称：{{userProfile.nickname}}</div>
          <div>定位：<mu-badge v-for="(label,index) in resume" :key="index" :content="label"></mu-badge></div>
        </div>
      </div>
      <div class="ranks">
        <div>能力等级:{{userProfile.capacityRank}}</div>
        <div>信用等级:{{userProfile.creditRank}}</div>
        <div>评价星级:{{userProfile.evaluateRank}}</div>
        <div>认证资质:<span v-for="skill in userProfile.verifiedSkills">{{skill}}  </span></div>
      </div> -->
  
  </div>
</template>
<script>
  import STAR1 from '../assets/star1.0.png'
  import RESTSTATE from '../assets/restState.png'
  import Avator from '../components/avator.vue'
  import STAR06 from '../assets/star0.6.png'
  import IOSQUA from '../assets/IOSqua.png'
  import WEBQUA from '../assets/WEBQUA.png'
  import SMALLPROQUA from '../assets/SMALLPROQUA.png'
  import ANDRIODQUA from '../assets/ANDRIODQUA.png'
  export default {
    data () {
      return {
        RESTSTATE,
        STAR1,
        STAR06,
        IOSQUA,
        WEBQUA,
        SMALLPROQUA,
        ANDRIODQUA
      }
    },
    props: {
      userProfile: {},
      username: {type: String, default: '这是昵称'},
      resume: {
        type: Array,
        default: () => {
          return ['java后端科学家', 'php魔法师', 'js前端切图仔']
        }
      },
      gender: {type: String, default: '男'},
      state: {type: String, default: '接单中'},
      nickname: {type: String, default: '这是昵称'},
      credit_rank: {type: Number, default: 2},
      capacity_rank: {type: Number, default: 2},
      evaluate_rank: {type: Number, default: 2},
      verified_skills: {
        type: Array,
        default: () => {
          return ['java', 'mysql']
        }
      },
      id: {type: String, default: '123'}
    },
    components: {
      'avator': Avator
    },
    methods: {
      toUserProfile () {
        this.$router.push(`/user/${this.id}`)
      }
    },
    computed: {},
    mounted () {
    }
  }
</script>
<style scoped lang="scss" rel="stylesheet/scss">
  .card_container {
    width: 360px;
    // height:470px;
    background-color: #FFD3D1D1;
    margin-right:30px;
    margin-bottom:35px;
    border-radius: 5px;
  }

  .baseInfo{
    width:100%;
    background-color: #fff;
    height:420px;
    margin-top:-56px;
    // border:1px solid red;
  }

  .baseInfo .divide{
    height:18px;
    width:100%;
  }
    .baseInfo .currentState{
      position:relative;
    }

  .baseInfo .currentState p{
    position:absolute;
    top:-3px;
    left:0;
    color:#FFF;
    font-family: "微软雅黑";
    font-size: 12px;
    text-indent: 8px
  }

  .baseInfo .username{text-align: center;
    font-family:"微软雅黑";
    font-size: 14px;
    color: #808080;
    letter-spacing: 0;
    line-height: 14px;
    padding:3px 0;
   }

   .baseInfo .skills{
      text-align: center;
      font-family:"微软雅黑";
      font-size: 12px;
      color: #BCBCBC;
      letter-spacing: 0;
      line-height: 12px;
      padding:5px 0;
   }

   .baseInfo .ranks{
      background-color:rgba(250,250,250,1);
      border-radius: 10px;
      width:92%;
      margin:10px auto;
      height:200px;
      
   }

   .baseInfo .ranks p{
     padding-top:10px;
     text-align: center;
     font-family: "微软雅黑";
      font-weight: bold;
      font-size: 12px;
      color: #808080;
      letter-spacing: 0;
      line-height: 16px;
   }

   .baseInfo .ranks .capacityBar
   {
     background: #ECEAEA;
     border-radius: 5px;
     width:280px;
     height:10px;
     margin:0 auto;
   }

   .baseInfo .ranks .capacityBar .CapacityProgress{
     background-image: linear-gradient(-135deg, #8193FC 0%, #4A5AF8 100%);
     border-radius: 5px;
     width:80%;
     height:10px;
   }
  .baseInfo .ranks .creditBar{
     background: #ECEAEA;
     border-radius: 5px;
     width:280px;
     height:10px;
     margin:0 auto;
    }

  .baseInfo .ranks .creditBar .CreditProgress{
    background-image: linear-gradient(45deg, #5ECD87 0%, #8EF5CC 100%);
    border-radius: 5px;
     border-radius: 5px;
     width:90%;
     height:10px;
  }

  .evaluateBar ul{list-style: none;margin-top:-10px;}

  .evaluateBar ul li{display: inline-block}

  .baseInfo .verifiedSkills{
      background-color:rgba(250,250,250,1);
      border-radius: 10px;
      width:92%;
      margin:10px auto;
      height:85px;
  }

.baseInfo .verifiedSkills .qualify ul{
  list-style: none;
}

.baseInfo .verifiedSkills .qualify{
  margin-top:-10px;
  margin:0 auto;
}

.baseInfo .verifiedSkills .qualify ul li{
  display: inline-block;
  margin-left:15px;
}

.baseInfo .verifiedSkills p{
  text-align: center;
  font-family: "微软雅黑";
  font-size: 12px;
  color: #808080;
  line-height: 16px;
  letter-spacing: 0;
  padding-top:10px;
}
</style>
