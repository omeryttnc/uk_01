$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/deneme.feature");
formatter.feature({
  "name": "deneme_feature",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@dnm"
    }
  ]
});
formatter.scenario({
  "name": "deneme_scenario",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@dnm"
    }
  ]
});
formatter.step({
  "name": "yazdir",
  "keyword": "Given "
});
formatter.match({
  "location": "GMI_BANK.stepdefinitions.deneme_step_defitions.yazdir_o()"
});
formatter.result({
  "status": "passed"
});
});