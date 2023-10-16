<template>
	<view class="home">
		<div class="home-exit">
			<icon class="home-exit-button e-icon" size="26" type="cancel" @click="handleExit" color="#fff"></icon>
		</div>
		<div class="home-form">
			<input class="u-input home-form-item" v-model="phone" type="text" placeholder="来电转移电话">
		</div>
		<div class="home-console">
			<button class="home-console-button s-button" @click="handleSetup">设置</button>
		</div>
	</view>
</template>
<script>
	const callforwarding = uni.requireNativePlugin('callforwarding');	
	export default {
		data() {
			return {
				phone:''
			}
		},
		onLoad() {},
		methods: {
			handleSetup(){
				if(!this.phone){
					uni.showToast({
						title:'请输入来电转移电话',
						icon:'error'
					})
					return;
				}
				
				callforwarding.setOverallSituationPhone({phone:this.phone})
			},
			handleExit(){
				uni.reLaunch({
					url:"../login/index"
				})
			}
		}
	}
</script>

<style lang="scss">
	@import url('../../common/components-style.scss');
	.home{
		width: 100%;
		height: 100%;
		overflow: hidden;
		background: url('../../static/home.png') no-repeat;
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
		&-exit{
			width: 100%;
			position: absolute;
			top: 0;
			right: 0;
			&-button{
				width: 70rpx;
				height: 70rpx;
			}
		}
	}
</style>
