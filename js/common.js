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
	return $.ajax({
		data: JSON.stringify(data),
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
