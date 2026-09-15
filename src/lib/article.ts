export interface ArticleList {
    id: string
    title: string
    slug: string
    synopsis: string
    cover?: string
    likes?: number
    views?: number
    tags: string[]
    create_at: string
    update_at?: string
}
