
export interface LayoutProps {
  children: React.ReactNode;
}

export interface InitialStateUser{
  user: string | null
  status: string | null
  isLoading: boolean
  token:  string | null
}
