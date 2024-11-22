const shell = require('shelljs');

function criarArquivo() {
    //mostra cada ação no terminal
    shell.config.verbose = true;

    //print no documento(semelhante a console.log)
    shell.echo('hello world');

    //Retorna uma string, lê um arquivo(tem que passar pra variavel)
    let a = shell.cat('arquivo.txt');
    console.log("PRINT: " + a)

    //executa um arquivo, serve pra executar os comandos
    shell.exec('arquivo.txt');

    //acessa diretório
    shell.cd('tests')

    //cria um novo diretório
    shell.mkdir('novapasta')

    //cria um novo arquivo
    shell.touch('ar.txt')

    //encontre uma palavra pesquisando todo o conteúdo de um arquivo específico
    //-i opção para pesquisar como maiuscula ou minuscula, a palava "Como" no arquivo.txt.
    //Retorno é a linha, se nao retornar nao foi encontrado
    //serve para validar um resultado
    shell.grep('-i', 'baleia azul', 'arquivo.txt')

    //Le as primeiras 10 linhas de um arquivo
    let linhasiniciais = shell.head('arquivo.txt');
    shell.echo("Linhas iniciais: " + linhasiniciais)

    //Le as ultimas 10 linhas de um arquivo
    let linhasfinais = shell.tail('arquivo.txt');
    shell.echo("Linhas finais: " + linhasfinais)
}
module.exports = { criarArquivo }