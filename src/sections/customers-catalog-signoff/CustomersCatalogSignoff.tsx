import { msg } from '@lingui/core/macro';

import { TalkToUsButton } from '@/contact-cal';
import { getServerI18n } from '@/platform/i18n/get-server-i18n';
import { SITE_URLS } from '@/platform/site-urls';
import { Button, Signoff } from '@/ui';

export function CustomersCatalogSignoff() {
  const i18n = getServerI18n();

  return (
    <Signoff
      body={i18n._(
        msg`Préparez vos aventures et expéditions avec la cartographie 3D et LiDAR la plus avancée. Commencez à explorer dès aujourd'hui.`,
      )}
      heading={i18n._(msg`Prêt à explorer le terrain avec *RedView ?*`)}
      scheme="light"
    >
      <Button
        href={SITE_URLS.appWelcome}
        label={i18n._(msg`Créer un tracé 3D`)}
      />
      <TalkToUsButton label={msg`Nous contacter`} variant="outlined" />
    </Signoff>
  );
}
