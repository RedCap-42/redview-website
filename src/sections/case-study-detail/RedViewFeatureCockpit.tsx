'use client';

import { styled } from '@linaria/react';
import NextImage from 'next/image';
import { useState } from 'react';
import {
  IconChevronDown,
  IconEye,
  IconLayersSubtract,
  IconSparkles,
} from '@tabler/icons-react';

import { type CaseStudyCatalogEntry } from '@/case-studies';
import {
  fontFamily,
  fontSize,
  mediaUp,
  radius,
  SHADOW,
  spacing,
} from '@/tokens';
import { Body, Heading } from '@/ui';

const Shell = styled.div`
  background: linear-gradient(180deg, rgba(17, 24, 39, 0.95) 0%, rgba(10, 15, 25, 0.98) 100%);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  overflow: hidden;
  padding-block: ${spacing(10)} ${spacing(14)};
  position: relative;
  width: 100%;

  ${mediaUp('md')} {
    padding-block: ${spacing(14)} ${spacing(18)};
  }
`;

const Container = styled.div`
  margin-inline: auto;
  max-width: 1120px;
  padding-inline: ${spacing(4)};
  position: relative;
  width: 100%;

  ${mediaUp('md')} {
    padding-inline: ${spacing(6)};
  }
`;

const HeaderBox = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-bottom: ${spacing(8)};
  text-align: center;
  width: 100%;

  & > * + * {
    margin-top: ${spacing(2)};
  }
`;

const Badge = styled.span`
  align-items: center;
  background-color: rgba(33, 150, 243, 0.15);
  border: 1px solid rgba(33, 150, 243, 0.35);
  border-radius: 999px;
  color: #60a5fa;
  display: inline-flex;
  font-family: ${fontFamily('mono')};
  font-size: ${fontSize(2.5)};
  gap: ${spacing(1.5)};
  letter-spacing: 0.06em;
  padding: ${spacing(1)} ${spacing(3)};
  text-transform: uppercase;
`;

const CockpitFrame = styled.div`
  background-color: #06090e;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: ${radius(3)};
  box-shadow: ${SHADOW.card}, 0 20px 40px -15px rgba(0, 0, 0, 0.8);
  overflow: hidden;
  position: relative;
  width: 100%;
`;

const WindowBar = styled.div`
  align-items: center;
  background-color: rgba(15, 23, 42, 0.85);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  display: flex;
  justify-content: space-between;
  padding: ${spacing(2.5)} ${spacing(4)};
