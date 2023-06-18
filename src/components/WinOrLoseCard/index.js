// Write your code here.
import './index.css'

const LOSE_IMAGE = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
const WON_IMAGE = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'

const winOrLoseCard = props => {
  const {isWon, onClickPlayAgain, score} = props
  const imageUrl = isWon ? WON_IMAGE : LOSE_IMAGE
  const gameStatus = isWon ? 'You Won' : 'you Lose'
  const scoreLabel = isWon ? 'Best Score' : 'Score'

  return (
    <div>
      <div>
        <h1>{gameStatus}</h1>
        <p>{scoreLabel}</p>
        <p> {score}/12</p>
        <button type="button" onClick={onClickPlayAgain}>
          Play Again
        </button>
      </div>
      <div>
        <img src={imageUrl} alt="win or lose" />
      </div>
    </div>
  )
}

export default winOrLoseCard
