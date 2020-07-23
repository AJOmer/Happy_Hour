import React, { Component } from "react";
import httpClient from "../httpClient";

class Content extends Component {
    state = {
        location: "",
        outdoor: [],
    };

    componentDidMount() {
        httpClient.getOutdoor(this.props.part).then((response) => {
            this.setState({
                outdoor: response.data,
                location: this.props.part,
            });
        });
    }

    //cardmap \\
}