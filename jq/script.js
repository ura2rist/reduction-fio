$(document).on('click','#enter-form',function(){			//Событие клика
	let inp = $('#form-name > #name').val();			//Получение данных из формы
	let result = inp.split(' ');			//Разбивка ФИО на массив
	let output = '';			//Переменная для вывода
	let block = $('#result');		//Блок для вывода данных
	result.forEach(function(item,i){					//Цикл, сокращяющий все слова кроме первого
		if(i != 0){
			output += ' ' + item[0] + '.'; 
		}else{
			output += item;
		}
	});
	block.text(output);				//Запись в блок вывода
});