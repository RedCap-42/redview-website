'use client';

import { type MessageDescriptor } from '@lingui/core';
import { msg } from '@lingui/core/macro';
import { useLingui } from '@lingui/react';
import { styled } from '@linaria/react';
import { useMemo, useState } from 'react';

import { INFORMATIVE_MARKS } from '@/icons';
import { getMessageDescriptorSource } from '@/platform/i18n/get-message-descriptor-source';
import { usePricingState } from '@/pricing-state';
import {
  color,
  EASING,
  FONT_WEIGHT,
  fontFamily,
  fontSize,
  mediaUp,
  radius,
  semanticColor,
  spacing,
} from '@/tokens';
import { Button } from '@/ui';

import { PLAN_TABLE_DATA } from './plan-table-data';
import {
  type PlanTableBodyRowDataType,
  type PlanTableCellType,
  type PlanTableFeatureRowDataType,
  type PlanTableTierColumnType,
  type PlanTableTierId,
} from './plan-table-types';
import { resolveVisibleRows } from './plan-table-visible-rows';

const CheckMark = INFORMATIVE_MARKS.check;

const TableScope = styled.div`
  align-items: center;
  color: ${semanticColor.ink};
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const TableContainer = styled.div`
  border: 1px solid ${semanticColor.line};
  border-radius: ${radius(3)};
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  width: 100%;

  ${mediaUp('md')} {
    border-radius: 0;
    border: none;
    overflow-x: visible;
  }
`;

const TableInner = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 660px;
  width: 100%;

  ${mediaUp('md')} {
    min-width: 0;
  }
`;

const ScrollHint = styled.div`
  align-items: center;
  color: ${semanticColor.inkMuted};
  display: flex;
  font-family: ${fontFamily('sans')};
  font-size: ${fontSize(2.5)};
  gap: ${spacing(1.5)};
  justify-content: center;
  margin-top: ${spacing(3)};
  width: 100%;

  ${mediaUp('md')} {
    display: none;
  }
`;

const GridRow = styled.div`
  display: grid;
  grid-template-columns: 1.4fr 1fr 1fr 1fr;
  width: 100%;

  &:hover {
    background-color: rgba(255, 255, 255, 0.02);
  }
`;

const HeadCell = styled.div`
  align-items: center;
  border-bottom: 1px solid ${semanticColor.line};
  display: flex;
  font-family: ${fontFamily('sans')};
  font-size: ${fontSize(4.5)};
  font-weight: ${FONT_WEIGHT.medium};
  line-height: ${spacing(6)};
  padding: ${spacing(3.5)} ${spacing(4)};

  &[data-sticky] {
    background-color: ${semanticColor.surface};
    left: 0;
    position: sticky;
    z-index: 2;

    ${mediaUp('md')} {
      position: static;
    }
  }

  &[data-tier] {
    border-left: 1px solid ${semanticColor.line};
    font-size: ${fontSize(4)};
    justify-content: center;
    text-align: center;
  }

  &[data-tier='organization'] {
    background-color: rgba(74, 56, 245, 0.08);
  }
`;

const FeatureLabel = styled.div`
  align-items: center;
  border-bottom: 1px solid ${semanticColor.line};
  color: ${semanticColor.inkMuted};
  display: flex;
  font-family: ${fontFamily('sans')};
  font-size: ${fontSize(3.5)};
  line-height: 1.45;
  min-height: ${spacing(14)};
  padding: ${spacing(3)} ${spacing(4)};

  &[data-sticky] {
    background-color: ${semanticColor.surface};
    left: 0;
    position: sticky;
    z-index: 2;

    ${mediaUp('md')} {
      position: static;
    }
  }

  ${mediaUp('md')} {
    font-size: ${fontSize(4)};
  }
`;

const TierCell = styled.div`
  align-items: center;
  border-bottom: 1px solid ${semanticColor.line};
  border-left: 1px solid ${semanticColor.line};
  display: flex;
  flex-direction: column;
  font-family: ${fontFamily('sans')};
  font-size: ${fontSize(3.5)};
  justify-content: center;
  line-height: 1.35;
  min-height: ${spacing(14)};
  padding: ${spacing(3)} ${spacing(3)};
  text-align: center;

  &[data-tier='organization'] {
    background-color: rgba(74, 56, 245, 0.04);
  }

  ${mediaUp('md')} {
    font-size: ${fontSize(4)};
    padding: ${spacing(3.5)} ${spacing(4)};
  }
`;

const TierText = styled.span`
  color: ${semanticColor.ink};
`;

const YesRow = styled.div`
  align-items: center;
  column-gap: ${spacing(2)};
  display: flex;
  justify-content: flex-start;
  margin-inline: auto;
  max-width: 100%;
  text-align: left;
  width: 140px;

  ${mediaUp('md')} {
    width: 154px;
  }
`;

const CheckMarkWrap = styled.span`
  align-items: center;
  display: inline-flex;
  flex-shrink: 0;
  height: 16px;
  justify-content: center;
  width: 16px;
`;

const CategoryGridBand = styled.div`
  align-items: center;
  background-color: ${color('white-10')};
  border-bottom: 1px solid ${semanticColor.line};
  border-left: 3px solid ${color('blue')};
  display: flex;
  grid-column: 1 / -1;
  left: 0;
  min-height: ${spacing(14)};
  padding: ${spacing(2.5)} ${spacing(4)};
  position: sticky;
  width: 100%;

  ${mediaUp('md')} {
    position: static;
  }
`;

