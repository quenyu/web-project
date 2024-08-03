import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import { Select } from 'shared/ui/Select/Select';
import { useTranslation } from 'react-i18next';
import { Currency } from '../../model/types/currency';

interface CurrencySelectProps {
  className?: string,
  value?: string,
  onChange?: (value: Currency) => void,
  readonly?: boolean,
}

const option = [
	{ value: Currency.RUB, content: Currency.RUB },
	{ value: Currency.EUR, content: Currency.EUR },
	{ value: Currency.USD, content: Currency.USD },
];

export const CurrencySelect = memo(({
	className, value, readonly, onChange,
}: CurrencySelectProps) => {
	const { t } = useTranslation('profile');

	const onChangeHandler = useCallback((value: string) => {
		onChange?.(value as Currency);
	}, [onChange]);

	return (
		<Select
			className={classNames('', {}, [className])}
			label={t('Укажите валюту')}
			options={option}
			value={value}
			onChange={onChangeHandler}
			readonly={readonly}
		/>
	);
});
