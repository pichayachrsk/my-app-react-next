"use client";
import "./tag.css";

interface TagProps {
    text: string;
    onRemoveTag: () => void;
}

export default function Tag({ text, onRemoveTag }: TagProps) {
    const onCloseButtonClick = () => {
        console.log('Removed');
        onRemoveTag();
    }
    return<div className='tag-box'>
        <p className="tag-name">{text}</p>
        <button className='remove-button' onClick={onCloseButtonClick}>
            <p>X</p>
        </button>
    </div>;
  }