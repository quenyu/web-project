import { render } from "@testing-library/react"
import { ReactNode, Suspense } from "react"
import { I18nextProvider } from "react-i18next"
import i18nForTests from "shared/config/i18n/i18nForTests"

const renderWithTranslations = (component: ReactNode) => {
  return (
    render(
      <Suspense fallback="">
        <I18nextProvider i18n={i18nForTests}>
          {component}
        </I18nextProvider>
      </Suspense>
    )
  )
}

export default renderWithTranslations