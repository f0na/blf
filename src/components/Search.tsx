'use client'
import { search } from "@/lib/fetch";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator } from "./ui/command";
import { useEffect, useState } from "react";
import { Pager, SearchArticle } from "@/lib/req";

export default function Search() {
    const [q, set_q] = useState("")
    const [res, set_res] = useState<SearchArticle[]>([])

    useEffect(() => {
        const kw = q.trim()
        if (kw === "") {
            set_res([])
            return
        }

        const timer = setTimeout(async () => {
            try {
                const pager_res = await search(q)
                set_res(pager_res.arr)
            } catch {

            }
        }, 500)

        return () => clearTimeout(timer)
    }, [q]) 

    return (
        <div className="flex rounded-sm">
            <Command>
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
                        <CommandItem>{r.title}</CommandItem>
                        ))}
                    </CommandGroup>
                </CommandList>
            </Command>
        </div>
    )
}