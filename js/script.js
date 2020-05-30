function reduction(e){
	e.preventDefault();
	let inp = document.forms['form-name'].elements.name.value.trim();	//Получение данных из формы
	let result = inp.split(' ');			//Разбивка ФИО на массив
	let output = '';			//Переменная для вывода
	let block = document.getElementById('result');		//Блок для вывода данных
	result.forEach(function(item,i){					//Цикл, сокращяющий все слова кроме первого
		if(i != 0){
			output += ' ' + item[0] + '.'; 
		}else{
			output += item;
		}
	});
	block.innerHTML = output;			//Запись в блок вывода
}

document.getElementById('enter-form').onclick = reduction;  //событие клика по кнопке