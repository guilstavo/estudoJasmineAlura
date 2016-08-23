function MaiorEMenor(){

	var menor;
	var maior;

	var clazz = {
		encontra : function(nums){

			menor = Number.MAX_VALUE;
			maior = Number.MIN_VALUE;

			nums.forEach(function(num){
				if(num < menor) menor = num;
				if(num > maior) maior = num;
			});
		},
		pegaMenor : function(){ return menor; },
		pegaMaior : function(){ return maior; }
	};

	return clazz;
}

var algoritimo = new MaiorEMenor();
algoritimo.encontra([7,6,5,4]);
console.log(algoritimo.pegaMaior() == 7);
console.log(algoritimo.pegaMenor() == 4);