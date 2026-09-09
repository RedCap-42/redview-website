import { LocalizedLink } from '@/platform/i18n/LocalizedLink';

export function TermsDocument() {
  return (
    <>
      <p>
        <strong>Dernière mise à jour :</strong>
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
          <strong>Sécurité et disponibilité :</strong> Nous mettons tout en œuvre pour assurer la haute disponibilité de notre moteur de rendu 3D et de nos flux LiDAR.
        </li>
        <li>
          <strong>Données ouvertes et respect des licences :</strong> Les couches cartographiques publiques (LiDAR HD IGN 20 cm, OpenStreetMap) sont intégrées dans le respect de leurs licences d&apos;utilisation respectives.
        </li>
        <li>
          <strong>Liberté de résiliation & Sans engagement :</strong> Vous pouvez résilier votre abonnement ou supprimer votre compte à tout moment en toute autonomie.
        </li>
      </ul>

      <h2>1. Présentation du Service et Objet</h2>
      <p>
        Les présentes Conditions Générales (ci-après les « <strong>CGU / CGV</strong> ») régissent l&apos;accès et l&apos;utilisation de la plateforme <strong>RedView</strong> (ci-après le « <strong>Service</strong> »), accessible en ligne.
      </p>
      <p>
        RedView est une solution technologique géospatiale 3D permettant la visualisation haute résolution du relief, l&apos;analyse topographique des terrains outdoor (LiDAR 20 cm, colorimétrie des pentes, orientation du soleil) et la gestion/comparaison de traces d&apos;exploration.
      </p>

      <h2>2. Acceptation des Conditions</h2>
      <p>
        L&apos;accès et l&apos;utilisation du Service impliquent l&apos;acceptation pleine et entière des présentes conditions, complétées par nos{' '}
        <LocalizedLink href="/legal-notice">Mentions Légales</LocalizedLink>, notre{' '}
        <LocalizedLink href="/privacy-policy">Politique de Confidentialité</LocalizedLink> et notre{' '}
        <LocalizedLink href="/refund-policy">Politique de Remboursement & Rétractation</LocalizedLink>. Si vous n&apos;acceptez pas ces conditions, vous devez cesser d&apos;utiliser la plateforme RedView.
      </p>

      <h2>3. Inscription et Sécurité du Compte</h2>
      <p>
        Pour accéder à certaines fonctionnalités avancées (sauvegarde de variantes multi-traces, export haute définition, espaces de travail collaboratifs), la création d&apos;un compte personnel est requise.
      </p>
      <p>
        Vous vous engagez à fournir des informations exactes et à préserver la confidentialité de vos identifiants de connexion. Toute action effectuée depuis votre compte est réputée avoir été réalisée par vous-même.
      </p>

      <h2>4. Conditions Financières, Souscriptions et Résiliation</h2>
      <p>
        RedView propose des formules gratuites (Accès Bêta Web) ainsi que des formules payantes de soutien et d&apos;accès anticipé (Pass Fondateur, contributions Mécène) :
      </p>
      <ul>
        <li>
          <strong>Paiement sécurisé :</strong> Toutes les transactions sont opérées de manière chiffrée par notre prestataire de paiement certifié PCI-DSS <strong>Stripe</strong>. RedView ne stocke aucune coordonnée bancaire.
        </li>
        <li>
          <strong>Abonnements sans engagement :</strong> Les souscriptions mensuelles se renouvellent tacitement de mois en mois et peuvent être interrompues à tout instant sans motif ni frais.
        </li>
        <li>
          <strong>Résiliation facilitée (« Résiliation en 3 clics ») :</strong> Conformément à la loi française (décret n° 2023-182), vous pouvez résilier votre formule en 3 clics depuis les paramètres de votre compte ou via le portail Stripe Billing.
        </li>
        <li>
          <strong>Droit de rétractation et remboursement :</strong> Les modalités de remboursement et l&apos;application de notre garantie « Satisfait ou remboursé sous 14 jours » sont détaillées dans notre{' '}
          <LocalizedLink href="/refund-policy">Politique de Remboursement & Rétractation</LocalizedLink>.
        </li>
      </ul>

      <h2>5. Utilisation du Service et Règles de Conduite</h2>
      <p>Dans le cadre de l&apos;utilisation de RedView, vous vous interdisez de :</p>
      <ul>
        <li>Tenter de contourner les mesures de sécurité ou de restreindre l&apos;accès aux serveurs de calcul 3D ;</li>
        <li>Effectuer un moissonnage massif non autorisé (scraping) des dalles d&apos;élévation et données de terrain ;</li>
        <li>Télécharger des fichiers corrompus, malveillants ou portant atteinte aux droits de tiers ;</li>
        <li>Utiliser les données à des fins illégales ou contraires à l&apos;ordre public.</li>
      </ul>

      <h2>6. Propriété Intellectuelle</h2>
      <p>
        <strong>Plateforme RedView :</strong> L&apos;ensemble des éléments composant le Service (moteurs de rendu 3D, interfaces graphiques, algorithmes de calcul Climb-Seeker, logos, graphismes et architecture logicielle) sont la propriété exclusive de RedView ou de ses concédants.
      </p>
      <p>
        <strong>Contenus Utilisateur :</strong> Vous conservez l&apos;intégralité des droits de propriété intellectuelle sur les fichiers GPX, KML et annotations que vous chargez sur la plateforme. Vous nous concédez uniquement une licence technique limitée et non exclusive pour héberger, traiter et afficher ces contenus dans le cadre exclusif de la fourniture du Service.
      </p>

      <h2>7. Avertissement sur les Pratiques Outdoor</h2>
      <p>
        Les simulations 3D, profils de pente, prédictions d&apos;ensoleillement et calculs de temps de passage fournis par RedView sont des outils d&apos;aide à la décision basés sur des données géomatiques.
      </p>
      <p>
        <strong>La pratique d&apos;activités de montagne et d&apos;exploration outdoor comporte des risques inhérents.</strong> L&apos;utilisateur demeure seul responsable de l&apos;évaluation réelle des conditions météorologiques, du terrain, de son niveau technique et de sa sécurité sur le terrain. RedView ne saurait se substituer à la prudence et au jugement direct de l&apos;explorateur.
      </p>

      <h2>8. Disponibilité et Modifications du Service</h2>
      <p>
        Nous nous efforçons de garantir une disponibilité maximale du Service. Des interruptions temporaires peuvent toutefois survenir pour des opérations de maintenance, de mise à jour des moteurs de calcul ou en cas de force majeure.
      </p>
      <p>
        RedView se réserve le droit d&apos;enrichir, de modifier ou d&apos;adapter les fonctionnalités de la plateforme afin d&apos;améliorer l&apos;expérience utilisateur.
      </p>

      <h2>9. Données Personnelles et Cookies</h2>
      <p>
        Le traitement de vos données personnelles est régi par notre{' '}
        <LocalizedLink href="/privacy-policy">Politique de Confidentialité</LocalizedLink> et notre{' '}
        <LocalizedLink href="/cookie-policy">Politique de Cookies</LocalizedLink>, qui font partie intégrante des présentes conditions.
      </p>

      <h2>10. Droit Applicable et Juridiction Compétente</h2>
      <p>
        Les présentes conditions sont régies et interprétées conformément au droit français. En cas de différend relatif à la validité, l&apos;interprétation ou l&apos;exécution des présentes, les parties s&apos;engagent à rechercher préalablement une solution amiable. À défaut, les tribunaux compétents seront saisis.
      </p>

      <h2>11. Contact</h2>
      <p>
        Pour toute question relative aux présentes conditions générales, vous pouvez contacter notre équipe à :{' '}
        <a href="mailto:redview.app@proton.me">redview.app@proton.me</a>.
      </p>
    </>
  );
}
