import { useState, useEffect, useCallback, useMemo  } from 'react';
// TODO: Exercice 2 - Importer useDebounce
import useDebounce from './useDebounce';

/**
 * Hook personnalisé pour gérer les posts du blog
 * @param {Object} options - Options de configuration
 * @param {string} options.searchTerm - Terme de recherche
 * @param {string} options.tag - Tag à filtrer
 * @param {number} options.limit - Nombre d'éléments par page
 * @param {boolean} options.infinite - Mode de chargement infini vs pagination
 * @returns {Object} État et fonctions pour gérer les posts
 */
function usePosts({ searchTerm = '', tag = '', limit = 10, infinite = true } = {}) {
  // État local pour les posts
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // TODO: Exercice 1 - Ajouter les états nécessaires pour la pagination
  const [skip, setSkip] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  
  // TODO: Exercice 4 - Ajouter l'état pour le post sélectionné
  const [selectedPost, setSelectedPost] = useState(null);
  // TODO: Exercice 2 - Utiliser useDebounce pour le terme de recherche
  const debouncedSearch = useDebounce(searchTerm, 500);
  
  // TODO: Exercice 3 - Utiliser useCallback pour construire l'URL de l'API
  const buildApiUrl = useCallback((skip = 0, limit = 10) => {
    let url = `https://dummyjson.com/posts?limit=${limit}&skip=${skip}`;
    if (debouncedSearch.trim() !== '') {
      const encodedSearch = encodeURIComponent(debouncedSearch.trim());
      url = `https://dummyjson.com/posts/search?q=${encodedSearch}`;
    } else if (tag) {
      url = `https://dummyjson.com/posts/tag/${tag}?limit=${limit}&skip=${skip}`;
    }
    return url;
  }, [debouncedSearch, tag]);
  
  // TODO: Exercice 1 - Implémenter la fonction pour charger les posts
  const fetchPosts = async (reset = false) => {
    try {
      setLoading(true);
      const response = await fetch(buildApiUrl(reset ? 0 : skip, limit));
      const data = await response.json();

      if (data.posts) {
        if (reset) {
          setPosts(data.posts);
          setSkip(data.posts.length);
        } else {
          setPosts((prevPosts) => [...prevPosts, ...data.posts]);
          setSkip((prevSkip) => prevSkip + data.posts.length);
        }
        setHasMore(data.total > (reset ? data.posts.length : skip + data.posts.length));
      } else {
        setPosts([]);
        setHasMore(false);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
 
  
  // TODO: Exercice 1 - Utiliser useEffect pour charger les posts quand les filtres changent
  useEffect(() => {
    fetchPosts(true);
    setSkip(0);
  }, [searchTerm, tag]);

  
  
  // TODO: Exercice 4 - Implémenter la fonction pour charger plus de posts
   const loadMore = () => {
    if (!loading && hasMore) {
      fetchPosts(false);

    }
  };

  // TODO: Exercice 3 - Utiliser useMemo pour calculer les tags uniques
  const uniqueTags = useMemo(() => {
    const tagsSet = new Set();
    posts.forEach((post) => {
      post.tags?.forEach((t) => tagsSet.add(t));
    });
    return Array.from(tagsSet);
  }, [posts]);
  
  // TODO: Exercice 4 - Implémenter la fonction pour charger un post par son ID
  const fetchPostById = async (id) => {
    try {
      setLoading(true);
      const res = await fetch(`https://dummyjson.com/posts/${id}`);
      const data = await res.json();
      setSelectedPost(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  
  return {
    posts,
    loading,
    error,
    hasMore,
    fetchPosts,
    loadMore,
    fetchPostById,
    selectedPost,  
    setSelectedPost,    
    uniqueTags
    // Retourner les autres états et fonctions
  };
}

export default usePosts;