`;

const WindowDots = styled.div`
  display: flex;
  gap: ${spacing(1.5)};

  span {
    border-radius: 50%;
    height: 10px;
    width: 10px;
  }

  span:nth-child(1) { background-color: #ff5f56; }
  span:nth-child(2) { background-color: #ffbd2e; }
  span:nth-child(3) { background-color: #27c93f; }
`;

const WindowTitle = styled.span`
  color: rgba(255, 255, 255, 0.5);
  font-family: ${fontFamily('mono')};
  font-size: ${fontSize(2.5)};
  letter-spacing: 0.04em;
  text-transform: uppercase;
`;

const VisualArea = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  min-height: 380px;
  overflow: hidden;
  position: relative;
  width: 100%;

  ${mediaUp('md')} {
    min-height: 540px;
  }
`;

const ImageLayer = styled.div`
  inset: 0;
  position: absolute;

  img {
    object-fit: cover;
    object-position: center;
  }
`;

const GlassPanel = styled.div`
  background: rgba(14, 19, 24, 0.88);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 12px;
  bottom: ${spacing(4)};
  box-shadow: 0 16px 32px rgba(0, 0, 0, 0.6);
  color: #fff;
  display: flex;
  flex-direction: column;
  max-width: 320px;
  padding: ${spacing(4)};
  position: absolute;
  right: ${spacing(4)};
  width: calc(100% - ${spacing(8)});
  z-index: 10;

  ${mediaUp('md')} {
    bottom: ${spacing(6)};
    max-width: 330px;
    right: ${spacing(6)};
  }
`;

const PanelHeader = styled.div`
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  display: flex;
  justify-content: space-between;
  padding-bottom: ${spacing(3)};
`;

const PanelTitle = styled.span`
  color: #ffffff;
  font-family: ${fontFamily('sans')};
  font-size: ${fontSize(3.5)};
  font-weight: 600;
  letter-spacing: -0.01em;
`;

const ToggleSwitch = styled.button<{ $active: boolean }>`
  align-items: center;
  background-color: ${({ $active }) => ($active ? '#ef4444' : 'rgba(255, 255, 255, 0.2)')};
  border: none;
  border-radius: 999px;
  cursor: pointer;
  display: inline-flex;
  height: 20px;
  padding: 2px;
  transition: background-color 0.2s ease;
  width: 36px;

  span {
    background-color: #fff;
    border-radius: 50%;
    display: block;
    height: 16px;
    transform: ${({ $active }) => ($active ? 'translateX(16px)' : 'translateX(0)')};
    transition: transform 0.2s ease;
    width: 16px;
  }
`;

const PanelBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing(3)};
  margin-top: ${spacing(3)};
`;

const PanelRow = styled.div`
  align-items: center;
  display: flex;
  font-family: ${fontFamily('sans')};
  font-size: ${fontSize(3)};
  justify-content: space-between;
`;

const RowLabel = styled.span`
  color: rgba(255, 255, 255, 0.6);
`;

const RowSelectPill = styled.div`
  align-items: center;
  background-color: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  color: #f3f4f6;
  display: inline-flex;
  font-size: ${fontSize(3)};
  gap: ${spacing(1)};
  padding: ${spacing(1)} ${spacing(2)};
`;

const SliderTrack = styled.div`
  align-items: center;
  display: flex;
  gap: ${spacing(2)};
  width: 130px;
`;

const SliderBar = styled.div<{ $percent: number }>`
  background-color: rgba(255, 255, 255, 0.15);
  border-radius: 999px;
  flex: 1;
  height: 4px;
  position: relative;

  &::before {
    background-color: #ef4444;
    border-radius: 999px;
    content: '';
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: ${({ $percent }) => `${$percent}%`};
  }

  &::after {
    background-color: #ffffff;
    border-radius: 50%;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.4);
    content: '';
    height: 10px;
    left: ${({ $percent }) => `calc(${$percent}% - 5px)`};
    position: absolute;
    top: -3px;
    width: 10px;
  }
`;

const TierList = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  display: flex;
  flex-direction: column;
  gap: ${spacing(2)};
  margin-top: ${spacing(1)};
  padding-top: ${spacing(2.5)};
`;

const TierItem = styled.div`
  align-items: center;
  display: flex;
  font-size: ${fontSize(3)};
  justify-content: space-between;
`;

const TierLeft = styled.div`
  align-items: center;
  color: rgba(255, 255, 255, 0.75);
  display: flex;
  gap: ${spacing(2)};
`;

const TierColorSwatch = styled.span<{ $color: string }>`
  align-items: center;
  background-color: ${({ $color }) => $color};
  border-radius: 4px;
  display: inline-block;
  height: 12px;
  width: 12px;
`;

const TierColorPill = styled.div<{ $color: string }>`
  align-items: center;
  background-color: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  color: #fff;
  display: inline-flex;
  font-family: ${fontFamily('mono')};
  font-size: ${fontSize(2.5)};
  gap: ${spacing(1.5)};
  padding: 2px ${spacing(2)};
`;

type FeatureCockpitConfig = {
  title: string;
  imageSrc: string;
  resolution: string;
  colorizationType: string;
  opacityPercent: number;
  scaleLabel: string;
  tiers: Array<{ label: string; color: string; hex: string }>;
};

const COCKPIT_CONFIGS: Record<string, FeatureCockpitConfig> = {
  'affichage-paliers-altitude': {
    title: 'Altitude',
    imageSrc: '/images/features/alti.png',
    resolution: '0.40 m (LiDAR)',
    colorizationType: 'Dégradé',
    opacityPercent: 20,
    scaleLabel: '4 couleurs',
    tiers: [
      { label: '0 m', color: '#2DBF8C', hex: '2DBF8C' },
      { label: '1000 m', color: '#FFD800', hex: 'FFD800' },
      { label: '2000 m', color: '#FF8000', hex: 'FF8000' },
      { label: '3000 m+', color: '#FFFFFF', hex: 'FFFFFF' },
    ],
  },
  'analyse-pentes-inclinaisons': {
    title: 'Pentes & Inclinaisons',
    imageSrc: '/images/features/pente.png',
    resolution: '0.40 m (LiDAR)',
    colorizationType: 'Dégradé',
    opacityPercent: 20,
    scaleLabel: 'Pourcentage',
    tiers: [
      { label: '0 - 7% (Modéré)', color: '#2DBF8C', hex: '2DBF8C' },
      { label: '7% - 12% (Pentu)', color: '#FFD800', hex: 'FFD800' },
      { label: '12% - 24% (Très pentu)', color: '#FF8000', hex: 'FF8000' },
      { label: '<24% (Vertical)', color: '#FF3838', hex: 'FF3838' },
    ],
  },
  'visualisateur-lidar': {
    title: 'Viewer LiDAR WebGPU',
    imageSrc: '/images/features/lidar.png',
    resolution: '0.20 m (WebGPU)',
    colorizationType: 'Nuage de points 3D',
    opacityPercent: 100,
    scaleLabel: 'Taille & Densité points',
    tiers: [
      { label: '0° - 15° (Quasi plat)', color: '#3FAE2A', hex: '3FAE2A' },
      { label: '15° - 30° (Roulant)', color: '#F59628', hex: 'F59628' },
      { label: '30° - 90° (Raide)', color: '#000000', hex: '000000' },
    ],
  },
  'modelisation-enneigement': {
    title: 'Nivologie Physique',
    imageSrc: '/images/features/neige.png',
    resolution: 'Météo France 1km',
    colorizationType: 'Tri-couches',
    opacityPercent: 90,
    scaleLabel: 'Épaisseur',
    tiers: [
      { label: 'LIDAR par défaut', color: '#686DE0', hex: '686DE0' },
      { label: 'Couverture Neigeuse', color: '#DFE4EA', hex: 'DFE4EA' },
      { label: 'Épaisseur du manteau', color: '#FF4757', hex: 'FF4757' },
    ],
  },
  'simulation-ensoleillement-ombres': {
    title: 'Solaire & Ombres',
    imageSrc: '/images/features/soleil.png',
    resolution: 'Relief 3D 40cm',
    colorizationType: 'Éphéméride',
    opacityPercent: 28,
    scaleLabel: 'Date & Heure',
    tiers: [
      { label: 'Zone ensoleillée', color: '#FFA502', hex: 'FFA502' },
      { label: 'Ombre portée', color: '#2F3542', hex: '2F3542' },
    ],
  },
  'previsions-meteo-historiques': {
    title: 'Météo & Climat 3D',
    imageSrc: '/images/features/meteo.png',
    resolution: 'Direct & Archives',
    colorizationType: 'Précipitations',
    opacityPercent: 65,
    scaleLabel: 'mm/h',
    tiers: [
      { label: '0 - 2 mm/h (Faible)', color: '#70A1FF', hex: '70A1FF' },
      { label: '2 - 10 mm/h (Modéré)', color: '#1E90FF', hex: '1E90FF' },
      { label: '> 10 mm/h (Orage)', color: '#3742FA', hex: '3742FA' },
    ],
  },
  'cartographie-flux-de-vent': {
    title: 'Aérologie & Flux de Vent',
    imageSrc: '/images/features/meteo.png',
    resolution: 'Maille 1 km',
    colorizationType: 'Particules animées',
    opacityPercent: 50,
    scaleLabel: 'Vitesse km/h',
    tiers: [
      { label: 'Calme (< 15 km/h)', color: '#2ED573', hex: '2ED573' },
      { label: 'Modéré (15-35 km/h)', color: '#FFA502', hex: 'FFA502' },
      { label: 'Fort / Rafales (> 35 km/h)', color: '#FF4757', hex: 'FF4757' },
    ],
  },
  'navigation-3d-haute-resolution': {
    title: 'Navigation 3D 40cm',
    imageSrc: '/images/features/40cmdem.png',
    resolution: '0.40 m Submétrique',
    colorizationType: 'WebGL Adaptatif',
    opacityPercent: 100,
    scaleLabel: '60 FPS',
    tiers: [
      { label: 'MNT Haute Définition IGN', color: '#2ED573', hex: '2ED573' },
      { label: 'Couverture France · Suisse', color: '#70A1FF', hex: '70A1FF' },
    ],
  },
  'moteur-itineraire-personnalise': {
    title: 'Moteur de Routage',
    imageSrc: '/images/features/lidar.png',
    resolution: 'Multi-surfaces',
    colorizationType: 'IA Routing',
    opacityPercent: 40,
    scaleLabel: 'Pondération',
    tiers: [
      { label: 'Single-track / Sentier', color: '#2ED573', hex: '2ED573' },
      { label: 'Piste gravier / Gravel', color: '#ECCC68', hex: 'ECCC68' },
      { label: 'Route goudronnée', color: '#747D8C', hex: '747D8C' },
    ],
  },
  'comparateur-variantes-parcours': {
    title: 'Comparateur de Tracés',
    imageSrc: '/images/features/alti.png',
    resolution: 'Multi-traces',
    colorizationType: 'Dénivelé & Ratio',
    opacityPercent: 30,
    scaleLabel: 'Comparatif',
    tiers: [
      { label: 'Trace Principale (42km)', color: '#FF4757', hex: 'FF4757' },
      { label: 'Variante Échappatoire (31km)', color: '#1E90FF', hex: '1E90FF' },
    ],
  },
};

export type RedViewFeatureCockpitProps = {
  entry?: CaseStudyCatalogEntry;
  slug: string;
};

export function RedViewFeatureCockpit({ entry: _entry, slug }: RedViewFeatureCockpitProps) {
  const [toggleActive, setToggleActive] = useState(true);
  const config = COCKPIT_CONFIGS[slug] ?? COCKPIT_CONFIGS['navigation-3d-haute-resolution'];

  return (
    <Shell>
      <Container>
        <HeaderBox>
          <Badge>
            <IconSparkles size={13} />
            Aperçu RedView Cockpit
          </Badge>
          <Heading as="h2" size="md" weight="light">
            Visualisation en direct dans l&apos;interface RedView
          </Heading>
          <Body muted size="sm">
            Rendu 3D immersif avec panneau de contrôle contextuel et palettes personnalisables.
          </Body>
        </HeaderBox>

        <CockpitFrame>
          <WindowBar>
            <WindowDots>
              <span />
              <span />
              <span />
            </WindowDots>
            <WindowTitle>RedView 3D — {config.title}</WindowTitle>
            <IconLayersSubtract color="rgba(255, 255, 255, 0.4)" size={16} />
          </WindowBar>

          <VisualArea>
            <ImageLayer>
              <NextImage
                alt={`Aperçu 3D ${config.title}`}
                fill
                priority
                sizes="(max-width: 1120px) 100vw, 1120px"
                src={config.imageSrc}
                style={{ objectFit: 'cover' }}
              />
            </ImageLayer>

            <GlassPanel>
              <PanelHeader>
                <PanelTitle>{config.title}</PanelTitle>
                <ToggleSwitch
                  $active={toggleActive}
                  onClick={() => setToggleActive((prev) => !prev)}
                  type="button"
                >
                  <span />
                </ToggleSwitch>
              </PanelHeader>

              <PanelBody>
                <PanelRow>
                  <RowLabel>Résolution</RowLabel>
                  <RowSelectPill>
                    {config.resolution} <IconChevronDown size={13} />
                  </RowSelectPill>
                </PanelRow>

                <PanelRow>
                  <RowLabel>Colorisation</RowLabel>
                  <RowSelectPill>
                    {config.colorizationType} <IconChevronDown size={13} />
                  </RowSelectPill>
                </PanelRow>

                <PanelRow>
                  <RowLabel>Opacité</RowLabel>
                  <SliderTrack>
                    <SliderBar $percent={config.opacityPercent} />
                    <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '11px', minWidth: '24px' }}>
                      {config.opacityPercent}%
                    </span>
                  </SliderTrack>
                </PanelRow>

                <TierList>
                  {config.tiers.map((tier) => (
                    <TierItem key={tier.label}>
                      <TierLeft>
                        <IconEye color="rgba(255,255,255,0.5)" size={13} />
                        <span>{tier.label}</span>
                      </TierLeft>
                      <TierColorPill $color={tier.color}>
                        <TierColorSwatch $color={tier.color} />
                        <span>{tier.hex}</span>
                        <IconChevronDown color="rgba(255,255,255,0.4)" size={11} />
                      </TierColorPill>
                    </TierItem>
                  ))}
                </TierList>
              </PanelBody>
            </GlassPanel>
          </VisualArea>
        </CockpitFrame>
      </Container>
    </Shell>
  );
}
