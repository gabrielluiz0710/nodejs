const players = [
    { NOME: "Mario", VELOCIDADE: 4, MANOBRABILIDADE: 3, PODER: 3, PONTOS: 0 },
    { NOME: "Peach", VELOCIDADE: 3, MANOBRABILIDADE: 4, PODER: 2, PONTOS: 0 },
    { NOME: "Yoshi", VELOCIDADE: 2, MANOBRABILIDADE: 4, PODER: 3, PONTOS: 0 },
    { NOME: "Bowser", VELOCIDADE: 5, MANOBRABILIDADE: 2, PODER: 5, PONTOS: 0 },
    { NOME: "Luigi", VELOCIDADE: 3, MANOBRABILIDADE: 4, PODER: 4, PONTOS: 0 },
    { NOME: "Donkey Kong", VELOCIDADE: 2, MANOBRABILIDADE: 2, PODER: 5, PONTOS: 0 }
];

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

async function getRandomBlock() {
    let random = Math.random();
    let result;

    switch (true) {
        case random < 0.33:
            result = "RETA";
            break;
        case random >= 0.33 && random < 0.66:
            result = "CURVA";
            break;
        default:
            result = "CONFRONTO";
            break;
    }

    return result;
}

async function playRaceEngine(character1, character2) {
    let pointsPlayer1 = 0;
    let pointsPlayer2 = 0;
    
    for (let round = 1; round <= 5; round++) {
        await delay(500);
        console.log(`🏁 Rodada ${round}`);

        let block = await getRandomBlock();
        console.log(`Tipo de corrida: ${block}\n`);

        let diceResult1 = await rollDice();
        let diceResult2 = await rollDice();

        let testSkill1 = 0;
        let testSkill2 = 0;

        
        
        if (block === "RETA"){
            let testSkill1 = character1.VELOCIDADE + diceResult1;
            console.log(`${character1.NOME} - Resultado do dado: ${diceResult1}`)
            console.log(`${character1.VELOCIDADE} + ${diceResult1} = ${testSkill1}\n`)
            let testSkill2 = character2.VELOCIDADE + diceResult2;
            console.log(`${character2.NOME} - Resultado do dado: ${diceResult2}`)
            console.log(`${character2.VELOCIDADE} + ${diceResult2} = ${testSkill2}\n`)

            if (testSkill1 > testSkill2){
                pointsPlayer1++;
                console.log(`Ponto para ${character1.NOME}!\n`)
                console.log(`Placar: \n${character1.NOME}: ${pointsPlayer1}\n${character2.NOME}: ${pointsPlayer2}\n`)
            } else if (testSkill2 > testSkill1){
                pointsPlayer2++;
                console.log(`Ponto para ${character2.NOME}!\n`)
                console.log(`Placar: \n${character1.NOME}: ${pointsPlayer1}\n${character2.NOME}: ${pointsPlayer2}\n`)
            } else{
                console.log("Empate! Ninguém pontua...\n")
                console.log(`Placar: \n${character1.NOME}: ${pointsPlayer1}\n${character2.NOME}: ${pointsPlayer2}\n`)
            }
        } else if (block === "CURVA"){
            let testSkill1 = character1.MANOBRABILIDADE + diceResult1;
            console.log(`${character1.NOME} - Resultado do dado: ${diceResult1}`)
            console.log(`${character1.MANOBRABILIDADE} + ${diceResult1} = ${testSkill1}\n`)
            let testSkill2 = character2.MANOBRABILIDADE + diceResult2;
            console.log(`${character2.NOME} - Resultado do dado: ${diceResult2}`)
            console.log(`${character2.MANOBRABILIDADE} + ${diceResult2} = ${testSkill2}\n`)

            if (testSkill1 > testSkill2){
                pointsPlayer1++;
                console.log(`Ponto para ${character1.NOME}!\n`)
                console.log(`Placar: \n${character1.NOME}: ${pointsPlayer1}\n${character2.NOME}: ${pointsPlayer2}\n`)
            } else if (testSkill2 > testSkill1){
                pointsPlayer2++;
                console.log(`Ponto para ${character2.NOME}!\n`)
                console.log(`Placar: \n${character1.NOME}: ${pointsPlayer1}\n${character2.NOME}: ${pointsPlayer2}\n`)
            } else{
                console.log("Empate! Ninguém pontua...\n")
                console.log(`Placar: \n${character1.NOME}: ${pointsPlayer1}\n${character2.NOME}: ${pointsPlayer2}\n`)
            }
        } else if (block === "CONFRONTO"){
            let testSkill1 = character1.PODER + diceResult1;
            console.log(`${character1.NOME} - Resultado do dado: ${diceResult1}`)
            console.log(`${character1.PODER} + ${diceResult1} = ${testSkill1}\n`)
            let testSkill2 = character2.PODER + diceResult2;
            console.log(`${character2.NOME} - Resultado do dado: ${diceResult2}`)
            console.log(`${character2.PODER} + ${diceResult2} = ${testSkill2}\n`)

            if (testSkill1 > testSkill2){
                if (pointsPlayer2 > 0){
                    pointsPlayer2--;
                }
                console.log(`${character1.NOME} vence o confronto!\n`)
                console.log(`Placar: \n${character1.NOME}: ${pointsPlayer1}\n${character2.NOME}: ${pointsPlayer2}\n`)
            } else if (testSkill2 > testSkill1){
                if (pointsPlayer1 > 0){
                    pointsPlayer1--;
                }
                console.log(`${character2.NOME} vence o confronto!\n`)
                console.log(`Placar: \n${character1.NOME}: ${pointsPlayer1}\n${character2.NOME}: ${pointsPlayer2}\n`)
            } else{
                console.log("Empate! Ninguém pontua...\n")
                console.log(`Placar: \n${character1.NOME}: ${pointsPlayer1}\n${character2.NOME}: ${pointsPlayer2}\n`)
            }
        }
    }

    await delay(1000);
    if (pointsPlayer1 > pointsPlayer2){
        console.log(`´\n🎉🥳 Vitória de ${character1.NOME}! 🎉🥳\n`)
        console.log(`Placar Final: \n${character1.NOME}: ${pointsPlayer1}\n${character2.NOME}: ${pointsPlayer2}\n`)
    } else if (pointsPlayer2 > pointsPlayer1){
        console.log(`´\n🎉🥳 Vitória de ${character2.NOME}! 🎉🥳\n`)
        console.log(`Placar Final: \n${character1.NOME}: ${pointsPlayer1}\n${character2.NOME}: ${pointsPlayer2}\n`)
    } else {
        console.log(`\n🚨⛔ Empate!!! 🚨⛔\n`)
        console.log(`Placar Final: \n${character1.NOME}: ${pointsPlayer1}\n${character2.NOME}: ${pointsPlayer2}\n`)
        console.log(`\nVamos para a corrida de desempate!\n`)
        playRaceEngine(character1, character2)
    }

    
}

function drawPlayers(players) {
    const shuffled = players.sort(() => 0.5 - Math.random()); 
    return shuffled.slice(0, 2); 
}

(async function main() {
    const [player1, player2] = drawPlayers(players);
    console.log(`🏁🚨 Corrida entre ${player1.NOME} e ${player2.NOME} começando em\n\n`);
    await delay(500);
    console.log(`🔴🔴🔴\n`);
    await delay(500);
    console.log(`🔴🔴\n`);
    await delay(500);
    console.log(`🔴\n`);
    await delay(500);
    console.log(`🟢🟢🟢\n`);

    await playRaceEngine(player1, player2);
})();
