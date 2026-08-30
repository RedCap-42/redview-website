import { msg } from '@lingui/core/macro';

import { getServerI18n } from '@/platform/i18n/get-server-i18n';
import { SITE_URLS } from '@/platform/site-urls';
import { Button } from '@/ui';

import { AI_HERO_TABS } from './ai-hero-tabs';
import { HeroVisualScroll } from './HeroVisualScroll';

export function ProductHero() {
  const i18n = getServerI18n();

  return (
    <HeroVisualScroll
      aiBody={i18n._(
        msg`Inspectez la qualité des sentiers en LiDAR 20 cm, estimez vos temps de passage avec arrêts programmés et comparez vos variantes sur une seule carte.`,
      )}
      aiHeading={i18n._(
        msg`...avec une suite d'ingénierie qui analyse *le terrain et le rythme*`,
      )}
      ctaHref={SITE_URLS.appWelcome}
      ctaLabel={i18n._(msg`Explorer en 3D`)}
      introBody={i18n._(
        msg`Tracez avec 8 types de surfaces, extrayez vos POIs vitaux en corridor et superposez vos variantes d'itinéraires pour choisir la trace parfaite.`,
      )}
      introHeading={i18n._(
        msg`Un cockpit 3D pour planifier, *comparer et explorer*`,
      )}
      introSecondaryCta={
        <Button href="/customers" label={i18n._(msg`Fonctionnalités`)} variant="outlined" />
      }
      tabs={AI_HERO_TABS}
    />
  );
}
