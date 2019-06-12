var environment = "dev"
var host = "127.0.0.1:19999"

function ajax(type, url, data, maskShow) {
	var useMask = false;
	if (maskShow) {
		var mask = mui.createMask(function() {
			return useMask;
		}); //callback为用户点击蒙版时自动执行的回调；
		mask.show(); //显示遮罩		
	}
	//如果为get 请求则不会将data转为json
	if(type.toUpperCase()!="GET"){
		data = JSON.stringify(data)
	}
	return $.ajax({
		data: data,
		url: url,
		type: type,
		contentType: "application/json;charset=utf-8",
		complete: () => {
			useMask = true
			if (maskShow) {
				mask.close(); //关闭遮罩
			}
		}
	})
}

function handleAjax(ajax, success) {
	ajax.then(function(result) {
		success(result)
	})
}
