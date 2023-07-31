export interface Route {
  pageName: string
  displayedName: string
  link: string
  children: Route[]
}
