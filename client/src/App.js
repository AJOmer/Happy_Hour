import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Homepage from "./layout/homepage";
import Create from "./layout/create";
import Content from "./layout/content";

class App extends Component {
    state = {
        location: "Where in Frisco?",
        latitude: 0,
        longitude: 0,
    };

    locationHandler(loc) {
        this.setState({
            location: loc,
        });
    }

    success = (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        this.setState({
            latitude,
            longitude,
        });
    };

    error = () => {
        console.log("Cannot grab your location");
    };

    componentDidMount() {
        if (!navigator.geolocation) {
            console.log("Geolocation not supported");
        } else {
            console.log("location supported!");
            navigator.geolocation.getCurrentPosition(this.success, this.error);
        }
    }

    render() {
        return ( <
            div className = "container" >
            <
            Switch >
            <
            Route path = "/content"
            render = {
                (props) => {
                    return ( <
                        Content {...props }
                        location = { this.state }
                        part = { this.state.location }
                        />
                    );
                }
            }
            /> <
            Route path = "/create"
            render = {
                (props) => {
                    return <Create {...props }
                    />;
                }
            }
            />{" "} <
            Route path = "/"
            render = {
                (props) => {
                    return ( <
                        Homepage {...props }
                        changeLocation = { this.locationHandler.bind(this) }
                        part = { this.state.location }
                        />
                    );
                }
            }
            />{" "} <
            /Switch>{" "} <
            /div>
        );
    }
}

export default App;