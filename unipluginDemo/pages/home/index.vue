<template>
	<view class="home">
		<div class="home-exit">
			<icon class="home-exit-button e-icon" size="26" type="cancel" @click="handleExit" color="#fff"></icon>
		</div>
		<div class="home-form">
			
			<view class="u-input home-form-item">
				<picker class="picker"  @change="cardSlotChange" :value="cardSlot" :range="cardSlotOptions">
						<view class="picker-view">{{cardSlotOptions[cardSlot]}}</view>
				</picker>
			</view>
			<view class="u-input home-form-item">
				<picker class="picker"  @change="operatorChange" :value="operator" :range="operatorOptions">
						<view class="picker-view">{{operatorOptions[operator]}}</view>
				</picker>
			</view>
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
				cardSlotOptions:Object.freeze([
					'卡槽一','卡槽二'
				]),
				cardSlot:'0',
				operatorOptions:Object.freeze([
					'中国电信','中国移动/中国联通'
				]),
				operator:'0',
				phone:'',
			}
		},
		computed:{
			formValue(){
				return{
					phone:this.phone,
					icmslot:this.cardSlot,
					operator:this.operator === '0' ? '72' : '21',
					openforward:true, //启用 停用
					forwardtype:'01' // 无条件转移
				}
			}
		},
		onLoad() {},
		methods: {
			cardSlotChange(e){
				this.cardSlot = e.detail.value;
			},
			operatorChange(e){
				this.operator = e.detail.value;
			},
			verifyPhone(){
				var reg_tel = /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/;    //11位手机号码正则
				return !reg_tel.test(this.phone);
			},
			handleSetup(){
				if(!this.phone){
					uni.showToast({
						title:'请输入来电转移电话',
						icon:'error'
					})
					return;
				}
				if(this.verifyPhone()){
					uni.showToast({
						title:'请输入正确的手机号',
						icon:'error'
					})
					return;
				}
				uni.showToast({
					title:'设置成功!',
					icon:'success'
				})
				// 此处返回提示消息是否启动并且设置成功
				callforwarding.setCallForward(this.formValue)
				
			},
			handleExit(){
				callforwarding.stopCallForwarding({
					icmslot:this.cardSlot,
					forwardtype:'01' // 无条件转移
				});
				// 清除当前登录信息
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
		background-size:100% 100%;
		&-form{
			position: absolute;
			top: 24%;
			width: 100%;
			height: 350rpx;
			margin: 0 auto;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			align-items: center;
			&-item{
				height: 26%;
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
			width: auto;
			position: absolute;
			top: 10rpx;
			right: 10rpx;
			&-button{
				width: 70rpx;
				height: 70rpx;
			}
		}
	}
</style>
