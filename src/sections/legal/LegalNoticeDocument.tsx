import { LocalizedLink } from '@/platform/i18n/LocalizedLink';

export function LegalNoticeDocument() {
  return (
    <>
      <p>
        <strong>Dernière mise à jour :</strong>
        {' 1er janvier 2026'}
      </p>

      <p>
        Conformément aux dispositions des articles 6-III et 19 de la Loi n° 2004-575 du 21 juin 2004 pour la Confiance dans l&apos;Économie Numérique (LCEN), modifiée par la loi visant à sécuriser et réguler l&apos;espace numérique (loi SREN), il est porté à la connaissance des utilisateurs et visiteurs de la plateforme <strong>RedView</strong> les présentes mentions légales.
      </p>

      <h2>1. Éditeur de la plateforme</h2>
      <p>
        Le site internet accessible à l&apos;adresse <strong>redview.tech</strong> (et ses sous-domaines associés) est un <strong>projet étudiant d&apos;innovation technologique</strong> dédié à la cartographie 3D et aux flux géospatiaux haute résolution.
      </p>
      <ul>
        <li>
          <strong>Dénomination du projet :</strong> RedView
        </li>
        <li>
          <strong>Nature du projet :</strong> Projet étudiant et d&apos;initiative indépendante, financé pour l&apos;instant par des dons libres et participatifs pour couvrir les coûts d&apos;hébergement et de serveurs de calcul.
        </li>
        <li>
          <strong>Statut :</strong> Structure en cours d&apos;immatriculation au Registre du Commerce et des Sociétés (RCS)
        </li>
        <li>
          <strong>Numéro SIREN / SIRET :</strong> En cours d&apos;attribution
        </li>
        <li>
          <strong>Numéro de TVA intracommunautaire :</strong> En cours d&apos;attribution
        </li>
        <li>
          <strong>Siège / Localisation :</strong> France
        </li>
        <li>
          <strong>Adresse de contact électronique :</strong>{' '}
          <a href="mailto:redview.app@proton.me">redview.app@proton.me</a>
        </li>
        <li>
          <strong>Responsable de la publication :</strong> L&apos;équipe de développement RedView
        </li>
      </ul>

      <h2>2. Hébergement de la plateforme</h2>
      <p>
        La plateforme RedView, son infrastructure applicative et ses serveurs de simulation 3D sont hébergés auprès des prestataires suivants :
      </p>

      <h3>Infrastructure Cloud, Calcul 3D & Stockage géospatial</h3>
      <ul>
        <li>
          <strong>Prestataire :</strong> Oracle Cloud Infrastructure (OCI) – Oracle Corporation
        </li>
        <li>
          <strong>Région d&apos;hébergement :</strong> Datacenters situés au sein de l&apos;Union Européenne (France / UE)
        </li>
        <li>
          <strong>Site web :</strong>{' '}
          <a href="https://www.oracle.com/cloud/" rel="noopener noreferrer" target="_blank">
            https://www.oracle.com/cloud/
          </a>
        </li>
      </ul>

      <h3>Réseau de distribution de contenu (CDN) & Sécurité Edge</h3>
      <ul>
        <li>
          <strong>Prestataire :</strong> Cloudflare, Inc.
        </li>
        <li>
          <strong>Siège social :</strong> 101 Townsend St, San Francisco, CA 94107, USA
        </li>
        <li>
          <strong>Site web :</strong>{' '}
          <a href="https://www.cloudflare.com" rel="noopener noreferrer" target="_blank">
            https://www.cloudflare.com
          </a>
        </li>
      </ul>

      <h2>3. Propriété intellectuelle et licences</h2>
      <p>
        L&apos;ensemble des éléments graphiques, textuels, algorithmiques et logiciels composant le site et la plateforme RedView (notamment le moteur de calcul Climb-Seeker, la colorimétrie des pentes, les modèles de simulation 3D du relief, la marque, les logos et la charte graphique) sont protégés par les lois françaises et internationales relatives à la propriété intellectuelle.
      </p>
      <p>
        Toute reproduction, représentation, diffusion, extraction ou exploitation totale ou partielle du Service sans autorisation écrite préalable expresse de RedView est strictement prohibée.
      </p>

      <h3>Crédits et licences des données cartographiques tierces</h3>
      <p>
        RedView intègre et valorise des jeux de données géographiques ouverts dans le strict respect de leurs licences respectives :
      </p>
      <ul>
        <li>
          <strong>LiDAR HD (résolution 20 cm) :</strong> Données altimétriques et nuages de points fournis par l&apos;Institut National de l&apos;Information Géographique et Forestière (<strong>IGN</strong>), sous <em>Licence Ouverte / Open Licence 2.0 (Etalab)</em>.
        </li>
        <li>
          <strong>Fonds de carte et réseaux routiers / sentiers :</strong> Données issues du projet collaboratif <strong>OpenStreetMap</strong> (© Les contributeurs d&apos;OpenStreetMap), exploitées sous licence <em>Open Database License (ODbL)</em>.
        </li>
        <li>
          <strong>Composants de rendu 3D et couches satellites :</strong> Technologies Three.js et flux Mapbox GL.
        </li>
      </ul>

      <h2>4. Protection des données personnelles et cookies</h2>
      <p>
        La collecte et le traitement de vos données personnelles ainsi que l&apos;utilisation des traceurs sont encadrés par nos documents dédiés :
      </p>
      <ul>
        <li>
          Consultez notre{' '}
          <LocalizedLink href="/privacy-policy">Politique de Confidentialité</LocalizedLink>{' '}
          pour connaître l&apos;ensemble de vos droits au titre du RGPD.
        </li>
        <li>
          Consultez notre{' '}
          <LocalizedLink href="/cookie-policy">Politique de Cookies</LocalizedLink>{' '}
          pour comprendre l&apos;usage de nos traceurs techniques et paramétrer vos préférences.
        </li>
        <li>
          Consultez notre{' '}
          <LocalizedLink href="/refund-policy">Politique de Remboursement & Rétractation</LocalizedLink>{' '}
          pour connaître les conditions applicables aux adhésions et dons de soutien.
        </li>
      </ul>

      <h2>5. Droit applicable et juridiction compétente</h2>
      <p>
        Les présentes mentions légales sont régies par le droit français. En cas de litige relatif à la validité, l&apos;interprétation ou l&apos;exécution du Service, les parties s&apos;engagent à privilégier une conciliation amiable. À défaut d&apos;accord, les tribunaux français compétents seront seuls habilités à trancher le différend.
      </p>

      <h2>6. Contact</h2>
      <p>
        Pour toute question ou signalement d&apos;un contenu litigieux, vous pouvez contacter l&apos;équipe RedView :
      </p>
      <ul>
        <li>
          <strong>Email :</strong>{' '}
          <a href="mailto:redview.app@proton.me">redview.app@proton.me</a>
        </li>
      </ul>
    </>
  );
}
