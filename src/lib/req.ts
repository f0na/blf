import { Article } from "./article"
import { Site, Social } from "./site"

interface ApiResp<T> {
    code: number
    msg: string
    data: T
}

interface Pager<T> {
    page: number
    page_size: number
    total: number
    arr: T[]
}

interface HomeData {
    site: Site
    social: Social
    article_list: Pager<Article>
}

interface SearchArticle {
    id: string
    title: string
    slug: string
    cover?: string
    synopsis?: string
    /// 时间戳 yyyy-MM-dd HH:mm:ss
    create_at: string
    /// 时间戳 yyyy-MM-dd HH:mm:ss
    update_at?: string
    tags: string[]
}

export type {
    ApiResp,
    Pager,
    HomeData,
    SearchArticle
}