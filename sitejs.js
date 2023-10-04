// Função para aumentar a escala da imagem quando o mouse passa por cima
function aumentarEscalaImagem(imagem) {
    imagem.style.transform = 'scale(1.1)';
  }
  
  // Função para redefinir a escala da imagem quando o mouse sai
  function resetarEscalaImagem(imagem) {
    imagem.style.transform = 'scale(1.0)';
  }
  
  // Função para fazer scroll suave
  function scrollSuave(targetId) {
    const targetElement = document.getElementById(targetId);
    if (!targetElement) return;
  
    const targetPosition = targetElement.offsetTop - 60; // Considerando o cabeçalho
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 800;
  
    let start = null;
  
    function animacaoScroll(currentTime) {
      if (start === null) start = currentTime;
      const progress = (currentTime - start) / duration;
  
      window.scrollTo(0, startPosition + distance * progress);
  
      if (progress < 1) {
        requestAnimationFrame(animacaoScroll);
      }
    }
  
    requestAnimationFrame(animacaoScroll);
  }
  
  // Selecionar os links de navegação
  const linksNavegacao = document.querySelectorAll('.nav-links a');
  
  // Adicionar eventos de clique para os links de navegação
  linksNavegacao.forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
  
      if (targetId === 'inicio') {
        scrollSuave('imagem-inicio'); // Altere para o ID correto da imagem
      } else if (targetId === 'quem-somos') {
        scrollSuave('nomes-integrantes'); // Altere para o ID correto da seção dos nomes dos integrantes
      } else if (targetId === 'localizacao') {
        scrollSuave('imagem-final');
      }
    });
  });
  
  // Adicionar evento para o link "Início" no header
  const linkInicio = document.querySelector('a[href="#inicio"]');
  
  if (linkInicio) {
    linkInicio.addEventListener('click', (event) => {
      event.preventDefault();
      scrollSuave('imagem-inicio'); // Altere para o ID correto da imagem
    });
  }
  
  // Adicionar evento para o link "Quem somos" no header
  const linkQuemSomos = document.querySelector('a[href="#quem-somos"]');
  
  if (linkQuemSomos) {
    linkQuemSomos.addEventListener('click', (event) => {
      event.preventDefault();
      scrollSuave('nomes-integrantes'); // Altere para o ID correto da seção dos nomes dos integrantes
    });
  }
  
  // Adicionar evento para o link "Localizacao" no header
  const linkLocalizacao = document.querySelector('a[href="#localizacao"]');
  
  if (linkLocalizacao) {
    linkLocalizacao.addEventListener('click', (event) => {
      event.preventDefault();
      scrollSuave('imagem-final'); // Altere para o ID correto da imagem
    });
  }
  
  // Selecionar a imagem do header
  const logoImagem = document.querySelector('.logo');
  
  // Adicionar eventos para a imagem do header
  logoImagem.addEventListener('mouseover', () => {
    aumentarEscalaImagem(logoImagem);
  });
  
  logoImagem.addEventListener('mouseout', () => {
    resetarEscalaImagem(logoImagem);
  });
  
  // Selecionar as imagens dos membros do grupo
  const membrosImagens = document.querySelectorAll('.member img');
  
  // Adicionar eventos para as imagens dos membros do grupo
  membrosImagens.forEach(imagem => {
    imagem.addEventListener('mouseover', () => {
      aumentarEscalaImagem(imagem);
    });
  
    imagem.addEventListener('mouseout', () => {
      resetarEscalaImagem(imagem);
    });
  });
  
  // Selecionar a imagem no final da página
  const imagemFinal = document.querySelector('#imagem-final');
  
  // Adicionar eventos para a imagem no final da página
  imagemFinal.addEventListener('mouseover', () => {
    aumentarEscalaImagem(imagemFinal);
  });
  
  imagemFinal.addEventListener('mouseout', () => {
    resetarEscalaImagem(imagemFinal);
  });
  