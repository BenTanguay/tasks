import { renderHook, act } from "@testing-library/react";
import { useDoubleHalfState } from "./DoubleHalfState";

test("initial value is 10 by default", () => {
    const { result } = renderHook(() => useDoubleHalfState());
    expect(result.current.dhValue).toBe(10);
});

test("double function works", () => {
    const { result } = renderHook(() => useDoubleHalfState(10));

    act(() => {
        result.current.double();
    });

    expect(result.current.dhValue).toBe(20);
});

test("half function works", () => {
    const { result } = renderHook(() => useDoubleHalfState(10));

    act(() => {
        result.current.half();
    });

    expect(result.current.dhValue).toBe(5);
});

test("setDhValue works", () => {
    const { result } = renderHook(() => useDoubleHalfState());

    act(() => {
        result.current.setDhValue(50);
    });

    expect(result.current.dhValue).toBe(50);
});
