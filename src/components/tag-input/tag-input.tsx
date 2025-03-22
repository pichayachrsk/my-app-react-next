"use client";
import { FormEvent, useState } from 'react';
import "./tag-input.css"
import Tag from '../tag/tag';
import * as arrayUtils from '../../utils/array';

interface TagInputProp {
    separatorCharacter?: string;
}

const defaultSeparatorCharacter = ',';
const numberOfLimitTag = 5;

export default function TagInput({ separatorCharacter }: TagInputProp) {
    const [tagList, setTagList] = useState<string[]>([]);
    const [inputText, setInputText] = useState('');

    const onInputBlur = (e: FormEvent<HTMLInputElement>) => {
        const target = e.target as HTMLInputElement;

        if (target?.value === '') return;

        onInputSubmit();
    }

    const onInputKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e?.key !== 'Enter') return;

        onInputSubmit();
    };

    const onInputSubmit = () => {
        const hasDynamicSeparatorChar = separatorCharacter !== '' && !!separatorCharacter;
        let list = inputText?.split(hasDynamicSeparatorChar ? separatorCharacter : defaultSeparatorCharacter);
        list = [...tagList, ...list];
        list = arrayUtils.removeDuplicate(list);

        if (list.length > numberOfLimitTag) {
            list.splice(numberOfLimitTag, list.length - numberOfLimitTag);
        }
        setTagList(list);
        setInputText('');
    };

    const onRemoveTag = (index: number) => {
        const list = tagList.slice();
        list.splice(index, 1);
        setTagList(list);
    };

    return <div className='input-container'>
            <div className='tag-input-wrapper'>
                { tagList.map((e, index) => <Tag key={index} text={e} onRemoveTag={() => onRemoveTag(index)}/>) }
                <input className="input-box" placeholder='Placeholder'
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    onBlur={onInputBlur}
                    onKeyUp={onInputKeyUp}
                />
            </div>
        </div>
  }