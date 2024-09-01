import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from 'shared/ui/Page/Page';

const About = memo(() => {
	const { t } = useTranslation('about');

	return (
		<Page>{t('О странице')}</Page>
	);
});

export default About;
