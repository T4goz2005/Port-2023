(function () {
    // Ativa o slide com as setas para avancar e voltar
  
    function ativarSlide() {
      const setaVoltar = document.querySelector("#seta-voltar");
      const setaAvancar = document.querySelector("#seta-avancar");
      const slide = document.querySelector("#itens-slide");
  
      const tamanhoDiv = 310;
      // Tamanho da div mais a margem lateral para avancar ao clicar na seta
  
      const numeroDivs = slide.children.length;
  
      let posicaoAtual = 0;
  
      setaVoltar.addEventListener("click", () => {
        if (posicaoAtual > 0) {
          posicaoAtual -= 1;
          slide.style.transform = `translateX(-${posicaoAtual * tamanhoDiv}px)`;
        }
      });
  
      setaAvancar.addEventListener("click", () => {
        if (posicaoAtual < numeroDivs - 1) {
          posicaoAtual += 1;
          slide.style.transform = `translateX(-${posicaoAtual * tamanhoDiv}px)`;
        }
      });
    }
  
    ativarSlide();
  })();
  