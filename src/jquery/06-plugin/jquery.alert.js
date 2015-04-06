jQuery.fn.alert = function() {
   $(this).wrap("<div style='background:red'></div>")
};
jQuery.fn.unalert = function() {
   $(this).unwrap();
};
