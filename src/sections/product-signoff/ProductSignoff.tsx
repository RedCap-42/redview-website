import { msg } from '@lingui/core/macro';

import { getServerI18n } from '@/platform/i18n/get-server-i18n';
import { SITE_URLS } from '@/platform/site-urls';
import { Button, Signoff } from '@/ui';

export function ProductSignoff() {
  const i18n = getServerI18n();

  return (
    <Signoff
      body={i18n._(
        msg`Inspectez la praticabilité du sol en LiDAR, calibrez vos arrêts et comparez vos variantes pour une autonomie totale.`,
      )}
      heading={i18n._(msg`Planifiez votre trace *sans compromis.*`)}
      scheme="light"
    >
      <Button href={SITE_URLS.appWelcome} label={i18n._(msg`Explorer en 3D`)} />
      <Button href="/customers" label={i18n._(msg`Fonctionnalités`)} variant="outlined" />
    </Signoff>
  );
}
