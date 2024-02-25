import React, { useState, useEffect } from 'react';
import NameField from './NameField';
import CommentBlock from './CommentBlock';
import SubmitButton from './SubmitButton';

export default function WriteCommentBlock () {
    const [canSubmit, updateButton] = useState(false);
    return (
        <div className='flex flex-col space-y-4 w-96'>
            <NameField className = 'w-full h-10'/>
            <CommentBlock className = 'w-full h-24' />
            <SubmitButton />
        </div>
    );
};