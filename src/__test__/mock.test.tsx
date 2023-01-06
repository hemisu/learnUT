import axios from 'axios';
import { mocked } from 'jest-mock'
import mock from "../components/mock";

jest.mock("axios")

describe('examples for mock', () => { 
  it("a test for global mock", async () => {
    const res = "this is a test for global mock";
    mocked(axios.get).mockResolvedValue(res)
    
    const data = await axios.get("/");
    expect(data).toBe("this is a test for global mock");
  })

  it("a test for single mock", () => {
    jest.doMock("../components/mock", () => ({
      __esModule: true,
      getMockData: () => {
        return "newMockData"
      }
    }))
    const mock = require("../components/mock")
    expect(mock.getMockData()).toBe("newMockData")
  })

  it("a test for global mock", async () => {
    const res = "this is a test for global mock"
    jest.spyOn(axios, "get").mockResolvedValue(res)
    const data = await axios.get("/");
    expect(data).toBe("this is a test for global mock");
  })

  test("other ways for single mock", () => {
    jest.spyOn(mock, "getMockData").mockReturnValue("newMockData");
    expect(mock.getMockData()).toBe("newMockData");
  });
 })

export {}