'use client'

import { like_article } from "@/lib/fetch"
import { Icon } from "@iconify/react"
import { useState } from "react"
import { Button } from "./ui/button"

export default function LikeButton({ id, init_likes }: { id: string, init_likes: number }) {
    const [likes, set_likes] = useState(init_likes)

    const handle_like = async () => {
        set_likes(v => v + 1)
        const res = await like_article(id)
        if (res) set_likes(res); else set_likes(v => v - 1)
    }
    return (
        <Button
            onClick={handle_like}
            variant="ghost"
            size="icon"
            className="flex gap-1 items-center"
        >
            <Icon icon="bxs:like" className="inline"></Icon>
            {likes}
        </Button>
    )
}