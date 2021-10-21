"use strict";

$("#fnavn").keydown(function () {
  $(this).change(function () {
    $("#" + this.id + "-hidden").val($(this).val());
  });
});

$("#enavn").keypress(function () {
  $(this).change(function () {
    $("#" + this.id + "-hidden").val($(this).val());
  });
});

$("#adresse").keypress(function () {
  $("#adresse").change(function () {
    $("#adresse-hidden").val($("#adresse").val());
  });
  $("#adresse-second-line").change(function () {
    $("#adresse-second-line-hidden").val($("#adresse-second-line").val());
  });
});

$("#epost").keypress(function () {
  $(this).change(function () {
    $("#" + this.id + "-hidden").val($(this).val());
  });
});

$("#mobil").keypress(function () {
  $(this).change(function () {
    $("#" + this.id + "-hidden").val($(this).val());
  });
});

$("#sivilstatus").click(function () {
  $(this).change(function () {
    $("#" + this.id + "-hidden").val($(this).val());
  });
});

$("#born").click(function () {
  $(this).change(function () {
    $("#" + this.id + "-hidden").val($(this).val());
  });
});

$("#kompetanse").keypress(function () {
  $(this).change(function () {
    $("#" + this.id + "-hidden").val($(this).val());
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

$("#dato-utdanning").click(function () {
  $(this).change(function () {
    $("#" + this.id + "-hidden").val($(this).val());
  });
});

$("#utdanning-field").click(function () {
  $(this).change(function () {
    $("#" + this.id + "-hidden").val($(this).val());
  });
});
/*
$(document).ready(function () {
  $("#btn-new-utdanning").click(function () {
    $("#utdanning-form tbody>input:last")
      .clone(true)
      .insertAfter("#utdanning-form tbody>input:last");
    return false;
  });
});
*/
// Legge til nytt felt
var rowNum = 0;
var rowNumHidden = 0;
function addRow(frm) {
  rowNum++;
  rowNumHidden++;
  var row =
    '<p id="rowNum' +
    rowNum +
    '">Dato: <br /><input type="date" name="add_utdanning_date[]" value="' +
    frm.add_utdanning_date.value +
    '"> <br/><textarea name="add_utdanning_field[]" cols="40" rows="10" value="' +
    frm.add_utdanning_field.value +
    '"></textarea>' +
    '<input type="button" value="Remove" onclick="removeRow(' +
    rowNum +
    ');"></p>';
  $("#itemRows").append(row);
  var rowHidden =
    '<p id="rowNumHidden' +
    rowNumHidden +
    '">Dato: <br /><input readonly type="date" name="add_utdanning_date[]" value="' +
    frm.add_utdanning_date.value +
    '"> <br/><textarea readonly name="add_utdanning_field[]" cols="40" rows="10" value="' +
    frm.add_utdanning_field.value +
    '"></textarea> ';
  $("#itemRows-hidden").append(rowHidden);
  frm.add_qty.value = "";
  frm.add_name.value = "";
}

// Fjerne "nytt" felt
function removeRow(rnum) {
  $("#rowNum" + rnum).remove();
  $("#rowNumHidden" + rnum).remove();
}

// Printe stateless del
// function printDiv() {
//   var divContents = $(".GFG").html();
//   var a = window.open("", "", "height=500, width=500");
//   a.document.write("<html>");
//   a.document.write("<body > <h1>Div contents are <br>");
//   a.document.write(divContents);
//   a.document.write("</body></html>");
//   a.document.close();
//   a.print();
// }

function printDiv() {
  $(".GFG").printThis();
}

// TEST AV ADD/REMOVE
/*
$(document).ready(function () {
  $("#add").click(function () {
    var lastField = $("#buildyourform div:last");
    var intId =
      (lastField && lastField.length && lastField.data("idx") + 1) || 1;
    var fieldWrapper = $('<div class="fieldwrapper" id="field' + intId + '"/>');
    fieldWrapper.data("idx", intId);
    var fName = $('<input type="textarea" class="fieldname" />');
    
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
});
*/
