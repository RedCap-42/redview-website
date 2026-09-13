import { msg } from '@lingui/core/macro';

import { getServerI18n } from '@/platform/i18n/get-server-i18n';
import { SITE_URLS } from '@/platform/site-urls';
import { Button, EngagementBand } from '@/ui';

export function PricingEngagementBand() {
  const i18n = getServerI18n();
  const appBaseUrl = SITE_URLS.appWelcome.replace(/\/$/, '');

  return (
    <EngagementBand
      actions={
        <Button
          href={`${appBaseUrl}/?tab=subscription&tier=founder`}
          label={i18n._(msg`DEVENIR MEMBRE FONDATEUR (5 €)`)}
        />
      }
      body={i18n._(
        msg`Face aux géants de la cartographie qui verrouillent les données et revendent vos traces, RedView fait le choix de l'indépendance technique et de la précision pure. Traiter le LiDAR haute résolution, recalculer le vent et l'enneigement en continu demande des serveurs dédiés et des mois d'ingénierie. Il n'y a pas d'investisseurs derrière — juste une aventure française indépendante. En rejoignant les pionniers dès aujourd'hui, vous accédez en priorité à la bêta iOS TestFlight et façonnez un outil conçu par et pour les montagnards.`,
      )}
      heading={i18n._(msg`Une cartographie d'élite, pensée pour les passionnés.`)}
    />
  );
}
