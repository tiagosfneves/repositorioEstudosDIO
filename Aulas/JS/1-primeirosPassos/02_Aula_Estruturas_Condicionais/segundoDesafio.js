  /* 
    FAÇA UM PROGRAMA PARA CALCULAR O VALOR DE UMA VIAGEM
    - 5 VARIAVEIS:

    1 - preço etanol;
    2 - preço gasolina;
    3 - tipo de combustivel usado no carro;
    4 - gasto médio de combustivel do carro por km;
    5 - distancia em km da viagem;

    IMPRIMA NO CONSOLE O VALOR QUE SERÁ GASTO PRA REALIZAR ESTA VIAGEM
 */

    const precoEtanol = 3.45;
    const precoGasolina = 4.65;
    const kmPorLitro = 15;    
    const distanciaEmKm = 2100;

    /* Alterando para 'Gasolina' é alterado o resultado */
    const tipoCombustivel = 'Etanol'; 
    
    
    const litrosConsumidos = distanciaEmKm / kmPorLitro;
    
    if (tipoCombustivel === 'Etanol') {
      const valorGastoNaViagem = litrosConsumidos * precoEtanol;
      console.log(valorGastoNaViagem.toFixed(2));
    } else {
      const valorGastoNaViagem = litrosConsumidos * precoGasolina;
      console.log(valorGastoNaViagem.toFixed(2));
    }   
    
