import { LocalizedLink } from '@/platform/i18n/LocalizedLink';

export function PrivacyPolicyDocument() {
  return (
    <>
      <p>
        <strong>Dernière mise à jour :</strong>
        {' 1er janvier 2026'}
      </p>

      <h2>1. Introduction & Responsable de Traitement</h2>
      <p>
        Bienvenue sur <strong>RedView</strong> (« <strong>RedView</strong> », « <strong>la Plateforme</strong> », « <strong>nous</strong> » ou « <strong>notre</strong> »).
      </p>
      <p>
        RedView exploite la plateforme web 3D et les services géospatiaux associés (ci-après désignés collectivement le « <strong>Service</strong> »), accessible en ligne depuis le site officiel et ses applications.
      </p>
      <p>
        La présente Politique de Confidentialité a pour objectif de vous informer en toute transparence sur la manière dont nous collectons, utilisons, protégeons et partageons vos données à caractère personnel, conformément aux dispositions du <strong>Règlement Général sur la Protection des Données (RGPD - Règlement UE 2016/679)</strong> et de la <strong>Loi n° 78-17 du 6 janvier 1978 modifiée (Loi Informatique et Libertés)</strong>.
      </p>
      <p>
        <strong>Responsable du traitement :</strong> Les données à caractère personnel collectées sur le Service sont traitées sous la responsabilité de l&apos;équipe de développement RedView (contact :{' '}
        <a href="mailto:redview.app@proton.me">redview.app@proton.me</a>).
      </p>
      <p>
        En accédant au Service ou en créant un compte, vous reconnaissez avoir pris connaissance de la présente politique ainsi que de nos{' '}
        <LocalizedLink href="/terms">Conditions Générales</LocalizedLink> et de nos{' '}
        <LocalizedLink href="/legal-notice">Mentions Légales</LocalizedLink>.
      </p>

      <h2>2. Registre de transparence des Données Récoltées</h2>
      <p>
        RedView applique le principe de minimisation des données (Article 5.1.c du RGPD) : nous ne collectons que les informations strictement nécessaires à la fourniture de nos simulations 3D et de nos fonctionnalités topographiques.
      </p>

      <h3>A. Données de compte et d&apos;identification</h3>
      <ul>
        <li>
          <strong>Données collectées :</strong> Adresse email, nom, prénom, mot de passe chiffré (hachage cryptographique sécurisé), identifiant unique utilisateur.
        </li>
        <li>
          <strong>Finalité :</strong> Création et gestion du compte, authentification sécurisée, accès à vos espaces d&apos;exploration personnalisés.
        </li>
        <li>
          <strong>Base légale :</strong> Exécution du contrat (Article 6.1.b du RGPD).
        </li>
        <li>
          <strong>Durée de conservation :</strong> Pendant toute la durée d&apos;activité du compte, puis archivées pendant 3 ans à compter du dernier contact actif avant suppression définitive.
        </li>
      </ul>

      <h3>B. Données géographiques et traces d&apos;exploration</h3>
      <ul>
        <li>
          <strong>Données collectées :</strong> Fichiers de traces (GPX, KML), coordonnées GPS de waypoints, profils altimétriques, variantes de parcours et métadonnées associées générées lors de vos calculs (moteur Climb-Seeker, analyse LiDAR 20 cm).
        </li>
        <li>
          <strong>Finalité :</strong> Rendu visuel 3D du relief, calcul de la colorimétrie des pentes, simulation d&apos;ensoleillement et sauvegarde de vos itinéraires.
        </li>
        <li>
          <strong>Base légale :</strong> Exécution du contrat (Article 6.1.b du RGPD).
        </li>
        <li>
          <strong>Durée de conservation :</strong> Conservées jusqu&apos;à suppression volontaire par l&apos;utilisateur depuis son espace personnel ou suppression du compte.
        </li>
      </ul>

      <h3>C. Données techniques et télémétrie de navigation</h3>
      <ul>
        <li>
          <strong>Données collectées :</strong> Adresse IP (tronquée / anonymisée), caractéristiques du navigateur, configuration matérielle d&apos;accélération graphique (GPU / WebGL / WebGPU pour le rendu volumique), horodatage des requêtes de dalles topographiques.
        </li>
        <li>
          <strong>Finalité :</strong> Optimisation de la fluidité d&apos;affichage du relief 3D, équilibrage de charge des serveurs et sécurisation contre les attaques par déni de service.
        </li>
        <li>
          <strong>Base légale :</strong> Intérêt légitime de l&apos;éditeur à assurer la sécurité et la performance de son infrastructure (Article 6.1.f du RGPD) et obligation légale de conservation des logs de connexion (LCEN).
        </li>
        <li>
          <strong>Durée de conservation :</strong> 12 mois maximum conformément aux exigences légales françaises de conservation des logs de connexion.
        </li>
      </ul>

      <h3>D. Données de facturation et de paiement</h3>
      <ul>
        <li>
          <strong>Données collectées :</strong> Identifiant client Stripe, historique des contributions ou souscriptions (Pass Fondateur, dons Mécène), 4 derniers chiffres et date d&apos;expiration de la carte bancaire. <em>(L&apos;intégralité de vos numéros de carte bancaire est traitée directement par notre prestataire certifié PCI-DSS Stripe ; RedView n&apos;a jamais accès à votre numéro de carte complet ni à votre cryptogramme).</em>
        </li>
        <li>
          <strong>Finalité :</strong> Gestion des paiements sécurisés, émission des factures, respect des obligations comptables et fiscales.
        </li>
        <li>
          <strong>Base légale :</strong> Exécution du contrat et respect d&apos;une obligation légale (Article 6.1.c du RGPD).
        </li>
        <li>
          <strong>Durée de conservation :</strong> 10 ans à compter de la clôture de l&apos;exercice comptable concerné, en application de l&apos;article L. 123-22 du Code de commerce.
        </li>
      </ul>

      <h2>3. Propriété exclusive de vos traces et absence de revente</h2>
      <p>
        <strong>Vous demeurez le propriétaire exclusif de l&apos;intégralité de vos traces GPS, parcours et annotations géographiques.</strong>
      </p>
      <p>
        RedView ne revend, ne loue et ne monétise en aucun cas vos données personnelles ou vos fichiers géographiques auprès de tiers, de courtiers en données (data brokers) ou de régies publicitaires. Vos traces restent strictement privées au sein de votre espace, sauf action volontaire de partage public via un lien généré par vos soins.
      </p>

      <h2>4. Destinataires des données et sous-traitants</h2>
      <p>
        Dans le strict cadre de la fourniture du Service, vos données peuvent être transmises aux sous-traitants techniques suivants, tous engagés à respecter le RGPD :
      </p>
      <ul>
        <li>
          <strong>Stripe, Inc. :</strong> Prestataire de paiement en ligne certifié PCI-DSS Tier 1 (gestion des souscriptions et facturation sécurisée).
        </li>
        <li>
          <strong>Cloudflare, Inc. :</strong> Réseau de diffusion de contenu (CDN), pare-feu applicatif (WAF) et protection contre les cyberattaques.
        </li>
        <li>
          <strong>Oracle Cloud Infrastructure (OCI - Oracle Corporation) :</strong> Hébergement des serveurs applicatifs, du moteur de simulation 3D et des bases de données géospatiales en Union Européenne.
        </li>
        <li>
          <strong>Resend :</strong> Service d&apos;expédition sécurisée des emails transactionnels (confirmations de compte, réinitialisation de mot de passe, alertes).
        </li>
        <li>
          <strong>IGN (Institut National de l&apos;Information Géographique et Forestière) :</strong> Fourniture des flux ouverts d&apos;élévation LiDAR HD (sans transmission de vos données personnelles).
        </li>
      </ul>

      <h3>Transferts de données hors de l&apos;Union Européenne</h3>
      <p>
        Lorsque certains de nos prestataires techniques disposent de serveurs situés en dehors de l&apos;Union Européenne, les flux de données sont rigoureusement encadrés par les <strong>Clauses Contractuelles Types (CCT)</strong> adoptées par la Commission européenne ou par le cadre de protection des données UE-États-Unis (Data Privacy Framework), assurant un niveau de protection substantiellement équivalent à celui garanti au sein de l&apos;UE.
      </p>

      <h2>5. Cookies et gestion des traceurs</h2>
      <p>
        RedView respecte scrupuleusement les recommandations de la CNIL concernant les cookies :
      </p>
      <ul>
        <li>
          Nous utilisons des cookies techniques indispensables à votre session, à la sécurité et à la mémorisation de vos réglages 3D.
        </li>
        <li>
          Refuser les cookies non essentiels est aussi facile que de les accepter, en 1 clic dès notre bandeau d&apos;accueil.
        </li>
        <li>
          Pour connaître l&apos;inventaire détaillé de nos cookies et modifier vos préférences à tout instant, consultez notre{' '}
          <LocalizedLink href="/cookie-policy">Politique de Cookies</LocalizedLink>.
        </li>
      </ul>

      <h2>6. Vos droits au titre du RGPD</h2>
      <p>
        Conformément aux articles 15 à 22 du RGPD, vous disposez des droits suivants sur vos données personnelles :
      </p>
      <ul>
        <li>
          <strong>Droit d&apos;accès :</strong> Vous pouvez demander confirmation du traitement de vos données et en obtenir une copie intégrale.
        </li>
        <li>
          <strong>Droit de rectification :</strong> Vous pouvez corriger à tout moment les données inexactes ou incomplètes.
        </li>
        <li>
          <strong>Droit à l&apos;effacement (« Droit à l&apos;oubli ») :</strong> Vous pouvez exiger la suppression définitive de votre compte et de toutes les traces associées.
        </li>
        <li>
          <strong>Droit à la limitation du traitement :</strong> Vous pouvez demander le gel temporaire de l&apos;utilisation de certaines données.
        </li>
        <li>
          <strong>Droit d&apos;opposition :</strong> Vous pouvez vous opposer à tout moment, pour des motifs légitimes, au traitement de vos données.
        </li>
        <li>
          <strong>Droit à la portabilité :</strong> Vous pouvez récupérer vos données et traces d&apos;exploration dans un format lisible par machine (GPX, JSON) pour les transférer vers un autre service.
        </li>
        <li>
          <strong>Directives post-mortem :</strong> Conformément à l&apos;article 85 de la loi Informatique et Libertés, vous avez le droit de définir des directives relatives à la conservation, à l&apos;effacement et à la communication de vos données après votre décès.
        </li>
      </ul>

      <p>
        Pour exercer l&apos;un quelconque de ces droits, il vous suffit d&apos;envoyer une demande par email à{' '}
        <a href="mailto:redview.app@proton.me">redview.app@proton.me</a> en précisant l&apos;objet de votre démarche. Une réponse vous sera apportée sous 30 jours maximum.
      </p>

      <h2>7. Droit de réclamation auprès de la CNIL</h2>
      <p>
        Si vous estimez, après nous avoir contactés, que vos droits ne sont pas respectés ou que le traitement de vos données n&apos;est pas conforme aux règles de protection des données, vous avez le droit d&apos;introduire une réclamation (plainte) auprès de l&apos;autorité de contrôle française compétente :
      </p>
      <ul>
        <li>
          <strong>Commission Nationale de l&apos;Informatique et des Libertés (CNIL)</strong><br />
          3 Place de Fontenoy – TSA 80715 – 75334 PARIS CEDEX 07<br />
          Téléphone : 01 53 73 22 22<br />
          Site web officiel :{' '}
          <a href="https://www.cnil.fr/fr/plaintes" rel="noopener noreferrer" target="_blank">
            https://www.cnil.fr/fr/plaintes
          </a>
        </li>
      </ul>

      <h2>8. Sécurité et intégrité de l&apos;infrastructure</h2>
      <p>
        Nous mettons en œuvre des mesures organisationnelles et techniques de pointe pour prémunir vos données contre toute destruction accidentelle, altération ou divulgation non autorisée :
      </p>
      <ul>
        <li>Chiffrement systématique des transferts de données en transit via les protocoles HTTPS / TLS 1.3 ;</li>
        <li>Hachage sécurisé des mots de passe avec algorithmes de sel cryptographique ;</li>
        <li>Isolation des environnements de calcul 3D et politiques de restriction d&apos;accès au principe du moindre privilège ;</li>
        <li>Sauvegardes chiffrées régulières sur des infrastructures sécurisées basées dans l&apos;Union Européenne.</li>
      </ul>

      <h2>9. Évolution de la Politique de Confidentialité</h2>
      <p>
        RedView se réserve le droit d&apos;actualiser la présente politique afin de refléter les évolutions de nos fonctionnalités ou des exigences réglementaires. En cas de modification substantielle, une notification sera affichée sur la plateforme ou adressée par email avant son entrée en vigueur.
      </p>

      <h2>10. Contact</h2>
      <p>
        Pour toute question ou demande de renseignement concernant la présente Politique de Confidentialité, vous pouvez contacter notre référent vie privée à :{' '}
        <a href="mailto:redview.app@proton.me">redview.app@proton.me</a>.
      </p>
    </>
  );
}
