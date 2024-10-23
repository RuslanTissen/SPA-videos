import React from 'react';
import './Intro.css'; // Файл стилей

export default function Intro() {
  return (
    <div className="intro-container">
      <h1 className="intro-title">Welcome to My React Learning Journey</h1>
      <p className="intro-subtitle">Mastering JavaScript and React step by step</p>
      <div className="intro-animation">
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
    </div>
  );
}
