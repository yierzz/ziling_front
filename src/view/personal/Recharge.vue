<template>
  <div class="wrapper">
  	<mu-tabs :value="activeTab" @change="handleTabChange">
      <mu-tab value="tab1" class="payMode" title="银行卡支付"/>
      <mu-tab value="tab2" class="payMode" title="移动支付"/>
    </mu-tabs>
    <div class="clearfix">
      <mu-radio label="微信支付" name="group" nativeValue="simple1" v-model="value" class="demo-radioone" labelLeft/> 
  	  <mu-radio label="支付宝支付" name="group" nativeValue="simple2" v-model="value"  class="demo-radiotwo" labelLeft/>
    </div>
    
  	<mu-raised-button label="支付" primary class="payButton" @click="open"/>
  	<mu-dialog :open="payDialog" dialogClass="paydialog" actionsContainerClass="closeButton">
		<div class="dialogwrapper">
			<p class="messageHead"><img src="../../assets/message.png"  alt="message"><span >订单信息</span></p>
			<ul class="userMessage clearfix">
			  <li class="messageText">买家</li>
			  <li class="messageBorder"></li>
			  <li class="messageText">订单信息</li>
			  <li class="messageBorder"></li>
			  <li class="messageText">订单号</li>
			  <li class="messageBorder"></li>
			  <li class="messageText">金额</li>
			</ul> 
			<ul class="personMessage">
			  <li class="messageText">谁动了我的世界</li>
			  <li class="messageText">用户充值</li>
			  <li class="messageText">12345</li>
			  <li class="messageText">12345</li>
			</ul>
			<img src="../../assets/alipay.png" class="alipay" alt="扫码">
		</div>
        <mu-flat-button slot="actions" @click="close" primary label="取消" />
    </mu-dialog>
	</div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        activeTab: 'tab1',
        payDialog: false
      }
    },
    components: {},
    methods: {
      handleTabChange (val) {
        this.activeTab = val
      },
      open () {
        this.payDialog = true
      },
      close () {
        this.payDialog = false
      }
    },
    computed: {},
    mounted () {}
  }
</script>
<style  lang="scss" rel="stylesheet/scss">
  .demo-radioone{
  	 margin:40px 0 0 160px;
  	  width:250px;
  	  height:68px;
  	  line-height:68px;
	  float:left;
	  background:url(../../assets/wechartPay.png) no-repeat;
	  padding:10px 0 0 50px;

	}
	.demo-radiotwo{
	  margin:40px 0 0 60px;
	  width:250px;
  	  height:68px;
  	  line-height:68px;
	  float:left;
	  background:url(../../assets/aliPaylogo.png) no-repeat;
	  padding:10px 0 0 50px;

	}
  .paydialog{
  		width:500px;
  		height:418px;
  	}
  .closeButton{
  		width:128px;
  		height:40px;
  		margin:0 0 20px 186px;
  		background: #FFFFFF;
		border: 2px solid #E3E3E3;
		border-radius: 20px;
		padding-right:20px;
  	}
  	.dialogwrapper{
  		margin:10px 0 0 20px;

		li{
			width:110px;
			height:46px;
			line-height:46px;
			text-align:center;
			float:left;
		}

  		.messageHead{
  			font-weight: bold;
  			width:100px;
  			height:16px;
			font-size: 16px;
			color: #808080;
			letter-spacing: 0;
			line-height: 16px;
  		}

  		.messageText{
			width:110px;
			height:45px;
			line-height:45px;
			text-align:center;
				
		}

  		.userMessage{
			width:450px;
			height:46px;
			background: #F4F4F4;
			font-weight:Bold;
			font-size: 12px;
			color: #808080;
			letter-spacing: 0;
			line-height: 12px;
			
			
			.messageBorder{
				width:1px;
				height:12px;
				margin-top:17px;
				background: #808080;
			}
  		}

  		.personMessage{
  			width:450px;
			height:46px;
			font-size: 12px;
			color: #808080;
			letter-spacing: 0;
			line-height: 12px;
  		}
  		.alipay{
  			width:206px;
			height:140px;
			margin:20px 0 0 122px;
  		}
  		
  	}
  .wrapper{
	margin-top:20px;

  	.payMode{
  	  overflow:hidden;
  	  background:#ffffff;
	  color:#000000;
  	}
  	.payButton{
  		width:128px;
  		height:40px;
  		background: #9013FE;
		border-radius: 20px;
		margin:55px 0 0 356px;
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

 
</style>
