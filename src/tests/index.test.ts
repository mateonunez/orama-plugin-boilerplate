import plugin from "../index.js"
import {test} from "tap"

test("resolve", async ({test}) => {
  test("should resolve", async ({same}) => {
    same(plugin(), true)
  })
})