const CategoryTitle = styled.span`
  font-family: ${fontFamily('sans')};
  font-size: ${fontSize(4)};
  font-weight: ${FONT_WEIGHT.medium};
  line-height: ${spacing(6)};
  width: 100%;

  ${mediaUp('md')} {
    font-size: ${fontSize(4.5)};
  }
`;

const CollapsibleWrapper = styled.div`
  display: grid;
  grid-template-rows: 0fr;
  opacity: 0;
  transition:
    grid-template-rows 0.4s ${EASING.standard},
    opacity 0.4s ${EASING.standard};
  width: 100%;

  &[data-expanded] {
    grid-template-rows: 1fr;
    opacity: 1;
  }
`;

const CollapsibleInner = styled.div`
  overflow: hidden;
`;

const CtaRow = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${spacing(8)};
  width: 100%;
`;

// Enterprise inherits the Organization cell unless a row overrides it: the
// tier is a superset, so unmarked rows read as "same as Organization".
function resolveCell(
  row: PlanTableFeatureRowDataType,
  columnId: PlanTableTierId,
): PlanTableCellType {
  return (
    row.tiers[columnId] ??
    (columnId === 'enterprise' ? row.tiers.organization : undefined) ?? {
      kind: 'dash',
    }
  );
}

function CellValue({ cell }: { cell: PlanTableCellType }) {
  const { i18n } = useLingui();

  if (cell.kind === 'dash') {
    return <TierText style={{ color: color('white-40') }}>—</TierText>;
  }

  if (cell.kind === 'text') {
    return <TierText>{i18n._(cell.text)}</TierText>;
  }

  return (
    <YesRow>
      <CheckMarkWrap>
        <CheckMark color={color('blue')} sizePx={16} />
      </CheckMarkWrap>
      <TierText>{i18n._(cell.label ?? msg`Inclus`)}</TierText>
    </YesRow>
  );
}

function FeatureRow({
  row,
  tierColumns,
}: {
  row: PlanTableFeatureRowDataType;
  tierColumns: PlanTableTierColumnType[];
}) {
  const { i18n } = useLingui();

  return (
    <GridRow>
      <FeatureLabel data-sticky>{i18n._(row.featureLabel)}</FeatureLabel>
      {tierColumns.map((column) => (
        <TierCell data-tier={column.id} key={column.id}>
          <CellValue cell={resolveCell(row, column.id)} />
        </TierCell>
      ))}
    </GridRow>
  );
}

function CategoryRow({ title }: { title: MessageDescriptor }) {
  const { i18n } = useLingui();

  return (
    <GridRow>
      <CategoryGridBand>
        <CategoryTitle>{i18n._(title)}</CategoryTitle>
      </CategoryGridBand>
    </GridRow>
  );
}

function PlanRow({
  row,
  tierColumns,
}: {
  row: PlanTableBodyRowDataType;
  tierColumns: PlanTableTierColumnType[];
}) {
  if (row.type === 'category') {
    return <CategoryRow title={row.title} />;
  }

  return <FeatureRow row={row} tierColumns={tierColumns} />;
}

const rowKey = (row: PlanTableBodyRowDataType): string =>
  getMessageDescriptorSource(
    row.type === 'category' ? row.title : row.featureLabel,
  );

export function PlanTableContent() {
  const { i18n } = useLingui();
  const { hosting } = usePricingState();
  const [expanded, setExpanded] = useState(false);

  const visibleRows = useMemo(
    () => resolveVisibleRows(PLAN_TABLE_DATA.rows, hosting),
    [hosting],
  );

  const initialRows = visibleRows.slice(
    0,
    PLAN_TABLE_DATA.initialVisibleRowCount,
  );
  const extraRows = visibleRows.slice(PLAN_TABLE_DATA.initialVisibleRowCount);
  const hasMoreRows = extraRows.length > 0;

  const toggleLabel = expanded
    ? PLAN_TABLE_DATA.seeMoreFeaturesCta.collapseLabel
    : PLAN_TABLE_DATA.seeMoreFeaturesCta.expandLabel;

  return (
    <TableScope>
      <TableContainer>
        <TableInner>
          <GridRow>
            <HeadCell data-sticky>
              {i18n._(PLAN_TABLE_DATA.featureColumnLabel)}
            </HeadCell>
            {PLAN_TABLE_DATA.tierColumns.map((column) => (
              <HeadCell data-tier={column.id} key={column.id}>
                {i18n._(column.label[hosting])}
              </HeadCell>
            ))}
          </GridRow>

          {initialRows.map((row) => (
            <PlanRow
              key={rowKey(row)}
              row={row}
              tierColumns={PLAN_TABLE_DATA.tierColumns}
            />
          ))}

          {hasMoreRows ? (
            <CollapsibleWrapper data-expanded={expanded ? '' : undefined}>
              <CollapsibleInner>
                {extraRows.map((row) => (
                  <PlanRow
                    key={rowKey(row)}
                    row={row}
                    tierColumns={PLAN_TABLE_DATA.tierColumns}
                  />
                ))}
              </CollapsibleInner>
            </CollapsibleWrapper>
          ) : null}
        </TableInner>
      </TableContainer>

      <ScrollHint>
        {i18n._(msg`← Faites glisser pour comparer tous les plans →`)}
      </ScrollHint>

      {hasMoreRows ? (
        <CtaRow>
          <Button
            label={i18n._(toggleLabel)}
            onClick={() => setExpanded((previous) => !previous)}
            variant="outlined"
          />
        </CtaRow>
      ) : null}
    </TableScope>
  );
}
