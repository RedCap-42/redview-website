'use client';

import { useLingui } from '@lingui/react';
import { styled } from '@linaria/react';

import { spacing } from '@/tokens';
import { Body, Button, Heading } from '@/ui';

import { USER_FEEDBACK_COPY } from '../user-feedback-copy';

const SuccessView = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${spacing(6)};

  & > * + * {
    margin-top: ${spacing(4)};
  }
`;

const Actions = styled.div`
  align-self: flex-end;
`;

export function UserFeedbackSuccess({
  onDismiss,
}: {
  onDismiss?: () => void;
}) {
  const { i18n } = useLingui();

  return (
    <>
      <Heading as="h2" size="lg" weight="light">
        {i18n._(USER_FEEDBACK_COPY.successTitle)}
      </Heading>
      <SuccessView>
        <Body muted size="md">
          {i18n._(USER_FEEDBACK_COPY.successSubtitle)}
        </Body>
        {onDismiss !== undefined && (
          <Actions>
            <Button
              label={i18n._(USER_FEEDBACK_COPY.successDone)}
              onClick={onDismiss}
              type="button"
              variant="filled"
            />
          </Actions>
        )}
      </SuccessView>
    </>
  );
}
