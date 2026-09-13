import { i18n } from '@lingui/core';
import { I18nProvider } from '@lingui/react';
import { render, screen } from '@testing-library/react';

import { EmailsVisual } from './EmailsVisual';

i18n.load('en', {});
i18n.activate('en');

function renderVisual() {
  return render(
    <I18nProvider i18n={i18n}>
      <EmailsVisual active />
    </I18nProvider>,
  );
}

describe('EmailsVisual', () => {
  it('renders the inbox chrome', () => {
    renderVisual();

    expect(screen.getByText('Compose')).toBeInTheDocument();
    expect(
      screen.getByText('Inbox', { exact: false, selector: 'span' }),
    ).toBeInTheDocument();
  });

  it('renders every thread subject', () => {
    renderVisual();

    expect(screen.getByText('Partnerships - Q4 Strategy')).toBeInTheDocument();
    expect(screen.getByText('Proposal Submission')).toBeInTheDocument();
    expect(screen.getByText('Follow-up on Discussion')).toBeInTheDocument();
    expect(screen.getByText('Customer Feedback')).toBeInTheDocument();
  });

  it('renders thread previews, participants and dates', () => {
    renderVisual();

    expect(
      screen.getByText(
        "J'ai relancé le moteur neige sur la trace : 40 cm de fraîche au col, le passage nord reste chargé.",
      ),
    ).toBeInTheDocument();
    expect(screen.getByText('Félix, Thomas')).toBeInTheDocument();
    expect(screen.getByText('Jun 24, 2026')).toBeInTheDocument();
  });
});
