<template>
  <section class="mentions">
    <h1 class="mentions__title">
      Mentions légales
    </h1>
    <p class="mentions__text">
      Merci de lire avec attention les différentes modalités d'utilisation du présent site avant de parcourir les pages. En vous naviguant sur ce site, vous acceptez, sans réserves, les présentes modalités.
      <br><br>
      Aussi, conformément à l'article n°6 de la Loi n°2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique, les responsables du présent site internet
      <nuxt-link class="mentions__text-link" to="/">
        {{ url }}
      </nuxt-link>
      sont :
    </p>
    <h2 class="mentions__subtitle">
      Éditeur du site
    </h2>
    <p class="mentions__text">
      {{ name }}
      <br>
      Numéro de SIRET : 899 458 046 00013
      <br>
      38 rue de l'Oberhart, 68000 COLMAR
      <br>
      Téléphone : 06 85 14 33 40
      <br>
      Email : <a class="mentions__text-link" href="mailto:suzanne.laclautre@gmail.com">{{ mail }}</a>
      <br>
      Site web :
      <nuxt-link class="mentions__text-link" to="/">
        {{ url }}
      </nuxt-link>
    </p>
    <h2 class="mentions__subtitle">
      Développement
    </h2>
    <p class="mentions__text">
      Jenny-Lee BOULANGER
      <br>
      Adresse : 74 rue de la Plaine des Bouchers, 67100 STRASBOURG
      <br>
      Site Web :
      <a class="mentions__text-link" href="https://jennblngr.com">
        www.jennblngr.com
      </a>
    </p>
    <h2 class="mentions__subtitle">
      Conditions d’utilisation
    </h2>
    <p class="mentions__text">
      Ce site (<nuxt-link class="mentions__text-link" to="/">{{ url }}</nuxt-link>) est proposé en différents langages web (HTML, HTML5, Javascript, CSS, etc…) pour un meilleur confort d’utilisation et un graphisme plus agréable.
      <br> <br>
      Nous vous recommandons de recourir à des navigateurs modernes comme Internet explorer, Safari, Firefox, Google Chrome, etc…
      <br> <br>
      Suzanne LACLAUTRE met en œuvre tous les moyens dont elle dispose, pour assurer une information fiable et une mise à jour fiable de ses sites internet.
      <br> <br>
      Toutefois, des erreurs ou omissions peuvent survenir. L’internaute devra donc s’assurer de l’exactitude des informations auprès de Suzanne LACLAUTRE, et signaler toutes modifications du site qu’il jugerait utile. Suzanne LACLAUTRE n’est en aucun cas responsable de l’utilisation faite de ces informations, et de tout préjudice direct ou indirect pouvant en découler.
    </p>
    <h2 class="mentions__subtitle">
      Cookies
    </h2>
    <p class="mentions__text">
      Le site
      <nuxt-link class="mentions__text-link" to="/">
        {{ url }}
      </nuxt-link>
      peut-être amené à vous demander l’acceptation des cookies pour des besoins de statistiques et d’affichage. Un cookie est une information déposée sur votre disque dur par le serveur du site que vous visitez.
      <br> <br>
      Il contient plusieurs données qui sont stockées sur votre ordinateur dans un simple fichier texte auquel un serveur accède pour lire et enregistrer des informations. Certaines parties de ce site ne peuvent être fonctionnelles sans l’acceptation de cookies.
    </p>
    <h2 class="mentions__subtitle">
      Liens hypertextes
    </h2>
    <p class="mentions__text">
      Les sites internet ne peuvent offrir des liens vers d’autres sites internet ou d’autres ressources disponibles sur Internet. {{ name }} ne dispose d’aucun moyen pour contrôler les sites en connexion avec ses sites internet.
      <br> <br>
      Suzanne LACLAUTRE ne répond pas de la disponibilité de tels sites et sources externes, ni ne la garantit. Elle ne peut être tenue pour responsable de tout dommage, de quelque nature que ce soit, résultant du contenu de ces sites ou sources externes, et notamment des informations, produits ou services qu’ils proposent, ou de tout usage qui peut être fait de ces éléments. Les risques liés à cette utilisation incombent pleinement à l’internaute, qui doit se conformer à leurs conditions d’utilisation.
      <br> <br>
      Les utilisateurs, les abonnés et les visiteurs des sites internet  ne peuvent pas mettre en place un hyperlien en direction de ce site sans l’autorisation expresse et préalable de {{ name }}.
      <br> <br>
      Dans l’hypothèse où un utilisateur ou visiteur souhaiterait mettre en place un hyperlien en direction d’un des sites internet de {{ name }}, il lui appartiendra d’adresser un email accessible sur le site afin de formuler sa demande de mise en place d’un hyperlien.
      <br> <br>
      La {{ name }} se réserve le droit d’accepter ou de refuser un hyperlien sans avoir à en justifier sa décision.
    </p>
    <h2 class="mentions__subtitle">
      Services fournis
    </h2>
    <p class="mentions__text">
      L’ensemble des activités de la société ainsi que ses informations sont présentés sur notre site <nuxt-link class="mentions__text-link" to="/">{{ url }}</nuxt-link>.
      <br> <br>
      {{ name }} s’efforce de fournir sur le site
      <nuxt-link class="mentions__text-link" to="/">
        {{ url }}
      </nuxt-link>
      des informations aussi précises que possible. Les renseignements figurant sur le site
      <nuxt-link class="mentions__text-link" to="/">
        {{ url }}
      </nuxt-link>
      ne sont pas exhaustifs et les photos non contractuelles.
      <br> <br>
      Ils sont donnés sous réserve de modifications ayant été apportées depuis leur mise en ligne. Par ailleurs, tous les informations indiquées sur le site
      <nuxt-link class="mentions__text-link" to="/">
        {{ url }}
      </nuxt-link>
      sont données à titre indicatif, et sont susceptibles de changer ou d’évoluer sans préavis.
    </p>
    <h2 class="mentions__subtitle">
      Limitation contractuelles sur les données
    </h2>
    <p class="mentions__text">
      Les informations contenues sur ce site sont aussi précises que possible et le site remis à jour à différentes périodes de l’année, mais peut toutefois contenir des inexactitudes ou des omissions.
      <br> <br>
      Si vous constatez une lacune, erreur ou ce qui parait être un dysfonctionnement, merci de bien vouloir le signaler par courriel, à l’adresse <a class="mentions__text-link" href="mailto:suzanne.laclautre@gmail.com">{{ mail }}</a>, en décrivant le problème de la manière la plus précise possible (page posant problème, type d’ordinateur et de navigateur utilisé, etc).
      <br> <br>
      Tout contenu téléchargé se fait aux risques et périls de l’utilisateur et sous sa seule responsabilité. En conséquence, ne saurait être tenu responsable d’un quelconque dommage subi par l’ordinateur de l’utilisateur ou d’une quelconque perte de données consécutives au téléchargement.
      <br> <br>
      De plus, l’utilisateur du site s’engage à accéder au site en utilisant un matériel récent, ne contenant pas de virus et avec un navigateur de dernière génération mis-à-jour.
      <br> <br>
      Les liens hypertextes mis en place dans le cadre du présent site internet en direction d’autres ressources présentes sur le réseau Internet ne sauraient engager la responsabilité de {{ name }}.
    </p>
    <h2 class="mentions__subtitle">
      Propriété intellectuelle
    </h2>
    <p class="mentions__text">
      Tout le contenu du présent site<nuxt-link class="mentions__text-link" to="/">{{ url }}</nuxt-link>, incluant, de façon non limitative, les graphismes, images, textes, vidéos, animations, sons, logos, gifs et icônes ainsi que leur mise en forme sont la propriété exclusive de la société à l’exception des marques, logos ou contenus appartenant à d’autres sociétés partenaires ou auteurs.
      <br> <br>
      Toute reproduction, distribution, modification, adaptation, retransmission ou publication, même partielle, de ces différents éléments est strictement interdite sans l’accord exprès par écrit de {{ name }}. Cette représentation ou reproduction, par quelque procédé que ce soit, constitue une contrefaçon sanctionnée par les articles L.335-2 et suivants du Code de la propriété intellectuelle. Le non-respect de cette interdiction constitue une contrefaçon pouvant engager la responsabilité civile et pénale du contrefacteur. En outre, les propriétaires des contenus copiés pourraient intenter une action en justice à votre encontre.
    </p>
    <h2 class="mentions__subtitle">
      Déclaration à la CNIL
    </h2>
    <p class="mentions__text">
      Conformément à la loi 78-17 du 6 janvier 1978 (modifiée par la loi 2004-801 du 6 août 2004 relative à la protection des personnes physiques à l’égard des traitements de données à caractère personnel) relative à l’informatique, aux fichiers et aux libertés, ce site a fait l’objet d’une déclaration 1656629 auprès de la Commission nationale de l’informatique et des libertés (www.cnil.fr).
    </p>
    <h2 class="mentions__subtitle">
      Litiges
    </h2>
    <p class="mentions__text">
      Les présentes conditions du site
      <nuxt-link class="mentions__text-link" to="/">
        {{ url }}
      </nuxt-link>
      sont régies par les lois françaises et toute contestation ou litiges qui pourraient naître de l’interprétation ou de l’exécution de celles-ci seront de la compétence exclusive des tribunaux dont dépend le siège social de la société. La langue de référence, pour le règlement de contentieux éventuels, est le français.
    </p>
    <h2 class="mentions__subtitle">
      Données personnelles
    </h2>
    <p class="mentions__text">
      De manière générale, vous n’êtes pas tenu de nous communiquer vos données personnelles lorsque vous visitez notre site Internet <nuxt-link class="mentions__text-link" to="/">{{ url }}</nuxt-link>.
      <br> <br>
      Cependant, ce principe comporte certaines exceptions. En effet, pour certains services proposés par notre site, vous pouvez être amenés à nous communiquer certaines données telles que : votre nom, votre prénom, et votre adresse électronique. Tel est le cas lorsque vous remplissez le formulaire qui vous est proposé en ligne, dans la rubrique « contact ».
      <br> <br>
      Dans tous les cas, vous pouvez refuser de fournir vos données personnelles. Dans ce cas, vous ne pourrez pas utiliser les services du site, notamment celui de solliciter des renseignements sur notre société.
      <br> <br>
      Enfin, nous pouvons collecter de manière automatique certaines informations vous concernant lors d’une simple navigation sur notre site internet, notamment : des informations concernant l’utilisation de notre site, comme les zones que vous visitez et les services auxquels vous accédez, votre adresse IP, le type de votre navigateur, vos temps d’accès.
      <br> <br>
      De telles informations sont utilisées exclusivement à des fins de statistiques internes, de manière à améliorer la qualité des services qui vous sont proposés. Les bases de données sont protégées par les dispositions de la loi du 1er juillet 1998 transposant la directive 96/9 du 11 mars 1996 relative à la protection juridique des bases de données.
    </p>
  </section>
</template>

<script>
export default {
  name: 'MentionsPage',
  data () {
    return {
      name: 'Suzanne LACLAUTRE',
      mail: 'suzanne.laclautre@gmail.com',
      url: 'www.suzanne-laclautre.com'
    }
  }
}
</script>

<style scoped src="../../assets/styles/pages/mentions.scss" lang="scss" />

<router>
{
  path: '/mentions-legales'
}
</router>
