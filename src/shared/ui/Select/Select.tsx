/* eslint-disable i18next/no-literal-string */
import React, { memo, useMemo } from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import styles from './Select.module.scss';

interface SelectOptions {
  value?: string;
  content?: string;
}

interface SelectProps {
  className?: string;
  label?: string;
  options?: SelectOptions[];
  value?: string,
  onChange?: (value: string) => void,
  readonly?: boolean,
}

export const Select = memo(({
	className, label, options, value, onChange, readonly,
}: SelectProps) => {
	const mods: Mods = {};

	const optionsList = useMemo(() => options?.map((opt) => (
		<option
			value={opt.value}
			key={opt.value}
			className={styles.Option}
		>
			{opt.content}
		</option>
	)), [options]);

	const onChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
		onChange?.(e.target.value);
	};

	return (
		<div className={classNames(styles.Wrapper, mods, [className])}>
			{label && (
				<label htmlFor="select1" className={styles.Label}>
					{label}
				</label>
			)}
			<select
				disabled={readonly}
				value={value}
				className={styles.Select}
				onChange={onChangeHandler}
			>
				<option disabled className={styles.Option}>
					Select an option...
				</option>
				{optionsList}
			</select>
		</div>
	);
});
