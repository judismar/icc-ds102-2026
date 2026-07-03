# Como usar os comandos do shell do Linux, com foco na primeira lista de exercícios

## Criar uma pasta para seu grupo
mkdir grupo1

## Criar múltiplas pastas para diferentes grupos
mkdir grupo1 grupo2 grupo3

## Verificar se as pastas foram criadas
ls

## Navegar para a pasta do grupo
cd grupo1

## Criar arquivo Python com editor vim: Tecle i, escreva o código, tecle ESC e depois digite :wq e tecle Enter (explicarei melhor em aula)
vim programa.py

## Visualizar conteúdo do arquivo usando o comando cat

### Básico
cat programa.py

### Visualizar com numeração de linhas
cat -n programa.py

### Visualizar múltiplos arquivos
cat programa.py saudacao.txt

## Executar o programa que acabou de criar
python3 programa.py

## Criar subdiretórios para cada membro
mkdir ygor clecio judis

## Verificar os subdiretórios criados
ls -l

## Imprimir na tela
echo "Olá, mundo"

## Imprimir em um arquivo (usando pipe)
echo "Olá, mundo" > saudacao.txt

## Verificar o conteúdo do arquivo
cat saudacao.txt

## Comando ls para visualizar arquivos e pastas

### Listar conteúdo básico
ls

### Listar com detalhes (permissões, proprietário, tamanho)
ls -l

### Listar todos os arquivos, incluindo ocultos
ls -la

### Listar com detalhes e ordenar por data
ls -lt

## Usando touch para criar arquivos

### Navegar para um subdiretório
cd judis

### Criar arquivos visíveis
touch arquivo1.txt arquivo2.txt arquivo3.txt arquivo4.txt arquivo5.txt

### Criar arquivo oculto (inicia com ponto)
touch .arquivo_oculto

### Criar mais um arquivo visível
touch arquivo6.txt

### Verificar todos os arquivos (incluindo ocultos)
ls -la

## Usando find  na pasta principal

### Voltar para a pasta principal do grupo
cd ..

### find básico
find

### Encontrar todos os arquivos .txt
find . -name "*.txt"

## Copiar arquivos e pastas de um subdiretório para outro

### Navegar para o subdiretório de origem
cd judis

### Copiar todo o conteúdo para outro subdiretório
cp -r * ../clecio/

### Verificar se a cópia foi bem sucedida
cd ../clecio

ls -la

## Remover arquivos e pastas

### Removendo arquivos
rm arquivo1 arquivo2 arquivo3

### Removendo pasta
rm -r nome_pasta
