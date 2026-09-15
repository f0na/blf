'use client'
import { search } from "@/lib/fetch";
import { SearchArticle } from "@/lib/req";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Badge } from "./ui/badge";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "./ui/command";

export default function Search() {
    const [q, set_q] = useState("")
    const [res, set_res] = useState<SearchArticle[]>([])
    const router = useRouter()

    useEffect(() => {
        const kw = q.trim()
        if (kw === "") {
            set_res([])
            return
        }

        const timer = setTimeout(async () => {
            const pager_res = await search(kw)
            set_res(pager_res.arr)
        }, 500)

        return () => clearTimeout(timer)
    }, [q])

    return (
        <div className="flex rounded-sm">
            <Command shouldFilter={false}>
                <CommandInput
                    value={q.trim()}
                    onValueChange={(e) => set_q(e)}
                    placeholder="search articles..."
                >
                </CommandInput>
                <CommandList>
                    <CommandEmpty>No results found.</CommandEmpty>
                    <CommandGroup heading="Result">
                        {res.map((r) => (
                            <CommandItem key={r.id} value={r.id} onSelect={() => router.push('/article/' + r.slug)} className="flex flex-col items-start gap-0">
                                <div>{r.title}</div>
                                {r.synopsis ? (
                                    <div className="text-green-700">  {r.synopsis.length > 20 ? r.synopsis.slice(0, 20) + '...' : r.synopsis}</div>
                                ) : null
                                }
                                <div className="flex gap-1">
                                    {r.tags.map((t) => (
                                        <Badge key={t} className="rounded-md">#{t}</Badge>
                                    ))}
                                </div>
                                <div>{new Date(r.create_at).toLocaleDateString("zh-CN")}</div>
                            </CommandItem>
                        ))}
                    </CommandGroup>
                </CommandList>
            </Command>
        </div>
    )
}