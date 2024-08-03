import React, { InputHTMLAttributes, memo } from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import styles from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
  className?: string,
  value?: string | number,
  type?: string,
  placeholder?: string,
  readonly?: boolean,
  onChange?: (value: string) => void,
}

export const Input = memo(({
	className,
	value,
	onChange,
	type = 'text',
	placeholder,
	readonly,
	...otherProps
}: InputProps) => {
	const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		onChange?.(e.target.value);
	};

	const mods: Mods = {
		[styles.readonly]: readonly,
	};

	return (
		<input
			className={classNames('', mods, [className])}
			type={type}
			value={value}
			onChange={onChangeHandler}
			placeholder={placeholder}
			readOnly={readonly}
			{...otherProps}
		/>
	);
});
