# 💻 Tech E-Commerce - Product Page & Checkout

Um projeto de página de produto de alta fidelidade para um e-commerce de tecnologia. A aplicação apresenta uma interface moderna para visualização de produtos (MacBook Pro) e um formulário de informações de envio com preenchimento automático via API.

---

## 🔗 Link do Projeto
🖥️ [Acesse a demonstração ao vivo na Vercel](https://e-commerce-six-zeta-31.vercel.app)

## 🚀 Funcionalidades Principais

* **Página de Produto Detalhada:** Exibição de preços (com cálculo de desconto), avaliações por estrelas e seleção de cores.
* **Integração com API ViaCEP:** Ao digitar o CEP no formulário de informações, os campos de Rua, Bairro e Estado são preenchidos automaticamente.
* **Design de Cores Dinâmico:** Seleção de cores de produto utilizando inputs do tipo radio personalizados com `box-shadow` no estado focado.
* **Layout Responsivo e Organizado:** Estrutura construída com CSS Grid e Flexbox para máxima organização.

## 🛠️ Tecnologias e Ferramentas

* **HTML5 Semântico:** Uso de `header`, `main`, `section` e `footer`.
* **CSS3 Avançado:**
    * **Variáveis CSS (Custom Properties):** Gerenciamento centralizado de cores e tipografia no `global.css`.
    * **Modularização:** Separação de estilos em `reset.css`, `global.css` e `style.css`.
    * **Google Fonts:** Utilização da fonte *Inter* para um visual clean.
* **JavaScript (Vanilla):**
    * Consumo da API [ViaCEP](https://viacep.com.br/) utilizando `fetch`.
    * Manipulação dinâmica de inputs baseada em eventos de digitação (`input`).

## ⚙️ Como Funciona o Preenchimento Automático?

O script monitora o campo de CEP. Quando o usuário digita os 8 dígitos, a função `buscarCep` é disparada:

```javascript
const buscarCep = (cep) => {
  if(cep.length == 8){
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((res) => res.json())
      .then((data) => {
          input_rua.value = data.logradouro;
          input_estado.value = data.uf; // Ajustado para UF conforme API
          input_bairro.value = data.bairro;
      })
  }
}
```

## 🎨 Design System (Tokens)

As cores e medidas foram padronizadas via :root:

* Primary: #B0CB1F (Verde Limão)
* Secondary: #2DA5F3 (Azul)
* Warning: #EFD33D (Amarelo para descontos)
* Border Radius: Estilo personalizado 15px 3px 15px 3px.

## 📝 Licença
Este projeto foi desenvolvido para fins educacionais. Copyright © 2025 E-Commerce ltd.
