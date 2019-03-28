<template>
	<div>
		<section class="sec1">
			<span class="sec1_r">已领劵</span>
		</section>
		<section class="sc">
			<img src="../assets/img/bg_1.jpg"  class="tu"/>
			<p class="you">没有优惠劵，立即领取</p>
			<p class="hui">超值优惠不错过</p>
			<p class="ling">立即领取</p>
		</section>
		<section> 
			<div class="shou">
				<img src="../assets/img/首页.jpg" />
				<p>首页</p>
			</div>
			<div class="shou">
				<img src="../assets/img/购物车.jpg" />
				<p>购物车</p>
			</div>
			<div class="shou">
				<img src="../assets/img/优惠劵.jpg" />
				<p>优惠劵</p>
			</div>
			<div class="shou">
				<img src="../assets/img/wo.jpg" />
				<p>我</p>
			</div>
		</section>
	</div>
</template>

<script>
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
	.sec1_r{
		margin-left: 330px;
		color: white;
		font-size: 40px;
	}
	.sc{
		background: #f5f5f5;
		width: 100%;
		height: 1300px;
	}
	.tu{
		width: 286px;
		height: 237px;
		margin-top: 350px;
	}
	.you{
		color: black;
		margin-top: 20px;
		margin-bottom: 20px;
		font-size: 35px;
	}
	.hui{
		color: #a1a1a1;
		font-size: 30px;
	}
	.ling{
		background: #ff384f;
		width: 70%;
		height: 100px;
		border-radius: 50px;
		color: white;
		font-size: 40px;
		padding: 25px;
		margin-left: 120px;
		margin-top: 50px;
	}
	.shou{
		float: left;
		margin-left: 90px;
		margin-top: 20px;
	}
	.shou img{
		width: 75px;
		height: 71px;
	}
	.shou p{
		font-size: 20px;
	}
</style>
