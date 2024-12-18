## Documentação do Quiz Interativo

Esta documentação tem como objetivo auxiliar desenvolvedores com pouca experiência a utilizar e personalizar o código do Quiz Interativo. O quiz inclui perguntas, telas informativas "Did You Know", seleção de gênero e idade, e uma tela final para submissão de e-mail.

# Estrutura do Projeto
O projeto consiste em vários componentes React:

- Home: Componente principal que gerencia o fluxo do quiz
- StartScreen: Tela inicial do quiz
- GenderSelection: Tela de seleção de gênero
- AgeSelection: Tela de seleção de faixa etária
- QuizScreen: Tela que exibe as perguntas do quiz
- DidYouKnow: Tela informativa exibida entre algumas perguntas
- EmailSubmission: Tela final para coleta de e-mail

Como Personalizar o Quiz

1. Modificando as Perguntas
As perguntas do quiz estão definidas no array questions no arquivo principal (provavelmente Home.js ou index.js). Cada pergunta é um objeto com a seguinte estrutura:

```js
{
    id: 1,
    question: "Texto da pergunta?",
    options: ["Opção 1", "Opção 2", "Opção 3", "Opção 4"],
    isMultipleChoice: false,
    image: "caminho/para/imagem.svg", // opcional
    citation: "Texto da citação", // opcional
    figures: ["caminho/figura1.svg", "caminho/figura2.svg"], // opcional
    hint: "Texto da dica", // opcional
    afterDidYouKnow: true // opcional, para mostrar uma tela "Did You Know" após esta pergunta
}
```

Para adicionar ou modificar perguntas:

- Copie a estrutura de uma pergunta existente
- Altere o id para um número único
- Modifique o question com o texto da sua pergunta
- Ajuste as options com as opções de resposta
- Configure isMultipleChoice como true para permitir múltiplas respostas, ou false para resposta única
- Adicione image, citation, figures, ou hint se necessário
- Use afterDidYouKnow: true se quiser que uma tela informativa apareça após esta pergunta

2. Modificando as Telas "Did You Know"
As telas informativas "Did You Know" são definidas no array didYouKnowScreens. Cada tela tem esta estrutura:

```js
{
    title: "Título da informação",
    description: "Descrição detalhada da informação.",
    icon: "caminho/para/icone.svg"
}
```

Para adicionar ou modificar estas telas:

- Copie a estrutura de uma tela existente
- Altere o title e a description com suas informações
- Atualize o icon se necessário

3. Personalizando a Seleção de Gênero
Para modificar as opções de gênero, edite o componente GenderSelection. Você pode adicionar, remover ou modificar os botões de opção no retorno do componente.

4. Personalizando a Seleção de Idade
Para alterar as faixas etárias, modifique o array ageRanges no componente AgeSelection.

5. Modificando o Fluxo do Quiz

O fluxo principal do quiz é controlado no componente Home. Se você precisar alterar a ordem das telas ou adicionar novas etapas, você fará isso aqui.

## Instruções para Uso

- Clone o repositório ou copie os arquivos para seu projeto React
- Certifique-se de ter todas as dependências instaladas (React, TailwindCSS)
- Personalize as perguntas no array questions
- Ajuste as telas "Did You Know" no array didYouKnowScreens
- Modifique os componentes GenderSelection e AgeSelection se necessário
- Se precisar adicionar lógica para envio de e-mail, implemente-a na função handleEmailSubmit no componente Home
Dicas Adicionais
- Mantenha os IDs das perguntas únicos e em ordem crescente
- Certifique-se de que o número de telas "Did You Know" seja igual ou maior ao número de perguntas com afterDidYouKnow: true
- Teste o quiz após cada modificação para garantir que tudo está funcionando como esperado

## Personalizando o Visual

O projeto usa TailwindCSS para estilização. Para modificar cores, tamanhos ou layouts:

- Localize as classes Tailwind nos componentes
- Consulte a documentação do Tailwind (https://tailwindcss.com/docs) para opções de personalização
- Modifique as classes conforme necessário
- Lembre-se de que alterações significativas no layout podem requerer ajustes adicionais no código JSX.