function glitchyPaths() {
    document.querySelector('pre').textContent = `
  @keyframes glitch {
    0%  { clip-path: polygon(${createShapes()}); }
    4%  { clip-path: polygon(${createShapes()}); }
    27% { clip-path: polygon(${createShapes()}); }
    51% { clip-path: polygon(${createShapes()}); }
    66% { clip-path: polygon(${createShapes()}); }
    91% { clip-path: polygon(${createShapes()}); }
  
    1%, 5%, 28%, 53%, 67%, 92% {
      clip-path: none;
    }
  }
    `.trim()
  }
  
  function createShapes() {
    const collection = new Set()
    
    for (let i = 0; i <= 25; i++)
      collection.add(`${generateRandomCollection()}% ${generateRandomCollection()}%`)
    
    return Array.from(collection.values()).join(',')
  }
  
  function generateRandomCollection() {
    return (Math.random() * 100).toFixed()
  }
  
  glitchyPaths()
  document.querySelector('button').onclick = glitchyPaths
