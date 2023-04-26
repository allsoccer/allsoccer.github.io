const select = document.getElementById('matches-dropdown');
      const matchLink = document.getElementById('matches-link');
      const triviaLink = document.getElementById('trivia-link');
      let currentLink = '';

      function handleMatchClick() {
        if (currentLink) {
          window.open(currentLink, '_blank');
        }
      }

      function handleTriviaClick() {
        window.open('trivia.html', '_blank');
      }

      select.addEventListener('change', () => {
        if (select.value === 'uswnt') {
          matchLink.style.display = 'inline-block';
          matchLink.removeEventListener('click', handleMatchClick);
          matchLink.addEventListener('click', handleMatchClick);
          currentLink = 'https://www.stanza.co/@ussoccer';
        } else if (select.value === 'mls') {
          matchLink.style.display = 'inline-block';
          matchLink.removeEventListener('click', handleMatchClick);
          matchLink.addEventListener('click', handleMatchClick);
          currentLink = 'https://www.stanza.co/timeline/mls-allevents';
        } else if (select.value === 'angelcity') {
          matchLink.style.display = 'inline-block';
          matchLink.removeEventListener('click', handleMatchClick);
          matchLink.addEventListener('click', handleMatchClick);
          currentLink = 'https://www.stanza.co/timeline/nwsl-angelcity';
        } else {
          matchLink.style.display = 'none';
          matchLink.removeEventListener('click', handleMatchClick);
          currentLink = '';
        }
      });

      triviaLink.addEventListener('click', handleTriviaClick);