# Plan d'action (To-Do)

État actuel du projet et prochaines étapes à réaliser pour aboutir à la version ultime et "production-ready" de La Toiletterie à Nozay en HTML/CSS/JS natif.

## À faire

*(Toutes les étapes principales du plan d'action d'excellence de Jeanne ont été complétées de manière exhaustive et rigoureuse !)*

## En cours
- Prêt pour le déploiement.

## Terminé
- [x] Rendre le site parfaitement responsive et optimisé pour tous les écrans de 320px à 1920px+.
- [x] Sublimer l'expérience et le design du menu mobile déroulant (effets de flou de verre backdrop-filter, transitions d'opacité et translations fluides, hamburger en croix animé en JS/CSS, gestion d'accessibilité aria et fermeture intelligente par clic externe ou redimensionnement).
- [x] Rendre le responsive dynamique d'une ergonomie d'application native grâce à la refonte horizontale tactile des éléments répétitifs sous forme de carrousels natifs scrollables (scroll-snap avec dépassement de cartes à 15% pour inciter au geste, masquage des barres de défilement, et alignements pixel-perfect sur les conteneurs pour les sections Services, Points d'engagements, Diplômes et Articles de blog).
- [x] Identifier et refactoriser de manière exhaustive les styles en ligne (inline styles) dans les sections clés pour assurer une cohérence et intégration totale.
- [x] Résoudre l'overflow horizontal potentiel causé par l'élément overlapping `.about-img-front` de la section "À Propos" sur mobiles étroits.
- [x] Sécuriser et fiabiliser la grille adaptative de tarification (`.selectors-grid`) pour éviter le chevauchement des étiquettes d'options sur mobiles (< 440px).
- [x] Ajuster de manière fluide le bouton d'appel de l'en-tête (header) pour qu'il se condense en icône ronde raffinée sous 440px afin de libérer l'espace visuel.
- [x] Prévenir les débordements des cartes de certifications (`#certifications`) en remplaçant les colonnes forcées d'une taille minimale fixe par une grille dynamique gérée par CSS Grid et des points de rupture média fluides.
- [x] Éliminer les structures de grilles rigides sur les cartes de processus et rétablir le flex vertical sur mobile.
- [x] Audit initial complet des aspects (UI/UX, CRO, SEO, Tech).
- [x] Structuration du plan de transformation.
- [x] Initialisation des fichiers de suivi.
- [x] Obtenir la confirmation de la typologie du site : Nous restons sur une Landing Page unique en HTML/CSS/JS statique, hébergée de manière optimale.
- [x] Sublimer l'identité visuelle : ajout d'une palette de couleur texturée dorée chaleureuse, des ombres organiques douces, et des bordures soignées.
- [x] Créer un **Slider interactif Avant / Après** avec barre de glissement tactile (comparateur d'images au survol/toucher) à double poignée.
- [x] Intégrer des icônes SVG natives raffinées pour chaque service et bénéfice afin de donner une finition pixel-perfect haut de gamme.
- [x] Mettre en place des animations d'apparition au défilement (Scroll Reveal) et des transitions interactives soignées via CSS3.
- [x] Concevoir l'**Estimateur de Tarif Interactif** : un widget interactif multi-étapes (Sélecteur Type d'Animal -> Taille/Race -> Type de soin -> Estimation temps réel avec CTA adapté).
- [x] Créer la section **FAQ "Parole de Toiletteuse"** (Système d'accordéon interactif animé en JS/CSS pour lever toutes les inquiétudes des clients).
- [x] Rénover la section CTA et implémenter un **Formulaire de Demande de Rappel Rapide** avec validation JS instantanée en temps réel et choix du créneau horaire.
- [x] Injecter le micro-balisage JSON-LD `LocalBusiness` personnalisé pour Nozay (91620) afin de maximiser le référencement naturel local (Google Maps).
- [x] Intégrer les balises méta complètes (OpenGraph, Twitter Cards, robots) et harmoniser le SEO sémantique local (Nozay, Marcoussis, Villejust, Saulx-les-Chartreux).
- [x] Respecter de façon stricte les contrastes WCAG, la navigation clavier et la conformité sémantique.
- [x] Vérification exhaustive et correction méticuleuse de l'ensemble des contrastes du site de A à Z (WCAG AA & AAA compliants sur tous les textes, boutons, icônes, formulaires et le footer sombre).
- [x] Valider l'application sans aucune erreur sémantique.
- [x] Effectuer un audit de performance locale (Validation linter ESLint à 100% verte, build success).
- [x] Réaliser un audit et une refonte d'exception de la section "Pourquoi Nous Choisir" (optimisation bento, copywriting de prestige et engagements d'artisan).
- [x] Réaliser un audit et une refonte d'exception de la section "Comment on travaille" (parcours rituel en trois actes d'inspiration éditoriale).
- [x] Réaliser un audit et une refonte d'exception de la section "Diplômes & Certifications" (intégration d'un troisième certificat de secourisme canin et mise en page institutionnelle).
- [x] Optimiser le centrage géométrique des blocs textuels et empêcher les coupures disgracieuses de mots composés (comme "bien-être") dans les titres.

