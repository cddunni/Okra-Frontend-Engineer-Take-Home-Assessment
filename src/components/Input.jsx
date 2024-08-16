import useInputValidate from '@/hooks/useInputValidate';
import React from 'react';
import { RenderIf } from './RenderIf';

export default function Input({
  id,
  name,
  placeholder,
  value,
  label,
  disabled = false,
  onChange,
  type,
  max,
  variant,
  showError = false,
}) {
  
  const { error, validate } = useInputValidate(showError);


  return (
    <>
      <div className={`relative ${variant} input-container`}>
        <input
          id={id}
          name={name}
          type={type || 'text' }
          placeholder={placeholder || ''}
          value={value}
          max={max}
          onBlur={() => validate({ name:label, value })}
          data-testid={`test-${id}`}
          disabled={disabled}
          aria-labelledby={id}
          onChange={onChange}
          autoComplete="off"
          className={`bg-secondary_action px-4 pt-[26px] pb-2.5 outline-0 rounded-md placeholder:text-subdued text-primary font-pptelegraph_r w-full text-[13px] ${error ? 'cc-input-error' : 'cc-input'} disabled:cursor-not-allowed`}
        />
        <label
        htmlFor={id}
        className={`text-subdued hover:text-secondary cursor-text font-pptelegraph_r`}
        >
          {label}
        </label>
      <RenderIf condition={showError}>
        <p className={`${error ? 'mt-2' : ''} text-error text-xs font-pptelegraph_r disabled:text-subdued`}>
          {(error)}
        </p>
      </RenderIf>
      </div>
    </>
  );
}
