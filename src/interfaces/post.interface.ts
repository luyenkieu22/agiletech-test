export interface IPosts {
  id?: string;
  title: string;
  description: string;
  tags: string[];
}

export interface IAllPosts {
  posts: IPosts;
  current_page: number | undefined;
  total_page: number | undefined;
  page_size: number | undefined;
  total: number | undefined;
}

export interface IPostData {
    id?: string;
    title: string;
    description: string;
    tags: string[];
}