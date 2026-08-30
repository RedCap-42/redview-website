import { LocalizedLink } from '@/platform/i18n/LocalizedLink';

export function TermsDocument() {
  return (
    <>
      <p>
        <strong>Date d&apos;effet :</strong>
        {' 1er janvier 2026'}
      </p>

      <h2>En résumé</h2>
      <p>
        Ce résumé informatif vous présente les principes clés de notre engagement :
      </p>
      <ul>
        <li>
          <strong>Vous êtes propriétaire de vos données :</strong> Vos traces GPS, points d&apos;intérêt et parcours restent votre propriété exclusive. Nous ne les revendons jamais à des tiers.
        </li>
        <li>
          <strong>Sécurité et disponibilité :</strong> Nous mettons tout en œuvre pour assurer la haute disponibilité de notre moteur de rendu 3D et de nos dalles LiDAR.
        </li>
        <li>
          <strong>Données ouvertes et respect des licences :</strong> Les couches cartographiques publiques (ex. LiDAR HD IGN, OpenStreetMap) sont intégrées dans le respect de leurs licences d&apos;utilisation respectives.
        </li>
        <li>
          <strong>Liberté de résiliation :</strong> Vous pouvez exporter vos données ou résilier votre compte à tout moment depuis vos paramètres ou sur simple demande.
        </li>
      </ul>

      <h2>1. Présentation du Service et Objet</h2>
      <p>
        Les présentes Conditions Générales d&apos;Utilisation (ci-après les « <strong>CGU</strong> ») régissent l&apos;accès et l&apos;utilisation de la plateforme <strong>RedView</strong> (ci-après le « <strong>Service</strong> »), accessible en ligne.
      </p>
      <p>
        RedView est une solution technologique géospatiale 3D permettant la visualisation haute résolution du relief, l&apos;analyse topographique des terrains outdoor (LiDAR 20 cm, colorimétrie des pentes, orientation du soleil) et la gestion/comparaison de traces d&apos;exploration.
      </p>

      <h2>2. Acceptation des Conditions</h2>
      <p>
        L&apos;accès et l&apos;utilisation du Service impliquent l&apos;acceptation pleine et entière des présentes CGU. Si vous n&apos;acceptez pas ces conditions, vous devez cesser d&apos;utiliser la plateforme RedView.
      </p>

      <h2>3. Inscription et Sécurité du Compte</h2>
      <p>
        Pour accéder à certaines fonctionnalités avancées (sauvegarde de variantes multi-traces, export haute définition, espaces de travail collaboratifs), la création d&apos;un compte personnel est requise.
      </p>
      <p>
        Vous vous engagez à fournir des informations exactes et à préserver la confidentialité de vos identifiants de connexion. Toute action effectuée depuis votre compte est réputée avoir été réalisée par vous-même.
      </p>

      <h2>4. Utilisation du Service et Règles de Conduite</h2>
      <p>Dans le cadre de l&apos;utilisation de RedView, vous vous interdisez de :</p>
      <ul>
        <li>Tenter de contourner les mesures de sécurité ou de restreindre l&apos;accès aux serveurs de calcul 3D ;</li>
        <li>Effectuer un moissonnage massif non autorisé (scraping) des dalles d&apos;élévation et données de terrain ;</li>
        <li>Télécharger des fichiers corrompus, malveillants ou portant atteinte aux droits de tiers ;</li>
        <li>Utiliser les données à des fins illégales ou contraires à l&apos;ordre public.</li>
      </ul>

      <h2>5. Propriété Intellectuelle</h2>
      <p>
        <strong>Plateforme RedView :</strong> L&apos;ensemble des éléments composant le Service (moteurs de rendu 3D, interfaces graphiques, algorithmes de calcul Climb-Seeker, logos, graphismes et architecture logicielle) sont la propriété exclusive de RedView ou de ses concédants.
      </p>
      <p>
        <strong>Contenus Utilisateur :</strong> Vous conservez l&apos;intégralité des droits de propriété intellectuelle sur les fichiers GPX, KML et annotations que vous chargez sur la plateforme. Vous nous concédez uniquement une licence technique limitée et non exclusive pour héberger, traiter et afficher ces contenus dans le cadre exclusif de la fourniture du Service.
      </p>

      <h2>6. Avertissement sur les Pratiques Outdoor</h2>
      <p>
        Les simulations 3D, profils de pente, prédictions d&apos;ensoleillement et calculs de temps de passage fournis par RedView sont des outils d&apos;aide à la décision basés sur des données géomatiques.
      </p>
      <p>
        <strong>La pratique d&apos;activités de montagne et d&apos;exploration outdoor comporte des risques inhérents.</strong> L&apos;utilisateur demeure seul responsable de l&apos;évaluation réelle des conditions météorologiques, du terrain, de son niveau technique et de sa sécurité sur le terrain. RedView ne saurait se substituer à la prudence et au jugement direct de l&apos;explorateur.
      </p>

      <h2>7. Disponibilité et Modifications du Service</h2>
      <p>
        Nous nous efforçons de garantir une disponibilité maximale du Service. Des interruptions temporaires peuvent toutefois survenir pour des opérations de maintenance, de mise à jour des moteurs de calcul ou en cas de force majeure.
      </p>
      <p>
        RedView se réserve le droit d&apos;enrichir, de modifier ou d&apos;adapter les fonctionnalités de la plateforme afin d&apos;améliorer l&apos;expérience utilisateur.
      </p>

      <h2>8. Données Personnelles</h2>
      <p>
        Le traitement de vos données personnelles est régi par notre{' '}
        <LocalizedLink href="/privacy-policy">Politique de Confidentialité</LocalizedLink>, qui fait partie intégrante des présentes CGU.
      </p>

      <h2>9. Droit Applicable et Juridiction Compétente</h2>
      <p>
        Les présentes CGU sont régies et interprétées conformément au droit français. En cas de différend relatif à la validité, l&apos;interprétation ou l&apos;exécution des présentes, les parties s&apos;engagent à rechercher préalablement une solution amiable. À défaut, les tribunaux compétents seront saisis.
      </p>

      <h2>10. Contact</h2>
      <p>
        Pour toute question relative aux présentes conditions d&apos;utilisation, vous pouvez contacter notre équipe à :{' '}
        <a href="mailto:redview.app@proton.me">redview.app@proton.me</a>.
      </p>
    </>
  );
}
