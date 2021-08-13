$("form").on("change", ".file-uplaod-field", function() {
    $(this).parent(".file-uplaod-wrapper").attr("data-text",$(this).val().replace(/.*(\/|\\)/,''));
})