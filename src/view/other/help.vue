<template>
  <div class="content">
    <div class="left">
      <div class="search_box">
        <!--<input class="search_input" type="text" placeholder="搜索用户名、职务、技术用语"></input>-->
        <text-field placeholder="搜索用户名、职务、技术用语" class="text"/>
        <a href="" class="search_button">搜  索</a>
             
      </div>
      <div class="prefecture">
        <ul>
        <span class="prefecture_text">需求方专区</span>
        <a href="" class="more">查看更多 <img :src="rightArrow" alt=""></a>
        <li><a href="" class="prefecture_list">1.这里是各种专区，这里有hover</a></li>
        <li><a href="" class="prefecture_list">2.hover颜色是蓝色</a></li>
        <li><a href="" class="prefecture_list">3.这里是各种专区，这里有hover</a></li>
        <li><a href="" class="prefecture_list">4.这里是各种专区，这里有hover</a></li>
        <li><a href="" class="prefecture_list">5.这里是各种专区，这里有hover</a></li>
        </ul>
      </div>
      <div class="prefecture">
        <ul>
        <span class="prefecture_text">开发方专区</span>
        <a href="" class="more">查看更多 <img :src="rightArrow" alt=""></a>
        <li><a href="" class="prefecture_list">1.这里是各种专区，这里有hover</a></li>
        <li><a href="" class="prefecture_list">1.这里是各种专区，这里有hover</a></li>
        <li><a href="" class="prefecture_list">1.这里是各种专区，这里有hover</a></li>
        <li><a href="" class="prefecture_list">1.这里是各种专区，这里有hover</a></li>
        <li><a href="" class="prefecture_list">1.这里是各种专区，这里有hover</a></li>
        </ul>
      </div>
    </div>
   <div class="right">
      <div class="question_title">
        <img :src="smileFace" alt="">
        <div class="question_title_text">常见问题</div>
      </div>
      <div class="question_content">
        <ul class="question_list clearfix">
          <div class="question_list_text">一、关于账号、注册、登录：</div>
          <li ><a class="question_list_items" href="">1.这里是各种问题专区，这里有hover</a></li>
          <li ><a class="question_list_items" href="">2.这里是各种问题专区，这里有hover</a></li>
          <li ><a class="question_list_items" href="">3.这里是各种问题专区，这里有hover</a></li>
          <li ><a class="question_list_items" href="">4.这里是各种问题专区，这里有hover</a></li>
          <li ><a class="question_list_items" href="">5.这里是各种问题专区，这里有hover</a></li>
          <li ><a class="question_list_items" href="">6.这里是各种问题专区，这里有hover</a></li>
        </ul>
        <ul class="question_list clearfix">
          <div class="question_list_text">二、关于上传、审核、编辑和删除内容：</div>
          <li ><a class="question_list_items" href="">1.这里是各种问题专区，这里有hover</a></li>
          <li ><a class="question_list_items" href="">2.这里是各种问题专区，这里有hover</a></li>
          <li ><a class="question_list_items" href="">3.这里是各种问题专区，这里有hover</a></li>
          <li ><a class="question_list_items" href="">4.这里是各种问题专区，这里有hover</a></li>
          <li ><a class="question_list_items" href="">5.这里是各种问题专区，这里有hover</a></li>
          <li ><a class="question_list_items" href="">6.这里是各种问题专区，这里有hover</a></li>
        </ul>
        <ul class="question_list clearfix">
          <div class="question_list_text">三、关于账号、注册、登录：</div>
          <li ><a class="question_list_items" href="">1.这里是各种问题专区，这里有hover</a></li>
          <li ><a class="question_list_items" href="">2.这里是各种问题专区，这里有hover</a></li>
          <li ><a class="question_list_items" href="">3.这里是各种问题专区，这里有hover</a></li>
          <li ><a class="question_list_items" href="">4.这里是各种问题专区，这里有hover</a></li>
          <li ><a class="question_list_items" href="">5.这里是各种问题专区，这里有hover</a></li>
          <li ><a class="question_list_items" href="">6.这里是各种问题专区，这里有hover</a></li>
        </ul>
        <ul class="question_list clearfix">
          <div class="question_list_text">四、关于账号、注册、登录：</div>
          <li ><a class="question_list_items" href="">1.这里是各种问题专区，这里有hover</a></li>
          <li ><a class="question_list_items" href="">2.这里是各种问题专区，这里有hover</a></li>
          <li ><a class="question_list_items" href="">3.这里是各种问题专区，这里有hover</a></li>
          <li ><a class="question_list_items" href="">4.这里是各种问题专区，这里有hover</a></li>
          <li ><a class="question_list_items" href="">5.这里是各种问题专区，这里有hover</a></li>
          <li ><a class="question_list_items" href="">6.这里是各种问题专区，这里有hover</a></li>
        </ul>
        <a href="" class="feedback">在线反馈</a>
       <div class="feedback_text">找不到解决方案，请将问题反馈给我们</div>
      </div>
   </div>
 </div>
