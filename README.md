# Application Angular - Composants de Démonstration

Ce projet Angular présente deux composants éducatifs créés pour démontrer les concepts fondamentaux d'Angular, notamment l'interpolation et la logique métier dans les composants.

## 📋 Vue d'ensemble

L'application contient deux composants principaux :
- **Composant Profil** : Démonstration de l'interpolation Angular
- **Composant IMC** : Calculateur d'Indice de Masse Corporelle

## 🚀 Démarrage rapide

### Prérequis
- Node.js (version 18 ou supérieure)
- Angular CLI (version 20.3.8)

### Installation et lancement
```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
ng serve
# ou
npm start
```

L'application sera accessible sur `http://localhost:4200/`

## 🏗️ Architecture du projet

```
src/app/
├── app.ts                    # Composant racine avec navigation
├── app.html                  # Template principal avec navigation
├── app.css                   # Styles globaux de navigation
├── app.routes.ts            # Configuration du routage
├── profile/                 # Composant Profil
│   ├── profile.component.ts
│   ├── profile.component.html
│   └── profile.component.css
└── imc/                     # Composant IMC
    ├── imc.component.ts
    ├── imc.component.html
    └── imc.component.css
```

## 👤 Composant Profil

### Objectif pédagogique
Ce composant démontre l'**interpolation Angular** avec des exemples pratiques d'affichage de données dynamiques.

### Fonctionnalités
- **Saisie interactive** : Champs pour nom et prénom avec mise à jour en temps réel
- **Interpolation de base** : Affichage des propriétés du composant
- **Expressions conditionnelles** : Utilisation d'opérateurs ternaires dans les templates
- **Méthodes du composant** : Appel de fonctions depuis le template

### Code clé

#### Template (profile.component.html)
```html
<!-- Interpolation simple -->
<p><strong>Nom:</strong> {{nom || 'Non renseigné'}}</p>
<p><strong>Prénom:</strong> {{prenom || 'Non renseigné'}}</p>

<!-- Interpolation avec propriétés calculées -->
<p><strong>Nom complet:</strong> {{fullName || 'Aucun nom saisi'}}</p>
<p><strong>Salutation:</strong> {{greeting || 'Veuillez saisir vos informations'}}</p>
```

#### Logique (profile.component.ts)
```typescript
export class ProfileComponent {
  nom = "";
  prenom = "";
  fullName = "";
  greeting = "";

  updateProfile() {
    this.fullName = `${this.prenom} ${this.nom}`;
    this.greeting = this.fullName ? `Bonjour, ${this.fullName}!` : "";
  }
}
```

### Concepts Angular démontrés
- **Interpolation** : `{{ expression }}`
- **Two-way binding** : `[(ngModel)]`
- **Event binding** : `(input)="updateProfile()"`
- **Expressions conditionnelles** : `{{nom || 'Valeur par défaut'}}`

## 🧮 Composant IMC (Indice de Masse Corporelle)

### Objectif pédagogique
Ce composant illustre la **logique métier** dans Angular avec validation, calculs et gestion d'états.

### Fonctionnalités
- **Calcul d'IMC** : Formule mathématique `poids / (taille²)`
- **Validation des données** : Vérification des valeurs positives
- **Gestion d'erreurs** : Affichage de messages d'erreur appropriés
- **Interprétation des résultats** : Classification selon les standards médicaux
- **Interface utilisateur réactive** : Mise à jour conditionnelle de l'affichage

### Logique de calcul

```typescript
calculerIMC() {
  if (this.taille <= 0 || this.poids <= 0) {
    this.errormessage = "La taille et le poids doit être un nombre positif";
    return;
  } 
  
  this.errormessage = ""; // Réinitialiser les erreurs
  this.imc = parseFloat((this.poids / (this.taille * this.taille)).toFixed(2));

  // Classification de l'IMC
  if (this.imc < 18.5) {
    this.interpretation = "Vous êtes en insuffisance pondérale";
  } else if (this.imc >= 18.5 && this.imc < 24.9) {
    this.interpretation = "Vous avez un poids normal";
  } else if (this.imc >= 25 && this.imc < 29.9) {
    this.interpretation = "Vous êtes en surpoids";
  } else {
    this.interpretation = "Vous êtes en obésité modérée";
  }
}
```

### Template avec nouvelle syntaxe Angular

Le composant utilise la **nouvelle syntaxe de contrôle de flux** d'Angular 17+ :

```html
<!-- Nouvelle syntaxe @if au lieu de *ngIf -->
@if (errormessage) {
  <p class="error-message">{{errormessage}}</p>
}
@if (imc && !errormessage) {
  <p class="imc-result">Votre IMC est : {{imc}}</p>
}
@if (interpretation && !errormessage) {
  <p class="interpretation">{{interpretation}}</p>
}
```

### Classifications IMC
| Valeur IMC | Interprétation |
|------------|----------------|
| < 18.5 | Insuffisance pondérale |
| 18.5 - 24.9 | Poids normal |
| 25 - 29.9 | Surpoids |
| ≥ 30 | Obésité modérée |

## 🧭 Configuration du routage

### Routes définies
```typescript
export const routes: Routes = [
  { path: '', redirectTo: '/profile', pathMatch: 'full' },
  { path: 'profile', component: ProfileComponent },
  { path: 'imc', component: ImcComponent }
];
```

### Navigation
- **Route par défaut** : `/profile` (Composant Profil)
- **Navigation interactive** : Liens dans la barre de navigation
- **Indication visuelle** : Surlignage de la route active

## 🎨 Caractéristiques techniques

### Composants autonomes (Standalone Components)
- **Pas de modules** : Utilisation de la nouvelle architecture standalone
- **Imports directs** : `FormsModule`, `CommonModule`, `RouterLink`
- **Simplicité** : Réduction du code boilerplate

### Nouvelle syntaxe Angular 17+
- **Contrôle de flux** : `@if`, `@for`, `@switch` au lieu des directives structurelles
- **Performance améliorée** : Compilation plus efficace
- **Type safety** : Meilleure intégration TypeScript

### Responsive Design
- **CSS moderne** : Utilisation de Flexbox et Grid
- **Adaptabilité mobile** : Media queries pour écrans petits
- **Interface intuitive** : Styles cohérents et professionnels

## 📚 Concepts Angular couverts

### Basiques
- ✅ **Interpolation** (`{{ }}`)
- ✅ **Property binding** (`[property]`)
- ✅ **Event binding** (`(event)`)
- ✅ **Two-way binding** (`[(ngModel)]`)

### Avancés
- ✅ **Routage** avec RouterModule
- ✅ **Composants standalone**
- ✅ **Nouvelle syntaxe de contrôle** (`@if`, `@for`, `@switch`)
- ✅ **Validation de formulaires**
- ✅ **Gestion d'états locaux**

## 🛠️ Commandes utiles

```bash
# Développement
ng serve                    # Lancer le serveur de dev
ng build                    # Construire pour la production
ng test                     # Exécuter les tests unitaires

# Génération de code
ng generate component nom   # Créer un nouveau composant
ng generate service nom     # Créer un nouveau service
ng generate pipe nom        # Créer un nouveau pipe
```

## 📖 Ressources d'apprentissage

- [Documentation officielle Angular](https://angular.dev)
- [Guide sur l'interpolation](https://angular.dev/guide/interpolation)
- [Nouvelle syntaxe de contrôle](https://angular.dev/guide/control-flow)
- [Composants standalone](https://angular.dev/guide/standalone-components)

---

**Projet créé à des fins pédagogiques pour l'apprentissage d'Angular** 🎓
