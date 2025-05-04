import React, { useEffect, useCallback } from 'react';
// TODO: Exercice 3 - Importer useTheme
import { useTheme } from '../context/ThemeContext';
// TODO: Exercice 4 - Importer useIntersectionObserver
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import LoadingSpinner from './LoadingSpinner';

/**
 * Composant d'affichage de la liste des posts
 * @param {Object} props - Propriétés du composant
 * @param {Array} props.posts - Liste des posts à afficher
 * @param {boolean} props.loading - Indicateur de chargement
 * @param {boolean} props.hasMore - Indique s'il y a plus de posts à charger
 * @param {Function} props.onLoadMore - Fonction pour charger plus de posts
 * @param {Function} props.onPostClick - Fonction appelée au clic sur un post
 * @param {Function} props.onTagClick - Fonction appelée au clic sur un tag
 * @param {boolean} props.infiniteScroll - Mode de défilement infini activé ou non
 */
function PostList({
  posts = [],
  loading = false,
  hasMore = true,
  onLoadMore,
  onPostClick,
  onTagClick,
  infiniteScroll = true
}) {
  // TODO: Exercice 3 - Utiliser le hook useTheme
  const { isDark } = useTheme();

  // TODO: Exercice 4 - Utiliser useIntersectionObserver pour le défilement infini
  const [loadMoreRef, isVisible] = useIntersectionObserver({
    enabled: infiniteScroll && hasMore,
    threshold: 1.0
  });
  useEffect(() => {
    if (isVisible && infiniteScroll && hasMore && !loading) {
      onLoadMore();
    }
  }, [isVisible, infiniteScroll, hasMore, loading, onLoadMore]);
  
  // TODO: Exercice 3 - Utiliser useCallback pour les gestionnaires d'événements
  const handlePostClick = (post) => {
    if (onPostClick) {
      onPostClick(post);
    }
  };

 
  
  const handleTagClick = (e, tag) => {
    e.stopPropagation(); // Éviter de déclencher le clic sur le post
    if (onTagClick) {
      onTagClick(tag);
    }
  };
  
  // TODO: Exercice 1 - Gérer le cas où il n'y a pas de posts
  if (posts.length === 0 && !loading) {
    return <div>Aucun post disponible.</div>;
  }
  
  return (
    <div className={`post-list  ${isDark ? 'bg-dark text-light' : ''}`}>
      {/* TODO: Exercice 1 - Afficher la liste des posts */}
      {posts.map((post) => (
        <div key={post.id} className={`post card mb-3`} onClick={() => handlePostClick(post)} style={{ cursor: 'pointer' }}>
          <div className={`card-body  ${isDark ? 'bg-dark text-light' : ''}`}>
            <h5 className="card-title">{post.title}</h5>
            <p className="card-text">{post.body.slice(0, 100)}...</p>
            <div className="mt-2">
              {post.tags?.map((tag) => (
                <span
                  key={tag}
                  className="badge bg-secondary me-2"
                  onClick={(e) => handleTagClick(e, tag)}
                  style={{ cursor: 'pointer' }}
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
      
      {/* Afficher le spinner de chargement */}
      {loading && <LoadingSpinner />}
      
      {/* TODO: Exercice 4 - Ajouter la référence pour le défilement infini */}
      <div ref={loadMoreRef} />
      {/* TODO: Exercice 1 - Ajouter le bouton "Charger plus" pour le mode non-infini */}
      {!infiniteScroll && hasMore && !loading && (
        <button className="btn btn-primary" onClick={onLoadMore}>
          Charger plus
        </button>
      )}
    </div>
  );
}

// TODO: Exercice 3 - Utiliser React.memo pour optimiser les rendus
export default React.memo(PostList);