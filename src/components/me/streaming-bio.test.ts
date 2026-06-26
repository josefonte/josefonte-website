import { describe, expect, test } from "bun:test";
import { getVisibleStreamingState } from "./streaming-bio";

describe("getVisibleStreamingState", () => {
    test("streams sections in sequence", () => {
        expect(getVisibleStreamingState(0, [3, 4])).toEqual({
            visibleCounts: [0, 0],
            done: false,
        });

        expect(getVisibleStreamingState(2, [3, 4])).toEqual({
            visibleCounts: [2, 0],
            done: false,
        });

        expect(getVisibleStreamingState(5, [3, 4])).toEqual({
            visibleCounts: [3, 2],
            done: false,
        });

        expect(getVisibleStreamingState(7, [3, 4])).toEqual({
            visibleCounts: [3, 4],
            done: true,
        });
    });
});
