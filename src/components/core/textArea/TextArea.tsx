import useInputValidate from '@/hooks/useInputValidate';
import React from 'react';
import { RenderIf } from "@/components";
import './_textarea.scss'

interface TextAreaProps {
  id: string,
  name: string,
  placeholder: string,
  showError:boolean,
  variant: string,
  value: string,
  onChange: (e: any) => void,
  readOnly?: boolean,
  rows: number,
  helperText?: string,
  maxLength?: number,
  disabled: boolean,
  showMaxLength?: boolean,
}

export const TextArea = ({
  id,
  name,
  placeholder,
  showError = false,
  variant,
  value,
  onChange,
  readOnly = false,
  rows,
  helperText,
  maxLength,
  disabled,
  showMaxLength = false,
}: TextAreaProps) => {
  const { error, validate } = useInputValidate();

  return (
    <div className={`relative textarea-container ${variant || ""}`}>
      <textarea
        id={id}
        name={name}
        rows={rows}
        maxLength={maxLength}
        disabled={disabled}
        onChange={onChange}
        onBlur={() => validate({ name: placeholder, value })}
        placeholder={placeholder || ""}
        data-testid={`test-${id}`}
        aria-labelledby={id}
        readOnly={readOnly}
        value={value}
        className={`font-pptelegraph_r cc-textarea  ${error ? 'cc-textarea-error' : ''}`}
      />
      <div className={`${(showMaxLength || helperText || error) ? 'mt-2' : ''  } flex justify-between font-pptelegraph_r text-xs items-center`}>
        <RenderIf condition={!!helperText || showError}>
            <p className={`${error  ? 'text-error': 'text-secondary'}`}>
                {error ? error : helperText}
            </p>
        </RenderIf>
        <RenderIf condition={showMaxLength}>
          <p className="text-secondary">
              {value.length} / {maxLength ?? 400}
          </p>
        </RenderIf>
      </div>
    </div>
  );
}

