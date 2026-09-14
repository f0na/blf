
import { ApiResp, HomeData } from "@/lib/req";
import { Card, CardAction, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { toast } from "./ui/toast";
import { Article } from "@/lib/article";
import Empty from "./Empty";

export default async function ArticleListItem() {
    const res = await fetch("https://axum.fufu.moe/home", {
        next: {
            revalidate: 300
        },
        signal: AbortSignal.timeout(10000)
    })
    if (!res.ok)
        toast.add({
            type: "error",
            priority: "high",
            description: "Http ${res.status}"
        })
    const body: ApiResp<HomeData> = await res.json()
    if (body.code !== 0)
        toast.add({
            type: "error",
            priority: "high",
            description: "接口错误 ${body.code}: ${body.msg}"
        })

    const { arr } = body.data.article_list
    if (arr.length === 0) {
        return (
            <Empty></Empty>
        )
    }
    return (
        <div>
            {arr.map((article: Article) => (
                <Card className="w-full max-w-sm">
                    <CardHeader>
                        <CardTitle>{article.title}</CardTitle>
                        <CardDescription>{article.synopsis}</CardDescription>
                        <CardAction>
                            <span>{article.likes}</span>
                        </CardAction>
                    </CardHeader>
                </Card>
            ))}
        </div>
    )
}