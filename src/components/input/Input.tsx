import useInputValidate from '@/hooks/useInputValidate';
import { RenderIf } from '../RenderIf';
import React from 'react';
import './_input.scss'

interface InputProps {
  id: string,
  name: string,
  placeholder?: string,
  value: string,
  label: string,
  disabled: boolean,
  onChange: (e: any) => void,
  type?: string,
  variant?: string,
  showError: boolean
}

export default function Input({
  id,
  name,
  placeholder,
  value,
  label,
  disabled = false,
  onChange,
  type = "text",
  variant = '',
  showError = false,
}: InputProps) {
  
  const { error, validate } = useInputValidate();


  return (
    <>
      <div className={`${variant} input-container`}>
        <input
          id={id}
          name={name}
          type={type || 'text' }
          placeholder={placeholder || ''}
          value={value}
          onBlur={() => validate({ name:label, value })}
          data-testid={`test-${id}`}
          disabled={disabled}
          aria-labelledby={id}
          onChange={onChange}
          autoComplete="off"
          className={`font-pptelegraph_r cc-input ${error ? 'cc-input-error' : ''}`}
        />
        <label
        htmlFor={id}
        className='cc-input-label font-pptelegraph_r'
        >
          {label}
        </label>
      <RenderIf condition={showError}>
        <p className={`${error ? 'mt-2' : ''} error font-pptelegraph_r`}>
          {(error)}
        </p>
      </RenderIf>
      </div>
    </>
  );
}

