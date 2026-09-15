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

export interface Article {
    id: string
    title: string
    slug: string
    synopsis: string
    cover?: string
    content: string
    likes?: number
    views?: number
    tags: string[]
    create_at: number
    update_at?: number
}