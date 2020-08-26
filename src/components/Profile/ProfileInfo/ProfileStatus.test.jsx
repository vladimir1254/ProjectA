import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";
describe("ProfileStatus component", () => {
    test("status from props should be in the state", () => {
        const component = create(<ProfileStatus status="IT TEST" />);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("IT TEST");
    });
    test("on start you should have span", () => {
        const component = create(<ProfileStatus status="IT TEST" />);
        const root = component.root
        const span = root.findByType('span');
        expect(span).not.toBeNull();
    });
    test("on start you have't input", () => {
        const component = create(<ProfileStatus status="IT TEST" />);
        const root = component.root
        expect(() => {root.findByType('input')}).toThrow();
    });
    test("on start status in span is incorrect.", () => {
        const component = create(<ProfileStatus status="IT TEST" />);
        const root = component.root
        const span = root.findByType("span");
        expect(span.children[1]).toBe('IT TEST');
    });
    test("input should be in editMode", () => {
        const component = create(<ProfileStatus status="IT TEST" />);
        const root = component.root
        const span = root.findByType("span");
        span.props.onClick();
    const input = root.findByType('input')
        expect(input.props.value).toBe('IT TEST');
    });
    test("updatestatus should be done", () => {
        const funcCallback = jest.fn()
        const component = create(<ProfileStatus status="IT TEST" updateStatus={funcCallback}/>);
        const instance = component.getInstance()
        instance.deactivateEditMode()
        expect(funcCallback.mock.calls.length).toBe(1);
    });

});