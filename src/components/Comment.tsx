
import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";
import { Avatar } from "./Avatar";
import { useState } from "react";


interface CommentProps{
  content: string;
  onDeleteComment: (comment: string) => void ;
}


export function Comment({ content, onDeleteComment }: CommentProps) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  function handleLikeComment() {
    setLikeCount((v) => {
      return v + 1;
    });
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/MarcoBaptista.png" alt=""/>
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Marco Baptista</strong>
              <time title="03 de ago às 16:00" dateTime="2024-08-03 15:30">
                Cerca de 1h atrás
              </time>
            </div>

            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
