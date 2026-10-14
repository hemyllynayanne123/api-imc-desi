const calcularIMC  = require('./imc');
describe('Validador de IMC ', ()=>{

test('Teste Abaixo do Peso', ()=>{
    const resultado = calcularIMC(52.00 , 1.75);
    expect(resultado).toEqual({
        imc:16.98,
        status:'Abaixo do peso normal'
    });
});
test('Teste Peso Normal', ()=>{
     const resultado = calcularIMC(58.00 , 1.60);
    expect(resultado).toEqual({
        imc:22.66,
        status:'Peso normal'
    });
});
test('Teste Excesso de Peso', ()=>{
      const resultado = calcularIMC(73.00 , 1.62);
    expect(resultado).toEqual({
        imc:27.82,
        status:'Excesso de Peso'
    });
});
test('Teste Obesidade', ()=>{
         const resultado = calcularIMC(80.00 , 1.55);
    expect(resultado).toEqual({
        imc:33.30,
        status:'Obesidade'
    });
});

});