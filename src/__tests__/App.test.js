import React from 'react';
import renderer from "react-test-renderer";
import App from '../components/App';
import {test} from "@jest/globals";

test('renders app component', () => {
    const app = renderer.create(<App imageId={"bird-image"}/>);
    const appRendered = app.toJSON();
    expect(appRendered).toMatchSnapshot();
    expect(app.root._fiber.memoizedProps.imageId).toBe("bird-image");
});
