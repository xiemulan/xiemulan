<template>
	<div>
		<section class="sec1">
			<!-- <span class="q"></span> -->
			<span class="sec1_r">注册</span>
		</section>
		<section class="secm">
			<span class="sec2_0"><input type=""v-model="phone" placeholder="请输入手机号" name="" id="" value="" /></span>
			<span></span>
		</section>
		<section class="secm">
			<span class="sec2_r"><input type="" v-model="password" placeholder="请输入验证码" name="" id="" value="" /></span>
		</section>
		<section class="secm1">
			<span class="sec2_r"><input type="" v-model="password" placeholder="请设置六位及以上密码" name="" id="" value="" /></span>
		</section>
		<section class="sec3" v-on:click=register()>注册</section>
		<section class="sec4">
			*注册即代表同意<span style="color: #ff384f;"><<羊毛省钱协议书>></span>
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
			//      注册方法
			register() {
					if(this.password != this.repassword) {
						alert("两次密码不一致")
					} else {
						let sendDate = {
							phone: this.phone,
							password: this.password,
						}
						this.$http.post('/api/users/register', sendDate).then((data) => {
							if(data.body.status == 1) {
								alert(data.body.message)
							} else {
								alert(data.body.message)
							}
						})
				}
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
		width: 100%;
		height: 80px;
		margin-bottom: 50px;
	}
	.secm1{
		margin-top: 50px;
		border-top: 1px solid #cccccc;
		width: 100%;
		height: 100px;
		margin-bottom: 50px;
	}
	.sec2_0 input{
		width:100%;
		height: 100px;
		margin-top: 20px;
		border: 0;
		font-size: 30px;
		text-indent: 10px;
	}
	.sec2_r input{
		width:100%;
		height: 100px;
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
		font-size: 25px;
		margin-left: -250px;
		margin-top: 20px;
	}
</style>
