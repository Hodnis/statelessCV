"use strict";
//
// BUTTONS
//

// START
document.getElementById("btn-start").onclick = function () {
  startBtn();
};

function startBtn() {
  document.getElementById("btn-start").innerHTML = "Personlig Info (vis/skjul)";
  $("#personal-form").toggle();
  $("#personal-form-hidden").toggle();
  $("#btn-utdanning").fadeIn();
}

// UTDANNING
document.getElementById("btn-utdanning").onclick = function () {
  utdanningBtn();
};

function utdanningBtn() {
  document.getElementById("btn-utdanning").innerHTML = "Utdanning (vis/skjul)";
  $("#utdanning-form").toggle();
  $("#btn-new-utdanning").toggle();
}

//
// PERSONAL FORM //
//

/*
function showHiddenForm(formName) {
  $(formName + "-hidden, " + formName + "-hidden-label").fadeIn();

  $(formName).change(function () {
    $(formName + "-hidden").val($(formName).val());
  });
}
console.log($("#fnavn").keypress(showHiddenForm("#fnavn")));
*/

$("#fnavn").keypress(function () {
  $("#fnavn-hidden, #fnavn-hidden-label").fadeIn();

  $("#fnavn").change(function () {
    $("#fnavn-hidden").val($("#fnavn").val());
  });
});

$("#enavn").keypress(function () {
  $("#enavn-hidden-label, #enavn-hidden").fadeIn();

  $("#enavn").change(function () {
    $("#enavn-hidden").val($("#enavn").val());
  });
});

$("#adresse").keypress(function () {
  $(
    "#adresse-hidden-label, #adresse-hidden, #adresse-second-line-hidden"
  ).fadeIn();

  $("#adresse").change(function () {
    $("#adresse-hidden").val($("#adresse").val());
  });
  $("#adresse-second-line").change(function () {
    $("#adresse-second-line-hidden").val($("#adresse-second-line").val());
  });
});

$("#epost").keypress(function () {
  $("#epost-hidden-label, #epost-hidden").fadeIn();

  $("#epost").change(function () {
    $("#epost-hidden").val($("#epost").val());
  });
});

$("#mobil").keypress(function () {
  $("#mobil-hidden-label, #mobil-hidden").fadeIn();

  $("#mobil").change(function () {
    $("#mobil-hidden").val($("#mobil").val());
  });
});

$("#sivilstatus").click(function () {
  $("#sivilstatus-hidden-label, #sivilstatus-hidden").fadeIn();

  $("#sivilstatus").change(function () {
    $("#sivilstatus-hidden").val($("#sivilstatus").val());
  });
});

$("#born").click(function () {
  $("#born-hidden-label, #born-hidden").fadeIn();

  $("#born").change(function () {
    $("#born-hidden").val($("#born").val());
  });
});

$("#kompetanse").keypress(function () {
  $("#kompetanse-hidden-label, #kompetanse-hidden").fadeIn();

  $("#kompetanse").change(function () {
    $("#kompetanse-hidden").val($("#kompetanse").val());
  });
});

//
// UTDANNING //
//
/*
document.getElementById("btn-new-utdanning").onclick = function () {
  newUtdanningRow();
};

function newUtdanningRow() {
  $("#utdanning-form tr:last").after();
}
*/
$(document).ready(function () {
  $("#btn-new-utdanning").click(function () {
    $("#utdanning-form tbody>input:last")
      .clone(true)
      .insertAfter("#utdanning-form tbody>input:last");
    return false;
  });
});
//
// PRINT BUTTON //
//
/*
function printDiv() {
  var divContents = document.getElementById("personal-form-ghost").innerHTML;
  var a = window.open("", "", "height=500, width=500");
  a.document.write("<html>");
  a.document.write("<body > <h1>Div contents are <br>");
  a.document.write(divContents);
  a.document.write("</body></html>");
  a.document.close();
  a.print();
}
*/

var rowNum = 0;
function addRow(frm) {
  rowNum++;
  var row =
    '<p id="rowNum' +
    rowNum +
    '">Dato: <br /><input type="date" name="add_utdanning_date[]" value="' +
    frm.add_utdanning_date.value +
    '"> <br/><textarea name="add_utdanning_field[]" cols="40" rows="10" value="' +
    frm.add_utdanning_field.value +
    '"> <input type="button" value="Remove" onclick="removeRow(' +
    rowNum +
    ');"></p>';
  jQuery("#itemRows").append(row);
  frm.add_qty.value = "";
  frm.add_name.value = "";
}

function removeRow(rnum) {
  jQuery("#rowNum" + rnum).remove();
}

// TEST AV ADD/REMOVE

$(document).ready(function () {
  $("#add").click(function () {
    var lastField = $("#buildyourform div:last");
    var intId =
      (lastField && lastField.length && lastField.data("idx") + 1) || 1;
    var fieldWrapper = $('<div class="fieldwrapper" id="field' + intId + '"/>');
    fieldWrapper.data("idx", intId);
    var fName = $('<input type="text" class="fieldname" />');
    var fType = $(
      '<select class="fieldtype"><option value="checkbox">Checked</option><option value="textbox">Text</option><option value="textarea">Paragraph</option></select>'
    );
    var removeButton = $('<input type="button" class="remove" value="-" />');
    removeButton.click(function () {
      $(this).parent().remove();
    });
    fieldWrapper.append(fName);
    fieldWrapper.append(fType);
    fieldWrapper.append(removeButton);
    $("#buildyourform").append(fieldWrapper);
  });
  /*
  $("#preview").click(function () {
    $("#yourform").remove();
    var fieldSet = $(
      '<fieldset id="yourform"><legend>Ditt Skjema</legend></fieldset>'
    );
    $("#buildyourform div").each(function () {
      var id = "input" + $(this).attr("id").replace("field", "");
      var label = $(
        '<label for="' +
          id +
          '">' +
          $(this).find("input.fieldname").first().val() +
          "</label>"
      );
      var input;
      switch ($(this).find("select.fieldtype").first().val()) {
        case "checkbox":
          input = $(
            '<input type="checkbox" id="' + id + '" name="' + id + '" />'
          );
          break;
        case "textbox":
          input = $('<input type="text" id="' + id + '" name="' + id + '" />');
          break;
        case "textarea":
          input = $('<textarea id="' + id + '" name="' + id + '" ></textarea>');
          break;
      }
      fieldSet.append(label);
      fieldSet.append(input);
    });
    $("body").append(fieldSet);
  }); */
});
