import { msg } from '@lingui/core/macro';
import { Trans } from '@lingui/react/macro';

import { type ReleaseNote } from './release-note';

export const RELEASE_NOTES: ReleaseNote[] = [
  {
    release: '3.2.0',
    date: '2026-08-28',
    highlights: [
      {
        title: msg`Moteur nival AROME & redistribution physique`,
        description: (
          <Trans>
            La neige n'est plus peinte par altitude : les données AROME haute
            résolution traversent sept phases de calcul (analyse de terrain,
            régression López-Moreno, transport gravitationnel, transport
            éolien, sublimation) pour reproduire l'accumulation réelle sous le
            vent et dans les creux.
          </Trans>
        ),
      },
      {
        title: msg`Profils BRF dynamiques`,
        description: (
          <Trans>
            Le routage compile désormais votre profil BRouter à la volée :
            priorité durée / dénivelé / distance / tranquillité, huit types de
            surfaces en préférer-tolérer-éviter-interdire et pente maximale
            tolérable.
          </Trans>
        ),
      },
      {
        title: msg`Zones interdites injectées dans le routage`,
        description: (
          <Trans>
            Dessinez un polygone sur la carte : il est transmis à BRouter comme
            zone absolue de contournement, sans quitter votre session.
          </Trans>
        ),
      },
    ],
  },
  {
    release: '3.1.0',
    date: '2026-08-14',
    highlights: [
      {
        title: msg`LiDAR IGN 20 cm sans canopée`,
        description: (
          <Trans>
            Téléchargement et parsing binaire des dalles <code>.laz</code> en
            Web Workers, puis rendu GPU du nuage de points recalé au centimètre
            près sur le relief. Vous voyez le sol, les murets et les sentiers
            disparus des cartes.
          </Trans>
        ),
      },
      {
        title: msg`Corridor POI sur trace`,
        description: (
          <Trans>
            Interrogation Overpass/OSM dans un rayon configurable autour de
            votre GPX : points d'eau, boulangeries, refuges, réparateurs. Les
            catégories sont pensées pour l'autonomie complète.
          </Trans>
        ),
      },
    ],
  },
  {
    release: '3.0.0',
    date: '2026-07-25',
    highlights: [
      {
        title: msg`Prédiction d'effort physique (Wasm)`,
        description: (
          <Trans>
            Le moteur simule votre vitesse segment par segment à partir de
            votre FTP, du poids roulant, du CdA et du Crr. La fatigue est
            modélisée par <code>fatigue_lambda</code> et{" "}
            <code>fatigue_floor</code>, sur 12 h, 24 h ou 48 h.
          </Trans>
        ),
      },
      {
        title: msg`Vent croisé réinjecté dans la simulation`,
        description: (
          <Trans>
            Le vecteur vent Open-Meteo est croisé avec le cap de la trace à
            l'heure estimée de passage : un vent de face au km 150 fait chuter
            la vitesse simulée et recalculer votre ETA au sommet.
          </Trans>
        ),
      },
    ],
  },
  {
    release: '2.9.0',
    date: '2026-07-11',
    highlights: [
      {
        title: msg`Ensoleillement et ombres portées`,
        description: (
          <Trans>
            Éphéméride interne et ray-tracing sur le modèle d'élévation : vous
            anticipez les gels matinaux, les pentes qui referment à l'ombre et
            les coups de chaleur de l'après-midi.
          </Trans>
        ),
      },
      {
        title: msg`Particules de vent sur le relief`,
        description: (
          <Trans>
            Un shader WebGL anime les flux d'air en épousant le terrain et met
            en évidence les turbulences derrière les crêtes.
          </Trans>
        ),
      },
    ],
  },
  {
    release: '2.8.0',
    date: '2026-06-27',
    highlights: [
      {
        title: msg`Contours et courbes de niveau adaptatifs`,
        description: (
          <Trans>
            Les courbes de niveau se recalculent selon le niveau de zoom et se
            projettent sur le terrain en trois dimensions.
          </Trans>
        ),
      },
      {
        title: msg`Analyse de pente colorisée`,
        description: (
          <Trans>
            Colorisez les pentes selon vos propres seuils, en degrés ou en
            pourcentage, pour repérer les murs au-delà de 15 % et les replats
            propices au bivouac.
          </Trans>
        ),
      },
    ],
  },
  {
    release: '2.6.0',
    date: '2026-06-13',
    highlights: [
      {
        title: msg`Comparaison multi-traces`,
        description: (
          <Trans>
            Regroupez jusqu'à quatre variantes dans un même projet et comparez
            profils, ratios de surface et temps estimés sur le même relief.
          </Trans>
        ),
      },
      {
        title: msg`Fusion et découpage d'itinéraires`,
        description: (
          <Trans>
            Fusionnez de longs GPX ou découpez-les en étapes journalières tout
            en conservant la hiérarchie de la trace parente.
          </Trans>
        ),
      },
    ],
  },
  {
    release: '2.4.0',
    date: '2026-05-30',
    highlights: [
      {
        title: msg`Graphique multi-axes`,
        description: (
          <Trans>
            L'axe horizontal bascule entre distance, temps d'effort et heure de
            passage absolue. Les deux axes verticaux superposent quatorze
            variables : vitesse, puissance, pente, pluie, vent, nuages,
            température.
          </Trans>
        ),
      },
      {
        title: msg`Timeline kilométrique`,
        description: (
          <Trans>
            Une feuille de route proportionnelle à la distance réelle : les
            longues traversées désertiques laissent de grands espaces, les
            zones denses empilent les points d'intérêt.
          </Trans>
        ),
      },
    ],
  },
  {
    release: '2.2.0',
    date: '2026-05-16',
    highlights: [
      {
        title: msg`Relief 40 cm sur toute la France`,
        description: (
          <Trans>
            Couverture à 40 cm de résolution d'élévation sur la France
            métropolitaine, la Corse et l'île de la Réunion, puis la Suisse.
          </Trans>
        ),
      },
      {
        title: msg`Import multi-formats`,
        description: (
          <Trans>
            Import direct de vos traces <code>GPX</code> et{" "}
            <code>KML</code>, avec profils FIT Garmin pris en charge.
          </Trans>
        ),
      },
    ],
  },
  {
    release: '2.0.0',
    date: '2026-04-25',
    highlights: [
      {
        title: msg`Moteur 3D temps réel dans le navigateur`,
        description: (
          <Trans>
            Le premier moteur topographique WebGL/WebGPU adaptatif capable
            d'exécuter des dalles submétriques à 60 images par seconde dans un
            navigateur standard, sans plugin ni installation.
          </Trans>
        ),
      },
      {
        title: msg`Le projet itinéraire`,
        description: (
          <Trans>
            L'état racine regroupe vos variantes, la configuration du coureur,
            les caméras 3D et les réglages des panneaux : votre session se
            recharge exactement telle que vous l'avez quittée.
          </Trans>
        ),
      },
    ],
  },
];
