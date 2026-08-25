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
   * **Server-side.** Embora o cliente guarde a "chave" (como um cookie ou token JWT), quem gera essa chave, define a validade e verifica se a sessão ainda é legítima ou se foi revogada é sempre o servidor.
