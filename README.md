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

_Votre réponse pour l'exercice 2 :_
```
Expliquez votre solution ici
[Ajoutez vos captures d'écran]
```

### Exercice 3 : Optimisation et Context
#### Objectif : Gérer le thème global et optimiser les rendus

- [ ] 3.1 Créer le `ThemeContext` pour gérer le thème clair/sombre
- [ ] 3.2 Implémenter le composant `ThemeToggle`
- [ ] 3.3 Utiliser `useCallback` et `useMemo` pour optimiser les performances
- [ ] 3.4 Documenter votre solution ici

_Votre réponse pour l'exercice 3 :_
```
Expliquez votre solution ici
[Ajoutez vos captures d'écran]
```

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

