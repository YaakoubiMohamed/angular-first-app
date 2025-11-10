# Exercices Angular - Formation Pratique

---

## 📝 Exercice 1 : Calculateur de Notes

### 📋 Énoncé
Créez un composant `NotesComponent` qui permet de calculer la moyenne d'un étudiant et déterminer sa mention.

### 🔧 Fonctionnalités à implémenter

#### Interface utilisateur :
1. **Champs de saisie** :
   - Nom de l'étudiant (texte)
   - Note de Mathématiques (nombre entre 0 et 20)
   - Note de Français (nombre entre 0 et 20)
   - Note d'Histoire (nombre entre 0 et 20)
   - Note de Sciences (nombre entre 0 et 20)

2. **Affichage dynamique** :
   - Nom complet de l'étudiant
   - Chaque note saisie
   - Moyenne générale (calculée automatiquement)
   - Mention obtenue
   - Nombre total de matières

#### Algorithme de calcul des mentions :
```
Moyenne ≥ 16    → "Très Bien"
Moyenne ≥ 14    → "Bien"
Moyenne ≥ 12    → "Assez Bien"
Moyenne ≥ 10    → "Passable"
Moyenne < 10    → "Insuffisant"
```

---

## 🔀 Exercice 2 : Gestionnaire de Tâches

### 📋 Énoncé
Créez un composant `TodoComponent` qui gère une liste de tâches avec différents états et priorités.

### 🔧 Fonctionnalités à implémenter

#### Modèle de données :
```typescript
interface Tache {
  id: number;
  titre: string;
  description: string;
  priorite: 'Haute' | 'Moyenne' | 'Basse';
  terminee: boolean;
  dateCreation: Date;
}
```

#### Interface utilisateur :
1. **Formulaire d'ajout** :
   - Titre de la tâche (obligatoire)
   - Description (optionnelle)
   - Sélecteur de priorité

2. **Liste des tâches** avec :
   - Affichage conditionnel selon l'état (terminée/en cours)
   - Couleur différente selon la priorité
   - Bouton pour marquer comme terminée
   - Bouton de suppression

3. **Statistiques** :
   - Nombre total de tâches
   - Nombre de tâches terminées
   - Nombre de tâches en cours
   - Pourcentage de progression

---

## 🛒 Exercice 3 : Panier d'Achat

### 📋 Énoncé
Développez un système de panier d'achat complet avec gestion des produits, quantités, remises et calculs financiers.

### 🔧 Fonctionnalités à implémenter

#### Modèles de données :
```typescript
interface Produit {
  id: number;
  nom: string;
  prix: number;
  description: string;
  stock: number;
  categorie: string;
  image?: string;
}

interface ArticlePanier {
  produit: Produit;
  quantite: number;
}

interface Coupon {
  code: string;
  pourcentageReduction: number;
  montantMinimum: number;
}
```

#### Composants à créer :
1. **ProductListComponent** - Liste des produits disponibles
2. **CartComponent** - Gestion du panier
3. **CheckoutComponent** - Récapitulatif et validation

#### Algorithmes à implémenter :

1. **Calculs financiers** :
   - Calculer le sous-total (prix × quantité)
   - Appliquer les remises selon les codes coupon
   - Calculer la TVA (20%)
   - Calculer le total final

2. **Gestion des stocks** :
   - Vérifier la disponibilité des produits
   - Mettre à jour les quantités
   - Gérer les ruptures de stock

3. **Système de coupons** :
   - "WELCOME10" : 10% si panier > 50€
   - "SAVE20" : 20% si panier > 100€
   - "STUDENT15" : 15% sans minimum