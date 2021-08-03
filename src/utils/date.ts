export function transformDate(timestamp: number) {
    const d: Date = new Date(timestamp ?? Date.now())
    const y = d.getFullYear()
    const m = ('0' + (d.getMonth() + 1)).slice(-2)
    const r = ('0' + d.getDate()).slice(-2)
    const h = ('0' + d.getHours()).slice(-2)
    const f = ('0' + d.getMinutes()).slice(-2)
    const s = ('0' + d.getSeconds()).slice(-2)
    return `${y}年${m}月${r}日${h}时${f}分${s}秒`
}