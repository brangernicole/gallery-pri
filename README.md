# Gallery-pri 📸

Uma galeria interativa e responsiva sobre a Pri, um cachorro adorável! Este projeto foi desenvolvido com HTML, CSS moderno e inclui animações suaves, responsividade completa e uma experiência de usuário aprimorada.

---

## 🎨 O que foi Feito

### 1. **Estrutura Semântica HTML5**
- Criada página com seção "Sobre" narrando a história da Pri
- Implementada galeria com 11 fotos usando `<figure>` e `<figcaption>` para semântica adequada
- Favicon customizado com ícone de pegada de pata (`paw-print.svg`)
- Atributo `aria-label` na galeria para melhor acessibilidade
- Meta tags e viewport configurados para responsividade

### 2. **Sistema de Design com CSS Moderno**
- **Variáveis CSS** definidas para cores (`--text`, `--background`) e tipografia
- **Três famílias de fontes importadas do Google Fonts**:
  - `Montserrat`: Tipografia principal do site
  - `Syne`: Títulos e destaques com personalidade
  - `Inter`: Alternativa para hierarquia visual
- Paleta de cores: Branco/azul claro (`#f0f4ffd3`) como background
- Tipografia responsiva com escalas diferentes por tamanho de tela

### 3. **Layout Grid Adaptável**
- **Desktop (> 1024px)**: Grid com 3 colunas, altura de imagens 25rem
- **Tablet (480px - 1024px)**: Grid com 2 colunas, altura 20rem
- **Mobile (< 480px)**: Grid com 1 coluna, altura 15rem
- Implementadas media queries para cada breakpoint
- Espaçamento e gaps ajustados para cada tamanho de tela

### 4. **Animações Avançadas**
- **Scroll-Triggered Animations** (Animation Timeline):
  - Imagens aparecem com efeito fade + slide conforme entram na viewport
  - Uso de `animation-timeline: view()` e `animation-range: 100px 300px`
  - Efeito suave de opacidade e translação (40px para baixo)
  
- **Hover Effects Dinâmicos**:
  - Zoom nas imagens: `transform: scale(1.05)` com easing customizado
  - Legendas deslizantes: aparecem de baixo para cima (`translateY`)
  - Timing function elegante: `cubic-bezier(0.22, 1, 0.36, 1)`
  - Duração de transição: 500ms
  
- **Keyframes Personalizados**:
  ```css
  @keyframes image-appear {
    from {
      opacity: 0.5;
      transform: translateY(40px);
    }
  }
  ```

### 5. **Interatividade e UX**
- Legendas ocultas em desktop, reveladas ao hover
- Legendas sempre visíveis em mobile/tablet para melhor usabilidade
- Shadow suave nas imagens: `0 10px 30px rgba(0, 0, 0, 0.06)`
- Border-radius agressivo: 2.5rem para cantos bem arredondados
- Gradient nas legendas: preto com transparência para melhor contraste

### 6. **Otimização de Imagens**
- Uso de `object-fit: cover` para garantir proporção correta
- `object-position` otimizado em figcaptions
- Imagens responsivas com `width: 100%` e `height: auto`
- Overflow hidden para respeitar border-radius

### 7. **Seção "Sobre" Personalizada**
- Box com background semi-transparente
- Padding e margin adequados para leitura confortável
- Biografia completa da Pri com 5 parágrafos
- Styling consistente com o resto do site

---

## 📋 Estrutura de Arquivos

```
index.html
assets/
    icons/
        paw-print.svg
    images/
        image1.jpg a image11.jpg  
styles/
    gallery.css                (Estilos galeria + animações)
    global.css                 (Design system + responsividade)
    index.css                  (Imports)
```

---

## 💻 Tecnologias Utilizadas

### HTML5
- Semântica adequada com `<section>`, `<figure>`, `<figcaption>`
- Viewport meta tag para responsividade
- Favicon customizado
- `aria-label` para acessibilidade

- **CSS Grid**: Layout adaptável e responsivo
- **Flexbox**: Alinhamento e organização de elementos
- **Variáveis CSS**: Sistema reutilizável de cores e tipografia
- **Box-shadow & Border-radius**: Efeitos de profundidade e suavidade
- **Gradients**: Sobreposição nas legendas para contraste
- **Media Queries**: Responsividade em 3 breakpoints
- **Animation Timeline**: Animações acionadas por scroll (`view()`)
- **Transform & Transitions**: Efeitos suaves de zoom e translação
- **Custom Easing**: `cubic-bezier(0.22, 1, 0.36, 1)` para movimentos elegantes

---

## � Como Visualizar

1. Clone ou baixe o repositório
2. Abra `index.html` no navegador (duplo-clique ou com Live Server)
3. Faça scroll para ver as animações de entrada
4. Passe o mouse sobre as imagens para ver os efeitos (desktop)

---

## 💡 Destaques Técnicos Implementados

✨ **Animações scroll-driven** com `animation-timeline: view()` 
📐 **CSS Grid avançado** com responsividade automática
🎯 **Acessibilidade semântica** com HTML5 + ARIA labels
⚡ **Performance otimizada** com `object-fit` e overflow
📱 **Responsividade completa** em 3 breakpoints sem frameworks
🎨 **Design system** com variáveis CSS reutilizáveis
🔄 **Transições suaves** com custom easing functions
🖼️ **Componentes bem estruturados**: `<figure>`, `<figcaption>`, `<section>`

---

## 👤 Sobre o Projeto

Pri é uma cachorra adorável de aproximadamente 14 anos, resgatada há 10 anos. Este projeto é uma homenagem à sua vida feliz, com fotos de seus momentos mais marcantes - desde passeios na praia até poses estilosas. A galeria foi desenvolvida para mostrar sua história de forma elegante e interativa. 🐾

**Desenvolvido com ❤️ para a Pri** 🐕✨