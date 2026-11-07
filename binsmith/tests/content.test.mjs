import test from "node:test";
import assert from "node:assert/strict";
import { normalisePostcode, findArea, isOfferActive } from "../lib/content.ts";

test("postcodes are normalised before matching coverage", () => {
  assert.equal(normalisePostcode(" sw6 1aa "), "SW6 1AA");
  assert.equal(normalisePostcode("w140aa"), "W14 0AA");
  assert.equal(findArea(normalisePostcode("sw61aa")).name, "Fulham");
  assert.equal(findArea(normalisePostcode("w140aa")).name, "Hammersmith");
});

test("partial and malformed postcodes cannot appear covered", () => {
  for (const value of [
    "",
    "SW6",
    "SW6 XXX",
    "W60",
    "<script>",
    "SW6 1AAextra",
  ]) {
    assert.equal(normalisePostcode(value), null, value);
  }
  assert.equal(findArea("SW1A 1AA"), undefined);
  assert.equal(findArea("W12 0AA"), undefined);
  assert.equal(findArea("SW16 1AA"), undefined);
});

test("the introductory offer ends at the published deadline", () => {
  assert.equal(isOfferActive(new Date("2027-01-31T23:59:59Z")), true);
  assert.equal(isOfferActive(new Date("2027-02-01T00:00:00Z")), false);
  assert.equal(isOfferActive(new Date("2028-01-01T00:00:00Z")), false);
});
