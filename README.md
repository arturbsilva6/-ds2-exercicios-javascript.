## ⚙️ Processamento de Páginas Dinâmicas e Bancos de Dados

### Em qual momento uma página dinâmica é processada?
Uma página dinâmica é processada **em tempo de execução (em tempo real)**, exatamente no momento em que o servidor web recebe a requisição do cliente (navegador ou aplicativo). 

Em vez de simplesmente devolver um arquivo `.html` que já estava pronto, o servidor aciona a aplicação back-end. Essa aplicação executa lógicas de programação para montar a estrutura visual e popular os dados da página sob demanda. O documento HTML final, de fato, só é "construído" milissegundos antes de ser enviado como resposta pela rede.

### Por que um Banco de Dados pode ser necessário?
Para que a página seja dinâmica, ela precisa exibir informações que variam de acordo com o contexto, e esses dados não podem ficar "chumbados" (hardcoded) no código-fonte. O banco de dados se torna uma peça central por vários motivos:

* **Personalização:** É o banco de dados que permite que cada usuário veja uma página diferente e única (como os dados do próprio perfil, um carrinho de compras ou recomendações customizadas).
* **Persistência de Dados:** Garante que as informações (cadastros, transações, configurações) fiquem salvas de forma segura e permanente, não desaparecendo quando o servidor é reiniciado.
* **Gestão de Conteúdo e Escalabilidade:** Permite alterar o conteúdo do site sem precisar alterar o código. Por exemplo, cadastrar um novo produto, alterar o preço de um serviço ou registrar uma nova ocorrência é feito adicionando registros ao banco, e a página dinâmica automaticamente reflete essa atualização para os usuários.
* **Consultas Complexas:** Estrutura grandes volumes de informações, permitindo realizar buscas rápidas, cruzamento de dados e geração de relatórios de forma eficiente.
  
## ⚖️ Client-side vs. Server-side

Compreender a diferença entre onde o código é executado é fundamental para a arquitetura de qualquer aplicação. Abaixo está um comparativo direto entre as duas abordagens:

| Critério | 💻 Client-side (Front-end) | 🖥️ Server-side (Back-end) |
| :--- | :--- | :--- |
| **Local de Execução** | No dispositivo do usuário (Navegador web, aplicativo mobile). | Em um computador remoto (Servidor, Nuvem). |
| **Tecnologias de Exemplo** | HTML, CSS, JavaScript, Dart (Flutter), React. | Node.js, Python, C#, Bancos de Dados (ex: Microsoft SQL Server). |
| **Responsabilidades** | Interface visual, experiência do usuário (UX), captura de cliques, exibição de dados. | Regras de negócio, segurança, autenticação, construção de Data Warehouses e APIs. |
| **Vantagens** | Resposta instantânea na tela, reduz a carga de processamento do servidor, navegação mais fluida. | Segurança (o código fonte e os dados não ficam expostos), centralização das regras, alto poder de processamento. |
| **Limitações** | O código fica exposto (não é seguro para regras críticas), depende da capacidade do hardware do usuário. | Requer conexão com a internet, pode ter latência (tempo de resposta da rede), gera custos de infraestrutura. |
| **Exemplos de Tarefas** | Renderizar menus, aplicar máscaras em campos (ex: CPF), animações de transição de tela. | Processar pagamentos, realizar queries complexas no banco, integração com sistemas de terceiros. |

---

## 🔍 Classificação de Operações

Ao projetar uma aplicação, é preciso decidir onde cada tarefa vai acontecer. Aqui está a classificação de operações comuns do dia a dia:

1. **Validar se um campo obrigatório foi preenchido:** 
   * **Ambos.** O *Client-side* faz isso primeiro para dar um feedback rápido ao usuário e evitar requisições desnecessárias. O *Server-side* **deve** repetir a validação por segurança, garantindo que nenhum dado incompleto chegue ao banco de dados se a validação frontal for burlada.
   
2. **Consultar dados sigilosos de um cliente:** 
   * **Server-side.** Somente o servidor deve ter acesso direto ao banco de dados para buscar e filtrar informações sensíveis de forma segura antes de enviar apenas o necessário para a tela.
   
3. **Alterar a cor de um botão após um clique:** 
   * **Client-side.** É uma alteração puramente visual e de interação na interface, não exigindo nenhum processamento externo.
   
4. **Verificar login e senha em um banco de dados:** 
   * **Server-side.** O cliente apenas envia as credenciais. O servidor é responsável por criptografar, comparar com os dados armazenados e autorizar ou negar o acesso.
   
5. **Calcular o total de uma compra:** 
   * **Ambos.** O *Client-side* calcula o total provisório no carrinho para o usuário ver os valores mudando em tempo real. No momento do checkout, o *Server-side* recalcula tudo usando os preços oficiais do banco de dados para evitar que o cliente manipule os valores no navegador.
   
6. **Controlar uma sessão de usuário:**

## 🐛 Registro de Erro Intencional (Exercício 01)

Durante a execução do Exercício 01, provocamos intencionalmente um erro no código trocando o comando `console.log` por `Console.log` (com a letra "C" maiúscula). 

**Mensagem de erro exibida no navegador:**
> Uncaught ReferenceError: Console is not defined at (anonymous) @ exercicio01.js:11

**Motivo do Erro:**
Esse erro aconteceu porque a linguagem JavaScript é **case-sensitive**, ou seja, ela faz uma distinção estrita entre letras maiúsculas e minúsculas. O objeto nativo do navegador que nos permite imprimir mensagens na tela de desenvolvedor se chama exatamente `console` (tudo em minúsculo). 

Ao digitarmos `Console` com a primeira letra maiúscula, o interpretador do JavaScript não reconhece o comando nativo e acha que estamos tentando usar uma variável que nós mesmos criamos. Como nós nunca criamos uma variável chamada `Console`, o navegador trava e retorna um erro de referência (`ReferenceError`), avisando que a palavra não foi definida.

**Correção:**
Para corrigir o código, bastou alterar a primeira letra novamente para minúsculo, retornando ao comando padrão da linguagem: `console.log('mensagem');`.
   * **Server-side.** Embora o cliente guarde a "chave" (como um cookie ou token JWT), quem gera essa chave, define a validade e verifica se a sessão ainda é legítima ou se foi revogada é sempre o servidor.
