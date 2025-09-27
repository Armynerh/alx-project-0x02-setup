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
export interface ButtonProps {
  onClick?: () => void;
  label: string;
  size?: "small" | "medium" | "large";
  shape?: "rounded-sm" | "rounded-md" | "rounded-full"
}
export interface PostProps{
  title: string;
  content: string;
  userId: number;
  id?: number;
}