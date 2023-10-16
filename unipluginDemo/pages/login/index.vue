<template>
	<view class="login">
		<div class="login-form">
			<input class="u-input login-form-item" v-model="username" type="text" placeholder="UserName">
			<input class="u-input login-form-item" v-model="password" type="password" placeholder="Password">
		</div>
		<div class="login-console">
			<button class="login-console-button u-button" @click="handleLogon">Login</button>
		</div>
	</view>
</template>
<script>
	import {Login} from "@/api/comm.js"
	export default {
		data() {
			return {
				username:'',
				password:'',
			}
		},
		onLoad() {},
		methods: {
			async handleLogon(){
				if(!this.username || !this.password){
					uni.showToast({
						title:'请输入账号或密码',
						icon:'error'
					})
					return;
				}
				
				const params = {
					username:this.username,
					password:this.password,
				}
				const data = await Login(params);
				
				if(data){
						uni.reLaunch({
							url:"../home/index"
						})
				}
			}
		}
	}
</script>

<style lang="scss">
	@import url('../../common/components-style.scss');
	.login{
		width: 100%;
		height: 100%;
		overflow: hidden;
		background: url('../../static/login.png') no-repeat;
		background-position: 100% 100%;
		&-form{
			position: absolute;
			top: 24%;
			width: 100%;
			height: 210rpx;
			margin: 0 auto;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			align-items: center;
			&-item{
				height: 42%;
				width: 75%;
				
			}
		}
		&-console{
			width: 100%;
			position: absolute;
			bottom: 15%;

			&-button{
				width: 45%;
				height: 70rpx;
				margin: 0 auto;
			}
		}
	}
</style>
