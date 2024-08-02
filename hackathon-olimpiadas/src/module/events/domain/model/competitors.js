class Competitors {
  constructor({
    country_id = "",
    country_flag_url = "",
    competitor_name = "",
    position = 0,
    result_position = "",
    result_winnerLoserTie = "",
    result_mark = "",
  }) {
    this.country_id = country_id;
    this.country_flag_url = country_flag_url;
    this.competitor_name = competitor_name;
    this.position = position;
    this.result_position = result_position;
    this.result_winnerLoserTie = result_winnerLoserTie;
    this.result_mark = result_mark;
  }
}

export default Competitors