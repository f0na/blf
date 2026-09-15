export interface ArticleList {
    id: string
    title: string
    slug: string
    synopsis: string
    cover?: string
    likes?: number
    views?: number
    tags: string[]
    create_at: number
    update_at?: number
}
