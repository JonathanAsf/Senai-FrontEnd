# ⏳ Módulo: Transitions

Este módulo explora como o CSS lida com mudanças de estado de forma suave. Diferente dos Keyframes, as transições dependem de um gatilho (neste caso, o `:hover`) para acontecer.

## 🧠 O que estamos testando?
O foco principal aqui é entender as **Timing Functions** (funções de tempo). Elas determinam a "aceleração" da animação durante o seu percurso.



---

## 🚀 Exemplos de Aceleração

Cada card na página utiliza uma função de tempo diferente para o efeito de `scale(1.2)`:

| Propriedade | Comportamento Visual | Descrição |
| :--- | :--- | :--- |
| `linear` | **Constante** | Mantém a mesma velocidade do início ao fim. |
| `ease` | **Suave** | Começa devagar, acelera no meio e termina devagar (Padrão). |
| `ease-in` | **Aceleração** | Começa devagar e ganha velocidade até o fim. |
| `ease-out` | **Desaceleração** | Começa rápido e termina devagar. |
| `ease-in-out` | **Curva em S** | Transição suave tanto na entrada quanto na saída. |

---

## 🛠️ Como aplicar
Para criar essas transições, utilizamos a propriedade shorthand no CSS:

```css
.card {
    transition: 1s linear; /* duração | função de tempo */
}

.card:hover {
    transform: scale(1.2);
}
```

## 📖 Como visualizar

* Certifique-se de estar na pasta /transition.
* Abra o arquivo index.html.
* Passe o mouse sobre os cards coloridos para observar a diferença de "ritmo" entre eles.
