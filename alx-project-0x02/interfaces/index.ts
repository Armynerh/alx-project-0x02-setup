export interface CardProps {
  title: string;
  content: string;
}

export interface PostModalProps {
  onClose: () => void;
  onSubmit: (post: {title: string; content: string}) => void;
}
export interface Post {
  title: string;
  content: string;
}