import { User } from "./User";
import { Company } from "./Company";

const mapElement: HTMLElement = document.getElementById("map")!;

const map = new google.maps.Map(mapElement, {
    zoom: 1,
    center: {
        lat: 0,
        lng: 0
    }
});

