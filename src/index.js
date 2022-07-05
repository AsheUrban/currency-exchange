import CurrencyXchange from "./js/exchange-service.js";
import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";

function clearFields() {
  $("#usd").val("");
  $("input:radio[name=operator]:checked").val("");
  $(".output").text("");
  $(".showErrors").text("");
}

$(document).ready(function() {
  $("form#currency-xchange").submit(function(event) {
    event.preventDefault();
    let usd = $("#usd").val();
    let operator = $("input:radio[name=operator]:checked").val();
    clearFields();
    let promise = CurrencyXchange.convertCurrency(usd, operator);
    promise.then((response)=> {
      const body = JSON.parse(response);
      $(".output").text(`${body.conversion_result}`);
    }, function(error) {
      $(".showErrors").text(`There was an error processing your request: ${error}`);
    });
  });
});