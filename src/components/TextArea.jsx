import useInputValidate from '@/hooks/useInputValidate';
import { RenderIf } from "./RenderIf";
import PropTypes from 'prop-types';

export default function TextArea({
  id,
  name,
  placeholder,
  showError = false,
  variant,
  value,
  onChange,
  readOnly,
  rows,
  helperText,
  maxLength,
  disabled,
  showMaxLength = false,
}) {
  const { error, validate } = useInputValidate(showError);

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
        className={`bg-secondary_action p-3 outline-0 rounded-md placeholder:text-subdued placeholder:hover:text-secondary text-primary font-pptelegraph_r text-[13px] ${error ? 'cc-input-error' : 'cc-input'} disabled:cursor-not-allowed w-full`}
      />
      <div className={`${(showMaxLength || helperText || error) ? 'mt-2' : ''  }flex justify-between font-pptelegraph_r text-xs items-center`}>
        <RenderIf condition={helperText || showError}>
            <p className={`${error  ? 'text-error': 'text-secondary'}`}>
                {error ? error : helperText}
            </p>
        </RenderIf>
        <RenderIf condition={showMaxLength}>
          <p className="text-secondary">
              {value.length} / {maxLength ?? "400"}
          </p>
        </RenderIf>
      </div>
    </div>
  );
}
TextArea.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  showError:PropTypes.bool,
  variant: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  readOnly: PropTypes.bool,
  rows: PropTypes.number,
  helperText: PropTypes.string,
  maxLength: PropTypes.string,
  disabled: PropTypes.bool,
  showMaxLength: PropTypes.bool,
};

