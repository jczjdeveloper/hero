/**
 * File Upload
 *
 * Handle the drag'n'drop events
 */
var Upload = function(id){

    function onDragEnter(event){
        event.preventDefault();
        $(id).addClass("dragover");
        $('#landingzone .dropgui').show();
    }

    function onDragOver(event) {
        event.preventDefault();
        if(!$(id).hasClass("dragover")) {
            $(id).addClass("dragover");
            $('#landingzone .dropgui').show();
        }
    }

    function onDragLeave(event) {
        event.preventDefault();
        $(id).removeClass("dragover");
        $('#landingzone .dropgui').hide();
    }

    function onDrop(event) {
        $(id).removeClass("dragover");
        $('#landingzone .dropgui').hide();
    }

    /**
     *  init
     */
    $(document).on("dragenter", onDragEnter)
               .on("dragover", onDragOver)
               .on("dragleave", onDragLeave)
               .on("drop", onDrop);
}



$(document).ready(function() {

    // Enhance GUI
    var upload = new Upload('#landingzone');

    var dropzone = new Dropzone("#landingzone", {
        url: "/file/post",
        previewTemplate: document.getElementById('preview-template').innerHTML
    });
    
    dropzone.on("addedfile", function(file) {

    });
});
