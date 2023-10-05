
function aumentarEscalaImagem(imagem) {
    imagem.style.transform = 'scale(1.1)';
  }
  

  function resetarEscalaImagem(imagem) {
    imagem.style.transform = 'scale(1.0)';
  }
  
  function scrollSuave(targetId) {
    const targetElement = document.getElementById(targetId);
    if (!targetElement) return;
  
    const targetPosition = targetElement.offsetTop - 60;
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
  

 
  // Selecionar a imagem do header
  const logoImagem = document.querySelector('.logo');
  
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
  
