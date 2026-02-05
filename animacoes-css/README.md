# 🎨 Animações CSS

Este repositório é um registro prático de estudos sobre como dar vida a interfaces web utilizando apenas CSS puro. O foco aqui é entender a diferença técnica e visual entre transições simples e animações complexas.

---

## 📂 Estrutura do Repositório

O projeto está organizado em duas frentes principais:

### 1. [Keyframes](./keyframes)
Pasta dedicada a animações criadas com a regra `@keyframes`.
* **O que você encontrará:** Exemplos de movimentos contínuos (loops), botões que piscam, giram ou pulam, e uma animação complexa de personagens correndo com inversão de direção (`rotateY`).
* **Uso:** Animações que possuem múltiplos passos ou que rodam sozinhas.

### 2. [Transition](./transition)
Pasta focada na mudança suave de propriedades entre dois estados, explorando principalmente o **ritmo** do movimento.
* **O que você encontrará:** Cards interativos que demonstram as diferenças entre `linear`, `ease`, `ease-in`, `ease-out` e `ease-in-out`.
* **Uso:** Interações disparadas pelo usuário, como passar o mouse (`:hover`).

---

## 💡 Keyframes vs. Transition

| Característica | Transition | Keyframes |
| :--- | :--- | :--- |
| **Gatilho** | Requer mudança de estado (ex: `:hover`) | Pode iniciar automaticamente |
| **Complexidade** | Simples (ponto A para ponto B) | Alta (múltiplas etapas/porcentagens) |
| **Repetição** | Executa uma vez por gatilho | Pode rodar infinitamente (`infinite`) |
| **Controle** | Limitado ao início e fim | Controle total sobre o meio da animação |

---

## 🚀 Como testar

1. **Clone o repositório:**
   ```bash
   git clone [https://github.com/JonathanAsf/animacoes-css.git](https://github.com/JonathanAsf/animacoes-css.git)
   ```
2. Visualização: Navegue entre as pastas e abra os arquivos .html no seu navegador.
   
     Dica: Na pasta transition, passe o mouse sobre os cards coloridos para observar a diferença de ritmo entre as acelerações.
