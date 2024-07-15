import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

type LangSwitcherProps = {
  className?: string,
	short?: boolean,
}

export const LangSwitcher = ({ className, short }: LangSwitcherProps) => {
	const { t, i18n } = useTranslation();

	const toggleLanguage = () => {
		i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
	};

	return (
		<Button
			className={classNames('', {}, [className])}
			onClick={toggleLanguage}
			theme={ButtonTheme.CLEAR}
		>
			{t(short ? 'Короткий Язык' : 'Язык')}
		</Button>
	);
};
