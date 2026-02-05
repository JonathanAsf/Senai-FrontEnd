# 🕹️ Pokédex Dinâmica

Uma Pokédex interativa e responsiva desenvolvida para praticar consumo de APIs e manipulação de DOM. O projeto utiliza a [PokeAPI](https://pokeapi.co/) para buscar dados em tempo real, exibindo nomes, números e sprites animados.

---

## 🚀 Funcionalidades

* **Busca Inteligente:** Pesquise seu Pokémon favorito pelo **nome** ou pelo **ID**.
* **Navegação Rápida:** Botões de "Prev" (Anterior) e "Next" (Próximo) para navegar pela lista.
* **Sprites Animados:** Exibição de GIFs da 5ª Geração (Black & White).
* **Tratamento de Erros:** Caso o Pokémon não seja encontrado, a interface informa o usuário.

## 🛠️ Tecnologias Utilizadas

* **HTML5:** Estrutura da aplicação.
* **CSS3:** Estilização com fontes externas (Oxanium) e posicionamento absoluto para encaixe na arte da Pokédex.
* **JavaScript (ES6+):** * `fetch()` para requisições assíncronas.
    * Manipulação de eventos de formulário e botões.
    * Promessas (`.then`, `.catch`) para controle de fluxo de dados.

## 🎨 Layout e Estilo

O projeto utiliza um design que sobrepõe os elementos HTML a uma imagem de base de uma Pokédex real, criando uma experiência imersiva:
* **Fonte:** [Oxanium](https://fonts.google.com/specimen/Oxanium) para um estilo gamer.
* **Responsividade:** O layout centraliza a Pokédex e adapta o conteúdo via CSS.

## 📂 Como testar localmente

1. Clone este repositório:
   ```bash
   git clone [https://github.com/JonathanAsf/Senai-FrontEnd.git](https://github.com/JonathanAsf/Senai-FrontEnd.git)
    ```
2. Entre na pasta do projeto:
    ```bash
   cd Senai-FrontEnd/pokemon
    ```
3. Abra o arquivo index.html em seu navegador.
