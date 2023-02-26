export function formatPrice(n: number) {
    let res = n.toString();
    if (n % 1 === 0) {
        res += '.00';
    } else if (res.length < 4) {
        res += '0';
    }
    return res;
}