/* eslint-disable i18next/no-literal-string */
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
// import kyubei from 'shared/assets/gif/kyubei.gif';

const Main = memo(() => {
	const { t } = useTranslation('main');

	return (
		<div>
			{t('Главная страница')}
			{/* <img src={kyubei} alt="kyubei" /> */}
		</div>
	);
});

export default Main;
