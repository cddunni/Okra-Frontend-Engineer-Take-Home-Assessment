import { useState } from 'react';

const REGEX_EMAIL = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/i
const REGEX_WEBSITE = /^(https?:\/\/)?(www\.)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(:\d+)?(\/[^\s]*)?$/
const REGEX_NAME = /^[a-zA-Z]{2,}(?:\s[a-zA-Z]+)*-?[a-zA-Z]*$/; // minimum of 2 letters, accepts hypen

export default function useInputValidate() {
    const [error, setError] = useState('');

    const checkEmail = ({ value }: {name?: string, value: string}) => {
        if (!REGEX_EMAIL.test(value)) {
            if (!value?.length) {
                setError(`Email is required`)
                return false
            }
            setError('Please enter a valid email');
            return false;
        }
        setError('');
        return true;
    };


const checkName = ({name, value }: {name: string, value: string}) => {
    if (!REGEX_NAME.test(value)) {
        if (!value?.length) {
        setError(`${name !== 'howYouFoundUs' ? name : 'This field'} is required`)
        return false
        } else {
            setError("Name must contain only alphabets")
            return false
        }
    }
    setError('')
    return true
}

const checkWebsiteUrl = ({ value } : { value: string}) => {
    if (!REGEX_WEBSITE.test(value)) {
        setError("Please enter a valid url")
        return false
    }
    setError('')
    return true
}

const validate = ({ name, value } : {name: string, value: string}) => {
    switch (name) {
        case 'Last name':
        case 'First name':
        case 'Company name':
        case 'Message':
        // case 'howYouFoundUs':
            return checkName({ name, value });
        case 'Email':
            return checkEmail({ name, value });
        case 'Website URL':
            return checkWebsiteUrl({ value });
        default:
        setError('');
        return true;
    }
  };

  return {
    error,
    setError,
    validate,
  };
}
