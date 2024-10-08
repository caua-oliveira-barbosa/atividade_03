import React from 'react';
import ilustracaoBanner from 'assets/ilustracao-banner.svg';
import estilos from './Inicio.module.css';
import presente from 'assets/presente.svg';
import saque from 'assets/saque.svg';
import estrela from 'assets/estrela.svg';
import dispositivo from 'assets/dispositivo.svg';

export default function Inicio() {
  return (
    <>
      <div id='main' className={estilos.container}>
        <div id='main' className={estilos.conteudo}>
          <div id='main' className={estilos.banner} data-test="principal">
            
            <h1 data-test="titulo-principal">
              Experimente mais liberdade no controle da sua vida financeira.
              Crie sua conta com a gente!
            </h1>
            <img id='main2'
              src={ilustracaoBanner}
              alt="Gráficos e uma pessoa com dinheiro na mão"
            />
          </div>
          <div id='main' className={estilos.vantagens}>
            <h2 data-test="segundo-titulo">Vantagens do nosso banco:</h2>
            <div id='main' className={estilos.vantagens__itens}>
              <div id='main' className={estilos.vantagens__item}>
                <img id='main2' src={presente} alt="ícone de um presente" />
                <h3 data-test="terceiro-titulo">Conta e cartão gratuitos</h3>
                <p data-test="paragrafo">
                  Isso mesmo, nossa conta é digital, sem custo fixo e mais que
                  isso: sem tarifa de manutenção.
                </p>
              </div>
              <div id='main' className={estilos.vantagens__item}>
                <img id='main2' src={saque} alt="ícone de uma mão segurando um dinheiro" />
                <h3 data-test="terceiro-titulo">Saques sem custo</h3>
                <p data-test='paragrafo'>
                  Você pode sacar gratuitamente 4x por mês de qualquer Banco
                  24h.
                </p>
              </div>
              <div id='main' className={estilos.vantagens__item}>
                <img id='main2' src={estrela} alt="ícone de uma estrela" />
                <h3 data-test="terceiro-titulo">Programa de pontos</h3>
                <p data-test='paragrafo'>
                  Você pode acumular pontos com suas compras no crédito sem
                  pagar mensalidade!
                </p>
              </div>
              <div id='main' className={estilos.vantagens__item}>
                <img
                  src={dispositivo}
                  alt="ícone de um dispositivo como notebook"
                />
                <h3 data-test='terceiro-titulo'>Seguro Dispositivos</h3>
                <p data-test='paragrafo'>
                  Seus dispositivos móveis (computador e laptop) protegidos por
                  uma mensalidade simbólica.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
