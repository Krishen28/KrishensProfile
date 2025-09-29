<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Krishen’s Profile</title>
  <link rel="stylesheet" href="style.css">
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet">
</head>
<body>
  <header>
    <h1>Welcome to Krishen’s Profile</h1>
    <p>Soccer fan • Student • Dreamer</p>
  </header>

  <main>
    <section>
      <h2>About Me</h2>
      <p>Hello! I’m Krishen. I love soccer, coding, and learning new things. This website is my profile where I share some of my interests and favorite things.</p>
    </section>

    <section>
      <h2>My Favorites</h2>
      <ul>
        <li><strong>Team:</strong> Real Madrid</li>
        <li><strong>Player:</strong> Lionel Messi</li>
      </ul>
    </section>

    <section id="countdown">
      <h2>Countdown to Next Match</h2>
      <p id="timer">Loading...</p>
    </section>

    <section id="game">
      <h2>⚽ Mini Game: Catch the Ball!</h2>
      <p>Click the soccer ball as fast as you can when it appears.</p>
      <button id="startGame">Start Game</button>
      <div id="gameArea"></div>
      <p id="score">Score: 0</p>
    </section>
  </main>

  <footer>
    <p>© 2025 Krishen Banerjee</p>
  </footer>

  <script src="script.js"></script>
</body>
</html>
