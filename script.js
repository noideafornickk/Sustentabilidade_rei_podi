let currentSet = 1;  // Para acompanhar qual conjunto está ativo

function swapContent() {
    const imageSets = [
        {
            img1: 'reciclagem.jpg',
            title1: 'Reciclagem',
            text1: 'Separar o lixo corretamente é essencial para o processo de reciclagem. Garrafas de plástico, latas e papel devem ser separados e enviados para centros de reciclagem. Ao fazer isso, você contribui para a redução de resíduos nos aterros e a reutilização de materiais.',
            img2: 'energia.jpg',
            title2: 'Economia de Energia',
            text2: 'Desligue os aparelhos eletrônicos quando não estiverem em uso e aproveite a luz natural durante o dia. Trocar as lâmpadas convencionais por LED pode reduzir significativamente o consumo de energia. Pequenas ações fazem uma grande diferença na economia de energia.',
            img3: 'sus.jpg',
            title3: 'Consumo Consciente',
            text3: 'Pense antes de comprar. Priorize produtos duráveis e de qualidade, que tenham um menor impacto ambiental. Evite o desperdício de alimentos e prefira produtos com embalagens recicláveis. Ao adotar um consumo consciente, você contribui para a sustentabilidade do planeta.'
        },
        {
            img1: 'torneira.jpg',
            title1: 'Consumo de Água',
            text1: 'Reduza o consumo de água fechando a torneira enquanto escova os dentes, tomando banhos mais curtos e reutilizando água da chuva para regar plantas. Pequenas mudanças no uso diário de água podem ajudar a conservar esse recurso vital.',
            img2: 'floresta.jpg',
            title2: 'Biodiversidade',
            text2: 'Apoie e participe de iniciativas que promovem a conservação da biodiversidade, como plantio de árvores nativas, preservação de habitats naturais e proteção de espécies ameaçadas. A biodiversidade é crucial para o equilíbrio dos ecossistemas e para a sustentabilidade do planeta.',
            img3: 'bike.jpg',
            title3: 'transporte Sustentável',
            text3: 'Opte por meios de transporte sustentáveis, como andar de bicicleta, caminhar ou utilizar transporte público. Caronas compartilhadas e veículos elétricos também são alternativas que reduzem a emissão de gases poluentes e o impacto ambiental.'
        },
        {
            img1: 'sacola.jpg',
            title1: 'Redução do Uso de Plásticos',
            text1: 'Evite o uso de plásticos descartáveis, como sacolas, canudos e talheres de plástico. Prefira alternativas reutilizáveis, como sacolas de tecido, garrafas de água e recipientes de vidro. Reduzir o consumo de plástico ajuda a diminuir a poluição nos oceanos e nas áreas urbanas.',
            img2: 'horta.jpg',
            title2: 'Alimentação Sustentável',
            text2: 'Priorize uma alimentação baseada em alimentos de origem vegetal, que geralmente têm um menor impacto ambiental. Consumir produtos orgânicos e locais também contribui para uma cadeia de produção mais sustentável e para a redução do uso de agrotóxicos.',
            img3: 'tomati.jpg',
            title3: 'Agricultura Urbana',
            text3: 'Cultivar alimentos em hortas comunitárias ou até mesmo em pequenos espaços, como varandas e quintais, é uma excelente forma de promover a sustentabilidade. Isso reduz a pegada de carbono associada ao transporte de alimentos e incentiva uma alimentação saudável e local.'
        }
    ];

    // Seleciona todos os elementos com a classe .tip
    const tips = document.querySelectorAll('.tip');

    if (tips.length !== 3) {
        console.error('Não foram encontrados 3 elementos com a classe .tip');
        return;
    }

    // Atualiza as imagens e textos de acordo com o conjunto atual
    const set = imageSets[currentSet];
    try {
        tips[0].querySelector('img').src = set.img1;
        tips[0].querySelector('h3').textContent = set.title1;
        tips[0].querySelector('p').textContent = set.text1;

        tips[1].querySelector('img').src = set.img2;
        tips[1].querySelector('h3').textContent = set.title2;
        tips[1].querySelector('p').textContent = set.text2;

        tips[2].querySelector('img').src = set.img3;
        tips[2].querySelector('h3').textContent = set.title3;
        tips[2].querySelector('p').textContent = set.text3;
    } catch (error) {
        console.error('Erro ao atualizar o conteúdo:', error);
    }

    // Atualiza o contador para o próximo conjunto
    currentSet = (currentSet + 1) % imageSets.length;
}
