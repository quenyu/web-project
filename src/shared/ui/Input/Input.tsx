import React, { InputHTMLAttributes, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
  className?: string,
  value?: string,
	type?: string,
	placeholder?: string,
  onChange?: (value: string) => void,
}

export const Input = memo(({
	className,
	value,
	onChange,
	type = 'text',
	placeholder,
	...otherProps
}: InputProps) => {
	const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		onChange?.(e.target.value);
	};

	return (
		<input
			className={classNames('', {}, [className])}
			type={type}
			value={value}
			onChange={onChangeHandler}
			{...otherProps}
			placeholder={placeholder}
		/>
	);
});
