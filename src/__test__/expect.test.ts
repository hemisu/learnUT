import react from 'react';
describe('examples for jest expect', () => {
  test('基础类型比较', () => {
    // to be
    expect(1 + 1).toBe(2)
    // not
    expect(1 + 1).not.toBe(3);

    expect(true).toBe(true)
    expect(true).toBeTruthy()
    expect(false).toBeFalsy()

    expect(undefined).toBeUndefined()
    const test = () => { };
    expect(test()).toBeUndefined();
  })

  test('浮点数', () => {
    // expect(0.2 + 0.1).toBe(0.3);
    expect(0.2 + 0.1).toBeCloseTo(0.3);
  })

  test("引用类型的比较", () => {
    const a = { obj1: { name: "obj1", obj2: { name: "obj2" } } };
    const b = Object.assign(a);
    const c = JSON.parse(JSON.stringify(a));
    expect(a).toBe(b);
    expect(a).not.toBe(c);
    expect(a).toEqual(b);
    expect(a).toEqual(c);
  })
  test("正则匹配", () => {
    expect("this is a regexp validation").toMatch(/regexp/);
    const obj = { prop1: "test", prop2: "regexp validation" };
    const childObj = { prop1: "test" }
    expect(obj).toMatchObject(childObj)

  })

  test('表单验证', () => {
    // 数组元素验证
    expect([1, 2, 3]).toContain(1);
    expect([1, 2, 3]).toEqual(expect.arrayContaining([1, 2]))
    expect([{ a: 1, b: 2 }]).toContainEqual({ a: 1, b: 2 });

    // 数组长度
    expect([1, 2, 3]).toHaveLength(3);
    // 对象属性验证
    const testObj = {
      prop1: 1,
      prop2: {
        child1: 2,
        child2: 'test'
      }
    }
    expect(testObj).toHaveProperty("prop1")
    expect(testObj).toHaveProperty("prop2.child1");
  })

  test('错误捕获', () => {
    const throwError = () => {
      const err = new Error('console err: this is a test error');
      throw err;
    }
    expect(throwError).toThrow();
    expect(throwError).toThrowError();

    const catchError = () => {
      try {
        const err = new Error("console err: this is a test error");
        throw err
      } catch (err) {
        console.log(err);
      }
    }
    expect(catchError).not.toThrow();
    expect(catchError).not.toThrowError();
  })

  test("同步自定义匹配器", () => {
    const toBeBetweenZeroAndTen = (num: number) => {
      if (num >= 0 && num <= 10) {
        return ({
          message: () => "",
          pass: true,
        });
      } else {
        return ({
          message: () =>
            "expected num to be a number between zero and ten",
          pass: false,
        });
      }
    }
    expect.extend({
      toBeBetweenZeroAndTen
    })
    expect(8).toBeBetweenZeroAndTen();
  })
  test("异步自定义匹配器", () => {
    const toBeBetweenZeroAndTen = async (num: number) => {
      const res = await new Promise<{ message: () => string, pass: boolean }>(resolve => {
        setTimeout(() => {
          if (num >= 0 && num <= 10) {
            resolve({
              message: () => "",
              pass: true,
            });
          } else {
            resolve({
              message: () =>
                "expected num to be a number between zero and ten",
              pass: false,
            });
          }

        }, 1000);
      })
      return (
        res || {
          message: () => "expected num to be a number between zero and ten",
          pass: false,
        }
      );
    }
    expect.extend({
      toBeBetweenZeroAndTen
    })
    expect(8).toBeBetweenZeroAndTen();

  })


})