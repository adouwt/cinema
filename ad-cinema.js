
/*2017-12-31 by 迩伶贰*/

function cinema(x, y, emptyArr, selectArr, className) {
	if(Object.prototype.toString.call(x) != "[object Number]") {
		throw 'x 必须是数字';
	}

	if(Object.prototype.toString.call(y) != "[object Number]") {
		throw 'y 必须是数字';
	}
	if(Object.prototype.toString.call(emptyArr) != "[object Array]") {
		throw 'emptyArr 必须是数组';
	}

	if(Object.prototype.toString.call(selectArr) != "[object Array]") {
		throw 'selectArr 必须是数组';
	}

	//查找数组中的val 的下标
  Array.prototype.indexOf = function(val) {
    for (var i = 0; i < this.length; i++) {
    if (this[i] == val) return i;
    }
    return -1;
  }
  //找对数值对应下标，删除
  Array.prototype.remove = function(val) {
    var index = this.indexOf(val);
    if (index > -1) {
    this.splice(index, 1);
    }
  };
  var currentArr =[];

  if(currentArr.length==0) {
  	var btnDisabled = 'disabled'
  }

	var data = '<div class="text-center screen">放映屏幕</div>';
  data += '<table class="ad-table"><tbody>';
  for (var i = 0; i < x; i++) {
    data += '<tr><td class="index"><span>'+ (i+1) +'</span></td>';
    for (var j = 0; j < y; j++) {
    	var mark     = '';
    	var selected = '';
    	emptyArr.map((currentVal, index) => {
    		var currentVal = currentVal.split('-');
    		let emRow = parseInt(currentVal[0]);
    		let emcol = parseInt(currentVal[1]);

    		if((emRow-1) == i && (emcol-1) == j) {
    			mark = 'disabled';
    		} 
    	}) // 遍历空座位的数组，如果满足位置就返回一个字符串 变量，拼接在td的字符串里

    	if(selectArr.length) {
      	selectArr.map((currentVal, index) => {
    			var currentVal = currentVal.split('-');
      		let emRow = parseInt(currentVal[0]);
      		let emcol = parseInt(currentVal[1]);
      		if((emRow-1) == i && (emcol-1) == j) {
      			selected = 'selected';
      		} 
      	})
    	}  // 遍历 已经选择的座位的数组 满足位置的条件 返回字符串

    	var tdTemplate = `<td><button class="${mark} ${selected}" ${mark}  ${selected}></button></td>`;
     	data += tdTemplate;

    }
     data += '</tr>';
  }
  var otherTemplate =`
  			</tbody><table> 
  			<div class="text-center seat-status">
    			<span class="gray"></span><span>已选</span>
    			<span class="green"></span><span>可选</span>
    			<span class="cur-select"></span><span>当前选中</span>
    			<div class="">
    				<button class="ad-submit" ${btnDisabled}>提交</button>
    			<div> 
  			<div>
  		`;
  data += otherTemplate;
  $('.'+ className).html('').html(data);

  $('body').on('click', 'td button', function() {
  	var _thisRow   = $(this).parents("tr").index()+1;
  	var _thisCol   = $(this).parent().index();
  	var currentPos = _thisRow + '-' + _thisCol;

  	$(this).toggleClass('selected')

  	if($(this).hasClass('selected')){
  		currentArr.push(currentPos)
  		selectArr.push(currentPos);
  	}

  	if(!$(this).hasClass('selected')){
  		selectArr.remove(currentPos);
  		currentArr.remove(currentPos)
  	}

  	if(currentArr.length==0) {
	  	$('.ad-submit').attr('disabled', true)
	  } else {
	  	$('.ad-submit').attr('disabled', false)
	  }
   	return selectArr
   })
}
