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
  const [quizPopulated, setQuizPopulated] = useState(false);
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
      <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', align: 'center'}}>Send us your study material,{" "}<span className='suga'>we'll help from here...</span></h1>
        <div className="api-output">
          {apiResponses.map((response, index) => (
            <div key={index} className="api-output">
              <p>{response.timestamp.toLocaleTimeString()} - {response.output}</p>
            </div>
          ))}
        </div>

        <div className="input-section">
  <label className="file-input-container">
    Choose Files
    <input id="file-upload" type="file" multiple onChange={handleFileSelect} />
  </label>
  
  <div className="file-display-bubble">
    {files.length === 0 ? 'No files selected' :
     files.length === 1 ? files[0].name :
     `${files.length} files selected`}
  </div>
  
  <input type="text" value={topicName} onChange={handleTopicNameChange} placeholder="Topic Name" />
  <button onClick={handleSendToApi} className='file-input-container'>Generate</button>
</div>




        
        {/* QuizCreation */}
        {quizStarted && (
          <div className="quiz-section">
          <h2 style={{ color: '#1a8cd8', fontSize: '1.3rem', fontWeight: 'bold' }}>Ready to practice? Lets create a quiz!</h2>
            <input type="number" value={numQuestions} onChange={(e) => setNumQuestions(e.target.value)} placeholder="Number of questions" />
            <button onClick={handleQuizStart}>Create Quiz</button>
        </div> )}


        {/* Actual Quiz Output */}
        {quizPopulated && (<div className="output-box">
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
        </div>)}
        

        {/*  Quiz Score Output */}
        {quizPopulated && (<div>
            <p className="score">Score: {currentScore}</p>
        </div> )}
        

      </div>
    </div>
  );
}

export default Figure;
