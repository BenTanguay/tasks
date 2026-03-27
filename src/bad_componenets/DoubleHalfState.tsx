import { useState } from "react";

export function useDoubleHalfState(initialValue = 10) {
    const [dhValue, setDhValue] = useState<number>(initialValue);
    const double = () => { setDhValue((v) => v * 2); };
    const half = () => { setDhValue((v) => v / 2); };
    return { dhValue, setDhValue, double, half };
}
