var info =['姓名','性别','手机号码','邮箱地址','密码','确认密码','验证码'];


var legend = document.createElement('legend');
legend.innerHTML = '请输入注册信息！';
field.appendChild(legend);
field.setAttribute('class','legendfield');
var ul = document.createElement('ul');
for(let i = 0; i < info.length; i ++){
	var li = document.createElement('li');
	var label = document.createElement('label');
	label.innerHTML = info[i];
	li.appendChild(label);

	var input = document.createElement('input');
	li.appendChild(input);
	if(i == info.length -1){
		var oDiv = document.createElement('div');
		oDiv.setAttribute('class','showPic');
		oDiv.innerHTML = showNumber();
		li.appendChild(oDiv);
		oDiv.addEventListener('click',function(){
			oDiv.innerHTML = showNumber();
		});
	}
	ul.appendChild(li);
}
field.appendChild(ul);

var showBtn =  document.createElement('button');
showBtn.setAttribute('class','showBtn');
showBtn.innerHTML = 'LOGIN';
showBtn.onclick = function(){
	 var result = [];
	 var l = document.getElementsByTagName('input');
	 var div1 = document.getElementsByClassName('showPic')[0];
	 for(let i = 0; i < info.length; i ++){
	 	result[i] = l[i].value;
	 }
	 var name = result[0];
	 var sure = result[info.length - 1];
	 if(sure == div1.innerHTML && result[info.length - 2] == result[info.length - 3] && result[info.length - 2] != ''){
	 	document.write('欢迎您！' + name);
	 }else if(sure != div1.innerHTML){
	 	alert('验证码输入错误！');
	 }else if(result[info.length - 2] != result[info.length - 3] || result[info.length - 2] == ''){
	 	alert('两次密码不一致！');
	 }
}
field.appendChild(showBtn);

document.body.appendChild(field);

function showNumber(){
	var arr = '';
	for(let i = 0; i < 4; i ++){
		var m = parseInt(Math.random() * 10);
		arr += m;
	}
	return arr;
}

