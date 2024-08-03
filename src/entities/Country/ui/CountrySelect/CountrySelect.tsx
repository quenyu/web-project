import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import { Select } from 'shared/ui/Select/Select';
import { useTranslation } from 'react-i18next';
import { Country } from '../../model/types/country';

interface CountrySelectProps {
  className?: string,
  value?: string,
  onChange?: (value: Country) => void,
  readonly?: boolean,
}

const options = [
	{ value: Country.JAPAN, content: Country.JAPAN },
	{ value: Country.USA, content: Country.USA },
	{ value: Country.CANADA, content: Country.CANADA },
	{ value: Country.GERMANY, content: Country.GERMANY },
	{ value: Country.FRANCE, content: Country.FRANCE },
	{ value: Country.CHINA, content: Country.CHINA },
	{ value: Country.RUSSIA, content: Country.RUSSIA },
	{ value: Country.INDIA, content: Country.INDIA },
	{ value: Country.BRAZIL, content: Country.BRAZIL },
	{ value: Country.AUSTRALIA, content: Country.AUSTRALIA },
];

export const CountrySelect = memo(({
	className, value, readonly, onChange,
}: CountrySelectProps) => {
	const { t } = useTranslation('profile');

	const onChangeHandler = useCallback((value: string) => {
		onChange?.(value as Country);
	}, [onChange]);

	return (
		<Select
			className={classNames('', {}, [className])}
			label={t('Укажите страну')}
			options={options}
			value={value}
			onChange={onChangeHandler}
			readonly={readonly}
		/>
	);
});
