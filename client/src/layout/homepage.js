import React, { Component } from "react";
import { Link } from "react-router-dom";

class Homepage extends Component {
    state = {
        icon: < i className = "fa fa-arrow-circle-down" / > ,
        toggle: false,
    };

    menu() {
        if (this.state.toggle) {
            return ( <
                ul className = "dropdown" >
                <
                li onClick = { this.listHandler.bind(this) }
                className = "dropdown_item" >
                San Francisco { " " } <
                /li>{" "} <
                li onClick = { this.listHandler.bind(this) }
                className = "dropdown_item" >
                Oakland { " " } <
                /li>{" "} <
                li onClick = { this.listHandler.bind(this) }
                className = "dropdown_item" >
                San Jose { " " } <
                /li>{" "} <
                /ul>
            );
        }
    }

    menuHandler() {
        if (!this.state.toggle) {
            this.setState({
                toggle: true,
                icon: < i className = "fa fa-arrow-circle-up" / > ,
            });
        } else if (this.state.toggle) {
            this.setState({
                toggle: false,
                icon: < i className = "fa fa-arrow-circle-down" / > ,
            });
        }
    }

    listHandler(e) {
        this.props.changeLocation(e.target.innerText);
        this.setState({
            toggle: false,
            icon: < i className = "fa fa-arrow-circle-down" / > ,
        });
    }

    render() {
        return ( <
            div className = "homepage" >
            <
            h1 className = "appname" >
            Brews around < span className = "appname2" > The Bay < /span>{" "} <
            /h1>{" "} <
            h2 className = "homepage_slogan" > { " " }
            Your < span className = "span2" > Happy hour < /span> headquarters{" "} <
            /h2>{" "} <
            div className = "homepage_search" >
            <
            div className = "homepage_menu" >
            <
            div className = "homepage_location" > { " " } { this.props.part } { " " } <
            span className = "homepage_icon"
            onClick = { this.menuHandler.bind(this) } >
            { this.state.icon } { " " } <
            /span>{" "} <
            /div>{" "} { this.menu() } { " " } <
            /div>{" "} <
            button className = "homepage_button" >
            <
            Link className = "homepage_link"
            to = "/content" >
            Let 's Explore!{" "} <
            /Link>{" "} <
            /button>{" "} <
            /div>{" "} <
            /div>
        );
    }
}

export default Homepage;