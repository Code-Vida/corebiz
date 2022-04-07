'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Product', [
      {
        nome: "Microsoft Xbox Series S 512GB Standard cor branco",
        descricao: `Inclui controle.
        Resolução de 2560px x 1440px.
        Memória RAM de 10GB.
        Horas de diversão garantidas.
        Conta com: 1 cabo hdmi, 1 cabo de alimentação ca.`,
        urlImage: 'https://http2.mlstatic.com/D_NQ_NP_635605-MLA44492818317_012021-O.webp',
        valor: '2429.00'
      },
      {
        nome: "Microsoft Xbox Series S 512GB Standard cor branco",
        descricao: `Inclui controle.
        Resolução de 2560px x 1440px.
        Memória RAM de 10GB.
        Horas de diversão garantidas.
        Conta com: 1 cabo hdmi, 1 cabo de alimentação ca.`,
        urlImage: 'https://http2.mlstatic.com/D_NQ_NP_635605-MLA44492818317_012021-O.webp',
        valor: '2429.00'
      },
      {
        nome: "Controle Playstation 5 Sem Fio Dualsense Ps5 Midnight Black",
        descricao: `CONTROLE PLAYSTATION 5 SEM FIO DUALSENSE PS5 MIDNIGHT BLACK
        Leve mais emoção às suas noites de gameplay no PS5™ com o controle sem fio DualSense™ Midnight Black. Parte de uma nova linha de cores com o tema galáxia, este elegante design foi inspirado em como vemos as maravilhas do espaço no céu noturno, com tons sutis de preto e detalhes em cinza-claro.`,
        urlImage: 'https://http2.mlstatic.com/D_NQ_NP_737053-MLB46100261455_052021-O.webp',
        valor: '429.00'
      },
      {
        nome: "Nintendo Switch 32GB Standard cor vermelho-néon, azul-néon e preto",
        descricao: `Inclui controle.
        Resolução de 2560px x 1440px.
        Memória RAM de 10GB.
        Horas de diversão garantidas.
        Conta com: 1 cabo hdmi, 1 cabo de alimentação ca Inclui 2 controles.
        Resolução de 1920px x 1080px.
        Memória RAM de 4GB.
        Tem tela tátil.
        Horas de diversão garantidas.
        Conta com: 1 joy-con grip, 2 correias para joy-con, 1 dock, 1 cabo hdmi, 1 adaptador de corrente.`,
        urlImage: 'https://http2.mlstatic.com/D_NQ_NP_847299-MLA40692342173_022020-O.webp',
        valor: '2349.00'
      },
      {
        nome: "Sony PlayStation 5 825GB Standard cor branco e preto",
        descricao: `Inclui controle.
        Resolução de 3840px x 2160px.
        Memória RAM de 16GB.
        Horas de diversão garantidas.
        Conta com: 1 suporte vertical, 1 cabo de alimentação ac, 1 cabo usb, 1 cabo hdmi, 1 guia de iniciação rápida, 1 guía de segurança.`,
        urlImage: 'https://http2.mlstatic.com/D_NQ_NP_669939-MLA44492818154_012021-O.webp',
        valor: '4899.00'
      },
      {
        nome: "Sony PS Vita Slim 1GB Standard cor preto",
        descricao: `É portátil, ideal para levar para qualquer lugar que você quiser e brincar com seus amigos e familiares.
        Inclui controle.
        Memória RAM de 512MB.
        Tem tela tátil.
        A duração da bateria é de 6h.
        Horas de diversão garantidas.`,
        urlImage: 'https://http2.mlstatic.com/D_NQ_NP_978049-MLA40316414912_012020-O.webp',
        valor: '1826.00'
      },
    ], {});

  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Product', null, {});
  }
};
