export interface PostDetailsProps {
  title: string;
  comments: string;
  createdAt: string;
  githubUsername: string;
  url: string;
  body: string;
}

export type PartialPostDetailsProps = Partial<PostDetailsProps> & { showFullContent?: boolean; };

export interface PostDetailsDevToProps {
  title: string;
  description: string;
  tags: string[];  
}

export interface IPostDetails extends PostDetailsProps {
  showFullContent?: boolean;  
}