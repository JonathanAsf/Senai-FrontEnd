# 🃏 Cartas Pokémon - Galeria Interativa

Uma galeria de cartas Pokémon imersiva desenvolvida para praticar manipulação de estados do DOM, efeitos de animação CSS e implementação de um sistema de **Lightbox** (visualização ampliada).

---

## 🔗 Link do Projeto
🚀 [Acesse a demonstração ao vivo na Vercel](https://cartas-pokemon-psi.vercel.app/)


## 🚀 Funcionalidades

* **Galeria em Grid:** Organização limpa das cartas utilizando CSS Grid.
* **Efeito Hover Dinâmico:** As cartas sofrem uma transformação de inclinação (`skew`) e sombra profunda ao passar o mouse, criando um efeito 3D.
* **Lightbox Nativo:** Sistema de zoom ao clicar na imagem, sem necessidade de bibliotecas externas.
* **Acessibilidade e UX:** * Fechamento via tecla `Esc`.
    * Fundo com desfoque (`backdrop-filter`) para focar na imagem aberta.
    * Fechamento ao clicar fora da imagem.

## 🛠️ Tecnologias Utilizadas

* **HTML5:** Estrutura da galeria e modal de exibição.
* **CSS3:** * `Grid Layout` para a estrutura.
    * `Keyframes` para animações de "pop".
    * `Backdrop-filter` para efeitos de vidro fosco.
    * Transições suaves de `filter` e `transform`.
* **JavaScript (Vanilla):** Lógica de abertura/fechamento do Lightbox e gerenciamento de eventos de teclado.

## 🎨 Destaques de Estilo

O projeto utiliza um efeito visual único onde as cartas parecem saltar da tela:

```css
.img:hover {
  transform: skew(-30deg, 30deg);
  box-shadow: 180px 10px 90px #0008;
}
```

Este projeto é visualmente bem interessante, especialmente pelo efeito de inclinação (skew) no hover. Abaixo está o conteúdo formatado em Markdown (.md) específico para este projeto de galeria.

Markdown
# 🃏 Cartas Pokémon - Galeria Interativa

Uma galeria de cartas Pokémon imersiva desenvolvida para praticar manipulação de estados do DOM, efeitos de animação CSS e implementação de um sistema de **Lightbox** (visualização ampliada).

---

## 🔗 Link do Projeto
🚀 [Acesse a demonstração ao vivo na Vercel](https://cartas-pokemon-seven.vercel.app/)

*(Nota: Certifique-se de que o link acima aponta para a URL pública do seu projeto, geralmente algo como `cartas-pokemon.vercel.app`)*

## 🚀 Funcionalidades

* **Galeria em Grid:** Organização limpa das cartas utilizando CSS Grid.
* **Efeito Hover Dinâmico:** As cartas sofrem uma transformação de inclinação (`skew`) e sombra profunda ao passar o mouse, criando um efeito 3D.
* **Lightbox Nativo:** Sistema de zoom ao clicar na imagem, sem necessidade de bibliotecas externas.
* **Acessibilidade e UX:** * Fechamento via tecla `Esc`.
    * Fundo com desfoque (`backdrop-filter`) para focar na imagem aberta.
    * Fechamento ao clicar fora da imagem.

## 🛠️ Tecnologias Utilizadas

* **HTML5:** Estrutura da galeria e modal de exibição.
* **CSS3:** * `Grid Layout` para a estrutura.
    * `Keyframes` para animações de "pop".
    * `Backdrop-filter` para efeitos de vidro fosco.
    * Transições suaves de `filter` e `transform`.
* **JavaScript (Vanilla):** Lógica de abertura/fechamento do Lightbox e gerenciamento de eventos de teclado.

## 🎨 Destaques de Estilo

O projeto utiliza um efeito visual único onde as cartas parecem saltar da tela:

```css
.img:hover {
  transform: skew(-30deg, 30deg);
  box-shadow: 180px 10px 90px #0008;
}
```

Quando uma carta é selecionada, o fundo da galeria recebe um filtro de desfoque (blur), garantindo que a atenção do usuário seja total na carta ampliada.

## 📂 Como clonar o projeto
```bash
# Clone o repositório
git clone [https://github.com/Senai-FrontEnd/cartas-pokemon.git](https://github.com/Senai-FrontEnd/cartas-pokemon.git)

# Entre no diretório
cd cartas-pokemon

# Abra o index.html no navegador
```
