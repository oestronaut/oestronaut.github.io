// Bean counter script for the "you?" character
export const beanCounterScript = `
document.addEventListener('nav', () => {
  // Find the "you?" character sheet
  const youCharacterSheets = Array.from(document.querySelectorAll('.character-sheet'))
    .filter(sheet => {
      const nameElement = sheet.querySelector('h3');
      return nameElement && nameElement.textContent === 'you?';
    });

  if (youCharacterSheets.length === 0) return;

  // Process each "you?" character sheet found
  youCharacterSheets.forEach(characterSheet => {
    const beanElement = characterSheet.querySelector('code');
    if (!beanElement) return;

    // Get current page path for tracking unique visits
    const currentPath = document.body.dataset.slug || window.location.pathname;
    const visitedKey = \`visited-you?-\${currentPath}\`;
    const beansKey = 'beans-you?';

    // Initialize bean count from localStorage or use default
    let beanCount = 10;
    const storedBeans = localStorage.getItem(beansKey);
    if (storedBeans) {
      beanCount = parseInt(storedBeans);
    } else {
      localStorage.setItem(beansKey, beanCount.toString());
    }

    // Check if this page has been visited before
    const hasVisited = localStorage.getItem(visitedKey);

    // Only increment beans if this is a new visit to this page
    if (!hasVisited) {
      // Mark this page as visited
      localStorage.setItem(visitedKey, 'true');
      
      // Increment bean count
      beanCount += 1;
      localStorage.setItem(beansKey, beanCount.toString());
      
      // Add animation class
      beanElement.classList.add('bean-increment');
      setTimeout(() => {
        beanElement.classList.remove('bean-increment');
      }, 1000);
    }

    // Update the bean count display
    beanElement.textContent = \`beans: \${beanCount}\`;

    // Add click handler to reset beans (for testing)
    const imgElement = characterSheet.querySelector('img');
    if (imgElement) {
      imgElement.style.cursor = 'pointer';
      imgElement.title = 'Click to reset beans';
      imgElement.addEventListener('click', () => {
        // Reset bean count to initial value
        localStorage.setItem(beansKey, '10');
        
        // Clear all visited flags for this character
        Object.keys(localStorage).forEach(key => {
          if (key.startsWith(\`visited-you?-\`)) {
            localStorage.removeItem(key);
          }
        });
        
        // Update display
        beanElement.textContent = 'beans: 10';
        console.log('Reset beans for you?');
      });
    }
  });
});
`;
