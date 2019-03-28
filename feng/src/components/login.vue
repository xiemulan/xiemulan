<template>
	<div>
		<section class="sec1">
			<span class="sec1_r">登录</span>
		</section>
		<section class="secm">
			<span class="sec2_l">手机号</span>
			<span class="sec2_0"><input type=""v-model="phone" placeholder="请输入手机号" name="" id="" value="" /></span>
		</section>
		<section class="secm1">
			<span class="sec2_l">密码</span>
			<span class="sec2_r"><input type="" v-model="password" placeholder="请输入密码" name="" id="" value="" /></span>
		</section>
		<section class="sec3" v-on:click=login()>登录</section>
		 <section class="sec4" >
			<span style="margin-right: 180px;">忘记密码?</span>
			<router-link to="register" class="zc">立即注册</router-link>
		</section> 
		
	</div>
</template>

<script>
	export default {
		data() {
			return {
				phone: '',
				password: '',
			}
		},
		methods: {
			login() {
				this.$http.post('/api/users/login',{phone: this.phone,password:this.password}).then((data) => {
	    if(data.body.status==1){
	      alert(data.body.message)
	    }else{
	    	alert(data.body.message)
	    }
	  })
			}
		}
		}
</script>

<style>
	.sec1 {
		display: flex;
		width: 100%;
		flex-direction: row;
		height: 100px;
		line-height: 100px;
		background-color: #ff384f;
		
		margin-top: -60px;
	}
	/* .q {
		display: block;
		position: absolute;
		top: 10px;
		left: 25px;
		width: 39px;
		height: 75px;
		background: url(../assets/bg_1.jpg)  center no-repeat;
		background-size: 29px 55px;
	} */
	.sec1_r{
		margin-left: 330px;
		color: white;
		font-size: 40px;
	}
	.secm{
		margin-top: 20px;
		border-top: 1px solid #cccccc;
		border-bottom: 1px solid #cccccc;
		width: 100%;
		height: 155px;
	}
	.sec2_l{
		font-size: 45px;
		position: relative;
		top:10px;
		left: 0px;
		
	}
	.sec2_0 input{
		width:70%;
		height: 100px;
		margin-left: 20px;
		margin-top: 20px;
		border: 0;
		font-size: 30px;
		text-indent: 10px;
	}
	.secm1{
		width: 100%;
		height: 155px;
		margin-left: 20px;
	}
	.sec2_r input{
		width:70%;
		height: 100px;
		margin-left: 20px;
		margin-top: 20px;
		border: 0;
		font-size: 30px;
		text-indent: 10px;
	}
	.sec3{
		background: #ff384f;
		width: 90%;
		height: 100px;
		margin-left: 40px;
		color: white;
		font-size: 40px;
		border-radius: 15px;
		padding: 25px;
	}
	.sec4{
		margin-top: 50px;
		font-size:30px;
		color: #fd7d7d;
	}
	.zc{
		color: #fd7d7d;
	}
</style>
