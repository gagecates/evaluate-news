import { TestScheduler, TestWatcher } from "jest"
import {handleSubmit} from "../src/client/js/formHandler"

test ('form submit returns results', () => {
    expect(handleSubmit).toBeDefined();
})