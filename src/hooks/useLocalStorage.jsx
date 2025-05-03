import { useState, useEffect } from 'react';

/**
 * Hook personnalisé pour gérer le stockage local
 * @param {string} key - La clé de stockage local
 * @param {any} initialValue - La valeur initiale si rien n'est trouvé dans localStorage
 * @returns {[any, function]} Valeur stockée et fonction pour la mettre à jour
 */
function useLocalStorage(key, initialValue) {
  // TODO: Exercice 2 - Implémenter le hook useLocalStorage
  // 1. Initialiser l'état avec la valeur du localStorage ou la valeur initiale
  const [value, setValue] = useState(() => {
    const saved = localStorage.getItem(key);
    return saved !== null ? JSON.parse(saved) : initialValue;
  });
  // 2. Mettre à jour localStorage quand la valeur change
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  // 3. Retourner la valeur et la fonction de mise à jour
  
  return [value, setValue];
}

export default useLocalStorage;