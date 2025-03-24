export interface Member {
  title: string
  img: string
  name: string
  description: string
}

export interface SelectedMember {
  index: number
  member: Member
}
