import { type CaseStudyKpi, CaseStudyStatGrid } from '@/case-studies';

export type CaseStudyCardKpisProps = {
  kpis: readonly CaseStudyKpi[];
  variant: 'default' | 'large';
};

export function CaseStudyCardKpis({ kpis, variant }: CaseStudyCardKpisProps) {
  if (variant === 'large') {
    return <CaseStudyStatGrid cells={kpis} frame="card" />;
  }

  return null;
}

