import { Article } from "./article";
import { AboutData, ApiResp, ArticleData, HomeData, Pager, SearchArticle } from "./req";

export async function get_home_data(): Promise<HomeData> {
    const res = await fetch("https://axum.fufu.moe/home", {
        cache: "force-cache",
        next: { revalidate: 300 },
        signal: AbortSignal.timeout(30000),
    });

    if (!res.ok) {
        throw new Error(`HTTP ${res.status}`);
    }

    const body: ApiResp<HomeData> = await res.json();

    if (body.code !== 0) {
        throw new Error(`接口错误 ${body.code}: ${body.msg}`);
    }

    return body.data;
}

export async function get_about_data(): Promise<AboutData> {
    const res = await fetch("https://axum.fufu.moe/about", {
        cache: "force-cache",
        next: { revalidate: 300 },
        signal: AbortSignal.timeout(30000),
    });

    if (!res.ok) {
        throw new Error(`HTTP ${res.status}`);
    }

    const body: ApiResp<AboutData> = await res.json();

    if (body.code !== 0) {
        throw new Error(`接口错误 ${body.code}: ${body.msg}`);
    }

    return body.data;
}

export async function search(q: string, page?: number, page_size?: number): Promise<Pager<SearchArticle>> {
    const res = await fetch(`/api/search?q=${encodeURIComponent(q)}&${page}&${page_size}`, {
        signal: AbortSignal.timeout(30000),
    });

    if (!res.ok) {
        throw new Error(`HTTP ${res.status}`);
    }

    const body: ApiResp<Pager<SearchArticle>> = await res.json();

    if (body.code !== 0) {
        throw new Error(`接口错误 ${body.code}: ${body.msg}`);
    }

    return body.data
}

export async function like_article(id: string): Promise<number | undefined> {
    const res = await fetch(`/api/articles/${encodeURIComponent(id)}/like`, {
        method: "post",
        signal: AbortSignal.timeout(30000),
    });

    if (!res.ok) {
        throw new Error(`HTTP ${res.status}`);
    }

    const body: ApiResp<Article> = await res.json();

    if (body.code !== 0) {
        throw new Error(`接口错误 ${body.code}: ${body.msg}`);
    }

    return body.data.likes
}

export async function get_article(slug: string): Promise<ArticleData> {
    const res = await fetch(`https://axum.fufu.moe/articles/slug/${encodeURIComponent(slug)}`, {
        cache: "force-cache",
        next: { revalidate: 300 },
        signal: AbortSignal.timeout(30000),
    });

    if (!res.ok) {
        throw new Error(`HTTP ${res.status}`);
    }

    const body: ApiResp<ArticleData> = await res.json();

    if (body.code !== 0) {
        throw new Error(`接口错误 ${body.code}: ${body.msg}`);
    }

    return body.data;
}