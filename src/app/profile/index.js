import React from "react";
import useStore from "../../hooks/use-store";
import useInit from "../../hooks/use-init";
import useTranslate from "../../hooks/use-translate";
import Tools from "../../containers/tools";
import LayoutFlex from "../../components/layout-flex";
import Layout from "../../components/layout";
import LocaleSelect from "../../containers/locale-select";
import ProfileContainer from "../../containers/profile-container";

function Profile() {
  const store = useStore();

  useInit(async () => {
    await store.get('auth').me();
  }, [], {backForward: true});

  const {t} = useTranslate();

  return (
    <Layout head={
              <LayoutFlex flex="between">
                <h1>{t('title')}</h1>
                <LocaleSelect/>
              </LayoutFlex>
            }>

      <Tools/>
      <ProfileContainer/>

    </Layout>
  )
}

export default React.memo(Profile);