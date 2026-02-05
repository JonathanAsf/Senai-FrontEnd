# 🎞️ Módulo: Keyframes

Esta pasta contém exemplos práticos de como utilizar a regra `@keyframes` do CSS para criar animações complexas, contínuas e com múltiplos estágios.

## 📝 O que são Keyframes?
Diferente das transições, os `@keyframes` permitem que você controle o que acontece em momentos específicos da animação (0%, 50%, 100%, etc.), sem depender necessariamente de uma interação do usuário para começar.

🖥️ [Acesse a demonstração ao vivo na Vercel](https://keyframes-gamma.vercel.app)

---

## 🚀 Exemplos Inclusos

Neste diretório, exploramos 5 variações de comportamento:

1.  **Piscar (`.button`)**: Uso de `opacity` em loop infinito para criar efeito de alerta.
2.  **Troca de Cor (`.button1`)**: Transição cíclica entre três cores diferentes.
3.  **Rotação (`.button2`)**: Uso de `transform: rotate` com a propriedade `animation-play-state: paused` ao passar o mouse.
4.  **Pulo/Bounce (`.button3`)**: Simulação de gravidade usando `translateY`.
5.  **Feedback de Clique (`.button4`)**: Uma animação disparada pelo estado `:active` que reduz levemente o tamanho (`scale`) do botão.

### 🏃 Exemplo Especial: Personagens em Movimento
Criamos uma animação de "vai e vem" onde o personagem atravessa a tela e inverte a direção usando:
* `left`: Para o deslocamento horizontal.
* `rotateY(180deg)`: Para espelhar a imagem quando ela chega ao destino e começar a volta.

---

## 🛠️ Como o código está estruturado

A sintaxe base utilizada nos exemplos segue este padrão:

```css
@keyframes nome-da-animacao {
    0%   { /* Estado inicial */ }
    50%  { /* Meio da animação */ }
    100% { /* Estado final */ }
}

.elemento {
    animation: nome-da-animacao 2s infinite;
}
```
## 📖 Como visualizar
Basta abrir o arquivo index.html desta pasta em qualquer navegador moderno.
