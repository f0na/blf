import { randomFigure } from "@/assets/figure";
import { Button } from "@/components/ui/button";

export default function not_found() {
    const figure = randomFigure();
    if (!figure) return (
        <div>
            <p>404 NotFound...</p>
        </div>
    );
    return (
        <div
            className="flex w-[61.8%] h-[60vh] py-2 items-start justify-start bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${figure.src})` }}
        >
            <p>[404 NotFound...]</p>
        </div >
    )
}