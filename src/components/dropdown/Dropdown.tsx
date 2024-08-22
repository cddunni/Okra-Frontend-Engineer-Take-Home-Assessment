import React, { useEffect, useState, useRef } from 'react';
import ChevronDown from "@/assets/icons/chevron-down.svg?react";
import { motion } from 'framer-motion';
import useInputValidate from '@/hooks/useInputValidate';
import { RenderIf } from '../RenderIf';
import  Spinner from '../Spinner';
import './_dropdown.scss'

interface Option {
  name: string
  value: string | number
}

interface DropdownProps {
  label: string,
  id: string,
  name: string,
  options: Option[],
  onSelect: (data: any) => void,
  loading?: boolean,
  optionVariant?: string,
  variant: string,
  disabled: boolean,
  containerVariant?: string,
  width?: string,
  height: string,
  optionContainerVariant?: string,
  selected: string,
  readOnly?: boolean,
  showError: boolean,
  placeholder?: string
}

export default function Dropdown({
  label,
  id,
  name,
  options,
  onSelect,
  loading = false,
  optionVariant,
  variant,
  disabled,
  containerVariant,
  width,
  height,
  optionContainerVariant,
  selected,
  readOnly = true,
  showError = false,
  placeholder,
}: DropdownProps) {
  const [display, setDisplay] = useState(false);
  const ref = useRef<HTMLButtonElement>(null)
  const { error, validate } = useInputValidate();

  const listener = (e: any) => {
    if (ref.current && !ref.current.contains(e.target)) setDisplay(false);
  };

  useEffect(() => {
    document.addEventListener('mousedown', listener);
    return () => document.removeEventListener('mousedown', listener);
  }, []);


  return (
    <section
      ref={ref}
      className={variant}
    >
      <div className={`dropdown-container ${width}`}>
        <div className="input-container" onClick={() => !disabled && setDisplay(!display)}>
            <input
                id={id}
                name={name}
                type="text"
                placeholder={placeholder || ''}
                value={selected}
                data-testid={`${id}-dropdown`}
                onBlur={() => validate({ name, value:selected })}
                disabled={disabled}
                readOnly={readOnly}
                aria-labelledby={id}
                autoComplete="off"
                onClick={() => !disabled && setDisplay(!display)}
                className={`font-pptelegraph_r cc-input ${error ? 'cc-input-error' : ''}`}
            />
            <label
                htmlFor={id}
                className='cc-input-label font-pptelegraph_r'
                >
                    {label}
            </label>
            <div className={`${selected ? 'selected' : 'not-selected'} h-full absolute right-0 flex items-center px-[18.5px] cursor-pointer dropdown-arrow`}>
               <ChevronDown/>
            </div>
            <RenderIf condition={showError}>
                <p className='text-error text-xs mt-2 font-pptelegraph_r disabled:text-subdued'>
                    {(error)}
                </p>
            </RenderIf>
        </div>

        {display && (
          <motion.div
          animate={{ opacity: 1, y: '0px' }}
          initial={{ opacity: 0, y: '-10px' }}
          data-testid="dropdown-modal"
          className={`${containerVariant} dropdown-options-container`}
        >
            <div onClick={() => setDisplay(false)}>
              <div className={`${optionContainerVariant} ${height ?? ''} option-container`}>
                {options?.map((option) => (
                  <div
                    key={option.name}
                    data-testid={option?.name}
                    onClick={() => onSelect(option)}
                    className={`${optionVariant} ${selected === option.name ? 'text-primary bg-secondary_action active' : 'text-label'} py-2.5 px-2 
                    cursor-pointer transition ease-in-out duration-500 hover:bg-secondary_action font-pptelegraph_r rounded-md option-container-item`}
                  >
                    <p className='option-text'>{option?.name}</p>
                  </div>
                ))}
              </div>
              {loading && !options?.length && <Spinner />}
              {!loading && !options?.length && <p className="text-center text-neutral_600 py-[20px] font-pptelegraph_r">No data found</p>}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}