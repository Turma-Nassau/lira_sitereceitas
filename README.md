## Lira_sitereceitas

🍽site sobre receitas🍽

acessar uma variedade de receitas saudáveis ​​e saborosas para ajudar a planejar as refeições de forma mais eficaz e variada.

#Funcionalidades 📌

procurar receitas com base em diferentes categorias, como café da manhã, almoço, jantar, lanches e sobremesas, bem como por tipo de culinária e dieta (vegana, vegetariana, sem glúten, etc.). filtrar as receitas por tempo de preparo, nível de dificuldade e ingredientes específicos para ajudar a tornar a experiência de cozinhar mais fácil e conveniente. salvar suas receitas favoritas em uma lista de "receitas favoritas" para referência futura e compartilhá-las com amigos e familiares. Por último, mas não menos importante, fornecer informações nutricionais detalhadas para cada receita, incluindo calorias, carboidratos, proteínas e gorduras, para que pudesse planejar uma dieta de forma mais eficaz.

#🛠️ Stack utilizada

Front-end: React, TailwindCSS


Back-end: Node, Express, PostgreSQL

## Estrutura de Dados

- Usuario
  - Possibilidade de Fazer logins e Cadastros.

```s
    Usuario {
        id_user:1
        nome_user:"Nome Usuario"
        sobrenome_user:"Sobrenome Usuario"
        pais:"brasil"
        email:"examplo@examplo.com"
        senha:"zezin321"
        preferencias_alimentares:fitness
    }
```   
 - Receitas
    - Ver as receitas

```s
    Receitas {      
        id_receitas:12
        nome_receita:"nome da receita completo"
        autor:"nome do autor"
        tempo de preparo:400
        tempo de cozimento:200
        ingrediente:"lista de ingredientes necessarios para a receita"
        imagens:"uma ou mais imagens que irao ilustrar a aparencia da receita"
        avaliacao:"avaliacoes e comentarios dos usuarios
        informacoes_nutricionais:"calorias,carboidratos"
        data:"11/05/2002"
        categoria:"categoria da receita"
        instrucoes:"instrucoes detalhadas de como preparar a receita"
        ide_user:1
    }
```
  - Pesquisar
    - Pesqisar as receitas pelo o nome,categoria e dificuldade

    ```s
    Pesquisar {
        categoria:"categoria da receita"
        dificuldade:"classificacao de nivel de dificuldade"
        nome_receita:"achar a receita atravez do nome dela"
        
    }
```
  - Conta 
    - Acesso a conta para salva receitas e compartilha-las

    ```s
    Conta {
        id_user:1
        receitas_salvas:"olha as receitas salvas"
        adicionar_receitas:"adicionar e compartilhar receitas com outros usuarios"
        
    }
```       
        
        
