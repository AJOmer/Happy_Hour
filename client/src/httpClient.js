import axios from "axios";

const httpClient = axios.create();

httpClient.getInfo = function(name) {
    return this({ method: "get", url: `/api/outdoor/yelp/${name}` });
};

httpClient.submitInfo = function(fields) {
    return this({ method: this.get, url: "api/outdoor/new", data: fields });
};

httpClient.getOutdoor = function(location) {
    return this({ method: "get", url: `/api/outdoor/${location}` });
};

export default httpClient;