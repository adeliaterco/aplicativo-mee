import { useState, useEffect } from 'react';
import { allCommunityPosts, Post } from '@/data/community';
import { getComments, saveComment, Comment } from '@/lib/storage';
import { ChevronLeft, MessageCircle, Heart } from 'lucide-react';

const Communaute = () => {
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [newComment, setNewComment] = useState('');
  const [userComments, setUserComments] = useState<Comment[]>([]);

  useEffect(() => {
    setUserComments(getComments());
  }, []);

  const handleComment = () => {
    if (!newComment.trim() || !selectedPost) return;
    
    saveComment(selectedPost.id, newComment.trim());
    setUserComments(getComments());
    setNewComment('');
  };

  const getPostComments = (postId: string) => {
    const post = allCommunityPosts.find(p => p.id === postId);
    const postComments = post?.comments || [];
    const addedComments = userComments.filter(c => c.postId === postId);
    return [...postComments, ...addedComments];
  };

  if (selectedPost) {
    const allComments = getPostComments(selectedPost.id);
    
    return (
      <div className="page-container animate-fade-in">
        <button
          onClick={() => setSelectedPost(null)}
          className="flex items-center gap-1 text-sm text-text-secondary mb-4 -ml-1"
        >
          <ChevronLeft className="w-4 h-4" />
          Retour à la communauté
        </button>

        {/* Post */}
        <div className="card-subtle mb-6">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-9 h-9 rounded-full bg-taupe-light flex items-center justify-center">
              <span className="text-sm font-medium text-taupe">
                {selectedPost.author.charAt(0)}
              </span>
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">
                {selectedPost.author}, {selectedPost.age} ans
              </p>
              <p className="text-xs text-text-secondary">{selectedPost.date}</p>
            </div>
          </div>
          <p className="text-foreground leading-relaxed">{selectedPost.content}</p>
        </div>

        {/* Bienveillance badge */}
        <div className="flex items-center gap-2 mb-4 px-3 py-2 bg-taupe-light rounded-lg">
          <Heart className="w-4 h-4 text-taupe" />
          <span className="text-xs text-text-secondary">Merci de rester respectueuse.</span>
        </div>

        {/* Comments */}
        <div className="space-y-3 mb-6">
          <h3 className="text-sm font-medium text-foreground">
            {allComments.length} commentaire{allComments.length > 1 ? 's' : ''}
          </h3>
          {allComments.map((comment) => (
            <div key={comment.id} className="pl-4 border-l-2 border-border-subtle">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-sm font-medium text-foreground">{comment.author}</span>
                <span className="text-xs text-text-secondary">· {comment.date}</span>
              </div>
              <p className="text-sm text-text-secondary">{comment.content}</p>
            </div>
          ))}
        </div>

        {/* Add comment */}
        <div className="space-y-3">
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Écrire un commentaire…"
            className="input-field min-h-[80px] py-3 resize-none"
          />
          <button
            onClick={handleComment}
            disabled={!newComment.trim()}
            className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Publier
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="page-container animate-fade-in">
      <h1 className="text-2xl font-serif text-foreground mb-2">Communauté</h1>
      <p className="text-sm text-text-secondary mb-6">
        Un espace sûr, modéré, et sans jugement.
      </p>

      {/* Bienveillance badge */}
      <div className="flex items-center gap-2 mb-6 px-4 py-3 bg-taupe-light rounded-xl">
        <Heart className="w-5 h-5 text-taupe" />
        <span className="text-sm text-text-secondary">Bienveillance</span>
      </div>

      {/* Posts feed */}
      <div className="space-y-4">
        {allCommunityPosts.map((post) => {
          const totalComments = post.commentsCount + userComments.filter(c => c.postId === post.id).length;
          
          return (
            <button
              key={post.id}
              onClick={() => setSelectedPost(post)}
              className="card-subtle w-full text-left"
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-full bg-taupe-light flex items-center justify-center">
                  <span className="text-xs font-medium text-taupe">
                    {post.author.charAt(0)}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-foreground">
                    {post.author}, {post.age} ans
                  </p>
                </div>
                <span className="text-xs text-text-secondary">{post.date}</span>
              </div>
              
              <p className="text-sm text-text-secondary leading-relaxed line-clamp-3 mb-3">
                {post.content}
              </p>
              
              <div className="flex items-center gap-1 text-xs text-taupe">
                <MessageCircle className="w-4 h-4" />
                <span>{totalComments} commentaire{totalComments > 1 ? 's' : ''}</span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Communaute;