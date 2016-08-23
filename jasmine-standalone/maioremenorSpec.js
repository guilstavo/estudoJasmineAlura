describe("Maior e Menor", function(){
	it('deve entender números em ordem não sequencial', function(){
		var algoritimo = new MaiorEMenor();
		algoritimo.encontra([5,15,7,9]);
		expect(algoritimo.pegaMaior()).toEqual(15);
		expect(algoritimo.pegaMenor()).toEqual(5);
	})
})