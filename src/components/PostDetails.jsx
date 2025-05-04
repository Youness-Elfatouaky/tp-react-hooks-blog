import React, { useMemo } from 'react';

// TODO: Exercice 3 - Importer useTheme
import { useTheme } from '../context/ThemeContext';
/**
 * Composant d'affichage détaillé d'un post
 * @param {Object} props - Propriétés du composant
 * @param {Object} props.post - Le post à afficher
 * @param {Function} props.onClose - Fonction pour fermer les détails
 * @param {Function} props.onTagClick - Fonction appelée lors du clic sur un tag
 */
function PostDetails({ post, onClose, onTagClick }) {
  // TODO: Exercice 3 - Utiliser le hook useTheme
  const { isDark } = useTheme();
  // TODO: Exercice 3 - Utiliser useMemo pour calculer les classes CSS
  const themeClasses = useMemo(() => ({
    card: isDark ? 'bg-dark text-white' : '',
    badge: isDark ? 'bg-secondary' : 'bg-primary',
    button: isDark ? 'btn-light' : 'btn-dark'
  }), [isDark]);

  
  if (!post) return null;
  
  return (
    <div className={`card mb-4 ${themeClasses.card}`}>
      <div className="card-header d-flex justify-content-between align-items-center">
        <h5 className="card-title mb-0">{post.title}</h5>
        <button 
          className={`btn btn-sm ${themeClasses.button}`}
          onClick={onClose}
          aria-label="Fermer"
        >
          <i className="bi bi-x-lg"></i>
        </button>
      </div>
      
      <div className="card-body">
        {/* TODO: Exercice 4 - Afficher le contenu du post */}
        <p className="card-text">{post.body}</p>
        
        {/* TODO: Exercice 4 - Afficher les réactions et l'utilisateur */}
        
        <div className="d-flex justify-content-between align-items-center mt-3">
          <div className="d-flex align-items-center gap-2">
            <span className="badge bg-success">
              👍 {post.reactions?.likes ?? 0}
            </span>
            <span className="badge bg-danger">
              👎 {post.reactions?.dislikes ?? 0}
            </span>
          </div>
          <div className="card-text">
            <i className="bi bi-person-circle me-1"></i>
            Utilisateur: {post.userId}
          </div>
        </div>
        
        {/* TODO: Exercice 4 - Afficher les tags */}
        <div className="mt-3">
        {post.tags?.map((tag) => (
          <span
            key={tag}
            className={`badge me-2 ${themeClasses.badge}`}
            style={{ cursor: 'pointer' }}
            onClick={() => onTagClick(tag)}
          >
            #{tag}
          </span>
        ))}
      </div>
      </div>
    </div>
  );
}

// TODO: Exercice 3 - Utiliser React.memo pour optimiser les rendus
export default React.memo(PostDetails);