import Competitors from "./competitors";

class Events {
  constructor({
    id = 0,
    day = "",
    discipline_name = "",
    discipline_pictogram = "",
    name = "",
    venue_name = "",
    event_name = "",
    detailed_event_name = "",
    start_date = "",
    end_cdate = "",
    status = "",
    is_medal_event = 0,
    is_live = 0,
    competitors = [],
  }) {
    this.id = id;
    this.day = day;
    this.discipline_name = discipline_name;
    this.discipline_pictogram = discipline_pictogram;
    this.name = name;
    this.venue_name = venue_name;
    this.event_name = event_name;
    this.detailed_event_name = detailed_event_name;
    this.start_date = start_date;
    this.end_cdate = end_cdate;
    this.status = status;
    this.is_medal_event = is_medal_event;
    this.is_live = is_live;
    this.competitors = competitors?.map(
      (competitor) => new Competitors(competitor)
    );
  }
}

export default Events;
