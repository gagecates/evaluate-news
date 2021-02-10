const { TestScheduler } = require("jest")

import {checkForURL} from "../src/client/js/URLChecker"

test('checks for valid URL', () => {
    expect(checkForURL('www.test.com')).toBe(false);
})