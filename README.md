# 🎮 Simon Game

A classic Simon memory game built with HTML, CSS, and JavaScript. Test your memory skills by repeating the sequence of colors and sounds!

![Simon Game](https://img.shields.io/badge/Game-Simon-blue) ![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## 🎯 Game Overview

Simon is a memory game where players must repeat a sequence of colors and sounds that gets progressively longer. The game tests your memory and concentration skills as you try to match the computer-generated pattern.

## ✨ Features

- **Classic Simon Gameplay**: Follow the sequence of colors and sounds
- **Progressive Difficulty**: Each level adds one more color to the sequence
- **Audio Feedback**: Each color has its unique sound
- **Visual Effects**: Smooth animations and visual feedback
- **Game Over Animation**: Red flash effect when you make a mistake
- **Responsive Design**: Clean, modern interface with retro gaming aesthetics

## 🎨 Game Colors

- 🔴 **Red** - Top left button
- 🟡 **Yellow** - Top right button
- 🟢 **Green** - Bottom left button
- 🟣 **Purple** - Bottom right button

## 🚀 How to Play

1. **Start the Game**: Press any key on your keyboard to begin
2. **Watch & Listen**: Pay attention to the sequence of colors and sounds
3. **Repeat the Pattern**: Click the buttons in the same order as shown
4. **Progress**: Each successful round adds one more color to the sequence
5. **Game Over**: If you make a mistake, the game ends and you can restart

## 🛠️ Installation & Setup

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- No additional software required!

### Running the Game

1. **Clone or Download** the repository:

   ```bash
   git clone <repository-url>
   cd SimonGame
   ```

2. **Open the Game**:

   - Simply open `index.html` in your web browser
   - Or use a local server (optional):

     ```bash
     # Using Python
     python -m http.server 8000

     # Using Node.js
     npx http-server
     ```

3. **Start Playing**:
   - Press any key to start
   - Click the colored buttons to play

## 📁 Project Structure

```
SimonGame/
├── index.html          # Main HTML file
├── css/
│   └── style.css       # Game styling and animations
├── js/
│   └── game.js         # Game logic and functionality
├── sounds/
│   ├── red.mp3         # Red button sound
│   ├── brown.mp3       # Yellow button sound
│   ├── green.mp3       # Green button sound
│   ├── purple.mp3      # Purple button sound
│   └── wrong.mp3       # Game over sound
└── README.md           # This file
```

## 🎵 Audio Files

The game includes custom audio files for each color:

- **red.mp3** - Sound for red button
- **brown.mp3** - Sound for yellow button (named brown in code)
- **green.mp3** - Sound for green button
- **purple.mp3** - Sound for purple button
- **wrong.mp3** - Sound played on game over

## 🎮 Game Mechanics

- **Level System**: Each level increases the sequence length by 1
- **Pattern Generation**: Random color selection for each new step
- **User Input Validation**: Checks if user clicks match the generated pattern
- **Audio Synchronization**: Sounds play when buttons are pressed or highlighted
- **Visual Feedback**: Fade animations for button presses and game over

## 🎨 Styling Features

- **Retro Gaming Font**: Uses "Press Start 2P" Google Font
- **Color Scheme**: Blue background with bright colored buttons
- **Animations**: Smooth fade effects and game over flash animation
- **Responsive Layout**: Centered game container with proper spacing

## 🔧 Technical Details

### Technologies Used

- **HTML5**: Game structure and layout
- **CSS3**: Styling, animations, and responsive design
- **JavaScript**: Game logic, event handling, and audio management
- **jQuery**: DOM manipulation and event handling

### Key Functions

- `nextSeq()`: Generates the next color in the sequence
- `showPattern()`: Displays the color pattern with animation
- `checkAns()`: Validates user input against the game pattern
- `gameOver()`: Handles game over state and restart
- `playSound()`: Plays audio for button interactions

## 🎯 Future Enhancements

Potential improvements for the game:

- High score tracking
- Different difficulty levels
- Customizable color schemes
- Mobile touch support optimization
- Multiplayer mode
- Sound volume controls

## 🤝 Contributing

Feel free to contribute to this project by:

1. Forking the repository
2. Creating a feature branch
3. Making your changes
4. Submitting a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🎮 Enjoy Playing!

Have fun testing your memory skills with this classic Simon game! Challenge yourself to reach higher levels and improve your memory capabilities.

---

_Made with ❤️ using HTML, CSS, and JavaScript_
