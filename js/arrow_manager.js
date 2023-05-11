/* Code for the arrows */
      const arrows = document.querySelectorAll(".arrow");
      arrows.forEach((arrow) => {
        arrow.addEventListener("click", () => {
          const gameList = arrow.parentElement.previousElementSibling;
          const scrollWidth = gameList.scrollWidth;
          const clientWidth = gameList.clientWidth;
          const scrollLeft = gameList.scrollLeft;
          const direction = arrow.classList.contains("next") ? 1 : -1;
          gameList.scrollTo({
            behavior: "smooth",
            left: scrollLeft + direction * (clientWidth * 0.8),
          });
        });
      });
	  
      /* Code to disable arrow if not scrollable */
      const gameLists = document.querySelectorAll(".game-list");
      gameLists.forEach((gameList) => {
        gameList.addEventListener("scroll", () => {
          const arrows = gameList.parentElement.querySelector(".arrows");
          const arrowLeft = arrows.querySelector(".arrow:first-child");
          const arrowRight = arrows.querySelector(".arrow:last-child");
          const scrollWidth = gameList.scrollWidth;
          const clientWidth = gameList.clientWidth;
          const scrollLeft = gameList.scrollLeft;
          const isLeftDisabled = scrollLeft === 0;
          const isRightDisabled = scrollLeft + clientWidth >= scrollWidth;
          arrowLeft.classList.toggle("disabled", isLeftDisabled);
          arrowRight.classList.toggle("disabled", isRightDisabled);
        });
      });