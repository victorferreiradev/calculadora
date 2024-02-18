/*
// Função para realizar cálculos com base no tipo de ação e valor fornecidos
function calcular(type, valor) {

    // Verifica se a ação é do tipo 'acao'
    if (type === 'acao') {
        // Limpar visor se a ação for 'c'
        if (valor === 'c') {
            document.getElementById('resultado').value = ' ';
        }

        // Adicionar operadores e ponto ao visor
        if (valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '.') {
            document.getElementById('resultado').value += valor;
        }

        // Calcular resultado se a ação for '='
        if (valor === '=') {
            // Obter o valor do visor e calcular usando eval (cuidado com eval)
            let value_Camp = eval(document.getElementById('resultado').value);

            // Exibir o resultado no visor
            document.getElementById('resultado').value = value_Camp;
        }

    } else if (type === 'valor') {
        // Adicionar números ao visor
        document.getElementById('resultado').value += valor;
    }
}
*/

function calcular(type, valor) {
    const visor = document.getElementById('resultado');

    // Verifica se a ação é do tipo 'acao'
    if (type === 'acao') {
        // Limpar visor se a ação for 'c'
        if (valor === 'c') {
            visor.value = '';
        }

        // Adicionar operadores e ponto ao visor
        if (valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '.') {
            visor.value += valor;
        }

        // Calcular resultado se a ação for '='
        if (valor === '=') {
            // Obtém a expressão do visor
            const expressao = visor.value;

            try {
                // Avalia a expressão de forma segura usando a função eval() encapsulada em um bloco try-catch
                const resultado = eval(expressao);

                // Exibir o resultado no visor
                visor.value = resultado;
            } catch (error) {
                // Se ocorrer um erro ao avaliar a expressão, exibir uma mensagem de erro no visor
                visor.value = 'Erro';
            }
        }
    } else if (type === 'valor') {
        // Adicionar números ao visor
        visor.value += valor;
    }
}