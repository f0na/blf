import type { StaticImageData } from "next/image";

// Turbopack 的 import.meta.glob 只支持同目录的 './' 模式，
// '../' / 根路径 / 跨目录遍历一律返回空对象，所以这个文件必须放在图片旁边。
export const FIGURES = Object.values(
    import.meta.glob("./*.png", { eager: true, import: "default" }),
) as StaticImageData[];

export function randomFigure(): StaticImageData | undefined {
    if (FIGURES.length === 0) return undefined;
    return FIGURES[Math.floor(Math.random() * FIGURES.length)];
}
