'use client';

import { msg } from '@lingui/core/macro';
import { useLingui } from '@lingui/react';
import { css } from '@linaria/core';
import { styled } from '@linaria/react';
import dynamic from 'next/dynamic';

import {
  buildSchemeContext,
  fontSize,
  mediaUp,
  semanticColor,
  spacing,
} from '@/tokens';
import { Modal } from '@/ui';

const WizardFallback = styled.p`
  color: ${semanticColor.inkMuted};
  font-size: ${fontSize(4)};
  padding-block: ${spacing(8)};
  text-align: center;
`;

function WizardLoadingFallback() {
  const { i18n } = useLingui();
  return <WizardFallback>{i18n._(msg`Chargement…`)}</WizardFallback>;
}

const UserFeedbackWizard = dynamic(
  () =>
    import('./wizard/UserFeedbackWizard').then((mod) => ({
      default: mod.UserFeedbackWizard,
    })),
  { loading: () => <WizardLoadingFallback />, ssr: false },
);

const formPanelClass = css`
  --modal-panel-width: min(360px, 100%);

  ${mediaUp('md')} {
    --modal-panel-width: min(720px, 100%);
  }
`;

const WizardScope = styled.div`
  ${buildSchemeContext('dark')}
`;

export function ContactCalModal({
  onClose,
  open,
}: {
  onClose: () => void;
  open: boolean;
}) {
  const { i18n } = useLingui();

  return (
    <Modal
      ariaLabel={i18n._(msg`Retour utilisateur`)}
      className={formPanelClass}
      onClose={onClose}
      open={open}
    >
      <WizardScope data-scheme="dark">
        <UserFeedbackWizard onSuccess={onClose} resetSignal={open ? 1 : 0} />
      </WizardScope>
    </Modal>
  );
}
