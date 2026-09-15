import { Site } from "@/lib/site";
import { Separator } from "./ui/separator";

export default function Footer({ site }: {site: Site}) {
    return (
        <div className="flex justify-center items-center gap-2 text-sm">
            {site.copyright && <span>{site.copyright}</span>}
            {site.copyright && site.icp && <Separator orientation="vertical" />}
            {site.icp && <span>{site.icp}</span>}
        </div>
    )
}