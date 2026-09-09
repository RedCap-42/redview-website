import { LocalizedLink } from '@/platform/i18n/LocalizedLink';

export function CookiePolicyDocument() {
  return (
    <>
      <p>
        <strong>Dernière mise à jour :</strong>
        {' 1er janvier 2026'}
      </p>

      <h2>1. Qu&apos;est-ce qu&apos;un cookie ou traceur ?</h2>
      <p>
        Un cookie est un petit fichier texte déposé et stocké sur votre terminal (ordinateur, tablette, smartphone) lors de la consultation d&apos;un site web ou de l&apos;utilisation d&apos;une application en ligne. Il permet à son émetteur d&apos;identifier le terminal pendant sa durée de validité et de mémoriser certaines informations relatives à votre parcours ou à vos préférences d&apos;affichage.
      </p>
      <p>
        Le terme plus large de « <em>traceur</em> » englobe également les technologies similaires telles que le stockage local (<em>LocalStorage</em>, <em>SessionStorage</em>), les pixels invisibles ou les identifiants matériels.
      </p>

      <h2>2. Cadre réglementaire et engagement de RedView</h2>
      <p>
        Conformément à la directive européenne ePrivacy (2002/58/CE transposée), au Règlement Général sur la Protection des Données (RGPD 2016/679) et aux lignes directrices et recommandations de la Commission Nationale de l&apos;Informatique et des Libertés (<strong>CNIL</strong> – délibérations n° 2020-091 et 2020-092) :
      </p>
      <ul>
        <li>
          <strong>Aucun cookie non essentiel n&apos;est déposé sans votre consentement préalable et explicite.</strong>
        </li>
        <li>
          <strong>Refuser les cookies est aussi simple que de les accepter</strong>, en un seul clic et sans pénalité sur votre accès aux contenus publics.
        </li>
        <li>
          Votre choix (acceptation ou refus) est conservé pour une durée maximale de <strong>6 mois</strong>. Vous pouvez le modifier ou le retirer à tout moment via le lien <em>« Gestion des cookies »</em> présent en bas de chaque page de notre site.
        </li>
      </ul>

      <h2>3. Inventaire des cookies et traceurs utilisés sur RedView</h2>
      <p>
        RedView applique une politique stricte de minimisation des données. Nous n&apos;utilisons aucune régie publicitaire tierce, aucun pixel de reciblage commercial (retargeting) ni aucun outil de profilage invasif.
      </p>

      <h3>A. Cookies techniques strictement nécessaires (exemptés de consentement)</h3>
      <p>
        Ces traceurs sont indispensables au fonctionnement sécurisé et technique de la plateforme. Conformément aux préconisations de la CNIL, ils ne nécessitent pas votre consentement préalable car le service ne peut fonctionner sans eux :
      </p>
      <ul>
        <li>
          <strong>redview_cookie_consent (LocalStorage / Cookie) :</strong> Mémorise vos choix de consentement (acceptation, refus ou réglages personnalisés). <em>Durée de conservation : 6 mois.</em>
        </li>
        <li>
          <strong>Session & Authentification (redview_session / token JWT sécurisé) :</strong> Maintient votre session connectée de manière chiffrée lors de votre navigation sur vos espaces de travail cartographiques. <em>Durée : durée de la session active ou 30 jours si reconnexion automatique.</em>
        </li>
        <li>
          <strong>Préférences graphiques 3D & Cache LiDAR :</strong> Mémorise vos paramètres d&apos;ombrage, d&apos;exagération du relief, de colorimétrie des pentes et d&apos;orientation solaire WebGL dans le stockage local de votre navigateur pour éviter de recalculer les dalles à chaque vue. <em>Durée : stockage local permanent jusqu&apos;à vidage du cache par l&apos;utilisateur.</em>
        </li>
      </ul>

      <h3>B. Mesure d&apos;audience et performances (soumis à consentement ou anonymisés)</h3>
      <p>
        Ces traceurs nous permettent de mesurer la fluidité de la plateforme, le temps de réponse du moteur de calcul d&apos;élévation 3D et les pages les plus consultées, afin d&apos;optimiser les performances de nos serveurs :
      </p>
      <ul>
        <li>
          <strong>Métriques de performance & Télémétrie anonymisée :</strong> Mesure le temps de chargement des dalles LiDAR 20 cm et la stabilité du framerate WebGL / WebGPU. Les adresses IP sont systématiquement anonymisées (tronquées) et aucune donnée n&apos;est recoupée avec d&apos;autres traitements. <em>Durée de conservation maximale : 13 mois.</em>
        </li>
      </ul>

      <h3>C. Sécurisation des paiements et prévention de la fraude (Stripe)</h3>
      <p>
        Pour les utilisateurs choisissant de soutenir RedView via le Pass Fondateur ou les dons de mécénat :
      </p>
      <ul>
        <li>
          <strong>__stripe_mid, __stripe_sid (Stripe, Inc.) :</strong> Utilisés exclusivement pour la détection et la prévention des fraudes bancaires lors des transactions chiffrées. Ces cookies sont strictement nécessaires à la sécurité des transactions financières en ligne. <em>Durée de conservation : 1 an pour __stripe_mid, 30 minutes pour __stripe_sid.</em>
        </li>
      </ul>

      <h2>4. Comment gérer vos choix et préférences de cookies ?</h2>
      <p>
        Plusieurs options gratuites vous permettent d&apos;exprimer et de modifier votre choix à tout instant :
      </p>

      <h3>Option 1 : Le gestionnaire de préférences RedView</h3>
      <p>
        Vous pouvez à tout moment cliquer sur le lien <strong>« Gestion des cookies »</strong> situé dans le pied de page du site ou sur le bouton ci-dessous pour ouvrir le panneau de configuration interactif et activer ou désactiver les traceurs par catégorie.
      </p>

      <h3>Option 2 : La configuration de votre navigateur internet</h3>
      <p>
        Vous pouvez également configurer votre navigateur pour qu&apos;il accepte ou refuse systématiquement les cookies, ou pour être alerté lorsqu&apos;un cookie est sur le point d&apos;être déposé :
      </p>
      <ul>
        <li>
          <strong>Google Chrome :</strong> Menu &gt; Paramètres &gt; Confidentialité et sécurité &gt; Cookies et données de sites.
        </li>
        <li>
          <strong>Mozilla Firefox :</strong> Menu &gt; Paramètres &gt; Vie privée et sécurité &gt; Cookies et données de sites.
        </li>
        <li>
          <strong>Apple Safari :</strong> Préférences &gt; Confidentialité &gt; Bloquer tous les cookies.
        </li>
        <li>
          <strong>Microsoft Edge :</strong> Paramètres &gt; Cookies et autorisations de site &gt; Gérer et supprimer les cookies.
        </li>
      </ul>
      <p>
        <em>Note :</em> Le blocage complet des cookies strictement nécessaires dans votre navigateur peut perturber l&apos;authentification ou la fluidité d&apos;affichage de la cartographie 3D temps réel.
      </p>

      <h2>5. Liens utiles</h2>
      <p>
        Pour en savoir plus sur la protection de vos données personnelles, nous vous invitons à consulter notre{' '}
        <LocalizedLink href="/privacy-policy">Politique de Confidentialité</LocalizedLink> ainsi que le site de la{' '}
        <a href="https://www.cnil.fr/fr/cookies-et-autres-traceurs" rel="noopener noreferrer" target="_blank">
          CNIL (Commission Nationale de l&apos;Informatique et des Libertés)
        </a>.
      </p>

      <h2>6. Contact</h2>
      <p>
        Pour toute question relative à l&apos;utilisation des cookies sur RedView, écrivez-nous à :{' '}
        <a href="mailto:redview.app@proton.me">redview.app@proton.me</a>.
      </p>
    </>
  );
}
