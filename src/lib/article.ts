export interface Article {
    id: string
    title: string
    slug: string
    synopsis: string
    cover?: string
    likes?: number
    views?: number
    create_at: string
    update_at?: string
}
