import { msg } from '@lingui/core/macro';

import { type CaseStudyStory } from './case-study-types';

export const CASE_STUDY_STORIES: Record<string, CaseStudyStory> = {
  'navigation-3d-haute-resolution': {
    meta: {
      title: msg`Navigation 3D haute résolution (40 cm) | RedView`,
      description: msg`Naviguez dans un environnement 3D avec une résolution d'élévation à 40cm, contre 10 à 30m sur les outils standards. Modélisation 3D adaptative et manipulation fluide en temps réel.`,
    },
    heroTitle: msg`Navigation 3D\n*haute résolution (40 cm)*`,
    sections: [
      {
        eyebrow: msg`Précision Submétrique`,
        heading: msg`40 cm de résolution contre *30 m sur les outils standards*`,
        paragraphs: [
          msg`Naviguez dans un environnement 3D avec une résolution d'élévation à 40cm, contre 10 à 30m sur les outils standards. Chaque talus, crête rocheuse ou singularité du relief est fidèlement restitué.`,
          msg`Modélisation 3D adaptative optimisée selon la puissance de votre machine, assurant une manipulation fluide et réactive en temps réel.`,
          msg`Couverture ultra-précise comprenant la France, la Corse, l'île de la Réunion et la Suisse.`,
        ],
        illustration: {
          imageSrc: '/images/features/40cmdem.png',
          caption: msg`Rendu 3D haute résolution à 40 cm de précision sur le relief alpin (RedView)`,
        },
        callout: {
          text: msg`Une fidélité topographique sans précédent pour repérer le moindre talus et visualiser le relief avec un réalisme absolu.`,
          author: 'Moteur Géospatial RedView',
          role: msg`Rendu 3D adaptatif WebGL`,
        },
      },
      {
        eyebrow: msg`Technologie`,
        heading: msg`Moteur de tuilage 3D *haute performance*`,
        paragraphs: [
          msg`Le pipeline de tuilage dynamique charge les données d'élévation à la volée, garantissant 60 images par seconde même sur les reliefs les plus escarpés.`,
          msg`Idéal pour les pratiquants de trail, alpinisme, VTT et parapente qui ont besoin d'une lecture rigoureuse du terrain avant le départ.`,
        ],
      },
    ],
    tableOfContents: [
      msg`Précision Submétrique`,
      msg`Technologie et Rendu`,
    ],
  },
  'visualisateur-lidar': {
    meta: {
      title: msg`Visualisateur LiDAR (20 cm) | RedView`,
      description: msg`Explorez le relief avec un nuage de points brut à 20cm de résolution. Moteur WebGPU, analyse d'inclinaison des pentes, simulation d'ensoleillement et suppression de la canopée.`,
    },
    heroTitle: msg`Visualisateur LiDAR\n*nuage de points 20 cm*`,
    sections: [
      {
        eyebrow: msg`Nuage de points & WebGPU`,
        heading: msg`Voir à travers la végétation avec *20 cm de précision*`,
        paragraphs: [
          msg`Obtenez une vue brute du sol avec 20cm de précision issue des scans LiDAR haute densité. En supprimant la canopée et la végétation, le visualisateur révèle la géométrie réelle du terrain : roche nue, sentiers dissimulés sous les arbres, pierriers et ruptures de pente invisibles sur les photos satellites classiques.`,
          msg`Propulsé par un moteur de rendu WebGPU haute performance, le viewer offre un contrôle granulaire en direct sur la taille et la densité des points (curseur 1 à 100) pour une netteté visuelle et une fluidité optimales adaptées à votre machine.`,
        ],
        illustration: {
          imageSrc: '/images/features/lidar.png',
          caption: msg`Nuage de points LiDAR brut 20 cm sous moteur WebGPU révélant roche, sentiers et déclivités sous la canopée`,
        },
        callout: {
          text: msg`Le nuage de points LiDAR permet de percer la canopée forestière et d'inspecter chaque sentier et obstacle avec une précision brute de 20 cm.`,
          author: 'Moteur WebGPU RedView',
          role: msg`Rendu haute fidélité du nuage de points`,
        },
      },
      {
        eyebrow: msg`Analyses & Ensoleillement`,
        heading: msg`Pentes, altitude et simulation *solaire en temps réel*`,
        paragraphs: [
          msg`Le viewer LiDAR intègre un cockpit d'analyse avancé superposable directement sur le nuage de points : colorisation paramétrable des pentes par paliers de degrés (ex: 0-15° quasi plat, 15-30° roulant, 30-90° raide), gradients d'altitude et affichage des routes et sentiers.`,
          msg`Simulez l'ensoleillement et les ombres portées selon l'heure et la date précise avec indication automatique de l'aube et du crépuscule. Générez la carte d'exposition cumulée (sunlight map) et visualisez la trajectoire solaire 3D pour anticiper le dégel ou la surchauffe.`,
        ],
      },
      {
        eyebrow: msg`Tuilage & Praticabilité`,
        heading: msg`Matrice 3x3 de tuiles géoréférencées et *couche neigeuse*`,
        paragraphs: [
          msg`Naviguez en toute fluidité grâce au système de tuilage matriciel 3x3 géoréférencé (coordonnées IGN / UTM), permettant de charger et télécharger les tuiles adjacentes à la demande pour sécuriser vos reconnaissances.`,
          msg`Activez en un clic la couche d'enneigement directement sur le relief LiDAR pour évaluer l'accumulation du manteau neigeux et valider la praticabilité de vos passages techniques.`,
        ],
      },
    ],
    tableOfContents: [
      msg`Nuage de points & WebGPU`,
      msg`Analyses & Ensoleillement`,
      msg`Tuilage & Praticabilité`,
    ],
  },
  'analyse-pentes-inclinaisons': {
    meta: {
      title: msg`Analyse des pentes et inclinaisons | RedView`,
      description: msg`Analyse topographique avancée sur LiDAR MNS 0.40m et MNT 1m : shaders GPU raster-color-mix avec encodage sqrt-gamma, détection des seuils d'avalanche (>30°) et repérage des replats de bivouac.`,
    },
    heroTitle: msg`Analyse des pentes et\n*inclinaisons du terrain*`,
    sections: [
      {
        eyebrow: msg`Double Source MNS & MNT`,
        heading: msg`Précision submétrique et *séparation du sol nu*`,
        paragraphs: [
          msg`RedView offre une double source d'élévation pour l'analyse des pentes : le modèle numérique de surface (MNS LiDAR à 0.40 m de résolution) qui intègre la canopée et les blocs rocheux émergents, et le modèle numérique de terrain nu (MNT IGN à 1 m) qui élimine la végétation pour révéler la roche mère.`,
          msg`Cette séparation permet aux alpinistes, traileurs et vététistes d'évaluer fidèlement la praticabilité réelle sous les arbres ou d'analyser la rugosité micro-topographique des parois rocheuses avant de s'engager.`,
        ],
        illustration: {
          imageSrc: '/images/features/pente.png',
          caption: msg`Rendu des déclivités en direct : bascule MNS/MNT et colorisation personnalisée des pourcentages de pente`,
        },
      },
      {
        eyebrow: msg`Moteur Shaders & Rendu GPU`,
        heading: msg`Interpolation sqrt-gamma *au dixième de degré*`,
        paragraphs: [
          msg`Le pipeline de rendu exploite des shaders WebGL raster-color-mix optimisés. L'encodage non linéaire en racine carrée (sqrt-gamma) concentre la résolution dynamique sur la plage angulaire critique (0° à 35°), zone où se jouent la majorité des décisions de praticabilité et de sécurité.`,
          msg`Basculez à tout moment entre un mode dégradé continu et un mode par paliers discrets entièrement personnalisables (ex: 0-7% roulant, 7-12% soutenu, 12-24% raide, >24% vertical) avec ajustement en direct de l'opacité.`,
        ],
      },
      {
        eyebrow: msg`Sécurité & Décision Montagne`,
        heading: msg`Seuils d'avalanche (>30°) et *zones de bivouac optimales*`,
        paragraphs: [
          msg`Identifiez immédiatement les pentes supérieures à 30° et 35°, zones de départ d'avalanches cruciales pour la méthode d'évaluation 3x3 de Munter et la lecture du BRA en ski de randonnée et alpinisme hivernal.`,
          msg`À l'inverse, isolez en un coup d'œil les replats (<5%) et banquettes herbeuses abritées pour planifier l'installation de votre tente ou sécuriser un point de pause sur une crête.`,
        ],
        callout: {
          text: msg`L'encodage sqrt-gamma concentre la précision colorimétrique sur les déclivités charnières pour repérer instantanément les ruptures de pente critiques.`,
          author: 'Moteur Topographique RedView',
          role: msg`Shaders WebGL Raster-Color-Mix`,
        },
      },
    ],
    tableOfContents: [
      msg`Double Source MNS & MNT`,
      msg`Moteur Shaders & Rendu GPU`,
      msg`Sécurité & Décision Montagne`,
    ],
  },
  'affichage-paliers-altitude': {
    meta: {
      title: msg`Affichage par paliers d'altitude | RedView`,
      description: msg`Stratification altimétrique haute définition : palettes étalonnées de 2 à 6 couleurs jusqu'à 5 000 m, masquage sélectif de bandes et lecture immédiate des étages alpins.`,
    },
    heroTitle: msg`Affichage par paliers\n*d'altitude sur mesure*`,
    sections: [
      {
        eyebrow: msg`Stratification Altimétrique`,
        heading: msg`Palettes multi-tranches *étalonnées jusqu'à 5 000 m*`,
        paragraphs: [
          msg`Découpez la topographie selon des palettes prédéfinies de 2 couleurs (0-1500 m), 3 couleurs (0-1000-2000 m), 4 couleurs (0-1000-2000-3000 m) ou 6 couleurs haute définition (0 à 5000 m+).`,
          msg`Chaque palier d'altitude dispose de seuils métriques et de teintes 100% éditables, permettant de matérialiser clairement les étages de végétation (collinéen, montagnard, subalpin, alpin et nival).`,
        ],
        illustration: {
          imageSrc: '/images/features/alti.png',
          caption: msg`Découpage altimétrique par paliers de couleur et masquage sélectif pour isoler fonds de vallées et hauts sommets`,
        },
      },
      {
        eyebrow: msg`Isolation Visuelle & Masquage`,
        heading: msg`Masquage sélectif des bandes *d'altitude critiques*`,
        paragraphs: [
          msg`Grâce à la fonctionnalité de masquage sélectif (hiddenBandIds), éteignez d'un clic les tranches d'altitude hors sujet pour ne conserver que la zone d'évolution de votre projet.`,
          msg`Vous pouvez ainsi isoler uniquement les fonds de vallées pour préparer un itinéraire de repli en cas d'orage, ou masquer le piémont pour faire ressortir les crêtes et cols situés au-dessus de 2 500 m.`,
        ],
      },
      {
        eyebrow: msg`Physiologie & Thermique`,
        heading: msg`Anticipation du gradient thermique et *acclimatation*`,
        paragraphs: [
          msg`Visualisez instantanément les paliers d'effort pour anticiper le refroidissement adiabatique (~0.65°C de perte par 100 m de dénivelé), l'altitude de l'isotherme 0°C et le risque de mal aigu des montagnes (MAM) lors de traversées d'envergure.`,
        ],
      },
    ],
    tableOfContents: [
      msg`Stratification Altimétrique`,
      msg`Isolation Visuelle & Masquage`,
      msg`Physiologie & Thermique`,
    ],
  },
  'simulation-ensoleillement-ombres': {
    meta: {
      title: msg`Simulation de l'ensoleillement et des ombres | RedView`,
      description: msg`Éphéméride SunCalc NOAA, balayage d'ombres portées O(N) multi-threadé en Web Worker, carte d'ensoleillement cumulé et trajectoire solaire 3D.`,
    },
    heroTitle: msg`Simulation de l'ensoleillement\n*et des ombres portées*`,
    sections: [
      {
        eyebrow: msg`Calcul Éphéméride & Workers O(N)`,
        heading: msg`Algorithme de balayage d'horizon et *ombres portées en direct*`,
        paragraphs: [
          msg`Le moteur intègre l'algorithme astronomique SunCalc NOAA, résolu dans le fuseau horaire IANA exact des coordonnées du terrain pour éliminer tout décalage avec l'heure locale réelle du massif.`,
          msg`Un algorithme optimisé de balayage d'horizon en O(N) (Horizon Cast-Shadow Sweep) est exécuté dans des Web Workers dédiés. En propageant le rayon solaire inverse sur le buffer d'élévation, il calcule les ombres franches et pénombres douces projetées par les crêtes sur les versants opposés sans impacter la fluidité de navigation à 60 FPS.`,
        ],
        illustration: {
          imageSrc: '/images/features/soleil.png',
          caption: msg`Calcul dynamique des ombres portées et intégration de la carte d'exposition solaire cumulée selon l'heure exacte`,
        },
      },
      {
        eyebrow: msg`Carte d'Ensoleillement Cumulé`,
        heading: msg`Intégration minute par minute et *cache réactif*`,
        paragraphs: [
          msg`La carte d'exposition solaire (Sunlight Map) intègre pour chaque pixel de la scène le nombre de minutes cumulées d'exposition directe reçues depuis le lever du jour jusqu'à l'heure sélectionnée.`,
          msg`Grâce à une architecture de cache incrémental à double niveau par date et pas de temps, la manipulation du curseur horaire ne recalcule que les tranches manquantes (véritable exécution en O(Δt)), garantissant une réactivité instantanée.`,
        ],
      },
      {
        eyebrow: msg`Gestion Thermique & Bivouac`,
        heading: msg`Choix du versant, *dégel des couloirs et bivouac au soleil*`,
        paragraphs: [
          msg`Idéal en alpinisme et ski de pente raide pour connaître l'heure exacte de dégel d'une face est ou le regel d'une combe à l'ombre.`,
          msg`En été, repérez les portions de sentier ombragées pour éviter les coups de chaleur ou validez l'ensoleillement tardif d'un emplacement de bivouac pour profiter des derniers rayons au coucher du soleil.`,
        ],
        callout: {
          text: msg`Le balayage d'horizon O(N) multi-threadé simule la géométrie exacte des ombres portées pour anticiper le dégel et sécuriser vos passages techniques.`,
          author: 'Moteur Solaire RedView',
          role: msg`Calcul Éphéméride & Workers O(N)`,
        },
      },
    ],
    tableOfContents: [
      msg`Calcul Éphéméride & Workers O(N)`,
      msg`Carte d'Ensoleillement Cumulé`,
      msg`Gestion Thermique & Bivouac`,
    ],
  },
  'previsions-meteo-historiques': {
    meta: {
      title: msg`Prévisions météo et historiques climatiques | RedView`,
      description: msg`Données météorologiques 3D haute fréquence : température ressentie, précipitations horaires, nébulosité et archives climatiques superposées sur votre tracé.`,
    },
    heroTitle: msg`Prévisions météo et\n*historiques climatiques 3D*`,
    sections: [
      {
        eyebrow: msg`Agrégation Météorologique VPS`,
        heading: msg`Pipeline multi-métriques *projeté sur la topographie 3D*`,
        paragraphs: [
          msg`RedView connecte son moteur cartographique à une infrastructure serveur dédiée (VPS haute performance) interrogeant les modèles numériques Open-Meteo pour délivrer des jeux de données météo sans latence.`,
          msg`Superposez sur le relief 5 métriques déterminantes : température réelle, température ressentie (wind chill), intensité des précipitations (mm/h), couverture nuageuse totale (0-100%) et humidité relative.`,
        ],
        illustration: {
          imageSrc: '/images/features/meteo.png',
          caption: msg`Superposition 3D des champs de température, précipitations et nébulosité sur le relief`,
        },
      },
      {
        eyebrow: msg`Prévisions Directes & Archives`,
        heading: msg`De la fenêtre horaire *aux tendances climatiques sur 30 ans*`,
        paragraphs: [
          msg`Le mode Prévisions (Forecast) permet d'analyser l'évolution heure par heure sur les 16 prochains jours pour choisir le créneau idéal de sortie.`,
          msg`Le mode Tendances (Trends) exploite les archives climatiques historiques sur plusieurs décennies pour évaluer la pluviométrie moyenne, les températures typiques et la nébulosité d'un massif avant de planifier une expédition des mois à l'avance.`,
        ],
      },
      {
        eyebrow: msg`Sécurité & Équipement`,
        heading: msg`Anticipation des orages, *brouillard et choix du matériel*`,
        paragraphs: [
          msg`En visualisant le plafond nuageux et les zones de forte précipitation directement sur votre tracé 3D, identifiez les crêtes exposées à la foudre et anticipez les portions où la navigation à vue deviendra difficile.`,
        ],
      },
    ],
    tableOfContents: [
      msg`Agrégation Météorologique VPS`,
      msg`Prévisions Directes & Archives`,
      msg`Sécurité & Équipement`,
    ],
  },
  'cartographie-flux-de-vent': {
    meta: {
      title: msg`Cartographie des flux de vent | RedView`,
      description: msg`Simulation aérologique vectorielle WebGL à 60 FPS : mémoire SOA, shaders GLSL avec depth-bias, vitesse, rafales et détection des effets venturi dans les cols.`,
    },
    heroTitle: msg`Cartographie des\n*flux de vent animés*`,
    sections: [
      {
        eyebrow: msg`Moteur Particulaire WebGL`,
        heading: msg`Animation vectorielle fluide *à 60 images par seconde*`,
        paragraphs: [
          msg`Le moteur de vent de RedView repose sur un système de particules WebGL natif architecturé en mémoire SOA (Structure-of-Arrays) pour maximiser les performances de calcul et d'affichage.`,
          msg`Des milliers de particules sont générées et advectées en temps réel sur la scène 3D pour matérialiser les lignes de flux atmosphérique avec une fluidité absolue sans impacter le framerate.`,
        ],
        illustration: {
          imageSrc: '/images/features/meteo.png',
          caption: msg`Visualisation des lignes de courant et vecteurs de vent avec colorisation par vitesse et intensité des rafales`,
        },
      },
      {
        eyebrow: msg`Shaders GLSL & Précision 3D`,
        heading: msg`Depth-bias géométrique et *interpolation Mercator*`,
        paragraphs: [
          msg`Les shaders GLSL personnalisés intègrent un offset de profondeur (depth-bias) vers la caméra, éliminant tout clignotement ou artefacts de Z-fighting lorsque les particules rasent les arêtes rocheuses et reliefs escarpés.`,
          msg`Le moteur échantillonne en direct la vitesse moyenne du vent (m/s), les rafales maximales et la direction météorologique (0° à 360°) pour restituer la dynamique exacte de la masse d'air.`,
        ],
      },
      {
        eyebrow: msg`Aérologie & Stratégie d'Effort`,
        heading: msg`Effets venturi dans les cols et *gestion de la fatigue*`,
        paragraphs: [
          msg`Repérez instantanément les compressions aérologiques et accélérations venturi dans les cols étroits, identifiez les versants sous le vent abrités des rafales et adaptez votre sens de parcours pour bénéficier d'un vent portant salvateur.`,
        ],
        callout: {
          text: msg`La simulation particulaire WebGL SOA modélise les flux d'air en temps réel pour anticiper les accélérations venturi et la fatigue face au vent.`,
          author: 'Moteur Aérologique RedView',
          role: msg`Shaders GLSL & Particules WebGL`,
        },
      },
    ],
    tableOfContents: [
      msg`Moteur Particulaire WebGL`,
      msg`Shaders GLSL & Précision 3D`,
      msg`Aérologie & Stratégie d'Effort`,
    ],
  },
  'modelisation-enneigement': {
    meta: {
      title: msg`Modélisation de l'enneigement | RedView`,
      description: msg`Pipeline nivologique physique en 7 phases couplant AROME 1.1km et LiDAR HD : transport gravitationnel SnowSlide, transport éolien Winstral Sx et régression solaire.`,
    },
    heroTitle: msg`Modélisation physique\n*de l'enneigement (1 km)*`,
    sections: [
      {
        eyebrow: msg`Pipeline Scientifique en 7 Phases`,
        heading: msg`Couplage AROME Météo-France et *redistribution physique HD*`,
        paragraphs: [
          msg`RedView couple les mailles météorologiques AROME (Météo-France) et ECMWF (~1 100 m) avec le modèle numérique de terrain LiDAR haute résolution pour simuler la redistribution fine de la neige.`,
          msg`Le pipeline s'articule autour de 7 phases physiques rigoureuses : analyse morphologique du relief, régression topographique, transport gravitationnel, transport éolien, sublimation, masquage des falaises verticales et conservation adaptative de la masse.`,
        ],
        illustration: {
          imageSrc: '/images/features/neige.png',
          caption: msg`Modélisation physique du manteau neigeux : vue en couverture continue ou épaisseur réelle en centimètres`,
        },
      },
      {
        eyebrow: msg`Gravité SnowSlide & Vent Winstral Sx`,
        heading: msg`Avalanches gravitationnelles et *accumulation éolienne*`,
        paragraphs: [
          msg`L'algorithme SnowSlide (Bernhardt & Schulz) simule le transport gravitationnel par routing itératif D-infinity selon l'angle de friction interne du manteau neigeux (35° à 60°), purgeant les couloirs raides pour accumuler la neige sur les cônes de déjection.`,
          msg`L'indice d'abri Winstral Sx modélise le transport éolien selon la direction du vent dominant, érodant la neige sur les crêtes soufflées pour former des corniches et surépaisseurs dans les combes sous le vent.`,
        ],
      },
      {
        eyebrow: msg`Régression Multi-Critères & Épaisseur`,
        heading: msg`Rayonnement solaire, *poches d'air froid et épaisseur réelle*`,
        paragraphs: [
          msg`La régression intègre le gradient orographique d'altitude, l'aspect des versants (N/S), l'indice de rugosité (TRI), l'indice de position topographique (TPI) et les poches d'air froid (cold-air pooling).`,
          msg`Basculez entre le mode couverture neigeuse (pourcentage de présence) et le mode épaisseur en centimètres pour planifier vos sorties de ski de randonnée, raquettes ou alpinisme de printemps.`,
        ],
        callout: {
          text: msg`Le couplage SnowSlide et Winstral Sx redistribue physiquement la neige AROME sur le relief LiDAR au mètre près.`,
          author: 'Moteur Nivologique RedView',
          role: msg`Redistribution Physique & SnowSlide`,
        },
      },
    ],
    tableOfContents: [
      msg`Pipeline Scientifique en 7 Phases`,
      msg`Gravité SnowSlide & Vent Winstral Sx`,
      msg`Régression Multi-Critères & Épaisseur`,
    ],
  },
  'moteur-itineraire-personnalise': {
    meta: {
      title: msg`Moteur d'itinéraire personnalisé | RedView`,
      description: msg`Routage expert BRouter avec overrides avancés, pondération fine des revêtements, contournement automatique des réserves naturelles et gestion de POIs.`,
    },
    heroTitle: msg`Moteur d'itinéraire\n*intelligent et sur mesure*`,
    sections: [
      {
        eyebrow: msg`Routage Expert BRouter`,
        heading: msg`Pondération granulaire des *surfaces et revêtements*`,
        paragraphs: [
          msg`RedView intègre le moteur de routage algorithmique BRouter couplé à un catalogue d'overrides experts permettant de personnaliser les coûts de franchissement selon votre pratique spécifique (trail running, bikepacking, gravel, VTT engagé).`,
          msg`Ajustez librement la pondération entre asphalte, pistes gravillonnées, sentiers forestiers et single-tracks techniques pour concevoir des parcours qui privilégient l'immersion en pleine nature ou l'efficacité de roulement.`,
        ],
        illustration: {
          imageSrc: '/images/features/lidar.png',
          caption: msg`Calcul d'itinéraire multi-critères avec personnalisation des types de surface et contournement réglementaire`,
        },
      },
      {
        eyebrow: msg`Réglementation & Zones Protégées`,
        heading: msg`Contournement automatique des *réserves naturelles et zones interdites*`,
        paragraphs: [
          msg`Le moteur applique en direct des correctifs géospatiaux (forbidden zones patch) pour contourner automatiquement les zones protégées, zones de quiétude de la faune sauvage et propriétés privées inaccessibles.`,
          msg`Vous avez la certitude de concevoir des itinéraires 100% légaux et respectueux des arrêtés environnementaux en vigueur sur le territoire.`,
        ],
      },
      {
        eyebrow: msg`Gestion Stratégique des POIs`,
        heading: msg`Points d'eau, abris, bivouacs et *profils altimétriques dynamiques*`,
        paragraphs: [
          msg`Placez et catégorisez vos points d'intérêt stratégiques (sources d'eau potable, cabanes non gardées, ravitaillements, cols, emplacements de bivouac) directement ancrés sur la trace avec recalibrage automatique des temps de passage.`,
        ],
      },
    ],
    tableOfContents: [
      msg`Routage Expert BRouter`,
      msg`Réglementation & Zones Protégées`,
      msg`Gestion Stratégique des POIs`,
    ],
  },
  'comparateur-variantes-parcours': {
    meta: {
      title: msg`Comparateur de variantes de parcours | RedView`,
      description: msg`Superposition multi-traces simultanée et moteur prédictif Rust WASM (redviewalgo) : modélisation de puissance, CdA, Crr, courbe de fatigue et prédiction de temps KNN.`,
    },
    heroTitle: msg`Comparateur de variantes\n*et moteur prédictif Rust*`,
    sections: [
      {
        eyebrow: msg`Lignage Multi-Traces & Scénarios`,
        heading: msg`Superposition simultanée et *validation des plans B*`,
        paragraphs: [
          msg`Le système de lignage de projet permet de superposer simultanément plusieurs variantes de tracés sur la même scène 3D pour comparer en un coup d'œil les profils altimétriques, distances et cumuls de dénivelé positif/négatif (D+/D-).`,
          msg`Définissez en amont des échappatoires stratégiques à chaque bifurcation clé pour pouvoir basculer sur un tracé de secours en toute sérénité en cas de dégradation météo ou de baisse de forme.`,
        ],
        illustration: {
          imageSrc: '/images/features/alti.png',
          caption: msg`Comparaison simultanée de variantes d'itinéraires et analyse des métriques de parcours`,
        },
      },
      {
        eyebrow: msg`Moteur Algorithmique Rust WASM`,
        heading: msg`redviewalgo : modélisation *physique complète de l'effort*`,
        paragraphs: [
          msg`Intégré sous forme de binaire WebAssembly écrit en Rust (redviewalgo), le moteur parse directement vos fichiers d'entraînement FIT (Garmin FIT SDK) et fichiers GPX pour reconstituer votre profil athlétique personnalisé.`,
          msg`L'algorithme résout les équations physiques du déplacement : résistance au roulement (Crr), traînée aérodynamique (CdA), masse totale (athlète + équipement), profil de puissance par gradient de pente et courbe de fatigue exponentielle (fatigue fit).`,
        ],
      },
      {
        eyebrow: msg`IA KNN & Prédiction des Temps`,
        heading: msg`Algorithme k-d tree et *estimation réaliste des temps de passage*`,
        paragraphs: [
          msg`Grâce à un modèle de plus proches voisins (KNN sur k-d tree) entraîné sur vos historiques d'entraînement réels, RedView calcule des prédictions de vitesse point par point, en intégrant les ralentissements en descente technique et les temps de pause (stop strategy).`,
        ],
        callout: {
          text: msg`Le moteur redviewalgo compilé en WebAssembly résout les équations de physique de l'effort et la fatigue pour prédire vos temps de passage avec une précision chirurgicale.`,
          author: 'RedView Algo WASM (Rust)',
          role: msg`Moteur Physique & Prédictif`,
        },
      },
    ],
    tableOfContents: [
      msg`Lignage Multi-Traces & Scénarios`,
      msg`Moteur Algorithmique Rust WASM`,
      msg`IA KNN & Prédiction des Temps`,
    ],
  },
};

