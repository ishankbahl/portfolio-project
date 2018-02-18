import React from "react";
import ReactDOM from "react-dom";

import { Stream } from "./Components";
import configureStore from "./stores/configureStore";
import * as actions from "./actions";

const tracks = [
    {
        title: "Some track",
    },
    {
        title: "Some other track",
    }
];

const store = configureStore();
store.dispatch(actions.setTracks(tracks));

ReactDOM.render(
    <Stream />,
    document.getElementById("app")
);

module.hot.accept();