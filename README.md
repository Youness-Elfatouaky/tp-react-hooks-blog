# TP React Hooks - Application de Blog

Ce TP a pour objectif de mettre en pratique l'utilisation des Hooks React (useState, useEffect, useCallback, useMemo) ainsi que la création de Hooks personnalisés à travers une application de blog simple.

## Installation 

1. Cloner le dépôt :
```bash
git clone https://github.com/Youness-Elfatouaky/tp-react-hooks-blog.git
cd tp-react-hooks-blog
```
2. Installer les dépendances :
```bash
npm install
```
3. Lancer l'application :
```bash
npm start
```



### Exercice 1 : État et Effets 

Pour cet exercice, j'ai complété le hook `usePosts` pour récupérer les posts depuis l'API dummyjson.com.

- J'ai utilisé `useState` pour stocker les posts et `useEffect` pour les charger.
- J'ai créé le composant `PostList` pour afficher les posts.
- La recherche est gérée dans `PostSearch` : le hook reconstruit l'URL de l'API avec `/posts/search?q={terme}` et renvoie les posts filtrés par titre ou contenu.
- J'ai ajouté un état `loading` et `error` pour gérer le chargement.

**Difficulté rencontrée :**  
Le `searchTerm` n'était pas passé correctement au hook.  
J'ai corrigé en passant `{searchTerm: searchTerm}` à `usePosts()`.

**Captures d'écran :** 

- Capture de l'affichage des posts
  
  ![bolgs lisst](https://github.com/user-attachments/assets/e4cd226b-762f-49c3-8e9b-e8c9166133b3)

- Capture de la barre de recherche fonctionnelle
  
  ![blog search](https://github.com/user-attachments/assets/20762765-9159-409c-a2b9-6f2f206507fe)


### Exercice 2 : Hooks Personnalisés
#### Objectif : Créer des hooks réutilisables

- [ ] 2.1 Créer le hook `useDebounce` pour optimiser la recherche
- [ ] 2.2 Créer le hook `useLocalStorage` pour persister les préférences utilisateur
- [ ] 2.3 Utiliser ces hooks dans l'application
- [ ] 2.4 Documenter votre solution ici

2.1 - J'ai créé le hook `useDebounce` qui utilise un délai de 500ms pour éviter d'appeler l'API à chaque frappe dans le champ de recherche. 
Il est utilisé dans le hook `usePosts` pour limiter les requêtes inutiles.

2.2 - J'ai créé le hook `useLocalStorage` qui permet de sauvegarder une valeur dans le localStorage.
Il est utilisé dans `App.jsx` pour mémoriser le mode de défilement choisi par l’utilisateur.

2.3 - Les deux hooks sont utilisés dans l'application :
- `useDebounce` : dans `usePosts.js`, pour attendre que l’utilisateur ait fini de taper avant de déclencher la recherche.
- `useLocalStorage` : dans `App.jsx`, pour enregistrer la préférence de scroll (préparation à l'exercice 4) et dans `ThemeContext.js` (préparation exercice 3).

**Difficulté rencontrée :**  
Le challenge principal a été de bien synchroniser `useDebounce` avec la logique de fetch. J'ai résolu cela avec un `useEffect` propre et bien isolé.

### Exercice 3 : Optimisation et Context
#### Objectif : Gérer le thème global et optimiser les rendus

- [ ] 3.1 Créer le `ThemeContext` pour gérer le thème clair/sombre
- [ ] 3.2 Implémenter le composant `ThemeToggle`
- [ ] 3.3 Utiliser `useCallback` et `useMemo` pour optimiser les performances
- [ ] 3.4 Documenter votre solution ici

3.1 – Création du `ThemeContext`
Un `ThemeContext` a été créé pour gérer le thème clair ou sombre globalement.
Il contient :

- un état ``isDark`` (booléen),

- une fonction ``toggleTheme`` pour changer le thème,

- le tout exposé via un ``ThemeProvider`` autour de l’app.

3.2 – Composant `ThemeToggle`
Un composant simple (`ThemeToggle`) permet à l’utilisateur de changer dynamiquement le thème. Il utilise le contexte via `useTheme()` pour accéder à `isDark` et `toggleTheme`.

3.3 – Optimisation des performances
Utilisation de `useCallback` :

Pour éviter que les fonctions de gestion comme `onPostClick`, `onTagClick`, `onSearch`, etc., soient recréées à chaque rendu.

Utilisation de `useMemo` :

Pour calculer les tags uniques à partir des posts si nécessaire (prévu dans Exercice 4).

Pour éviter des recalculs inutiles si les dépendances ne changent pas.

`React.memo` a été appliqué aux composants :

`PostList`

`PostSearch`

Cela permet de mémoriser les rendus de ces composants lorsqu’aucune prop pertinente ne change.

**Captures d'écran :** 
- Blog page avec le bouton ThemeToggle visible
![blog normale](https://github.com/user-attachments/assets/a6dd3b3a-7047-4845-b7e4-cf1dc704dd38)

- Blog page en mode sombre (dark mode)
![blog dark](https://github.com/user-attachments/assets/989c950b-13c2-441f-9d34-de6c0a7e51c4)

- Champ de recherche optimisé (déclenche la recherche avec un debounce)
![search](https://github.com/user-attachments/assets/b1fbaa8f-dc38-449c-8751-5391661f7194)

- Le spinner s’adapte au thème sombre avec une couleur claire
![spiner white](https://github.com/user-attachments/assets/5e427f46-4aff-4cac-812d-0035fec32a8d)

### Exercice 4 : Fonctionnalités avancées
#### Objectif : Ajouter des fonctionnalités de chargement et détail

- [ ] 4.1 Implémenter le chargement infini des posts avec `useIntersectionObserver`
- [ ] 4.2 Créer le composant `PostDetails` pour afficher les détails d'un post
- [ ] 4.3 Ajouter la fonctionnalité de filtrage par tags
- [ ] 4.4 Documenter votre solution ici

_Votre réponse pour l'exercice 4 :_
```
Expliquez votre solution ici
[Ajoutez vos captures d'écran]
```



## Ressources utiles

- Documentation de l'API: [https://dummyjson.com/docs/posts](https://dummyjson.com/docs/posts)
- Documentation React Hooks: [https://fr.reactjs.org/docs/hooks-intro.html](https://fr.reactjs.org/docs/hooks-intro.html)
- Guide sur les hooks personnalisés: [https://fr.reactjs.org/docs/hooks-custom.html](https://fr.reactjs.org/docs/hooks-custom.html)

