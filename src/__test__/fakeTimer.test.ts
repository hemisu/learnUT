import { asyncSleep, loopSleep, sleep } from "../components/FakeTimer";

describe("examples for fkaeTimers", () => {
  beforeAll(() => {
    jest.useFakeTimers();
  })

  test("a test for a simple setTimeout", async () => {
    const res = sleep(6000, "this is a simple setTimeout test");
    jest.runAllTimers();
    await expect(res).resolves.toBe("this is a simple setTimeout test");
  })

  test("a test for a controllable setTimeout", async () => {
    const res = sleep(6000, "this is a controllable setTimeout");
    jest.advanceTimersByTime(6000);
    await expect(res).resolves.toBe("this is a controllable setTimeout");
  });

  test("a test for a recursion setTimeout", async () => {
    const res = loopSleep(6000, "this is a recursion setTimeout test");
    // jest.runAllTimers();
    jest.runOnlyPendingTimers();
    await expect(res).resolves.toBe("this is a recursion setTimeout test");
  });

  test("a test for a setTimeout with async function", async () => {
    const fn = jest.fn();
    asyncSleep(6000, fn);
    jest.runOnlyPendingTimers();
    // 当我们断言执行的时候，我们加入的异步逻辑还在任务队列里待着呢，
    // 自然我们感知不到它被调用，那应该怎么解决这个问题呢？我们加一个 await 来阻塞断言的执行，期待等待异步逻辑完成后，我们再执行下面的断言
    await Promise.resolve();
    expect(fn).toBeCalled();
  });
})

export { }