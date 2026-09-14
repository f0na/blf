import { randomFigure } from "@/assets/figure";

export default function Empty() {
    const figure = randomFigure();
    if (!figure) return <div>暂无内容</div>;

    return (
        <div className="bg-blue-500">
            <img src={figure.src} alt="pic" />
        </div>
    );
}
