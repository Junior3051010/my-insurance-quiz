import { useState } from 'react'
import './App.css'

const questions = [
  {
    question: "朋友約你玩高空彈跳，你會？",
    options: {
      A: "馬上答應！人生就該冒險！",
      B: "會先上網查安全措施再決定",
      C: "再見，我選擇平地上的安全感"
    },
    scores: { A: 10, B: 5, C: 0 }
  },
  {
    question: "投資理財時你偏好？",
    options: {
      A: "比特幣、NFT 或新創股！",
      B: "ETF、基金這類穩中求進",
      C: "存定存最安心"
    },
    scores: { A: 10, B: 5, C: 0 }
  },
  {
    question: "如果你突然生病不能工作三個月，你會？",
    options: {
      A: "沒差，老子自由接案一族",
      B: "還好有一點點存款",
      C: "OMG 我該保險但我沒保！"
    },
    scores: { A: 10, B: 5, C: 0 }
  },
  {
    question: "保險業務員來找你時你會？",
    options: {
      A: "講啊我聽",
      B: "看他長得帥不帥",
      C: "馬上說我有事"
    },
    scores: { A: 5, B: 3, C: 0 }
  },
  {
    question: "你覺得保險的感覺是？",
    options: {
      A: "不懂但感覺應該要是爸媽的事吧，跟我無關",
      B: "很複雜所以不想碰",
      C: "不懂但感覺應該要"
    },
    scores: { A: 5, B: 2, C: 0 }
  },
  {
    question: "你有沒有保任何保險？",
    options: {
      A: "有！而且我自己選的！",
      B: "有啦爸媽保的",
      C: "沒有也沒在意"
    },
    scores: { A: 5, B: 3, C: 0 }
  }
]

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [totalScore, setTotalScore] = useState(0)
  const [showResult, setShowResult] = useState(false)

  const handleAnswer = (choice) => {
    const question = questions[currentQuestion]
    const score = question.scores[choice]
    setTotalScore(prev => prev + score)

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(prev => prev + 1)
    } else {
      setShowResult(true)
    }
  }

  const getResultText = () => {
    if (totalScore >= 40) {
      return "你是【探險家】\n風險傾向：高風險偏好\n建議保單：投資型、意外險\n學習建議：多了解理財型保單"
    } else if (totalScore >= 25) {
      return "你是【規劃師】\n風險傾向：中風險中立\n你重視規劃也願意為目標做準備。適合有回報的保障，兼顧醫療與健康風險。\n還本型保單、醫療險是你的夥伴！"
    } else {
      return "你是【守護者】\n風險傾向：低風險偏好\n「寧可多保一點也不想留下遺憾」\n你適合醫療、重大傷病與意外保障的完整組合！為自己多添一份保障"
    }
  }

  return (
    <div style={{
      padding: '2rem',
      fontFamily: 'Arial, sans-serif',
      maxWidth: '700px',
      margin: 'auto',
      backgroundColor: '#f9f9f9',
      borderRadius: '12px',
      border: '2px solid #009765'
    }}>
      <h1 style={{ color: '#009765', textAlign: 'center' }}>Z 世代保險探索測驗</h1>
      {showResult ? (
        <div style={{ backgroundColor: '#fff', padding: '1.5rem', borderRadius: '10px' }}>
          <h2 style={{ color: '#222222' }}>你的總分是：{totalScore} 分</h2>
          <pre style={{ whiteSpace: 'pre-wrap', fontSize: '1.1rem', color: '#444' }}>{getResultText()}</pre>
        </div>
      ) : (
        <>
          <h3 style={{ color: '#222' }}>{questions[currentQuestion].question}</h3>
          {Object.entries(questions[currentQuestion].options).map(([key, text]) => (
            <button
              key={key}
              onClick={() => handleAnswer(key)}
              style={{
                display: 'block',
                margin: '12px 0',
                padding: '12px',
                width: '100%',
                backgroundColor: '#009765',
                color: '#fff',
                border: 'none',
                borderRadius: '8px',
                fontSize: '16px',
                cursor: 'pointer',
                transition: 'background-color 0.3s ease'
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#007c52'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#009765'}
            >
              {key}. {text}
            </button>
          ))}
        </>
      )}
    </div>
  )
}

export default App
