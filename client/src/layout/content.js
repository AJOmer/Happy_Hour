import React, { Component } from "react";
import httpClient from "../httpClient";
import Container from "../components/container";
import { Link } from "react-router-dom";

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

    // CHANGE 'OUTDOOR' with 'LOCATION' like up top \\
    cardMap = () => {
        return this.state.outdoor.map((outdoor, i) => {
            return ( <
                >
                <
                Container key = { i }
                outdoor = { outdoor }
                location = { this.props.location }
                />{" "} <
                hr key = { i + "a" }
                className = "border" / >
                <
                />
            );
        });
    };
    render() {
        return ( <
            div className = "feed" >
            <
            h2 >
            <
            Link className = "landingpage"
            to = "/" >
            <
            i className = "fa fa-home" > < /i>{" "} <
            /Link>{" "} <
            /h2>{" "} <
            h1 className = "feed__title" > { this.state.location } < /h1>{" "} <
            div className = "feed__map" >
            <
            div className = "feed__lights" >
            <
            div className = "card__dot card__green feed__light" / > = MORE THAN ONE HOUR LEFT!
            <
            /div>{" "} <
            div className = "feed__lights" >
            <
            div className = "card__dot card__yellow feed__light" / > = LESS THAN ONE HOUR LEFT!
            <
            /div>{" "} <
            div className = "feed__lights" >
            <
            div className = "card__dot card__red feed__light" / > = NO HAPPY HOUR RIGHT NOW!
            <
            /div>{" "} <
            /div>{" "} <
            div className = "feed__outdoors" > { this.cardMap() } < /div>{" "} <
            /div>
        );
    }
}

export default Content;