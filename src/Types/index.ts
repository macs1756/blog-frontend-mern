
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
  title: string
  description: string
  image: string
}

export interface IinitialStatePost {
  posts: Ipost[]
  popularPosts: []
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