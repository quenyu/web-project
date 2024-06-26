import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation("about");

  return (
    <div>{t('О странице')}</div>
  )
}

export default About