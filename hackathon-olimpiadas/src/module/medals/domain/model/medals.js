class Medals {
  constructor({
    id = "",
    name = "",
    continent = "",
    flag_url = "",
    gold_medals = 0,
    silver_medals = 0,
    bronze_medals = 0,
    total_medals = 0,
    rank = 0,
    rank_total_medals = 0,
  }) {
    this.id = id;
    this.name = name;
    this.continent = continent;
    this.flag_url = flag_url;
    this.gold_medals = gold_medals;
    this.silver_medals = silver_medals;
    this.bronze_medals = bronze_medals;
    this.total_medals = total_medals;
    this.rank = rank;
    this.rank_total_medals = rank_total_medals;
  }
}

export default Medals
