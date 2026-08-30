import { msg } from '@lingui/core/macro';

import { getServerI18n } from '@/platform/i18n/get-server-i18n';
import { Button, Signoff } from '@/ui';

export function WhyRedViewSignoff() {
  const i18n = getServerI18n();

  return (
    <Signoff
      body={i18n._(
        msg`Scan LiDAR HD 20cm, recherche de POI en corridor et comparaison multi-traces sur une interface 3D unifiée.`,
      )}
      crosshairSide="left"
      heading={i18n._(
        msg`Planifiez votre prochaine trace *au millimètre près.*`,
      )}
      scheme="dark"
    >
      <Button
        href="/customers"
        label={i18n._(msg`Explorer en 3D`)}
      />
    </Signoff>
  );
}
