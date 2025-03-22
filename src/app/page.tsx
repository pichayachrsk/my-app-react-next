"use client";
import { useState } from "react";
import InputBox from "../components/tag-input/tag-input";
import './page.css';

export default function Home() {
  const [inputText, setInputText] = useState('');
  return (
   <div className="page-layout">
      <InputBox separatorCharacter={inputText}/>
      <div className="separator-container">
        <label>Separator character: </label>
        <input
          className="input-separator"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
      </div>
    </div>
  );
}
