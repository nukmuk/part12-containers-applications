// import Todo from '../src/Todos/Todo'

import { render } from "@testing-library/react";
import { expect, test } from "vitest";
import Todo from "../src/Todos/Todo";
import { screen } from '@testing-library/dom'

test("todo component is rendered correctly", async () => {
    const todo = {
        text: "todo text",
        done: false,
        _id: "123"
    }
    const mock = vi.fn();
    render(<Todo todo={todo} onClickComplete={mock} onClickDelete={mock} />);

    expect(await screen.findByText(todo.text)).not.toBeNull();
    expect(await screen.findByText("This todo is not done")).not.toBeNull();
    expect(await screen.findByText("Delete")).not.toBeNull();
    expect(await screen.findByText("Set as done")).not.toBeNull();
})
