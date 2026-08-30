import { LocalizedLink } from '@/platform/i18n/LocalizedLink';

export function PrivacyPolicyDocument() {
  return (
    <>
      <p>
        <strong>Date d&apos;effet :</strong>
        {' 1er janvier 2026'}
      </p>

      <h2>1. Introduction</h2>

      <p>
        Bienvenue sur <strong>RedView</strong> (« <strong>RedView</strong> », « <strong>la Société</strong> », « <strong>nous</strong> » ou « <strong>notre</strong> »).
      </p>

      <p>
        RedView exploite la plateforme web 3D et les services géospatiaux associés (ci-après désignés collectivement le « <strong>Service</strong> »).
      </p>

      <p>
        La présente Politique de Confidentialité a pour objectif de vous informer en toute transparence sur la manière dont nous collectons, utilisons, protégeons et partageons vos données à caractère personnel lorsque vous naviguez sur notre site ou utilisez nos outils cartographiques et moteurs de simulation 3D.
      </p>

      <p>
        Nous nous engageons à respecter les réglementations applicables en matière de protection des données, notamment le Règlement Général sur la Protection des Données (RGPD - Règlement UE 2016/679) et la loi Informatique et Libertés.
      </p>

      <p>
        En accédant au Service ou en créant un compte, vous acceptez le traitement de vos données conformément à la présente politique et à nos{' '}
        <LocalizedLink href="/terms">Conditions Générales d&apos;Utilisation</LocalizedLink>.
      </p>

      <h2>2. Données que nous collectons</h2>

      <p>
        Dans le cadre de l&apos;utilisation de RedView, nous pouvons être amenés à collecter les catégories de données suivantes :
      </p>

      <ul>
        <li>
          <p>
            <strong>Données de compte et d&apos;identification :</strong> Votre nom, prénom, adresse email, mot de passe sécurisé (haché), et éventuellement le nom de votre club, entreprise ou organisation.
          </p>
        </li>
        <li>
          <p>
            <strong>Données géographiques et traces d&apos;exploration :</strong> Fichiers GPX, KML, points d&apos;intérêt (POI), profils altimétriques, variantes de parcours et métadonnées associées que vous importez ou générez via nos moteurs (Climb-Seeker, comparateur de traces, colorimétrie des pentes).
          </p>
        </li>
        <li>
          <p>
            <strong>Données techniques et de navigation :</strong> Adresse IP, type de navigateur et de système d&apos;exploitation, configuration matérielle (accélération graphique WebGL / WebGPU pour le rendu 3D), pages et dalles cartographiques consultées, horodatage des requêtes.
          </p>
        </li>
        <li>
          <p>
            <strong>Données de facturation et de paiement :</strong> Informations relatives à vos souscriptions ou dons participatifs. Les transactions bancaires sont traitées de manière sécurisée par notre prestataire de paiement certifié (PCI-DSS) ; nous ne stockons jamais l&apos;intégralité de vos coordonnées bancaires.
          </p>
        </li>
      </ul>

      <h2>3. Finalités et bases légales du traitement</h2>

      <p>Nous utilisons vos données personnelles pour les finalités suivantes :</p>

      <ul>
        <li>
          <p>
            <strong>Fourniture et fonctionnement du Service :</strong> Création et gestion de votre compte, génération du flux 3D temps réel, traitement des dalles LiDAR IGN 20 cm, calcul des profils de pente et sauvegarde de vos espaces d&apos;exploration <em>(Exécution du contrat)</em>.
          </p>
        </li>
        <li>
          <p>
            <strong>Support utilisateur et communication :</strong> Réponse à vos demandes d&apos;assistance, notifications de mise à jour des moteurs de calcul et alertes techniques <em>(Intérêt légitime / Exécution du contrat)</em>.
          </p>
        </li>
        <li>
          <p>
            <strong>Amélioration et optimisation des performances :</strong> Analyse de l&apos;ergonomie, optimisation du rendu WebGL sur différents matériels et fluidité de chargement des dalles géospatiales <em>(Intérêt légitime)</em>.
          </p>
        </li>
        <li>
          <p>
            <strong>Sécurité et prévention des abus :</strong> Détection des tentatives de fraude, protection contre les attaques par déni de service et sécurisation des accès aux données <em>(Obligation légale / Intérêt légitime)</em>.
          </p>
        </li>
      </ul>

      <h2>4. Confidentialité et propriété de vos traces</h2>

      <p>
        <strong>Vous demeurez le propriétaire exclusif de vos fichiers de traces, parcours et annotations.</strong> RedView ne revend, ne loue et ne monétise en aucun cas vos données personnelles ou vos fichiers géographiques à des tiers ou à des régies publicitaires.
      </p>

      <p>
        Vos traces restent strictement privées au sein de votre espace personnel, sauf si vous choisissez explicitement de les partager publiquement via un lien de partage généré par vos soins.
      </p>

      <h2>5. Cookies et traceurs</h2>

      <p>
        RedView utilise des cookies strictement nécessaires au fonctionnement technique de la plateforme (maintien de la session authentifiée, mémorisation des préférences d&apos;affichage 3D et des paramètres de couches cartographiques).
      </p>
      <p>
        Nous n&apos;utilisons aucun cookie publicitaire tiers de profilage intrusif. Vous pouvez configurer votre navigateur pour bloquer les cookies, bien que cela puisse restreindre l&apos;accès à votre espace connecté.
      </p>

      <h2>6. Conservation des données</h2>

      <p>
        Vos données sont conservées pendant toute la durée d&apos;activité de votre compte utilisateur. En cas d&apos;inactivité prolongée (3 ans sans connexion) ou sur simple demande de suppression de votre part, vos données et traces associées sont définitivement effacées de nos serveurs de production sous 30 jours.
      </p>

      <h2>7. Vos droits</h2>

      <p>
        Conformément à la réglementation RGPD, vous disposez des droits suivants concernant vos données personnelles :
      </p>

      <ul>
        <li>Droit d&apos;accès et d&apos;obtention d&apos;une copie de vos données ;</li>
        <li>Droit de rectification de vos informations personnelles ;</li>
        <li>Droit à l&apos;effacement (droit à l&apos;oubli) ;</li>
        <li>Droit à la limitation du traitement et droit d&apos;opposition ;</li>
        <li>Droit à la portabilité de vos données (export de vos traces et profils au format standard).</li>
      </ul>

      <p>
        Pour exercer l&apos;un de ces droits, il vous suffit de nous contacter directement par courriel à{' '}
        <a href="mailto:redview.app@proton.me">redview.app@proton.me</a>.
      </p>

      <h2>8. Sécurité de l&apos;infrastructure</h2>

      <p>
        Nous mettons en œuvre des mesures techniques et organisationnelles rigoureuses pour protéger vos données : chiffrement des communications en transit (HTTPS / TLS 1.3), protocoles d&apos;isolation des environnements de calcul 3D et sauvegardes régulières.
      </p>

      <h2>9. Contact</h2>

      <p>
        Pour toute question relative à la présente Politique de Confidentialité ou à la gestion de vos données chez RedView, vous pouvez nous écrire à :
      </p>

      <ul>
        <li>
          <p>
            <strong>Email :</strong>{' '}
            <a href="mailto:redview.app@proton.me">redview.app@proton.me</a>
          </p>
        </li>
      </ul>
    </>
  );
}
