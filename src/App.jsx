import { useState, useEffect, useMemo} from "react";
import "./App.css";
import Trivia from "./components/trivia";
import Timer from "./components/timer";

function App() {
  const [questionNumber, setQuestionNumber] = useState(1);
const [stop,setStop] = useState(false);
const [earned, setEarned] = useState("$ 0");

const data = [
  {
    id: 1,
    question: "Türkiye’nin başkenti neresidir?",
    answers: [
      { text: "İstanbul", correct: false },
      { text: "Ankara", correct: true },
      { text: "İzmir", correct: false },
      { text: "Bursa", correct: false },
    ],
  },
  {
    id: 2,
    question: "Hangi gezegen 'Kırmızı Gezegen' olarak bilinir?",
    answers: [
      { text: "Venüs", correct: false },
      { text: "Mars", correct: true },
      { text: "Jüpiter", correct: false },
      { text: "Satürn", correct: false },
    ],
  },
  {
    id: 3,
    question: "Türk edebiyatında 'İnce Memed' romanının yazarı kimdir?",
    answers: [
      { text: "Yaşar Kemal", correct: true },
      { text: "Orhan Pamuk", correct: false },
      { text: "Sabahattin Ali", correct: false },
      { text: "Ahmet Hamdi Tanpınar", correct: false },
    ],
  },
  {
    id: 4,
    question: "Hangi elementin kimyasal sembolü 'O' harfidir?",
    answers: [
      { text: "Oksijen", correct: true },
      { text: "Altın", correct: false },
      { text: "Gümüş", correct: false },
      { text: "Azot", correct: false },
    ],
  },
  {
    id: 5,
    question: "1453 yılında İstanbul'u fetheden Osmanlı padişahı kimdir?",
    answers: [
      { text: "Yavuz Sultan Selim", correct: false },
      { text: "Fatih Sultan Mehmet", correct: true },
      { text: "Kanuni Sultan Süleyman", correct: false },
      { text: "II. Murad", correct: false },
    ],
  },
];


  const moneyPyramid = useMemo(
    () =>
      [
      { id: 1, amount: "$ 100" },
      { id: 2, amount: "$ 2000" },
      { id: 3, amount: "$ 3000" },
      { id: 4, amount: "$ 4000" },
      { id: 5, amount: "$ 5000" },
      { id: 6, amount: "$ 6000" },
      { id: 7, amount: "$ 7000" },
      { id: 8, amount: "$ 8000" },
      { id: 9, amount: "$ 9000" },
      { id: 10, amount: "$ 100000" },
      { id: 11, amount: "$ 110000" },
      { id: 12, amount: "$ 120000" },
      { id: 13, amount: "$ 130000" },
      { id: 14, amount: "$ 140000" },
      { id: 15, amount: "$ 150000" },
    ].reverse(),
    []
  );


  useEffect(() => {
    questionNumber > 1 &&
      setEarned(
        moneyPyramid.find((m) => m.id === questionNumber - 1).amount
      );
  }, [moneyPyramid, questionNumber]);

  return (
    <>
      <div className="app">
        <div className="main">
          {stop ? <h1 className="endText">You Earned: {earned}</h1> : (
            <>
          <div className="top">
            <div className="timer">
              <Timer setStop={setStop} questionNumber={questionNumber}/>
              </div>
          </div>
          <div className="bottom">
            <Trivia
              data={data}
              setStop={setStop}
              questionNumber={questionNumber}
              setQuestionNumber={setQuestionNumber}
            />
          </div></>
          )}
        </div>
        <div className="pyramid">
          <ul className="moneyList">
            {moneyPyramid.map((m) => (
              <li
                className={
                  questionNumber === m.id
                    ? "moneyListItem active"
                    : "moneyListItem"
                }
              >
                <span className="moneyListItemNumber">{m.id}</span>
                <span className="moneyListItemAmount">{m.amount}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
