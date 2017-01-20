function copyShcedule() {
  var spreadsheet = SpreadsheetApp.getActive();
  var shcedule = spreadsheet.getSheets()[0];
  
  var copyWeek = function(week) {
    var content = shcedule.getRange(week * 9 + 2, 1, 8, 8);
    
    var sheet = spreadsheet.insertSheet();
    sheet.setName(week.toString());
    
    var destination = sheet.getRange(1, 1);
    content.copyTo(destination);
  }
  
  var copyWeeks = function(weeks) {
    var i = 0;
    for (i = 1; i <= weeks; i++) {
      copyWeek(i);    
    }
  }
  
  // just for debugging
  var sheets = spreadsheet.getSheets();
  var clearSheets = function() {
    var i = 0;
    for (i = 1; i < sheets.length; i++) {
      spreadsheet.deleteSheet(sheets[i]);
    }
  }
  
  // clearSheets();
  copyWeeks(15);
}
