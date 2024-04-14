import React, { useState } from 'react';
import axios from 'axios';
import './feature.css'; // Update with correct path
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

function Testimonial({ quote, author, authorImageSrc }) {
  return (
    <div className="testimonial">
      <p className="testimonial-quote">"{quote}"</p>
      <div className="testimonial-author">
        <img src={authorImageSrc} alt={author} className="testimonial-image" />
        <footer className="testimonial-name">- {author}</footer>
      </div>
    </div>
  );
}

function Statistic({ value, decimals, suffix, label }) {
  const handleMouseOver = (e) => {
    e.target.style.transform = 'scale(1.1)';
  };

  const handleMouseOut = (e) => {
    e.target.style.transform = 'scale(1)';
  };

  return (
    <div className="statistic" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      <div className="statistic-number">
        <CountUp end={value} duration={2.5} decimals={decimals} preserveValue suffix={suffix} />
      </div>
      <p className="statistic-label">{label}</p>
    </div>
  );
}

function Figure() {
  const [files, setFiles] = useState([]);
  const [topicName, setTopicName] = useState('');
  const [apiResponses, setApiResponses] = useState([]);
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [numQuestions, setNumQuestions] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);

  const handleFileSelect = (event) => {
    setFiles([...files, ...event.target.files]);
  };

  const handleTopicNameChange = (event) => {
    setTopicName(event.target.value);
  };

  const handleSendToApi = async () => {
    // API call logic here
  };

  const handleQuizStart = async () => {
    // API call to start quiz
  };

  const handleAnswerSelect = (questionIndex, answerIndex) => {
    // Logic to check answers and update score
  };

  return (
    <div className="figure-component">
      <div className="content-box">
        <div className="api-output">
          {apiResponses.map((response, index) => (
            <div key={index} className="api-output">
              <p>{response.timestamp.toLocaleTimeString()} - {response.output}</p>
            </div>
          ))}
        </div>

        <div className="input-section">
          <input type="file" multiple onChange={handleFileSelect} />
          <input type="text" value={topicName} onChange={handleTopicNameChange} placeholder="Topic Name" />
          <button onClick={handleSendToApi}>Send</button>
        </div>

        {quizStarted && (
          <div className="quiz-section">
            <h2>Ready to practice? Create a quiz.</h2>
            <input type="number" value={numQuestions} onChange={(e) => setNumQuestions(e.target.value)} placeholder="Number of questions" />
            <button onClick={handleQuizStart}>Create Quiz</button>

            <div className="questions-output">
              {quizQuestions.map((question, qIndex) => (
                <div key={qIndex} className="question">
                  <p>{question.questionText}</p>
                  {question.choices.map((choice, cIndex) => (
                    <button key={cIndex} onClick={() => handleAnswerSelect(qIndex, cIndex)}>
                      {choice}
                    </button>
                  ))}
                </div>
              ))}
            </div>

            <p className="score">Score: {currentScore}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Figure;
