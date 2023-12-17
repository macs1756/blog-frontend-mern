
export interface LayoutProps {
  children: React.ReactNode;
}

export interface InitialStateUserDetails {
  _id: string
  username: string
  password: string
  posts: string
  createdAt: string
  updatedAt: string 
  __v: number
}

export interface Ipost{
  username: string
  title: string
  description: string
  image: string
  _id: string
  views: number
  autor: string
  comments: []
  updatedAt: string
  createdAt: string
  __v: number
}

export interface IinitialStatePost {
  posts: Ipost[]
  popularPosts: Ipost[]
  isLoading: boolean
}


export interface InitialStateUser{
  user: InitialStateUserDetails  | null
  status: string | null
  isLoading: boolean
  token:  string | null
}

export interface RegisterUserPayload {
  username: string
  password: string
}

export type TcheckIsAuth = (state: {auth: InitialStateUser} ) => boolean



export interface IpostPayload{
    payload: Ipost
}

export interface IgetAllPostsPayload{
  payload: {
    posts: Ipost[],
     popularPosts: Ipost[]
  }
}


export interface IpropsComponentPost {
  e: Ipost
  type?: string
}

export interface IresponseMyPosts{
  data: {
    posts: Ipost[]
  }
}
