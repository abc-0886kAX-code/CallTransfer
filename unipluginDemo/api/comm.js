export function Login(params){
	const {username,password} = params;
	
	if(username !== 'admin'){
					uni.showToast({
						title:'账号错误!',
						icon:'error'
					})
					return;
				}
				
	if(password !== '123'){
					uni.showToast({
						title:'密码错误!',
						icon:'error'
					})
					return;
				}
				
				
	return Promise.resolve({
		token:'123',
		username:'管理员'
	})
	
}