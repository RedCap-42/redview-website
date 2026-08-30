import { msg } from '@lingui/core/macro';

import { getServerI18n } from '@/platform/i18n/get-server-i18n';
import { SITE_URLS } from '@/platform/site-urls';
import { Button, EngagementBand } from '@/ui';

export function PricingEngagementBand() {
  const i18n = getServerI18n();

  return (
    <EngagementBand
      actions={
        <Button
          href={SITE_URLS.appWelcome}
          label={i18n._(msg`SOUTENIR LE DÉVELOPPEMENT`)}
        />
      }
      body={i18n._(
        msg`RedView est un projet indépendant développé avec passion. Vos contributions permettent de financer le développement de l'application mobile (iOS & Android), les coûts de serveurs et d'accélérer l'ouverture de nouveaux massifs.`,
      )}
      heading={i18n._(msg`Pourquoi financer le projet en Bêta ?`)}
    />
  );
}
