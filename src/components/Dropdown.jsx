import React, { useEffect, useState, useRef, useMemo } from 'react';
import ChevronDown from "@/assets/icons/chevron-down.svg?react";
import { motion } from 'framer-motion';
import useInputValidate from '@/hooks/useInputValidate';
import { RenderIf } from './RenderIf';

export default function Dropdown({
  label,
  id,
  name,
  options,
  onSelect,
  loading,
  optionVariant,
  variant,
  disabled,
  containerVariant,
  width,
  height,
  optionContainerVariant,
  selected,
  children,
  readOnly = true,
  showError = false,
  placeholder,
}) {
  const [display, setDisplay] = useState(false);
  let ref = useRef();
  const { error, validate } = useInputValidate(showError);

  const listener = (e) => {
    if (!ref.current.contains(e.target)) setDisplay(false);
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
      <div
        className={`
        relative cursor-pointer ${width}
        `}
      >
        <div className="relative input-container" onClick={() => !disabled && setDisplay(!display)}>
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
                className={`bg-secondary_action px-4 pt-[26px] pb-2.5 outline-0 rounded-md placeholder:text-subdued text-primary font-pptelegraph_r text-[13px]  cursor-pointer w-full ${error ? 'cc-input-error' : 'cc-input'} disabled:cursor-not-allowed`}
            />
            <label
                htmlFor={id}
                className={`text-subdued hover:text-secondary cursor-text font-pptelegraph_r`}
                >
                    {label}
            </label>
            <div className={`${selected ? 'top-1.5' : 'top-0'} h-full absolute right-0 flex items-center px-[18.5px] cursor-pointer`}>
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
          className={`${containerVariant} absolute left-[-1px] top-[100%] mt-2 w-full z-20 rounded-lg shadow-dropdownShadow border border-tertiary_highlight p-1 bg-on_primary`}
        >
            <div onClick={() => setDisplay(false)}>
              <div className={`${optionContainerVariant} ${height ?? 'max-h-[216px]'} overflow-auto bg-brand_white`}>
                {options?.map((option) => (
                  <div
                    key={option.name}
                    data-testid={option?.name}
                    onClick={() => onSelect(option)}
                    className={`${optionVariant} ${selected === option.name ? 'text-primary bg-secondary_action' : 'text-label'} py-2.5 px-2 flex items-center justify-between
                    cursor-pointer transition ease-in-out duration-500 hover:bg-secondary_action font-pptelegraph_r rounded-md`}
                  >
                    <p className='text-sm capitalize'>{option?.name}</p>
                  </div>
                ))}
                {children}
              </div>
              {loading && !options?.length && <Spinner />}
              {!loading && !options?.length && !children && <p className="text-center text-neutral_600 py-[20px] font-pptelegraph_r">No data found</p>}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}