</template>
<script>
  import rightArrow from '../../assets/rightArrow.png'
  import smileFace from '../../assets/smileFace.png'
  import TextField from '../../components/text_field'
  export default {
    data () {
      return {
        rightArrow,
        smileFace
      }
    },
    components: {TextField},
    methods: {},
    computed: {},
    mounted () {}
  }
</script>
<style scoped lang="scss" rel="stylesheet/scss">
  .content{
    display:flex;

    .left{
      width:300px;
      height:620px;
      margin:40px 20px 0px 35px;
      border-radius: 5px;

      .search_box{
        width:300px;
        height:70px;
        margin-bottom:2px;
        background: #FFFFFF;

        .text {
          margin: 20px 0 0 0;
          width: 195px;
        }
        .search_button {
          display:flex;
          width:55px;
          height:30px;
          line-height:30px;
          text-align:center;
          border-radius: 15px;
          margin-top: -30px;
          margin-left: 240px;
          background: #9013FE;
          font-size:12px;
          color: #FFFFFF;
          padding-left: 14px;
        }

      }
      .prefecture{
        width:300px;
        margin-bottom:2px;
        padding:30px 21px 0 21px;
        color: #808080;
        background: #FFFFFF;

        a{
          color:#808080;
        }
        a:hover{
          color:#4A5AF8;
        }
        .prefecture_text{
          line-height: 14px;
          font-size: 16px;
          font-weight:bold;
        }

        .more{
          display:inline-block;
          margin:0 0 20px 58px;
          font-size: 12px;
          line-height: 12px;
        }

        .prefecture_list{
          display:inline-block;
          width:243px;
          height:19px;
          line-height:19px;
          overflow:hidden;
          font-size: 14px;
          margin-bottom:15px;
        }
      }

    }

  .right{
    width:840px;
    height:866px;
    margin-top:40px;
    border-radius: 5px;

    .question_title{
      display:flex;
      align-items: center;
      width:840px;
      height:55px;
      margin-bottom:2px;
      background: #FFFFFF;

      img{
        width:20px;
        height:20px;
        margin:0 10px 0 20px;
      }

      .question_title_text{
        height:14px;
        line-height: 14px;
        font-family: MicrosoftYaHei-Bold;
        font-size: 18px;
        color: #808080;
        letter-spacing: 0;
      }

    }
    .question_content{
      background:#FFFFFF;
    }
    .question_list{
      width:840px;
      height:189px;
      padding:20px;

      .question_list_text{
        height:21px;
        line-height:21px;
        font-family: MicrosoftYaHei-Bold;
        font-weight:bold;
        font-size: 16px;
        color: #808080;
        letter-spacing: 0;
        margin-bottom:20px;
      }

      .question_list_items{
        width:300px;
        height:19px;
        margin:0 20px 15px 0 ;
        float:left;
        font-family: MicrosoftYaHei;
        font-size: 14px;
        color: #808080;
        letter-spacing: 0;
      }
      a:hover{
        color: #4A5AF8;
      }
    }
    .feedback{
      display:inline-block;
      width:86px;
      height:30px;
      line-height:30px;
      text-align:center;
      background: #9013FE;
      border-radius: 15px;
      margin-left:377px;
      font-family: MicrosoftYaHei;
      font-size: 12px;
      color: #FFFFFF;
      letter-spacing: 0;

    }
    .feedback_text{
      width:216px;
      height:36px;
      line-height:16px;
      font-family: MicrosoftYaHei;
      font-size: 12px;
      color: #808080;
      letter-spacing: 0;
      margin:10px 0 20px 313px;
    }

  }

  .clearfix::after {
      clear: both;
      content: " ";
      display: block;
      font-size: 0;
      height: 0;
      visibility: hidden;
  }
  body, h1, h2, h3, h4, h5, h6, hr p blockquote,/*structural elements  结构元素*/
  dl, dd, dt, ul, ol, li,/*list elements 列表元素*/
  pre, /*text formatting elements 文本格式元素*/
  fieldset, form, input, legend, button, textarea， select,/*form elements 表单元素*/
  th, td/*table elements 表格元素*/{
    margin: 0px;
    padding: 0px;
  }
  ul, ol{
      list-style: none;
  }
 }

</style>
